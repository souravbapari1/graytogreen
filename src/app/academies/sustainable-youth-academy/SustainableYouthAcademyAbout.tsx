import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiPlantFill, PiPottedPlantBold } from "react-icons/pi";
import { RiArrowDropRightLine } from "react-icons/ri";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import {
  SustainableYouthAcademy,
  SustainableYouthAcademyData,
} from "./SustainableYouthAcademy";
import { strApi } from "@/graphql/client";

function SustainableYouthAcademyAbout({
  data,
}: {
  data?: SustainableYouthAcademy["sustainabilityRegisterCard"];
}) {
  return (
    <div className=" py-20" id="Join">
      <div className="container grid lg:grid-cols-2 gap-10">
        <div className="">
          <div className="relative md:p-10 flex justify-center items-center">
            <div className="w-[90%] h-64 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
            <Image
              src={strApi + data?.sideImage.url}
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[380px]  rounded-2xl object-cover h-64  "
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="flex text-main items-center gap-3 mb-4">
            <PiPlantFill />
            <p
              className={`${montserrat.className} text-sm font-semibold`}
              dangerouslySetInnerHTML={{ __html: data?.subtitle || "" }}
            />
          </div>
          <h1
            className={`lg:text-4xl text-xl text-gray-900 lg:mb-10 mb-5 font-bold ${montserrat.className}`}
            dangerouslySetInnerHTML={{ __html: data?.title || "" }}
          />
          <div className="">
            {data?.info.map((item, index) => {
              return (
                <div className="flex gap-4 mb-4" key={item.id}>
                  <Image
                    src={strApi + item.bannerImage.url}
                    className="text-main w-11 object-contain "
                    width={600}
                    height={600}
                    alt=""
                  />
                  <div className={`${montserrat.className}`}>
                    <h3
                      className="font-bold md:text-xl mb-2"
                      dangerouslySetInnerHTML={{ __html: item.title || "" }}
                    />
                    <p
                      className={` text-xs text-gray-500 max-w-[400px]`}
                      dangerouslySetInnerHTML={{
                        __html: item.description || "",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          {data?.Opening_State != "OPEN" ? (
            <div className="w-full h-10 bg-red-300 flex justify-center items-center rounded font-bold text-red-600 mt-3">
              <p>CLOSED NOW</p>
            </div>
          ) : (
            <div
              className={`flex justify-normal items-center gap-6 mt-8 ${montserrat.className}`}
            >
              <Link target="_blank" href={data?.registerBtn.linkUrl || "#"}>
                <Button className=" shadow-none font-bold donateBtn px-10 py-6">
                  {data?.registerBtn.linkText}
                </Button>
              </Link>
              <Link target="_blank" href={data?.viewMoreBtn.linkUrl || "#"}>
                <Button
                  className=" shadow-none font-bold  px-10 py-6"
                  variant="secondary"
                >
                  {data?.viewMoreBtn.linkText}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SustainableYouthAcademyAbout;
