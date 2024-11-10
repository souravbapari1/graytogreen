import React from "react";
import WorkSpace from "../components/workspace";
import ManagePorfile from "./ManagePorfile";
import { client } from "@/request/actions";
import { getUser } from "@/request/worker/auth";
import { auth } from "@/auth";

export const metadata = {
  title: "Profile",
  description: "Profile",
};
export const revalidate = 0;
async function page() {
  const data = await auth();
  const profile = await getUser(data?.user.id || "");

  return (
    <WorkSpace>
      <ManagePorfile user={profile} session={data!} />
    </WorkSpace>
  );
}

export default page;
