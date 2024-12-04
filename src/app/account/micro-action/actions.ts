import { client } from "@/request/actions";
import { MicroActionItem } from "./md";
import { Collection } from "@/interface/collection";
import { auth } from "@/auth";

export const getMicroActions = async () => {
  const user = await auth();
  const userType = user?.user.user_type;
  if (userType === "partner") {
    const res = await client
      .get("/api/collections/micro_actions/records", {
        filter: `(partners~'${user?.user.id}')`,
      })
      .send<Collection<MicroActionItem>>();
    return res;
  }
  const res = await client
    .get("/api/collections/micro_actions/records")
    .send<Collection<MicroActionItem>>();
  return res;
};
