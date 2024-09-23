"use client";
import Carousel from "react-multi-carousel";

import React from "react";
import { MdRecycling } from "react-icons/md";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function ExperienceSlider() {
  return (
    <div>
      <Carousel responsive={responsive} itemClass="md:px-6 ">
        {Array.from({ length: 5 }).map((e, i) => {
          return (
            <div className="md:h-[510px] relative bg-green-900/5 md:p-10 p-8 select-none">
              <div className="bg-main w-16 h-16 flex justify-center items-center text-white rounded-full">
                <MdRecycling size={30} />
              </div>
              <div className={`${montserrat.className} mt-5`}>
                <h3 className="font-bold text-xl mb-2">Lorem, ipsum.</h3>
                <p className={` text-xs text-gray-500 max-w-[400px]`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  exercitationem numquam quasi necessitatibus, veniam ea Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Atque
                  exercitationem numquam quasi necessitatibus, veniam ea
                </p>
              </div>
              <Image
                className="mt-5 w-full object-cover  "
                src="https://images.unsplash.com/photo-1491838592561-ab572ec2d2cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                width={1200}
                height={2000}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default ExperienceSlider;
