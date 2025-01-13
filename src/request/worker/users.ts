import { UserItem } from "@/interface/user";
import { client } from "../actions";
import { getUser } from "./auth";

export const createUser = async (data: {
  email: string;
  emailVisibility: boolean;
  password: string;
  passwordConfirm: string;
  first_name: string;
  last_name: string;
  mobile_no: string;
  country: string;
  city: string;
  gender: string;
  socail_state: string;
  dob: string;
  user_type: string;
  company: string;
  role: string;
  tree_orders: string[];
  complete: boolean;
  breef: string;
  whyYouHere: string;
}) => {
  const req = await client
    .post("/api/collections/users/records")
    .json(data)
    .send<UserItem>();

  return req;
};

export const setUserMembership = async (
  id: string,
  membership: string,
  token?: string
) => {
  const req = await client
    .patch("/api/collections/users/records/" + id)
    .json({
      "mamberships+": membership,
    })
    .send<UserItem>({
      Authorization: `Bearer ${token}`,
    } as any);
  return req;
};

export const addTransition = async (data: {
  reason: string;
  amount: number;
  user: string;
  actionBy: string;
  type: "CREDIT" | "DEBIT" | "DONATE";
}) => {
  try {
    const req = await client
      .post("/api/collections/transactions/records")
      .json(data)
      .send();
    return req;
  } catch (error) {
    console.log(error);
  }
};

export const setLastLogin = async (id: string) => {
  try {
    const req = await client
      .patch("/api/collections/users/records/" + id)
      .json({ lastLogin: new Date() })
      .send<UserItem>();
    return req;
  } catch (error) {
    console.log(error);
  }
};

export const addFundsWallet = async (data: {
  user: string;
  amount: number;
}) => {
  const user = await getUser(data.user);
  const updateUser = await client
    .patch("/api/collections/users/records/" + user.id)
    .json({
      wallet: user.wallet + data.amount,
    })
    .send<UserItem>();
  return updateUser;
};
