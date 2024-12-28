"use client";
import Carousel from "react-multi-carousel";

import React from "react";
import { MdRecycling } from "react-icons/md";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import { PiPlantFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ResearchesLabData } from "@/app/academies/researches-labs/ResearchesLabs";
import { strApi } from "@/graphql/client";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function ApplyResearchPrograms({
  data,
  labs,
}: {
  data?: ResearchesLabData["researchesLabs"][0]["challenges"];
  labs?: ResearchesLabData["researchLabsPrograms"];
}) {
  if (!data) {
    return <></>;
  }
  return (
    <div className="container mt-24 mb-24">
      <div className="flex text-main items-center gap-3 mb-4">
        <PiPlantFill />
        <p
          className={`${montserrat.className} text-sm font-semibold`}
          dangerouslySetInnerHTML={{ __html: data.sortTitle || "" }}
        />
      </div>
      <h1
        className={`lg:text-3xl max-w-[600px] text-xl text-gray-900 lg:mb-10 mb-5 font-bold ${montserrat.className}`}
        dangerouslySetInnerHTML={{ __html: data.title || "" }}
      />
      <Carousel responsive={responsive} itemClass="md:px-6 ">
        {labs?.map((e, i) => {
          return (
            <div
              className="md:h-auto relative bg-green-900/5 md:p-8 p-6 select-none"
              key={e.documentId}
            >
              <div className="bg-main w-16 h-16 flex justify-center items-center text-white rounded-full">
                <Image
                  src={strApi + e.icon.url}
                  alt=""
                  width={1200}
                  height={1200}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className={`${montserrat.className} mt-5`}>
                <h3 className="font-bold text-xl mb-2">{e.title}</h3>
                <p
                  className={` text-xs text-gray-500 max-w-[400px]`}
                  dangerouslySetInnerHTML={{ __html: e.description || "" }}
                />
              </div>
              <Image
                className="mt-5 w-full h-40 object-cover  "
                src={strApi + e.image.url}
                alt=""
                width={1200}
                height={2000}
              />
              <Link href={"/academies/researches-labs/apply/" + e.documentId}>
                <Button
                  className={`${montserrat.className} w-full rounded-none mt-0 h-10`}
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default ApplyResearchPrograms;
