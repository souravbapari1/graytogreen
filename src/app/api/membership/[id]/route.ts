import { auth } from "@/auth";
import { client, localClient, paymentClient } from "@/request/actions";
import { getUser } from "@/request/worker/auth";
import {
  addNewMembershipPayment,
  getMembershipById,
  updateMembershipPayment,
} from "@/request/worker/membership";
import { setUserMembership } from "@/request/worker/users";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const revalidate = 0;
export const POST = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  revalidatePath(`/api/membership/${params.id}`);
  try {
    const body: { qna: any; qun: number } = await req.json();
    console.log(body.qna);

    const user = await auth();
    if (!user?.user) {
      return NextResponse.json(
        {
          message: "Unauthorized",
          success: false,
        },
        { status: 401 }
      );
    }

    const currentUser = await getUser(user.user.id);

    if (currentUser.mamberships.find((m) => m == params.id)) {
      return NextResponse.json(
        {
          message: "You already have this membership",
          success: false,
        },
        { status: 409 }
      );
    }

    // 1. fetch the membership item
    const { id } = params;
    const membership = await getMembershipById(id);

    // for free
    if (membership.amount == 0) {
      await addNewMembershipPayment({
        membership: id,
        user: user?.user.id,
        completeOrder: true,
        qna: body.qna,
        status: "new",
        amount: 10,
        qun: body.qna,
        payurl:
          localClient.baseUrl +
          `/donate/thankyou?orderId=${membership.id}&type=membership`,
        gateway_response: {
          payment_status: "paid",
        },
      });
    }

    // 2. create the new payment intent
    const paymentIntent = await addNewMembershipPayment({
      membership: id,
      user: user?.user.id,
      amount: 10,
      completeOrder: false,
      qna: body.qna,
      qun: body.qun,
    });

    // 3. create the payment request payload
    const paymentRequestPayload = {
      client_reference_id: user.user.id,
      mode: "payment",
      products: [
        {
          name: membership.name,
          quantity: body.qun,
          unit_amount: membership.amount * 1000,
        },
      ],
      success_url:
        localClient.baseUrl + "/api/pay/membership/" + paymentIntent.id,
      cancel_url: localClient.baseUrl + "/payment/cancel",
      metadata: {
        user_id: user.user.id,
        order_id: paymentIntent.id,
        donate: "membership",
        amount: membership.amount,
        quantity: body.qun,
      },
    };

    // 4. create the payment session
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

    // 5. update the payment intent with the session data
    const payUrl = `${paymentClient.baseUrl}/pay/${sessionData.data.session_id}?key=${process.env.CLIENT_KEY}`;
    if (sessionData.success) {
      const res = await updateMembershipPayment({
        id: paymentIntent.id,
        data: {
          gateway_response: sessionData.data,
          payurl: payUrl,
          sessionId: sessionData.data.session_id,
        },
      });

      return NextResponse.json(
        { message: "Data received", data: sessionData, payUrl },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { error: "Failed to parse request body" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to parse request body" },
      { status: 400 }
    );
  }
};
