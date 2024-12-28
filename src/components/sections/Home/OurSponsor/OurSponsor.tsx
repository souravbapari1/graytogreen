import Marquee from "react-fast-marquee";

import { lora, montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { HomePage } from "@/app/homePage";
import { strApi } from "@/graphql/client";
import { isExpiryValid } from "@/helper/validate";
import { cn } from "@/lib/utils";

function OurSponsor({
  sponsers,
  academics,
}: {
  sponsers?: HomePage["sponsors"];
  academics?: HomePage["Academies"];
}) {
  return (
    <div className={` ${montserrat.className} container overflow-hidden`}>
      {sponsers && (
        <>
          <h1 className="md:text-4xl text-3xl md:mt-16 mt-10 font-extrabold text-center">
            Our <span className="text-main ">Sponsor</span>
          </h1>
          <Marquee className="">
            <div className="flex  justify-center md:mt-14 mt-5 md:mb-10 items-center ">
              {sponsers.map((e, i) => {
                return (
                  <Link href="/sponsors/brand">
                    <Image
                      src={strApi + e.brandImage.url}
                      key={i}
                      alt=""
                      className="w-28 h-28 object-contain md:mx-10  mx-5"
                      width={100}
                      height={100}
                    />
                  </Link>
                );
              })}
            </div>
          </Marquee>
          <div className="w-full flex justify-center items-center mb-10">
            <Link
              href="/sponsors"
              className="shadow-none border-none donateBtn py-2 font-semibold"
            >
              All Sponsors
            </Link>
          </div>
        </>
      )}
      {academics && (
        <>
          <div className="flex flex-col justify-center items-center gap-10">
            <div className="grid lg:grid-cols-2 gap-10 mt-12">
              <div className="relative  flex justify-center items-center">
                <div className="">
                  <div className="relative md:p-10 flex justify-center items-center">
                    {/* <div className="w-[90%] h-48 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:-mr-12 -mr-10 rounded-2xl mb-10"></div> */}
                    <Image
                      src={strApi + academics.images.center.url}
                      width={1200}
                      height={1200}
                      alt=""
                      className="md:w-full w-[90%]  md:h-[313px]   object-cover h-48  "
                    />
                    <Image
                      src={strApi + academics.images.right.url}
                      width={1200}
                      height={1200}
                      alt=""
                      className="md:w-52 w-28 absolute  md:h-[140px] right-0 top-0 border-2 border-white md:p-2 p-1  bg-white  object-cover h-20  "
                    />
                    <Image
                      src={strApi + academics.images.left.url}
                      width={1200}
                      height={1200}
                      alt=""
                      className="md:w-52 w-28 absolute  md:h-[140px] left-0 bottom-0 border-2 border-white bg-white md:p-2 p-1   object-cover h-20  "
                    />
                  </div>
                </div>
              </div>
              <div className="md:text-left text-center md:mt-5">
                <h1
                  className={`${montserrat.className} font-extrabold uppercase lg:text-3xl text-2xl`}
                  dangerouslySetInnerHTML={{ __html: academics.title }}
                />
                <p className="  mt-4 ">{academics.description}</p>
                <Link
                  href="/about-us"
                  className="uppercase font-bold text-main mt-3 text-sm flex md:justify-start justify-center items-center"
                >
                  Learn More About Our Vision <RiArrowDropRightLine size={35} />
                </Link>
                <div className="grid md:grid-cols-2 gap-4 md:mt-2 mt-4 text-sm">
                  {academics.Academies?.map((e, i) => {
                    const isValid = isExpiryValid(e.registerationEndDate);
                    const isFull = e.maxParticipents <= (e.applications || 0);
                    const validate = () => {
                      if (isValid) {
                        return isFull;
                      }
                      return true;
                    };
                    return (
                      <Link
                        href={
                          validate()
                            ? "#"
                            : "/academies/greenkidsacademy/view/" + e.slug
                        }
                      >
                        <div
                          className={cn(
                            " bg-green-600/10 text-primary text-sm  relative overflow-hidden rounded-xl p-5 hover:shadow-md border-2 border-green-600/10  shadow-green-450/50 transition-all flex flex-col justify-start items-start gap-2",
                            validate() &&
                              "cursor-not-allowed bg-gray-200 text-gray-600 border-gray-300 opacity-50"
                          )}
                          key={i}
                        >
                          {validate() && (
                            <div className="absolute top-0 right-0 w-full h-full z-0  p-5 flex justify-center items-center">
                              <p className=" font-semibold text-red-600 -rotate-12 bg-red-300/20 border-2  border-red-300 px-6 py-2 rounded-lg opacity-100  relative text-sm backdrop-blur-sm  block">
                                {isFull
                                  ? "Registration Full"
                                  : "Registration Closed"}
                              </p>
                            </div>
                          )}
                          <div className="flex justify-between items-center gap-2 mb-2">
                            <p className="text-xs font-bold bg-primary px-3 py-1 rounded-md text-white shadow-sm">
                              {e.pricing.toUpperCase()}
                            </p>
                            {e.amount > 0 && (
                              <p className="text-xs font-bold bg-white text-primary px-3 py-1 rounded-md  shadow-sm">
                                {e.amount} OMR
                              </p>
                            )}
                          </div>

                          <div className=" flex justify-start items-center gap-2 font-bold">
                            <div className="w-4">
                              <BiCategory />
                            </div>
                            <p>{e.title}</p>
                          </div>
                          <div className=" flex justify-start items-center gap-2 ">
                            <div className="w-4">
                              <FaRegHeart />
                            </div>
                            <p>{e.languge}</p>
                          </div>
                          <div className=" flex justify-start items-center gap-2">
                            <div className="w-4">
                              <MdOutlineLocationOn />
                            </div>
                            <p className="line-clamp-1">
                              {e.locationType == "offline"
                                ? e.location
                                : "Online"}
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="flex md:justify-start md:items-start gap-3 mt-6 justify-center items-center md:gap-4">
                  {academics.links.map((e, i) => {
                    return (
                      <Link href={e.linkUrl} key={i}>
                        <Button
                          className={
                            i % 2
                              ? `${lora.className} text-md py-[20px] md:w-auto w-full  px-6 rounded-full  border-2 border-main bg-transparent text-main hover:text-white`
                              : `${lora.className} text-md py-[20px] md:w-auto w-full  px-6 rounded-full donateBtn border-none`
                          }
                        >
                          {e.linkText}
                        </Button>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default OurSponsor;
