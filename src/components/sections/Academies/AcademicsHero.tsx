import { montserrat } from "@/fonts/font";
import React from "react";

function AcademicsHero() {
  return (
    <div className="w-full md:h-[80vh] min-h-[400px] h-[50vh] z-20 relative bg-[url('https://www.plant-for-the-planet.org/wp-content/uploads/2020/12/20190919_ac_curitiba_19-scaled.jpg')] bg-cover bg-no-repeat bg-center ">
      <div className="w-full h-full bg-black/50 absolute top-0 right-0"></div>
      <div className="container relative flex justify-end md:pb-36 pb-16 items-center z-10 h-full flex-col text-xl text-white">
        <h1
          className={`md:text-5xl text-3xl  font-bold mb-5 text-center ${montserrat.className}`}
        >
          Become an Climate Change Ambassador
        </h1>
        <p className="max-w-[900px] text-center lg:text-xl text-sm ">
          Only talking won't stop glaciers from melting! Everyone is talking
          about the climate crisis. But what is actually happening there? And
          what can we children do about it?
        </p>
      </div>
    </div>
  );
}

export default AcademicsHero;
