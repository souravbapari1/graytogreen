import { montserrat } from "@/fonts/font";
import React from "react";
const starts = [
  {
    title: "Number of Projects",
    value: 85,
  },
  {
    title: "Restored Hectares",
    value: 14,
  },
  {
    title: "Number of Trees",
    value: 10,
  },
  {
    title: "Number of Ambassadors",
    value: 85,
  },
  {
    title: "CO2 Offset (ton/year)",
    value: 14,
  },
  {
    title: "Air Quality (ton/year)",
    value: 10,
  },
  {
    title: "CO2 Restored",
    value: 85,
  },
  {
    title: "Number of Lost Trees",
    value: 14,
  },
];
function StatisticsCount() {
  return (
    <div
      className={` w-full donateBtn rounded-none shadow-none py-20 ${montserrat.className}`}
    >
      <div className="container grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-10 md:gap-y-20  text-center">
        {starts.map((e, i) => {
          return (
            <div
              className="w-full   rounded-3xl    flex justify-center items-center flex-col gap-5"
              key={i}
            >
              <h1 className={`text-6xl font-bold text-white`}>{e.value}</h1>
              <p className="capitalize text-xl font-semibold text-white/50">
                {e.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StatisticsCount;
