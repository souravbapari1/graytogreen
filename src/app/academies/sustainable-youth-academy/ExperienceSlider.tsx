"use client";
import Carousel from "react-multi-carousel";

import React from "react";
import { MdRecycling } from "react-icons/md";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import { MonthlySummitTalk } from "@/app/monthly-summit-talk/mst";
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

function ExperienceSlider({
  data,
}: {
  data?: MonthlySummitTalk["experience"]["experienceCard"] | any[];
}) {
  if (!data) {
    return <></>;
  }
  return (
    <div>
      <Carousel
        responsive={responsive}
        itemClass="md:px-6 "
        autoPlay={true}
        infinite
      >
        {data?.map((e, i) => {
          return (
            <div
              className=" relative bg-green-900/5 md:p-10 p-8 select-none"
              key={e.id}
            >
              <div className="bg-main w-16 h-16 flex justify-center items-center text-white rounded-full">
                <Image
                  src={strApi + e.topImage.url}
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
                  dangerouslySetInnerHTML={{ __html: e.description }}
                />
              </div>
              <Image
                className="mt-5 w-full object-cover  h-40"
                src={strApi + e.image.url}
                alt=""
                width={1200}
                height={2000}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default ExperienceSlider;
