import { AcademiesAndLab } from "@/app/academies/AcademiesAndLab";
import { Button } from "@/components/ui/button";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

function AcademicsInfoLists({
  BootCamps,
  climateChangeExperts,
  graduatedAmbassadors,
  releasedResearches,
  workspace,
  infocard,
}: {
  BootCamps?: number;
  climateChangeExperts?: number;
  graduatedAmbassadors?: number;
  releasedResearches?: number;
  workspace?: number;
  infocard?: AcademiesAndLab["infocard"];
}) {
  return (
    <div className="">
      <div className="container mt-10">
        <div className="relative   lg:h-60 h-[900px] mt-20 bg-[url('/assets/744.jpg')] bg-fixed bg-no-repeat bg-cover bg-center">
          {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
          <div className="absolute top-0 right-0 bg-black/50 w-full h-full">
            <div className="w-full h-full   flex justify-center items-center">
              <div className=" grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 lg:gap-5 gap-16  text-white">
                <div className=" text-center flex flex-col justify-center items-center gap-5">
                  <h1
                    className={`md:text-6xl text-5xl font-bold text-center ${montserrat.className}`}
                  >
                    {BootCamps}+
                  </h1>
                  <p
                    className={`${montserrat.className} text-md text-center text-white/75`}
                  >
                    BootCamps
                  </p>
                </div>
                <div className=" text-center flex flex-col justify-center items-center gap-5">
                  <h1
                    className={`md:text-6xl text-5xl font-bold text-center ${montserrat.className}`}
                  >
                    {releasedResearches}+
                  </h1>
                  <p
                    className={`${montserrat.className} text-md text-center text-white/75`}
                  >
                    Released Researches
                  </p>
                </div>
                <div className=" text-center flex flex-col justify-center items-center gap-5">
                  <h1
                    className={`md:text-6xl text-5xl font-bold text-center ${montserrat.className}`}
                  >
                    {graduatedAmbassadors}+
                  </h1>
                  <p
                    className={`${montserrat.className} text-md text-center text-white/75`}
                  >
                    Graduated Ambassadors
                  </p>
                </div>
                <div className=" text-center flex flex-col justify-center items-center gap-5">
                  <h1
                    className={`md:text-6xl text-5xl font-bold text-center ${montserrat.className}`}
                  >
                    {workspace}+
                  </h1>
                  <p
                    className={`${montserrat.className} text-md text-center text-white/75`}
                  >
                    Workspace
                  </p>
                </div>
                <div className=" text-center flex flex-col justify-center items-center gap-5">
                  <h1
                    className={`md:text-6xl text-5xl font-bold text-center ${montserrat.className}`}
                  >
                    {climateChangeExperts}+
                  </h1>
                  <p
                    className={`${montserrat.className} text-md text-center text-white/75`}
                  >
                    Climate Change Experts
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
        </div>
      </div>

      <div className="container ">
        <div className="w-full mt-28 mx-auto  ">
          <div className={`${montserrat.className} md:text-left text-center`}>
            <p className="lg:text-xl text-lg mb-2 font-bold text-main">
              We are starting from here
            </p>
            <h1 className="lg:text-4xl text-3xl font-bold">
              Current Departments
            </h1>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2  mx-auto items-center  lg:gap-0 gap-5  py-10 ">
            {infocard?.map((e, i) => {
              return (
                <div
                  key={"type:_" + i}
                  className="w-full lg:h-[320px] h-80 bg-green-200  hover:shadow-lg transition-all overflow-hidden relative"
                >
                  <Image
                    src={strApi + e.image.url}
                    alt=""
                    width={3000}
                    height={3000}
                    className="w-full h-full object-cover absolute top-0 right-0"
                  />
                  <div className="w-full h-full bg-black absolute top-0 right-0 bg-black/30"></div>
                  <div className="absolute bottom-0  p-5">
                    <h1
                      className={`${montserrat.className}  text-lg text-white font-extrabold `}
                    >
                      {e.title}
                    </h1>
                    <Link
                      href={e.link}
                      className="donateBtn rounded-none w-32 p-0 h-10 text-sm shadow-none mt-5 flex justify-center items-center"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademicsInfoLists;
