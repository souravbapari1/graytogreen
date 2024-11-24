import React from "react";
import WorkSpace from "./components/workspace";
import MyBalance from "./MyBalance";
import { getUserPaymentInfo } from "@/request/worker/account/getUserPaymentData";
import { getUser } from "@/request/worker/auth";
import { auth } from "@/auth";

export const revalidate = 0;
async function Company() {
  const data = await auth();
  const balance = await getUserPaymentInfo();
  const user = await getUser(data?.user.id || "", { expand: "company" });
  return (
    <WorkSpace>
      <MyBalance balance={balance} user={user} />
    </WorkSpace>
  );
}

export default Company;
