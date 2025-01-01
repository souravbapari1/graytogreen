import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect, useState } from "react";
import { PopupContent } from "./Parts/PopupContent";
import { montserrat } from "@/fonts/font";
import { IoIosArrowBack } from "react-icons/io";
import { unselectPlatformProject } from "@/redux/slices/platformSlice";
import Image from "next/image";
import { client, genPbFiles } from "@/request/actions";
import { MdOutlineFileDownload } from "react-icons/md";
import Link from "next/link";
import { get } from "http";
import Carousel from "react-multi-carousel";
import SdgsView from "./SdgsView";
import { ArrowDownUpIcon, Compass, LandPlot, Mail } from "lucide-react";
import { FaLocationPin } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

import { useGlobalDataContext } from "@/context/useGlobalDataContext";
import { ProjectItem } from "@/interface/project";
import { useFilterState } from "./useFilterState";

const responseive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function ProjectView() {
  const state = useAppSelector((e) => e.platformSlice);
  const dispatch = useAppDispatch();
  const { map } = useGlobalDataContext();

  return (
    <div className="">
      <div className="lg:w-96 w-full h-full z-10 left-0 md:top-0  bg-transparent absolute lg:px-3 py-3 rounded-3xl overflow-hidden">
        <div
          className={
            "w-full h-full bg-white rounded-3xl shadow-xl overflow-y-auto overflow-hidden  pt-3 mb-3  " +
            montserrat.className
          }
        >
          <div className="">
            <PopupContent
              data={state.selectedProject}
              className="w-full shadow-none mt-0 pt-0 px-3 text-sm border-none"
              key={"project_"}
            />
            <div
              onClick={() => {
                dispatch(unselectPlatformProject());
              }}
              className="w-10 h-10 cursor-pointer bg-white rounded-full flex justify-center items-center border absolute top-7 left-8"
            >
              <IoIosArrowBack />
            </div>
          </div>
          <div className="px-2">
            <div className="border rounded-lg  p-4 max-w-md text-xs mx-auto">
              <div className="flex justify-between">
                <div>
                  <p className="font-bold">Main Interventions :</p>
                  <p className="text-gray-600">
                    {state.selectedProject?.main_interventions.join(", ")}
                  </p>
                </div>
                <div>
                  <p className="font-bold">Target Units:</p>
                  <p className="text-gray-600">
                    {state.selectedProject?.number_of_target_unit}{" "}
                    {state.selectedProject?.unit_measurement}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <p className="font-bold">Accrediting Standards :</p>
                  <p className="text-gray-600">
                    {state.selectedProject?.expand?.accredation_standars?.title}
                  </p>
                </div>
                <div>
                  <p className="font-bold">Start Date :</p>
                  <p className="text-gray-600">
                    {state.selectedProject?.start_date
                      ?.split("-")
                      .reverse()
                      .join("/")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="p-2 ">
            <div className="px-4 py-4  bg-green-600/5 rounded-md">
              <p className="font-bold text-sm mb-3">About Project</p>
              <div
                className="text-xs"
                dangerouslySetInnerHTML={{
                  __html: state.selectedProject?.about_project || "",
                }}
              />
              <div className="mt-2 flex flex-col gap-2 hide-c-arrow">
                <Carousel responsive={responseive} showDots>
                  {state.selectedProject?.project_images.map((e, i) => {
                    return (
                      <Image
                        width={500}
                        height={200}
                        key={i + e}
                        src={genPbFiles(state.selectedProject, e) || ""}
                        alt=""
                        className="w-full h-40 rounded-xl object-cover"
                      />
                    );
                  })}
                </Carousel>
              </div>

              <div className="mt-5 flex flex-col gap-2 hide-c-arrow">
                <Carousel responsive={responseive} showDots>
                  {state.selectedProject?.project_videos.map((e, i) => {
                    return (
                      <video
                        width={500}
                        height={200}
                        key={i}
                        src={genPbFiles(state.selectedProject, e) || ""}
                        controls
                        className="h-40 object-cover w-full rounded-xl"
                      />
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>

          <div className="px-2">
            <div className="px-4 py-4 mt-2 bg-blue-600/5 rounded-md">
              <p className="font-bold mb-3 text-sm">Challenges</p>
              <div
                className="text-xs "
                dangerouslySetInnerHTML={{
                  __html:
                    state.selectedProject?.challenges_and_impact_details || "",
                }}
              />

              <div className="mt-2 flex flex-col gap-2 hide-c-arrow">
                <Carousel responsive={responseive} showDots>
                  {state.selectedProject?.challenges_and_impact_details_images.map(
                    (e, i) => {
                      return (
                        <Image
                          width={500}
                          height={200}
                          key={i + e}
                          src={genPbFiles(state.selectedProject, e) || ""}
                          alt=""
                          className="w-full h-40 object-cover rounded-xl"
                        />
                      );
                    }
                  )}
                </Carousel>
              </div>

              <div className="mt-5 flex flex-col gap-2 hide-c-arrow">
                <Carousel responsive={responseive} showDots>
                  {state.selectedProject?.challenges_and_impact_details_videos.map(
                    (e, i) => {
                      return (
                        <video
                          width={500}
                          height={200}
                          key={i}
                          src={genPbFiles(state.selectedProject, e) || ""}
                          controls
                          className="h-40 object-cover w-full rounded-xl"
                        />
                      );
                    }
                  )}
                </Carousel>
              </div>
            </div>
          </div>
          <br />
          <div className="px-4">
            <br />
            <h1 className="font-bold mb-2 text-sm">
              Sustainable Development Goals{" "}
              <span className="text-primary">
                ({state.selectedProject?.expand?.sdgs?.length})
              </span>
            </h1>

            {state.selectedProject?.expand?.sdgs?.map((v, i) => {
              return <SdgsView data={v} key={v.id} />;
            })}
            <br />
            {state.selectedProject?.reports.length != 0 && (
              <div className="bg-blue-600/10 rounded-md p-4 ">
                <h1 className="font-bold text-sm">Reports</h1>
                <div className="">
                  {state.selectedProject?.expand?.reports?.map((e, i) => {
                    return (
                      <div className="">
                        <div
                          className="w-full h-5 mt-2  py-3 text-sm flex justify-between items-center"
                          key={i}
                        >
                          <p className="font-semibold text-sm text-green-700">
                            {e.name}
                          </p>
                          <Link
                            href={genPbFiles(e, e.file)}
                            download={e.file}
                            target="_blank"
                          >
                            <MdOutlineFileDownload size={18} />
                          </Link>
                        </div>
                        <p className="text-xs mt-1">{e.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2 p-4 ">
            <h1 className="font-bold text-sm">Contact Info</h1>
            <div className="text-green-950 flex flex-col gap-2">
              {state.selectedProject?.website && (
                <Link
                  href={state.selectedProject?.website}
                  target="_blank"
                  className="text-sm flex items-center gap-2 font-semibold"
                >
                  <Compass size={15} className="text-primary/90" />
                  {state.selectedProject?.website}
                </Link>
              )}
              {state.selectedProject?.email && (
                <Link
                  href={"mailto:" + state.selectedProject?.email}
                  target="_blank"
                  className="text-sm flex items-center gap-2 font-semibold"
                >
                  <Mail size={15} className="text-primary/90" />
                  {state.selectedProject?.email}
                </Link>
              )}
              {state.selectedProject?.address && (
                <div className="flex justify-start items-center gap-2 text-sm font-semibold">
                  <FaLocationPin size={15} className="text-primary/90" />
                  <p className="text-sm">{state.selectedProject?.address}</p>
                </div>
              )}
              {state.selectedProject?.phone && (
                <div className="flex justify-start items-center gap-2 text-sm font-semibold">
                  <FaPhone size={12} className="text-primary/90 mr-1" />
                  <p className="text-sm">{state.selectedProject?.phone}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectView;
