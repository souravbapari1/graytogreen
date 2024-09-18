import { montserrat } from "@/fonts/font";
import Image from "next/image";
import React from "react";
const donations = [
  {
    company: "PJM Investment Akademie GmbH",
    trees: 1,
  },
  {
    company: "Firma Waterkamp",
    trees: 100,
  },
  {
    company: "Albin Social",
    trees: 616,
  },
  {
    company: "Albin Social",
    trees: 636,
  },
  {
    company: "Albin Social",
    trees: 640,
  },
  {
    company: "PJM Investment Akademie GmbH",
    trees: 1,
  },
  {
    company: "PJM Investment Akademie GmbH",
    trees: 3,
  },
  {
    company: "PJM Investment Akademie GmbH",
    trees: 1,
  },
  {
    company: "PJM Investment Akademie GmbH",
    trees: 3,
  },
  {
    company: "PJM Investment Akademie GmbH",
    trees: 3,
  },
];

function StatisticsAndRecords() {
  return (
    <div className="relative z-20">
      <div className={`${montserrat.className} container py-20 z-10  pb-40`}>
        <h1 className="md:text-4xl text-2xl font-bold text-center">
          Statistics and Records
        </h1>
        <div className="flex justify-center mt-10 w-full items-center flex-col gap-6">
          <div className="flex justify-center items-center gap-8 md:mb-4 font-semibold select-none">
            <p className="border-b-2 border-main text-main cursor-pointer">
              Most Recent
            </p>
            <p className="cursor-pointer">Most Trees</p>
          </div>
          <div className="max-w-[600px] w-full">
            {donations.map((e, i) => {
              return (
                <div
                  className="flex justify-between items-center py-4 border-b md:text-base text-sm"
                  key={i}
                >
                  <p className="font-bold text-gray-800">{e.company}</p>
                  <p className="font-semibold text-main">
                    {e.trees.toFixed(2)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Image
        src="/icons/Trees.svg"
        width={2000}
        height={2000}
        alt=""
        className="lg:w-72 md:w-52 w-20 h-auto absolute left-0 bottom-0 -z-[1]"
      />
      <Image
        src="/icons/Person.svg"
        width={2000}
        height={2000}
        alt=""
        className="lg:w-72 md:w-52 w-20 h-auto right-0 bottom-0 absolute -z-[1]"
      />
    </div>
  );
}

export default StatisticsAndRecords;
