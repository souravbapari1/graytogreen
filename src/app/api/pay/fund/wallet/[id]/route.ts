import { localClient, paymentClient } from "@/request/actions";

import {
  getReFundPayment,
  updateReFundPayment,
} from "@/request/worker/refundPayment";
import { NextResponse } from "next/server";
import { PaymentVerifyData } from "../../../[id]/pymentVerify";
import { addFundsWallet, addTransition } from "@/request/worker/users";

export const revalidate = 0;
export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const id = params.id;
  const intent = await getReFundPayment(id);
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
    await updateReFundPayment(id, {
      status: paymentStatus,
      complete: true,
      pay_response: JSON.stringify(verifyData),
    });
    await addFundsWallet({
      user: intent.user,
      amount: intent.amount,
    });
    await addTransition({
      user: intent.user,
      amount: intent.amount,
      actionBy: intent.user,
      type: "CREDIT",
      reason: "Add Funds",
    });
    // await createOrderHistoryRequest({
    //   amount: intent.amount,
    //   status: "Successful",
    //   reason: intent.title,
    //   payment_type: "fund",
    //   pricing_sum: `${intent.amount}`,
    //   quntity: 1,
    //   donat_unit: "fund",
    //   ref_id: id,
    //   user: intent.user,
    // });
  }
  return NextResponse.redirect(
    new URL(
      `/donate/thankyou?orderId=${params.id}&donate=refund&done=true`,
      localClient.baseUrl
    ).toString()
  );
};
