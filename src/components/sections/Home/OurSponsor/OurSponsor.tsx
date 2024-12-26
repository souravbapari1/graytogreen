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
              <div className="relative md:p-10 flex justify-center items-center">
                <div className="w-[90%] h-48 md:h-[320px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
                <Image
                  src={strApi + academics.image.url}
                  width={1200}
                  height={1200}
                  alt=""
                  className="md:w-full w-[90%]  md:h-[320px]  rounded-2xl object-cover h-48  "
                />
              </div>
              <div className="md:text-left text-center md:mt-5">
                <h1
                  className={`${montserrat.className} font-extrabold uppercase lg:text-3xl text-2xl`}
                  dangerouslySetInnerHTML={{ __html: academics.title }}
                />
                <p className="  mt-4 ">{academics.description}</p>
                <Link
                  href="#"
                  className="uppercase font-bold text-main mt-3 text-sm flex md:justify-start justify-center items-center"
                >
                  Learn More About Our Vision <RiArrowDropRightLine size={35} />
                </Link>
                <div className="grid md:grid-cols-2 gap-4 md:mt-2 mt-4 ">
                  {Array.from({ length: 2 }).map((_, i) => {
                    return (
                      <div
                        className=" bg-green-50/50  rounded-xl p-5 shadow-md shadow-green-50/20 transition-all flex flex-col justify-start items-start gap-2"
                        key={i}
                      >
                        <p className="font-semibold text-green-950">
                          RiArrowDropRightLine
                        </p>
                        <div className=" flex justify-start items-center gap-2">
                          <BiCategory />
                          <p>2024-11-10</p>
                        </div>
                        <div className=" flex justify-start items-center gap-2">
                          <FaRegHeart />
                          <p>21508, Gelenary,DE</p>
                        </div>
                        <div className=" flex justify-start items-center gap-2">
                          <MdOutlineLocationOn />
                          <p>MdOutlineLocationOn</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex md:justify-start md:items-start gap-3 mt-6 justify-center items-center md:gap-4">
                  <Button
                    className={`${lora.className} text-xl py-[24px] md:w-auto w-full  px-8 rounded-full donateBtn border-none`}
                  >
                    Join US
                  </Button>
                  <Button
                    className={`${lora.className} text-xl py-[22px] md:w-auto w-full  px-7 rounded-full  border-2 border-main bg-transparent text-main hover:text-white`}
                  >
                    Ideas & Tools
                  </Button>
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
