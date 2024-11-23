import { auth } from "@/auth";
import { loadPaginatedData } from "@/helper/loader";
import { Collection } from "@/interface/collection";
import { OrderPayItem } from "@/interface/PaymentItem";
import { client } from "@/request/actions";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const user = await auth();

  revalidatePath("/api/account/donate");
  if (!user?.user) {
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
      `(status='paid' && orderPlaced=true && user='${user?.user.id}' )`
    )
  );
  return NextResponse.json(data);
}
const allowList = [
  "id",
  "collectionId",
  "collectionName",
  "created",
  "updated",
  "preview_image",
  "name",
  "sort_title",
  "type",
  "number_of_target_unit",
  "omr_unit",
  "unit_types",
  "start_date",
  "end_date",
  "country",
  "city",
  "marker",
  "workareas",
  "operated_by",
  "assigned_by",
  "top_project",
  "allow",
  "status",
  "project_prefix",
  "created_by",
  "accredation_standars",
]
  .map((e) => `expand.project.${e}`)
  .join(",");
const getOrderProjects = async (page: number = 1, filter?: string) => {
  const req = await client
    .get("/api/collections/payments/records", {
      filter: filter || "(status='paid' && orderPlaced=true)",
      expand: "project",
      fields:
        "id,status,amount,orderPlaced,donate,quantity,created,updated," +
        allowList,
      page: page,
    })
    .send<Collection<OrderPayItem>>();
  return req;
};
