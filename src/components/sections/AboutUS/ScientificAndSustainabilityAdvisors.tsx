import { Button } from "@/components/ui/button";
import { lora, montserrat } from "@/fonts/font";
import Image from "next/image";
import React from "react";

function ScientificAndSustainabilityAdvisors() {
  return (
    <div className="w-full   bg-gradient-to-br from-[rgba(160,249,138,0.2)] via-[rgba(219,255,213,0)] to-[rgba(187,249,138,0.2)] mt-20 py-10">
      <div className="container flex justify-center items-center flex-col">
        <h1
          className={`${montserrat.className} text-4xl font-bold text-center`}
        >
          <span className="text-main">Scientific</span> And{" "}
          <span className="text-main">Sustainability</span> Advisors
        </h1>
        <p className="text-center text-xl max-w-[800px] mt-2 ">
          The Plant-for-the-Planet Foundation partners with organizations in
          Czech Republic, Spain, Switzerland, Mexico, Italy, and Brazil. There
          are further activities in many other countries.
        </p>

        <div className="grid lg:grid-cols-3 gap-10 mt-10 lg:px-20">
          {Array.from({ length: 6 }).map((_, i) => {
            return (
              <div className="flex flex-col justify-center items-center text-center">
                <div className="">
                  <div className=" bg-gradient-to-r from-green-600 to-green-900 p-3 rounded-full">
                    <Image
                      src={"https://i.pravatar.cc/145" + i}
                      height={3000}
                      alt=""
                      width={3000}
                      className=" object-cover rounded-full w-80 h-80  border-main"
                    />
                  </div>
                </div>
                <h1 className="text-2xl font-bold mt-8 mb-3">Chiagozie Udeh</h1>
                <p>
                  Chairman of the Foundation Council of the Plant-for-the-Planet
                  Foundation
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ScientificAndSustainabilityAdvisors;
