"use server";

import { auth } from "@/auth";
import { Collection } from "@/interface/collection";
import { OrderPayItem } from "@/interface/PaymentItem";
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
  const balance = await client
    .get(`/api/collections/my_donations/records/${user?.user.id}`)
    .send<MyBalanceItem>();
  return balance;
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
