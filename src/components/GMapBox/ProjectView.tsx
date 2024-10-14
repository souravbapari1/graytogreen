import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";
import { PopupContent } from "./Parts/PopupContent";
import { montserrat } from "@/fonts/font";
import { IoIosArrowBack } from "react-icons/io";
import { unselectPlatformProject } from "@/redux/slices/platformSlice";
import Image from "next/image";
import { client } from "@/request/actions";
import { MdOutlineFileDownload } from "react-icons/md";
import Link from "next/link";

function ProjectView() {
  const state = useAppSelector((e) => e.platformSlice);
  const dispatch = useAppDispatch();
  return (
    <div className="lg:w-96 w-full h-full z-10 left-0 md:top-0  bg-transparent absolute lg:px-3 py-3  overflow-hidden">
      <div
        className={
          "w-full h-full bg-white rounded-3xl shadow-xl overflow-y-auto overflow-hidden  pt-3 mb-3  " +
          montserrat.className
        }
      >
        <div className="">
          <PopupContent
            data={state.selectedProject}
            className="w-full shadow-none mt-0 pt-0 px-3 text-sm"
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
        <br />
        <div className="px-4">
          <p className="font-bold ">About Project</p>
          <div
            className="text-sm "
            dangerouslySetInnerHTML={{
              __html: state.selectedProject?.projectContent || "",
            }}
          />
          <div className="mt-2 flex flex-col gap-2">
            {state.selectedProject?.projectContentImages.map((e, i) => {
              return (
                <Image
                  width={500}
                  height={200}
                  key={i}
                  src={client.baseUrl + "/" + e.path}
                  alt=""
                  className="w-full h-auto"
                />
              );
            })}
          </div>

          <div className="mt-2 flex flex-col gap-2">
            {state.selectedProject?.projectContentVideos.map((e, i) => {
              return (
                <video
                  width={500}
                  height={200}
                  key={i}
                  src={client.baseUrl + "/" + e.path}
                  controls
                  className="w-full h-auto"
                />
              );
            })}
          </div>
        </div>
        <div className="px-4 mt-2">
          <p className="font-bold ">Challenges</p>
          <div
            className="text-sm "
            dangerouslySetInnerHTML={{
              __html: state.selectedProject?.challengesAndImpactDetails || "",
            }}
          />
          <div className="mt-2 flex flex-col gap-2">
            {state.selectedProject?.challengesAndImpactDetailsImages.map(
              (e, i) => {
                return (
                  <Image
                    width={500}
                    height={200}
                    key={i}
                    src={client.baseUrl + "/" + e.path}
                    alt=""
                    className="w-full h-auto"
                  />
                );
              }
            )}
          </div>

          <div className="mt-2 flex flex-col gap-2">
            {state.selectedProject?.challengesAndImpactDetailsVideos.map(
              (e, i) => {
                return (
                  <video
                    width={500}
                    height={200}
                    key={i}
                    src={client.baseUrl + "/" + e.path}
                    controls
                    className="w-full h-auto"
                  />
                );
              }
            )}
          </div>
          <br />
          <h1 className="font-bold mb-3">Sustainable Development Goals</h1>

          {state.selectedProject?.sustainableDevelopmentGoal.map((e, i) => {
            return (
              <div className="">
                <p className="text-sm font-bold" key={i}>
                  {e.title}
                </p>
                <p className="text-xs mb-2">{e.desc}</p>

                <div className="w-full bg-gray-50">
                  <div className="w-full h-5 bg-main p-4 text-sm text-white flex justify-between items-center">
                    <p>Parameter</p>
                    <p>Target</p>
                  </div>
                  {e.parameters.map((e, i) => {
                    return (
                      <div
                        className="w-full h-5  border-b border-white p-4 text-sm flex justify-between items-center"
                        key={i}
                      >
                        <p>{e.title}</p>
                        <p>{e.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <br />
          <h1 className="font-bold">Reports</h1>
          <div className="">
            {state.selectedProject?.reports.map((e, i) => {
              return (
                <div
                  className="w-full h-5 mt-2 border-b border-white py-3 text-sm flex justify-between items-center"
                  key={i}
                >
                  <p className="font-semibold text-green-700">{e.title}</p>
                  <Link
                    href={client.baseUrl + "/" + e.file}
                    download={e.file}
                    target="_blank"
                  >
                    <MdOutlineFileDownload />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <br />

        <div className="flex flex-col gap-2 p-4">
          <h1 className="font-bold">Contact Info</h1>
          <p className="text-sm">{state.selectedProject?.contact.website}</p>
          <p className="text-sm">{state.selectedProject?.contact.location}</p>
          <p className="text-sm">{state.selectedProject?.contact.emailID}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectView;