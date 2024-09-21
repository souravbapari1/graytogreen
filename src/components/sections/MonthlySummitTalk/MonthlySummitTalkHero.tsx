import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function MonthlySummitTalkHero() {
  return (
    <div className="bg-green-50/50 lg:py-3  py-5 w-full h-full">
      <div className="lg:h-screen lg:max-h-[550px]  container grid lg:grid-cols-2 gap-10">
        <div className="h-full flex justify-center flex-col gap-6">
          <h1
            className={`${montserrat.className} text-4xl font-bold md:mt-0 mt-10 `}
          >
            Welcome to the <br /> Monthly Summit Talks!
          </h1>
          <p>
            Join us for a dynamic series of monthly online sessions designed to
            empower young climate activists like you to drive meaningful change
            in our world.
          </p>
        </div>
        <div className="flex items-center justify-center md:mt-0 mt-10 md:mb-0 mb-8">
          <div className="relative md:p-10  flex  items-center justify-center">
            <div className="w-[90%] h-60 md:h-[360px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
            <Image
              src="https://www.ace-ed.org/wp-content/uploads/2022/02/Capture-2.jpg"
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[360px]  rounded-2xl object-cover h-60  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonthlySummitTalkHero;
