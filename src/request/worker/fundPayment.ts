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

export const fundPayment = async (data: NewFundPayment) => {
  const payment = await client
    .post("/api/collections/support_donations/records")
    .json(data)
    .send<any>();
  return payment;
};

export const updateFundPayment = async (
  id: string,
  data: Partial<NewFundPayment>
) => {
  const payment = await client
    .patch(`/api/collections/support_donations/records/${id}`)
    .json(data)
    .send();
  return payment;
};

export const getFundPayment = async (id: string) => {
  const payment = await client
    .get(`/api/collections/support_donations/records/${id}`)
    .send<any>();
  return payment;
};

export const sendFundingRequest = async (data: NewFundPayment) => {
  const payment = await localClient
    .post("/api/pay/fund")
    .json(data)
    .send<any>();
  return payment;
};
