import { montserrat } from "@/fonts/font";
import React from "react";
import ResearchCard from "./ResearchCard";
import Link from "next/link";

function OngoingResearch() {
  return (
    <div className="bg-green-50/50 w-full  shadow-md py-20 mt-10">
      <div className="container gap-10 ">
        <h1
          className={`${montserrat.className} md:text-4xl text-3xl text-center font-bold `}
        >
          <span className="text-main">Ongoing</span> Research
        </h1>
        <div
          className={`flex justify-center items-center md:gap-6 gap-3 ${montserrat.className} mt-10 md:text-base text-sm font-bold`}
        >
          {["Active", "Completed", "Restoration", "Planting"].map((e) => (
            <p className={`${e == "Active" ? "underline text-main" : null}`}>
              {e}
            </p>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 gap-y-5 mt-10">
          {Array.from({ length: 6 }).map(() => {
            return <ResearchCard />;
          })}
        </div>
        <div className="w-full flex justify-center items-center pt-10">
          <Link href="#" className="donateBtn py-4">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OngoingResearch;
