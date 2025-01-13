import { client, localClient } from "../actions";
export interface NewFundPayment {
  title: string;
  status: string;
  amount: number;
  user: string;
  pay_response?: string;
  sessionId?: string;
  payUrl?: string;
  complete?: boolean;
}

export const refundPayment = async (data: NewFundPayment) => {
  const payment = await client
    .post("/api/collections/wallet_funds_payment/records")
    .json(data)
    .send<any>();
  return payment;
};

export const updateReFundPayment = async (
  id: string,
  data: Partial<NewFundPayment>
) => {
  const payment = await client
    .patch(`/api/collections/wallet_funds_payment/records/${id}`)
    .json(data)
    .send();
  return payment;
};

export const getReFundPayment = async (id: string) => {
  const payment = await client
    .get(`/api/collections/wallet_funds_payment/records/${id}`)
    .send<any>();
  return payment;
};

export const sendReFundingRequest = async (data: NewFundPayment) => {
  const payment = await localClient
    .post("/api/pay/fund/wallet")
    .json(data)
    .send<any>();
  return payment;
};
