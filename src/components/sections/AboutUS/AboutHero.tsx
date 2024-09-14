import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

function AboutHero() {
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src="/assets/Lingkaran.svg"
        alt="roubd"
        height={2000}
        width={2000}
        className="w-64 h-64 absolute left-0 -ml-24 mt-40"
      />

      <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 container mt-10">
        <div className="">
          <h1
            className={montserrat.className + " lg:text-5xl text-3xl font-bold"}
          >
            About Grey to <span className="text-main">Green</span> Organization
          </h1>
          <p className={montserrat.className + " lg:text-2xl mt-10 mb-8"}>
            <span className="text-main">Grey to Green</span> is a global
            movement to restore forest ecosystems to tackle the climate crisis
            and biodiversity loss. To do so, we 
            <span className="text-main">
              empower young people, restore ecosystems, conduct restoration
              research, provide free software tools
            </span>
             and <span className="text-main">restoration advice</span> for
            organizations around the world. <br />
            <br /> We believe that we need to protect the world’s three trillion
            trees and 
            <span className="text-main">
              bring back a further one trillion trees.
            </span>
            <br />
            <br />
            Grey to Green t is a network of independent organisations united by
            a common vision.
          </p>
        </div>
        <div className="">
          <div className="relative md:p-10 flex justify-center items-center">
            <div className="w-[90%] h-48 md:h-[480px] bg-green-700/20 absolute -z-[1] lg:-mr-12 -mr-10 rounded-2xl mb-10"></div>
            <Image
              src="https://www.plant-for-the-planet.org/wp-content/uploads/2020/12/20190919_ac_curitiba_19-scaled.jpg"
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[480px]  rounded-2xl object-cover h-48  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
