import { auth } from "@/auth";
import { Collection } from "@/interface/collection";
import { client } from "@/request/actions";
import { FSLPItem } from "./fslp";

export const getMyPrograms = async () => {
  const user = await auth();
  const res = await client
    .get("/api/collections/fslp/records", {
      filter: `(user~'${user?.user.id}')`,
      perPage: 500,
    })
    .send<Collection<FSLPItem>>();
  return res;
};
