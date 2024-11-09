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
      <div className="w-full relative mt-20 lg:h-[650px] h-auto">
        <Image
          src="/assets/wave.svg"
          className="w-full absolute bottom-0 right-0 z-10 block  object-fill float-end "
          width={3000}
          height={3000}
          alt=""
        />

        <Image
          src={strApi + data.image.url}
          className="w-[60%] lg:block hidden h-[650px] object-cover float-end "
          width={3000}
          height={3000}
          alt=""
        />
        <div
          className={`${montserrat.className} w-full lg:h-[650px]  grid lg:grid-cols-5 lg:absolute relative top-0 right-0`}
        >
          <div className="lg:col-span-3 bg-gradient-to-r lg:pb-36 flex justify-center items-start flex-col text-left  from-green-600 to-green-900 relative lg:arrow_path container py-20 ">
            <h1
              className="lg:text-3xl text-xl font-bold text-white uppercase"
              dangerouslySetInnerHTML={{ __html: data.title || "" }}
            />
            <p
              className="lg:pr-20 lg:text-xl  mt-10 text-white/75 "
              dangerouslySetInnerHTML={{ __html: data.description || "" }}
            />
            <br />
            <Link href={data.linkUrl}>
              <Button className="shadow-none bg-white text-primary px-6 py-5 font-bold">
                {data.linkText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <div className="grid lg:grid-cols-2  lg:gap-16 gap-8 container mt-10">
          <div className=" lg:order-first order-last">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-48 md:h-[350px] bg-green-700/20 absolute -z-[1] lg:-mr-12 -mr-10 rounded-2xl mb-10"></div>
              <Image
                src={strApi + seg?.image.url}
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[350px]  rounded-2xl object-cover h-48  "
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
              className="uppercase font-bold mb-8 text-main mt-11 flex md:justify-start justify-center items-center"
            >
              {seg?.linkText} <RiArrowDropRightLine size={35} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FoundationSecretariatBanner;
