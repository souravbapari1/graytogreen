"use server";

import { auth } from "@/auth";
import { Collection } from "@/interface/collection";
import { OrderPayItem } from "@/interface/PaymentItem";
import { UserItem } from "@/interface/user";
import { client } from "@/request/actions";

export type MyBalanceItem = {
  id: string;
  collectionId: string;
  collectionName: string;
  user: string;
  totalAmount: number;
  totalQuantity: number;
};
export const getUserPaymentInfo = async () => {
  const user = await auth();
  try {
    const balance = await client
      .get(`/api/collections/my_donations/records/${user?.user.id}`)
      .send<MyBalanceItem>();
    return balance;
  } catch (error) {
    return {
      totalAmount: 0,
      totalQuantity: 0,
      collectionId: "",
      collectionName: "",
      id: "",
      user: user?.user.id,
    } as MyBalanceItem;
  }
};

export const getUserPaymentHistory = async (filter?: string) => {
  const user = await auth();
  const payments = await client
    .get(`/api/collections/payments/records`, {
      filter: `(user='${user?.user.id}' && status='paid' && orderPlaced=true ${
        filter && "&& " + filter
      })`,
      expand: "project",
      fields:
        "id,status,amount,orderPlaced,donate,quantity,created,updated,expand.project.name",
    })
    .send<Collection<OrderPayItem>>();

  return payments;
};

export const getTransitions = async (
  page: number = 1,
  user: string,
  filter?: string
) => {
  const req = await client
    .get("/api/collections/transactions/records", {
      sort: "-created",
      perPage: 500,
      filter: `(user='${user}' ${filter && "&& " + filter})`,
      expand: "actionBy",
      page: page,
    })
    .send<
      Collection<{
        id: string;
        collectionId: string;
        collectionName: string;
        created: string;
        updated: string;
        reason: string;
        amount: 123;
        user: string;
        actionBy: string;
        type: "CREDIT" | "DEBIT" | "DONATE";
        expand: {
          actionBy?: UserItem;
        };
      }>
    >();
  return req;
};
