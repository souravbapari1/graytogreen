import {
  deletePaymentAcademicRegistration,
  getAcademicPaymentRegistration,
  submitAcademicRegistration,
} from "@/app/academies/greenkidsacademy/registration/[id]/actions";
import { localClient, paymentClient } from "@/request/actions";
import { createOrderHistoryRequest } from "@/request/worker/account/ordersRequest";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  revalidatePath(`/api/pay/academic/${params.id}`);
  const intent = await getAcademicPaymentRegistration(params.id);
  const verifyData = await paymentClient
    .get(`/api/v1/checkout/session/${intent.sessionID}`)
    .send<any>();
  const paymentStatus = verifyData.data.payment_status == "paid";
  if (paymentStatus) {
    //create order
    const academicid = await submitAcademicRegistration({
      academic: JSON.stringify(intent.academic),
      applicationData: JSON.stringify(intent.applicationData),
      user: intent.user,
      othersData: JSON.stringify(intent.pay_response),
    });
    await createOrderHistoryRequest({
      amount: intent.academic?.amount,
      status: "Successful",
      reason: intent.academic.name || "Apply to Academic",
      payment_type: "academic",
      pricing_sum: `${intent.academic?.amount}OMR`,
      quntity: intent.applicationData?.participants?.length || 1,
      donat_unit: "academic",
      ref_id: academicid.id,
      user: intent.user,
    });
    await deletePaymentAcademicRegistration(intent.id);
    return NextResponse.redirect(
      new URL(
        `/academies/greenkidsacademy/registration/thankyou`,
        localClient.baseUrl
      ).toString()
    );
  }

  return NextResponse.json(verifyData);
}
