import { client } from "../actions";

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
}) => {
  const req = await client
    .post("/api/collections/users/records")
    .json(data)
    .send();

  return req;
};
