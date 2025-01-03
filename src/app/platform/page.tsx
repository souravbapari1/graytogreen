import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar/Navbar";
import { client } from "@/request/actions";
import { ProjectItem } from "@/interface/project";
import { Collection } from "@/interface/collection";
import GGMapBox from "@/components/GMapBox/GGMapBox";

export const revalidate = 0;
async function page() {
  const project = await client
    .get("/api/collections/projects/records/", {
      expand:
        "operated_by,reports,sdgs,sdgs.sdg,unit_types,type,accredation_standars",
      perPage: 500,
      filter: "(allow=true)",
    })
    .send<Collection<ProjectItem>>();

  return (
    <div>
      <Navbar />
      <GGMapBox
        style={{ width: "100%", height: "calc(100vh - 88px)" }}
        className="rounded-none shadow-none"
        data={project}
      />
    </div>
  );
}

export default page;
