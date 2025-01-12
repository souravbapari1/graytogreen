import { MemberShipPayment } from "@/interface/membership";
import { client, localClient, paymentClient } from "@/request/actions";
import {
  getMembershipPaymentById,
  updateMembershipPayment,
} from "@/request/worker/membership";
import { revalidatePath } from "next/cache";
import { PaymentVerifyData } from "../../[id]/pymentVerify";
import { NextResponse } from "next/server";
import { addTransition, setUserMembership } from "@/request/worker/users";
import { auth } from "@/auth";
import { createOrderHistoryRequest } from "@/request/worker/account/ordersRequest";

export const revalidate = 0;
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  revalidatePath(`/api/pay/membership/${params.id}`);
  try {
    const intent = await getMembershipPaymentById(params.id);
    const verifyData = await paymentClient
      .get(`/api/v1/checkout/session/${intent.sessionId}`)
      .send<PaymentVerifyData>();

    const paymentStatus = verifyData.data.payment_status;
    if (paymentStatus !== "paid") {
      // 3. if the payment is not paid return
      return NextResponse.redirect(
        new URL(
          `/donate/thankyou?orderId=${intent.id}&type=membership`,
          localClient.baseUrl
        ).toString()
      );
    }

    if (intent.completeOrder == false) {
      // 5. if the order is not placed

      // 7. update the payment intent with the order id
      const data = await updateMembershipPayment({
        id: intent.id,
        data: {
          completeOrder: true,
          gateway_response: verifyData,
          status: "new",
        },
      });

      await addTransition({
        user: intent.user,
        amount: intent.amount * intent.qun,
        actionBy: intent.user,
        type: "DONATE",
        reason: "Buy Membership - " + data.expand?.membership.name,
      });
      // 6. set the user membership
      await createOrderHistoryRequest({
        amount: intent.amount,
        status: "Successful",
        reason:
          data.expand?.membership.name + " Membership" || "Buy Membership",
        payment_type: "Credit/Debit Card",
        pricing_sum: `${intent.amount * intent.qun}OMR x ${intent.qun} = ${intent.amount} OMR`,
        quntity: intent.qun,
        donat_unit: "membership",
        ref_id: intent.id,
        user: intent.user,
        // certificate_Link: paymentIntent.certificate_Link,
      });

      // 8. redirect to the thank you page
      return NextResponse.redirect(
        new URL(
          `/donate/thankyou?orderId=${intent.id}&type=membership&done=true`,
          localClient.baseUrl
        ).toString()
      );
    }

    // 9. if the order is placed return
    return NextResponse.json({
      status: paymentStatus,
      process: true,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
