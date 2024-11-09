import { montserrat } from "@/fonts/font";
import React from "react";
import { PiPlantFill } from "react-icons/pi";
import ExperienceSlider from "./ExperienceSlider";
import { SustainableYouthAcademy } from "./SustainableYouthAcademy";

function YouthAcademyWahtYouExperience({
  data,
}: {
  data?: SustainableYouthAcademy["Experience"];
}) {
  if (!data) {
    return <></>;
  }
  return (
    <div className="container relative">
      <div className="flex text-main items-center gap-3 mb-4">
        <PiPlantFill />
        <p className={`${montserrat.className} text-sm font-semibold`}>
          {data.sortTitle}
        </p>
      </div>
      <h1
        className={`lg:text-3xl max-w-[600px] text-xl text-gray-900 lg:mb-10 mb-5 font-bold ${montserrat.className}`}
      >
        {data.title}
      </h1>
      <ExperienceSlider data={data.experienceCard} />
    </div>
  );
}

export default YouthAcademyWahtYouExperience;
