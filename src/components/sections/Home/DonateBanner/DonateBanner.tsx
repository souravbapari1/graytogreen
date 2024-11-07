import { HomePage, HomePages } from "@/app/homePage";
import { Button } from "@/components/ui/button";
import { lora, montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

function DonateBanner({
  data,
  cardData,
}: {
  data?: HomePage["actionSpeaks"];
  cardData?: HomePage["listCardView"];
}) {
  return (
    <div className="">
      {data && (
        <div
          className=" mt-10 w-full bg-gradient-to-r from-green-500 to-emerald-700 relative mb-10
      "
        >
          <div className=" grid md:order-1 order-last lg:grid-cols-2 md:gap-16 gap-10 container py-10">
            <iframe
              width="560"
              height="315"
              src={"https://www.youtube.com/embed/" + data.videoId}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full lg:h-96 h-52 rounded-3xl object-cover"
            ></iframe>
            <div className="flex flex-col gap-5 justify-center">
              <h1
                className={`${montserrat.className} uppercase md:text-3xl text-2xl text-white font-bold`}
              >
                {data.title}
              </h1>
              <p className="text-white/80 md:text-lg">{data.description}</p>
              <div className="flex justify-start items-center md:flex-row flex-col gap-10 mt-3">
                <Button
                  className={`${lora.className} text-xl py-[24px] md:w-auto w-full  px-8 rounded-full bg-green-500 shadow-none border-none`}
                >
                  Act Now
                </Button>
                <Link
                  href="#"
                  className="  text-white flex md:justify-start justify-center items-center"
                >
                  Explore reforestation projects{" "}
                  <RiArrowDropRightLine size={35} />
                </Link>
              </div>
            </div>
          </div>
          <Image
            src="/assets/yucatan_bush.svg"
            className="absolute w-36 ml-28 -mt-10"
            width={1200}
            height={1200}
            alt=""
          />
        </div>
      )}

      {cardData && (
        <div>
          {cardData.map((e, i) => {
            return (
              <div
                className="container grid lg:grid-cols-2 gap-10 mt-12 "
                key={e.id}
              >
                <div
                  className={cn(
                    "md:text-left text-center md:mt-20 ",
                    e.align == "right" && "order-2"
                  )}
                >
                  <h1
                    className={`${montserrat.className} font-extrabold uppercase lg:text-3xl text-xl`}
                    dangerouslySetInnerHTML={{
                      __html: e.title,
                    }}
                  />
                  <p className="md:text-lg  mt-5">{e.description}</p>
                  <Link
                    href={e.linkUrl}
                    className="capitalize font-bold text-main mt-5 flex md:justify-start justify-center items-center"
                  >
                    {e.linkText}
                    <RiArrowDropRightLine size={35} />
                  </Link>
                </div>

                <div className="relative md:p-10 flex justify-center items-center order-1">
                  <div className="w-[90%] h-48 md:h-[320px] bg-green-700/20 absolute -z-[1] lg:ml-12 ml-10 rounded-2xl mb-10"></div>
                  <Image
                    src={strApi + e.image.url}
                    width={1200}
                    height={1200}
                    alt=""
                    className="md:w-full w-[90%]  md:h-[320px]  rounded-2xl object-cover h-48  "
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DonateBanner;
