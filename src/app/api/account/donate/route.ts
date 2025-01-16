import { auth } from "@/auth";
import { loadPaginatedData } from "@/helper/loader";
import { Collection } from "@/interface/collection";
import { OrderPayItem } from "@/interface/PaymentItem";
import { UserItem } from "@/interface/user";
import { client } from "@/request/actions";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const revalidate = 160;
export async function GET(req: Request) {
  const params = new URL(req.url).searchParams;
  const id = params.get("id");
  let user;
  if (id) {
    user = await client
      .get(`/api/collections/users/records/${id}`)
      .send<UserItem>();
  } else {
    user = (await auth())?.user;
  }

  if (!user) {
    return NextResponse.json(
      {
        message: "Unauthorized",
        success: false,
      },
      { status: 401 }
    );
  }

  const data = await loadPaginatedData(() =>
    getOrderProjects(
      1,
      `(status='paid' && orderPlaced=true && user='${user.id}' )`
    )
  );
  return NextResponse.json(data);
}

const getOrderProjects = async (page: number = 1, filter?: string) => {
  const req = await client
    .get("/api/collections/payments/records", {
      filter: filter || "(status='paid' && orderPlaced=true)",
      expand: "project,project.type,support",

      page: page,
    })
    .send<Collection<OrderPayItem>>();
  return req;
};
