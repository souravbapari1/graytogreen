import React from "react";
import WorkSpace from "../components/workspace";

import { getMyPrograms } from "./actions";
import { MyProgramsList } from "./MyProgramsList";

export const revalidate = 0;
async function page() {
  const data = await getMyPrograms();

  return (
    <WorkSpace>
      <h1 className="mb-10">Track and manage your Programs here.</h1>
      <MyProgramsList data={data} />
    </WorkSpace>
  );
}

export default page;
