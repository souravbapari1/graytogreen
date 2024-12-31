import GGMapBox from "@/components/GMapBox/GGMapBox";
import { montserrat } from "@/fonts/font";
import { createResource } from "@/helper/createResource";
import { Collection } from "@/interface/collection";
import { ProjectItem } from "@/interface/project";
import { client } from "@/request/actions";
import Link from "next/link";
import React from "react";

const allProjects = createResource(
  client
    .get("/api/collections/projects/records/", {
      expand:
        "operated_by,reports,sdgs,sdgs.sdg,unit_types,type,accredation_standars",
    })
    .send<Collection<ProjectItem>>()
);

function HomePlatform() {
  const project = allProjects.read();
  return (
    <div className="container my-20">
      <h1
        className={`lg:text-4xl text-2xl font-bold text-center mb-20 mt-20 ${montserrat.className}`}
      >
        295+ Projects united to{" "}
        <span className="text-primary">bring back a Trillion Trees</span> & 200+
        Projects to remove{" "}
        <span className="text-blue-700">10 m of Plastic waste</span>
        <p className="mt-2 ">Act Now!</p>
      </h1>

      <div className="w-full lg:h-auto h-96  relative overflow-hidden rounded-3xl ">
        <div className="w-full h-full z-[31] absolute top-0 right-0 bg-black/30 lg:hidden flex justify-center items-center">
          <Link
            href="/platform"
            className={`${montserrat.className} donateBtn font-extrabold  py-3`}
          >
            Open Platform
          </Link>
        </div>
        <GGMapBox disableScroll data={project} />
      </div>
    </div>
  );
}

export default HomePlatform;

export function HomePlatformLoading() {
  return (
    <div className="w-full max-w-[75%] lg:h-[700px] h-96 mt-36 mx-auto  relative overflow-hidden rounded-3xl ">
      <div className="w-full h-full z-[31] absolute top-0 right-0 bg-black/10  flex justify-center items-center"></div>
    </div>
  );
}
