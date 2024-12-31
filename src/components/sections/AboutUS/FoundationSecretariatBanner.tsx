import { AboutUse } from "@/app/about-us/aboutus";
import { Button } from "@/components/ui/button";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

function FoundationSecretariatBanner({
  data,
  seg,
}: {
  data?: AboutUse["missionAndVission"];
  seg?: AboutUse["esg"];
}) {
  if (!data) {
    return <></>;
  }
  return (
    <div className="">
      {/* Foundation Secretariat Banner */}
      <div className="container relative mt-20 grid grid-cols-2 gap-20 h-auto">
        <div className="w-full">
          <div className="relative md:p-10 flex justify-center items-center">
            <div className="w-[90%] h-48 md:h-[300px] bg-green-700/20 absolute -z-[1] lg:-mr-12 -mr-10 rounded-2xl mb-10"></div>
            <Image
              src={strApi + seg?.image.url}
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[300px]  rounded-2xl object-cover h-48  "
            />
          </div>
        </div>
        <div
          className={`${montserrat.className} w-full   relative flex justify-start text-left items-start mt-10`}
        >
          <div className=" w-full  flex justify-start items-start flex-col text-left  relative  ">
            <h1
              className="lg:text-3xl text-xl font-bold  uppercase"
              dangerouslySetInnerHTML={{ __html: data.title || "" }}
            />
            <p
              className=" lg:text-xl  mt-10 text-justify"
              dangerouslySetInnerHTML={{ __html: data.description || "" }}
            />
            <br />
          </div>
        </div>
      </div>

      {/* Foundation Secretariat Banner */}

      <div className="">
        <div className="grid lg:grid-cols-2  lg:gap-16 gap-8 container mt-10">
          <div className={seg?.align == "right" ? "order-2" : ""}>
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-48 md:h-[300px] bg-green-700/20 absolute -z-[1] lg:-mr-12 -mr-10 rounded-2xl mb-10"></div>
              <Image
                src={strApi + seg?.image.url}
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[300px]  rounded-2xl object-cover h-48  "
              />
            </div>
          </div>
          <div className="">
            <h1
              className={
                montserrat.className +
                " lg:text-4xl lg:mt-10 text-3xl font-bold"
              }
              dangerouslySetInnerHTML={{ __html: seg?.title || "" }}
            />
            <p
              className={montserrat.className + "  mt-10 "}
              dangerouslySetInnerHTML={{ __html: seg?.description || "" }}
            />
            <Link
              href={seg?.linkUrl || "#"}
              className="uppercase font-bold mb-2 text-main mt-5 flex md:justify-start justify-center items-center"
            >
              {seg?.linkText} <RiArrowDropRightLine size={35} />
            </Link>

            {seg?.More_Links &&
              seg.More_Links.map((e) => {
                return (
                  <Link
                    key={e.id}
                    href={e.linkUrl || "#"}
                    className="uppercase font-bold mb-2 text-main  flex md:justify-start justify-center items-center"
                  >
                    {e.linkText} <RiArrowDropRightLine size={35} />
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default FoundationSecretariatBanner;
