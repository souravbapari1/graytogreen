import React from "react";
import WorkSpace from "../components/workspace";
import ManagePorfile from "./ManagePorfile";
import { client } from "@/request/actions";
import { getUser } from "@/request/worker/auth";
import { auth } from "@/auth";
import CompanyProfile from "./CompanyProfile";
import { UserItem } from "@/interface/user";
import { Session } from "next-auth";

export const metadata = {
  title: "Profile",
  description: "Profile",
};
export const revalidate = 0;
async function page() {
  const data = await auth();
  const profile = await getUser(data?.user.id || "", {
    expand: "company",
  });

  return (
    <WorkSpace>
      {profile.user_type != "partner" && (
        <ManagePorfile user={profile} session={data!} />
      )}
      {profile.user_type == "partner" && (
        <CompanyProfile user={profile} session={data!} />
      )}
    </WorkSpace>
  );
}

export default page;
