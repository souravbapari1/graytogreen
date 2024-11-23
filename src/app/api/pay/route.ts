import { client, localClient, paymentClient } from "@/request/actions";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

type PaymentIntent = {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  donate: string;
  sessionId: string;
  user: string;
  project: string;
  amount: number;
  quantity: number;
  data: string;
  status: string;
};

export const revalidate = 0;
export async function POST(req: Request) {
  revalidatePath("/api/pay");
  try {
    // Parse the JSON body from the request
    const body: {
      userId: string;
      projectId: string;
      amount: number;
      quantity: number;
      projectName: string;
      donate: string;
      support?: string;
    } = await req.json();

    // Basic validation rules
    if (!body.userId || typeof body.userId !== "string") {
      return NextResponse.json(
        { error: "Invalid or missing userId" },
        { status: 400 }
      );
    }
    if (!body.projectId || typeof body.projectId !== "string") {
      return NextResponse.json(
        { error: "Invalid or missing projectId" },
        { status: 400 }
      );
    }
    if (typeof body.amount !== "number" || body.amount <= 0) {
      return NextResponse.json(
        { error: "Invalid amount, must be a positive number" },
        { status: 400 }
      );
    }
    if (typeof body.quantity !== "number" || body.quantity <= 0) {
      return NextResponse.json(
        { error: "Invalid quantity, must be a positive number" },
        { status: 400 }
      );
    }
    if (!body.projectName || typeof body.projectName !== "string") {
      return NextResponse.json(
        { error: "Invalid or missing projectName" },
        { status: 400 }
      );
    }
    if (!body.donate || typeof body.donate !== "string") {
      return NextResponse.json(
        { error: "Invalid or missing donate" },
        { status: 400 }
      );
    }

    const paymentIntent = await client
      .post("/api/collections/payments/records")
      .json({
        donate: body.donate,
        user: body.userId,
        project: body.projectId,
        amount: (body.amount / 1000) * body.quantity,
        quantity: body.quantity,
        support: body.support,
      })
      .send<PaymentIntent>();

    const paymentRequestPayload = {
      client_reference_id: body.userId,
      mode: "payment",
      products: [
        {
          name: body.projectName,
          quantity: body.quantity,
          unit_amount: body.amount,
        },
      ],
      success_url: localClient.baseUrl + "/api/pay/" + paymentIntent.id,
      cancel_url: localClient.baseUrl + "/payment/cancel",
      metadata: {
        user_id: body.userId,
        order_id: paymentIntent.id,
        donate: body.donate,
        project: body.projectId,
        amount: body.amount,
        quantity: body.quantity,
        support: body.support,
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

    if (sessionData.success) {
      await client
        .patch("/api/collections/payments/records/" + paymentIntent.id)
        .json({
          sessionId: sessionData.data.session_id,
          data: sessionData,
          status: sessionData.data.payment_status,
          payurl: payUrl,
        })
        .send<PaymentIntent>();
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
}
