import { UserItem } from "@/interface/user";
import { client } from "../actions";
import { Collection } from "@/interface/collection";
import { auth, signIn } from "@/auth";
import exp from "constants";

export const authUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const req = await client
    .post("/api/collections/users/auth-with-password")
    .json({
      identity: email,
      password,
    })
    .send<{ token: string; record: UserItem }>();

  const token = await superUserToken();
  return { ...req, token };
};

const superUserToken = async () => {
  const req = await client
    .post("/api/admins/auth-with-password")
    .json({
      identity: "sourav0w@gmail.com",
      password: "sour@V#404",
    })
    .send<{ token: string; admin: any }>();

  return req.token;
};

export const getUser = async (
  id: string,
  data?: { expand?: string } | undefined
) => {
  const req = await client
    .get("/api/collections/users/records/" + id, data)
    .send<UserItem>();
  return req;
};

export const getUserMemberShips = async (id: string) => {
  const req = await client
    .get("/api/collections/users/records/" + id, {
      expand: "mamberships",
    })
    .send<UserItem>();
  return req;
};

export const getUsers = async (page: number = 1, filter?: string) => {
  const req = await client
    .get("/api/collections/users/records", {
      sort: "-created",
      perPage: 20,
      page: page,
      filter: filter || "",
    })
    .send<Collection<UserItem>>();
  return req;
};

export const getAccessToken = async () => {
  try {
    if (window) {
      const token = window.localStorage.getItem("token");
      return { Authorization: token || "" };
    } else {
      return { Authorization: "" };
    }
  } catch (error) {
    try {
      const user = await auth();
      const token = user?.user.token;
      return { Authorization: token || "" };
    } catch (error) {
      return { Authorization: "" };
    }
  }
};

export const getAmbasiderRequestState = async (id?: string) => {
  const req = await client
    .get("/api/collections/ambassador_requests/records", {
      filter: `(user='${id}')`,
      perPage: 1,
    })
    .send<
      Collection<{ user: string; status: "pending" | "approved" | "reject" }>
    >();
  return (req.items?.[0]?.status || null) as
    | "pending"
    | "approved"
    | "reject"
    | null;
};
