import {
  SustainableEvent,
  SustainableEventData,
} from "@/app/sustainable-events/SustainableEventsData";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import Link from "next/link";
import React from "react";

function SustainableEventsHero({
  data,
}: {
  data?: SustainableEvent["headerBanner"];
}) {
  if (!data) {
    return <></>;
  }

  return (
    <div
      style={{ backgroundImage: `url(${strApi + data.bannerImage.url})` }}
      className="w-full md:h-[70vh] min-h-[400px] h-[50vh] z-20 relative bg-cover bg-no-repeat bg-center "
    >
      <div className="w-full h-full bg-black/50 absolute top-0 right-0"></div>
      <div className="container relative flex justify-end md:pb-36 pb-16 items-center z-10 h-full flex-col text-xl text-white">
        <h1
          className={`md:text-5xl text-3xl  font-bold mb-5 text-center ${montserrat.className}`}
        >
          {data.title}
        </h1>
        <p className="max-w-[900px] text-center lg:text-xl text-sm ">
          {data.description}
        </p>
      </div>
    </div>
  );
}

export default SustainableEventsHero;
