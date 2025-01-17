import { Collection } from "@/interface/collection";
import { client } from "@/request/actions";

export type OrderCategory =
  | "tree"
  | "plastic"
  | "membership"
  | "fslp"
  | "academic"
  | "fund"
  | "others";
export interface RequestOrderHistoryData {
  status: string;
  amount: number;
  reason: string;
  payment_type: string;
  pricing_sum: string;
  quntity: number;
  donat_unit: OrderCategory;
  ref_id: string;
  user: string;
  certificate_Link?: string;
  created?: string;
  updated?: string;
  id?: string;
  unit?: string;
}

export const createOrderHistoryRequest = async (
  data: RequestOrderHistoryData
) => {
  try {
    const req = await client
      .post("/api/collections/orders_history/records")
      .json(data)
      .send<RequestOrderHistoryData>();
    return req;
  } catch (error) {
    console.log(error);
  }
};

export const getUserOrderAllHistoryRequest = async (
  userId: string,
  page: number = 1
) => {
  const req = await client
    .get("/api/collections/orders_history/records", {
      page: page,
      sort: "-created",

      filter: `(user='${userId}')`,
    })
    .send<Collection<RequestOrderHistoryData>>();
  return req;
};

export const getUserOrderTreeHistoryRequest = async (
  data: string,
  page: number = 1
) => {
  const req = await client
    .get("/api/collections/orders_history/records", {
      page: page,
      sort: "-created",
      filter: `(donat_unit='tree' && user='${data}')`,
    })
    .send<Collection<RequestOrderHistoryData>>();
  return req;
};

export const getUserOrderOtherHistoryRequest = async (
  data: string,
  page: number = 1,
  order: OrderCategory
) => {
  const req = await client
    .get("/api/collections/orders_history/records", {
      page: page,
      sort: "-created",
      filter: `(donat_unit='${order}' && user='${data}')`,
    })
    .send<Collection<RequestOrderHistoryData>>();
  return req;
};
