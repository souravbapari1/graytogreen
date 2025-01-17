import { client, localClient, paymentClient } from "@/request/actions";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { PaymentData } from "./payment";
import { PaymentVerifyData } from "./pymentVerify";
import { addTransition } from "@/request/worker/users";
import { createOrderHistoryRequest } from "@/request/worker/account/ordersRequest";
import { updateTargetStatus } from "@/request/worker/targetStatus";

export const revalidate = 0;

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  revalidatePath(`/api/pay/${params.id}`);
  let refId = "";
  try {
    // 1. get the payment intent
    const paymentIntent = await client
      .get(`/api/collections/payments/records/${params.id}`, {
        expand: "project",
      })
      .send<PaymentData>();

    // 2. verify the payment session
    const verifyData = await paymentClient
      .get(`/api/v1/checkout/session/${paymentIntent.sessionId}`)
      .send<PaymentVerifyData>();

    const paymentStatus = verifyData.data.payment_status;
    if (paymentStatus !== "paid") {
      // 3. if the payment is not paid return
      return NextResponse.redirect(
        new URL(
          `/donate/thankyou?orderId=${params.id}&donate=${paymentIntent.donate}&done=true`,
          localClient.baseUrl
        ).toString()
      );
    }

    // 4. update the payment intent with the verify data
    await client
      .patch(`/api/collections/payments/records/${params.id}`)
      .json({
        status: paymentStatus,
        data: verifyData,
      })
      .send();

    // 5. if the order is not placed
    if (!paymentIntent.orderPlaced) {
      let orderId = null;
      if (paymentIntent.donate === "tree") {
        // 6. place the order
        const order = await client
          .post("/api/collections/tree_planting_orders/records")
          .json({
            user: paymentIntent.user,
            project: paymentIntent.project,
            tree_count: paymentIntent.quantity,
            amount: paymentIntent.amount * paymentIntent.quantity,
            support: paymentIntent?.support,
          })
          .send<any>();
        orderId = order.id;
        // 7. update the payment intent with the order id
        await client
          .patch(`/api/collections/payments/records/${params.id}`)
          .json({
            orderPlaced: true,
            tree_order: orderId,
          })
          .send();
        refId = orderId;
        const forCarbon =
          (paymentIntent.expand?.project.impactPerUnit || 0) *
          paymentIntent.quantity;

        await updateTargetStatus({
          id: paymentIntent.user,
          tree: paymentIntent.quantity,
          support_tree: paymentIntent?.support ? paymentIntent.quantity : 0,
          carbon: forCarbon,
          support_carbon: paymentIntent?.support ? forCarbon : 0,
        });
      } else {
        // 6. place the order
        const order = await client
          .post("/api/collections/other_projects_orders/records")
          .json({
            user: paymentIntent.user,
            project: paymentIntent.project,
            amount: paymentIntent.amount,
            status: "received",
            maping_status: "pending",
            support: paymentIntent?.support,
          })
          .send<any>();
        orderId = order.id;
        // 7. update the payment intent with the order id
        await client
          .patch(`/api/collections/payments/records/${params.id}`)
          .json({
            orderPlaced: true,
            other_order: orderId,
          })
          .send();
        refId = orderId;

        const plasticKg =
          paymentIntent.amount / (paymentIntent.expand?.project.omr_unit || 0);
        const forCarbon =
          (paymentIntent.expand?.project.impactPerUnit || 0) * plasticKg;

        await updateTargetStatus({
          id: paymentIntent.user,
          plastic: plasticKg,
          support_plastic: paymentIntent?.support ? plasticKg : 0,
          carbon: forCarbon,
          support_carbon: paymentIntent?.support ? forCarbon : 0,
        });
      }
      await addTransition({
        user: paymentIntent.user,
        amount: paymentIntent.amount,
        actionBy: paymentIntent.user,
        type: "DONATE",
        reason: "Donation " + paymentIntent.expand?.project.name,
      });
      await createOrderHistoryRequest({
        amount: paymentIntent.amount,
        status: "Successful",
        reason: paymentIntent.expand?.project.name || "Donate to Tree Planting",
        payment_type: paymentIntent.donate,
        pricing_sum: `${paymentIntent.quantity}`,
        quntity: paymentIntent.quantity,
        donat_unit: paymentIntent.donate as any,
        ref_id: refId || paymentIntent.id,
        user: paymentIntent.user,
        unit: paymentIntent.expand?.project.unit_measurement,
        // certificate_Link: paymentIntent.certificate_Link,
      });

      // 8. redirect to the thank you page
      return NextResponse.redirect(
        new URL(
          `/donate/thankyou?orderId=${orderId}&donate=${paymentIntent.donate}`,
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
    console.error(error);
    return NextResponse.json({
      error: "An error occurred during the payment process.",
    });
  }
}
