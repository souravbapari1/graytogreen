import React from "react";
import WorkSpace from "../components/workspace";
import ReportsView from "./ReportsView";
import { auth } from "@/auth";

export const revalidate = 0;
async function Reporting() {
  const data = await auth();
  return (
    <WorkSpace>
      <ReportsView user={data?.user.id || ""} />
    </WorkSpace>
  );
}

export default Reporting;
