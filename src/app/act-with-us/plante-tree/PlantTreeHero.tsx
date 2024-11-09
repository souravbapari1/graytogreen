import { montserrat } from "@/fonts/font";
import React from "react";
import { PlantTree, PlantTreeData } from "./palntTree";
import { strApi } from "@/graphql/client";

function PlantTreeHero({ data }: { data?: PlantTree["banner"] }) {
  if (!data) {
    return <></>;
  }
  return (
    <div
      style={{ backgroundImage: `url(${strApi + data.bannerImage.url})` }}
      className="w-full md:h-[70vh] min-h-[400px] h-[50vh] z-20 relative  bg-cover bg-no-repeat bg-center "
    >
      <div className="w-full h-full bg-black/50 absolute top-0 right-0"></div>
      <div className="container relative flex justify-end md:pb-36 pb-16 items-center z-10 h-full flex-col text-xl text-white">
        <h1
          className={`md:text-5xl text-2xl  font-bold mb-5 text-center ${montserrat.className}`}
          dangerouslySetInnerHTML={{ __html: data.title || "" }}
        />
        <p
          className="md:text-3xl text-center"
          dangerouslySetInnerHTML={{ __html: data.description || "" }}
        />
      </div>
    </div>
  );
}

export default PlantTreeHero;
