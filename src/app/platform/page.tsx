import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar/Navbar";
import { client } from "@/request/actions";
import { ProjectItem } from "@/interface/project";
import { Collection } from "@/interface/collection";

const GGMapBox = dynamic(() => import("@/components/GMapBox/GGMapBox"), {
  ssr: false,
});

export const revalidate = 0;
async function page() {
  const project = await client
    .get("/api/collections/projects/records/", {
      expand: "operated_by,reports,sdgs,unit_types,type",
    })
    .send<Collection<ProjectItem>>();

  return (
    <div>
      <Navbar />
      <GGMapBox
        style={{ width: "100%", height: "90.8vh" }}
        className="rounded-none shadow-none"
        data={project}
      />
    </div>
  );
}

export default page;
