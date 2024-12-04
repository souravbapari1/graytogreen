import { Collection } from "@/interface/collection";
import { client } from "../actions";
import { MembershipItem, MemberShipPayment } from "@/interface/membership";

export const getMembership = async (page: number = 1) => {
  const req = await client
    .get("/api/collections/memberships/records", { page })
    .send<Collection<MembershipItem>>();
  return req;
};

export const getMembershipById = async (id: string) => {
  const req = await client
    .get("/api/collections/memberships/records/" + id)
    .send<MembershipItem>();
  return req;
};

export const getMembershipPaymentById = async (id: string) => {
  const req = await client
    .get("/api/collections/memberships_payments/records/" + id)
    .send<MemberShipPayment>();
  return req;
};

export const addNewMembershipPayment = async (data: {
  membership: string;
  user: string;
  payurl?: string;
  amount: number;
  gateway_response?: any;
  completeOrder: boolean;
  qna?: any;
  status?: "pending" | "confirm" | "cancel";
}) => {
  return await client
    .post("/api/collections/memberships_payments/records")
    .json(data)
    .send<MemberShipPayment>();
};

export const updateMembershipPayment = async (data: {
  id: string;
  data: {
    membership?: string;
    user?: string;
    payurl?: string;
    amount?: number;
    gateway_response?: any;
    completeOrder?: boolean;
    sessionId?: string;
    status?: "pending" | "confirm" | "cancel";
    qna?: any;
  };
}) => {
  return await client
    .patch("/api/collections/memberships_payments/records/" + data.id)
    .json(data.data)
    .send<MemberShipPayment>();
};