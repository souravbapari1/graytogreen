import { montserrat } from "@/fonts/font";
import React from "react";
import { PiPlantFill } from "react-icons/pi";
import ExperienceSlider from "./ExperienceSlider";

function YouthAcademyWahtYouExperience() {
  return (
    <div className="container relative">
      <div className="flex text-main items-center gap-3 mb-4">
        {" "}
        <PiPlantFill />
        <p className={`${montserrat.className} text-sm font-semibold`}>
          Learn Something New
        </p>
      </div>
      <h1
        className={`lg:text-3xl max-w-[600px] text-xl text-gray-900 lg:mb-10 mb-5 font-bold ${montserrat.className}`}
      >
        What will Experience
      </h1>
      <ExperienceSlider />
    </div>
  );
}

export default YouthAcademyWahtYouExperience;
