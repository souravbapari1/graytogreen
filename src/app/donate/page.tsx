import { montserrat } from "@/fonts/font";
import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import NotFound from "../not-found";
import { client } from "@/request/actions";
import { ProjectItem } from "@/interface/project";
import { Flower2, Sprout } from "lucide-react";
import DonateBanner from "@/components/sections/Home/DonateBanner/4";
import DonateBox from "./DonateBox";

export const revalidate = 0;
export const metadata = {
  title: "Donate",
};
async function Donate({ searchParams }: { searchParams?: any }) {
  const donate = searchParams.donate;
  const by = searchParams.by;
  const id = searchParams.id;

  if (!donate || !by || !id) {
    return <NotFound />;
  }
  if (!["tree", "plastic", "others"].includes(donate)) {
    return <NotFound />;
  }
  const project = await client
    .get(`/api/collections/projects/records/${id}`, {
      hideFields: "about_project,challenges_and_impact_details",
    })
    .send<ProjectItem>();

  if (!project) {
    return <NotFound />;
  }

  if (!["tree", "plastic", "others"].includes(project.project_prefix)) {
    return <NotFound />;
  }

  return (
    <div className="w-screen h-screen md:bg-[url('https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg')] bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full bg-black/50 flex justify-center items-center">
        <div className=" xl:max-w-[30vw] md:max-w-[60vw] w-full md:h-auto h-full relative  md:rounded-3xl md:shadow-xl  bg-white grid xl:grid-cols-2 gap-5 p-5">
          <div className="w-full col-span-2 md:p-8 p-4 ">
            <Image
              alt=""
              src="/logo/main-logo.png"
              width={600}
              height={100}
              className="w-32 h-auto"
            />
            <p className={`${montserrat.className} text-sm mt-4 text-gray-700`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae ab facere eaque deserunt ad quaerat accusamus
              voluptatem molestias, quo incidunt, blanditiis iure provident,
              omnis suscipit culpa illo. Fuga, praesentium debitis.
            </p>
            <DonateBox project={project} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
