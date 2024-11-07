import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import React from "react";

function EndowmentHero({
  bannerImage,
  desc,
  title,
}: {
  bannerImage?: string;
  title?: string;
  desc?: string;
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${strApi + bannerImage})`,
      }}
      className="w-full md:h-[70vh] min-h-[400px] h-[50vh] z-20 relative  bg-cover bg-no-repeat bg-center "
    >
      <div className="w-full h-full bg-black/50 absolute top-0 right-0"></div>
      <div className="container relative flex justify-end md:pb-36 pb-16 items-center z-10 h-full flex-col text-xl text-white">
        <h1
          className={`md:text-5xl text-2xl  font-bold mb-5 text-center ${montserrat.className}`}
        >
          {title}
        </h1>
        <p className="md:text-3xl text-center">{desc}</p>
      </div>
    </div>
  );
}

export default EndowmentHero;
