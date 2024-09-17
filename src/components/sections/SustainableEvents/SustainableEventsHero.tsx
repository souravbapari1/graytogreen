import { montserrat } from "@/fonts/font";
import Link from "next/link";
import React from "react";

function SustainableEventsHero() {
  return (
    <div className="w-full md:h-[70vh] min-h-[400px] h-[50vh] z-20 relative bg-[url('https://dyvdnmp0itmzz.cloudfront.net/wp-content/uploads/2021/09/08095516/Event-in-Clore-Learning-Space-by-Graham-Lacdao-1500x998.jpg')] bg-cover bg-no-repeat bg-center ">
      <div className="w-full h-full bg-black/50 absolute top-0 right-0"></div>
      <div className="container relative flex justify-end md:pb-36 pb-16 items-center z-10 h-full flex-col text-xl text-white">
        <h1
          className={`md:text-5xl text-3xl  font-bold mb-5 text-center ${montserrat.className}`}
        >
          Sustainable Events
        </h1>
        <p className="max-w-[900px] text-center lg:text-xl text-sm ">
          Make your conference more sustainable by reducing and compensating
          your emissions, & inviting one of our young climate-speakers.
        </p>
      </div>
    </div>
  );
}

export default SustainableEventsHero;
