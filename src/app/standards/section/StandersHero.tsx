import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Standard } from "../standerds";
import { strApi } from "@/graphql/client";

function StandersHero({ data }: { data?: Standard["banner"] }) {
  if (!data) {
    return <></>;
  }
  return (
    <div
      style={{ backgroundImage: `url(${strApi + data.bannerImage.url})` }}
      className="w-full md:h-[70vh] min-h-[400px]  z-20 relative bg-cover bg-no-repeat bg-center "
    >
      <div className="w-full h-full bg-black/50 absolute top-0 right-0"></div>
      <div
        className={`${montserrat.className} container gap-4 relative flex justify-center  pt-10 pb-6 items-start z-10 h-full flex-col text-xl text-white`}
      >
        <h1 className="md:text-3xl text-xl font-bold">{data.title}</h1>
        <div
          className="md:text-xl flex flex-col gap-4 text-xs"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>
    </div>
  );
}

export default StandersHero;
