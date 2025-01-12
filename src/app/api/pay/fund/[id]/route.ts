import { localClient, paymentClient } from "@/request/actions";
import {
  getFundPayment,
  NewFundPayment,
  updateFundPayment,
} from "@/request/worker/fundPayment";
import { PaymentVerifyData } from "../../[id]/pymentVerify";
import { create } from "domain";
import { createOrderHistoryRequest } from "@/request/worker/account/ordersRequest";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const id = params.id;
  const intent = await getFundPayment(id);
  if (!intent) {
    return new Response("Not Found", {
      status: 404,
    });
  }
  const verifyData = await paymentClient
    .get(`/api/v1/checkout/session/${intent.sessionId}`)
    .send<PaymentVerifyData>();

  const paymentStatus = verifyData.data.payment_status;

  if (paymentStatus !== "paid") {
    return new Response("Payment not paid", {
      status: 400,
    });
  }

  if (paymentStatus === "paid") {
    await updateFundPayment(id, {
      status: paymentStatus,
      complete: true,
      pay_response: JSON.stringify(verifyData),
    });
    await createOrderHistoryRequest({
      amount: intent.amount,
      status: "Successful",
      reason: intent.title,
      payment_type: "fund",
      pricing_sum: `${intent.amount}`,
      quntity: 1,
      donat_unit: "fund",
      ref_id: id,
      user: intent.user,
    });
  }
  return NextResponse.redirect(
    new URL(
      `/donate/thankyou?orderId=${params.id}&donate=fund&done=true`,
      localClient.baseUrl
    ).toString()
  );
};
