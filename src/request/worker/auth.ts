import { UserItem } from "@/interface/user";
import { client, pb } from "../actions";
import { Collection } from "@/interface/collection";
import { auth, signIn } from "@/auth";

export const google_O_Auth = async () => {
  try {
    const res = await pb.collection("users").authWithOAuth2({
      provider: "google",
    });

    const authSignIn = signIn("credentials", {
      credentials: {
        redirect: false,
        email: res?.meta?.email,
        password: res?.token,
        provider: "google",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

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

export const getUser = async (id: string) => {
  const req = await client
    .get("/api/collections/users/records/" + id)
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
