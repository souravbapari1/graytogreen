import { localClient, paymentClient } from "@/request/actions";
import {
  fundPayment,
  NewFundPayment,
  updateFundPayment,
} from "@/request/worker/fundPayment";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body: NewFundPayment = await req.json();
  const paymentIntent = await fundPayment(body);
  const paymentRequestPayload = {
    client_reference_id: body.user,
    mode: "payment",
    products: [
      {
        name: body.title,
        quantity: 1,
        unit_amount: body.amount * 1000,
      },
    ],
    success_url: localClient.baseUrl + "/api/pay/fund/" + paymentIntent.id,
    cancel_url: localClient.baseUrl + "/payment/cancel",
    metadata: {
      user_id: body.user,
      order_id: paymentIntent.id,
      donate: "fund",
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
  await updateFundPayment(paymentIntent.id, {
    sessionId: sessionData.data.session_id,
    pay_response: JSON.stringify(sessionData),
    status: sessionData.data.payment_status,
    payUrl: payUrl,
  });

  return NextResponse.json(
    { message: "Data received", data: sessionData, payUrl },
    { status: 201 }
  );
};
