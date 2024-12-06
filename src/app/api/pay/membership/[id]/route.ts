import { MemberShipPayment } from "@/interface/membership";
import { client, localClient, paymentClient } from "@/request/actions";
import {
  getMembershipPaymentById,
  updateMembershipPayment,
} from "@/request/worker/membership";
import { revalidatePath } from "next/cache";
import { PaymentVerifyData } from "../../[id]/pymentVerify";
import { NextResponse } from "next/server";
import { setUserMembership } from "@/request/worker/users";
import { auth } from "@/auth";

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
      await updateMembershipPayment({
        id: intent.id,
        data: {
          completeOrder: true,
          gateway_response: verifyData,
          status: "processing",
        },
      });

      // 6. set the user membership

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
