import {
  submitPaymentAcademicRegistration,
  updatePaymentAcademicRegistration,
} from "@/app/academies/greenkidsacademy/registration/[id]/actions";
import { localClient, paymentClient } from "@/request/actions";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body: {
    userId: string;
    academic: any;
    applicationData: any;
    amount: number;
  } = await req.json();

  const intent = await submitPaymentAcademicRegistration({
    academic: JSON.stringify(body.academic),
    applicationData: JSON.stringify(body.applicationData),
    user: body.userId,
  });

  const paymentRequestPayload = {
    client_reference_id: body.userId,
    mode: "payment",
    products: [
      {
        name: body.academic.name,
        quantity: 1,
        unit_amount: body.amount * 1000,
      },
    ],
    success_url: localClient.baseUrl + "/api/pay/academic/" + intent.id,
    cancel_url: localClient.baseUrl + "/payment/cancel",
    metadata: {
      user_id: body.userId,
      order_id: intent.id,
      amount: body.amount,
      quantity: 1,
    },
  };

  const sessionData = await paymentClient
    .post("/api/v1/checkout/session")
    .json(paymentRequestPayload)
    .send<{
      success: boolean;
      code: number;
      description: string;
      data: typeof paymentRequestPayload & {
        session_id: string;
        mode: string;
        payment_status: string;
      };
    }>();

  const payUrl = `${paymentClient.baseUrl}/pay/${sessionData.data.session_id}?key=${process.env.CLIENT_KEY}`;

  await updatePaymentAcademicRegistration(intent.id, {
    paymentUrl: payUrl,
    pay_response: JSON.stringify(sessionData),
    sessionID: sessionData.data.session_id,
  });

  return NextResponse.json(
    {
      message: "Data received",
      data: sessionData,
      payUrl,
    },
    { status: 201 }
  );
}
