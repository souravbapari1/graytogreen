import { montserrat } from "@/fonts/font";
import Image from "next/image";

import { ProjectItem } from "@/interface/project";
import { client, genPbFiles } from "@/request/actions";
import NotFound from "../not-found";
import DonateBox from "./DonateBox";
import { cn } from "@/lib/utils";
import TreeDonateBox from "./box/TreeDonateBox";
import AmountDonateBox from "./box/AmountDonateBox";
import SupportBox from "@/components/GMapBox/SupportBox";

export const revalidate = 0;
export const metadata = {
  title: "Donate",
};
async function Donate({ searchParams }: { searchParams?: any }) {
  const donate = searchParams.donate;
  const by = searchParams.by;
  const id = searchParams.id;
  const type = searchParams.type;

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
    <div className="w-full min-h-screen h-full flex justify-center items-center bg-gray-100 select-none">
      <div className="fixed top-4 left-0 right-0 mx-auto">
        <div className="w-full flex justify-center items-center">
          <SupportBox />
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center relative">
        <div className="w-80 md:h-96 h-52  rounded-xl  py-3  md:-mr-10 overflow-hidden md:mb-0 -mb-8 relative ">
          <div
            className="w-full h-full bg-primary shadow-md   rounded-xl bg-cover bg-center bg-no-repeat relative overflow-hidden"
            style={{
              backgroundImage: `url(${genPbFiles(
                project,
                project.preview_image
              )})`,
            }}
          >
            <div
              className={cn(
                "w-full h-full p-5 bg-gradient-to-t from-black to-transparent absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end items-end",
                montserrat.className
              )}
            >
              <div className="flex flex-col justify-start items-start w-full">
                <div className="flex justify-start items-start">
                  <div className="text-white/90 text-xl font-semibold md:pr-9">
                    {project.name}
                  </div>
                </div>
                <p className="text-[10px] text-white/80 mt-2 md:pr-9 md:mb-0 mb-4 ">
                  With your donation, you help us expand our global network,
                  train children at our academies to become Climate Justice
                  Ambassadors, and plant more trees. Even with small
                  contributions we can achieve a lot - and every donation brings
                  us a little closer to our goals. Thank you for your
                  contribution!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "w-80 md:h-96 bg-white z-20 p-5 rounded-xl shadow-md shadow-gray-400/20",
            montserrat.className
          )}
        >
          {project.project_prefix == "tree" ? (
            <TreeDonateBox data={project} />
          ) : (
            <AmountDonateBox data={project} />
          )}
        </div>
        <Image
          alt=""
          src="/assets/brand-shape.png"
          width={1040}
          height={1040}
          className="absolute -top-8 md:block hidden -right-16 h-16 w-16 object-contain "
        />
      </div>
    </div>
  );
}

export default Donate;
