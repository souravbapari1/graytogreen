import React from "react";
import WorkSpace from "../components/workspace";
import MyProjectsList from "./MyProjects";
import { auth } from "@/auth";

export const revalidate = 0;
async function MyProjects() {
  const user = await auth();
  return (
    <WorkSpace>
      <MyProjectsList id={user?.user.id || ""} />
    </WorkSpace>
  );
}

export default MyProjects;
