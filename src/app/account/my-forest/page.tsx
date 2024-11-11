import React from "react";
import WorkSpace from "../components/workspace";
import MyForest from "./MyForest";
import { auth } from "@/auth";
import { getUser } from "@/request/worker/auth";

export const metadata = {
  title: "My Forest",
  description: "My Forest",
};
export const revalidate = 0;
async function page() {
  const data = await auth();
  const profile = await getUser(data?.user.id || "");
  return (
    <WorkSpace>
      <MyForest user={profile} />
    </WorkSpace>
  );
}

export default page;
