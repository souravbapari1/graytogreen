import { montserrat } from "@/fonts/font";

import Image from "next/image";
import React from "react";
import { PiInstagramLogoFill } from "react-icons/pi";

import { FaLinkedinIn } from "react-icons/fa";
const categories = [
  "All",
  "Paris",
  "Oman",
  "Dubai",
  "Delhi",
  "Mumbai",
  "Kolkata",
  "Bangalore",
];

function AboutOurAmbassadors() {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-40 container">
      <h1
        className={`${montserrat.className} text-2xl lg:text-4xl font-bold text-center capitalize`}
      >
        our <span className="text-main"> Ambassadors</span>
      </h1>
      <p className="text-center  text-md max-w-[800px] mt-8 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex justify-center items-center gap-5 gap-x-10 mt-10 flex-wrap  ">
        {categories.map((e, i) => {
          return (
            <p
              className={`${montserrat.className} ${
                i == 0 ? "underline text-main" : null
              } lg:text-base text-xs font-bold hover:underline text-gray-600 text-nowrap underline-offset-1 under cursor-pointer`}
            >
              {e}
            </p>
          );
        })}
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2   gap-8 mt-24">
        {Array.from({ length: 8 }).map((e, i) => {
          return (
            <div className="">
              <Image
                src={"https://i.pravatar.cc/1039" + i}
                width={3200}
                height={3200}
                alt=""
                className="w-full md:h-[420px] bg-gray-100 h-[300px] object-cover rounded-3xl"
              />
              <div className="flex justify-between py-6  px-2">
                <div className="">
                  <p className="font-bold text-xl">Shopia Mun</p>
                  <p>Founder & Ceo</p>
                </div>
                <div className="flex text-xl flex-row gap-4 text-gray-300 ">
                  <PiInstagramLogoFill className="hover:text-gray-900" />
                  <FaLinkedinIn className="hover:text-gray-900" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutOurAmbassadors;
