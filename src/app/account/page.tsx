import React from "react";
import WorkSpace from "./components/workspace";
import MyBalance from "./MyBalance";
import { getUserPaymentInfo } from "@/request/worker/account/getUserPaymentData";

export const revalidate = 0;
async function Company() {
  const balance = await getUserPaymentInfo();
  return (
    <WorkSpace>
      <MyBalance balance={balance} />
    </WorkSpace>
  );
}

export default Company;
