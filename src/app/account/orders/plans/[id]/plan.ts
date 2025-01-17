import { client } from "@/request/actions";
import { PlanData } from "./plans";

export const getPlanData = async (id: string) => {
  const data = await client
    .get("/api/collections/memberships_payments/records/" + id, {
      expand: "membership",
    })
    .send<PlanData>();
  return data;
};
