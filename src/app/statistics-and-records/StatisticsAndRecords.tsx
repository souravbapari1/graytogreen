"use client";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import React, { useState } from "react";
import CouminityDonationList from "../account/my-forest/_components/CouminityDonationList";
import { cn } from "@/lib/utils";
import CouminityCo2Save from "../account/my-forest/_components/CommunityCo2Save";

function StatisticsAndRecords() {
  const [tab, settab] = useState(0);
  return (
    <div className="relative z-20">
      <div
        className={`${montserrat.className} container py-20 z-10  pb-40 select-none`}
      >
        <h1 className="md:text-4xl text-2xl font-bold text-center">
          Statistics and Records
        </h1>
        <div className="flex justify-center mt-10 w-full items-center flex-col gap-6">
          <div className="flex justify-center items-center gap-8 md:mb-2 font-semibold select-none">
            <p
              className={cn(
                "border-b-2  cursor-pointer border-white",
                tab === 0 && "border-b-2  border-main text-main"
              )}
              onClick={() => settab(0)}
            >
              Most recent
            </p>
            <p
              onClick={() => settab(1)}
              className={cn(
                "border-b-2  cursor-pointer border-white",
                tab === 1 && "border-b-2  border-main text-main"
              )}
            >
              Most Co2 Save
            </p>
          </div>
          <div className="max-w-[600px] w-full">
            {/* {donations.map((e, i) => {
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
            })} */}
            {tab == 0 && <CouminityDonationList />}
            {tab == 1 && <CouminityCo2Save />}
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
