import Marquee from "react-fast-marquee";

import { lora, montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { Button } from "@/components/ui/button";

function OurPartners() {
  return (
    <div className={` ${montserrat.className} container overflow-hidden`}>
      <h1 className="md:text-5xl text-3xl md:mt-16 mt-10 font-extrabold text-center">
        Our <span className="text-main ">Partners</span>
      </h1>
      <Marquee className="">
        <div className="flex  justify-center md:mt-14 mt-5 md:mb-20 items-center ">
          {[
            "https://www.savatree.com/wp-content/uploads/2021/10/savatree-mobile-500.png",
            "https://livelihoods.eu/wp-content/uploads/2017/03/HD-LOGO-LIVELIHOODS-FUNDS-HORIZONTAL.png",
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Tropicana_green_flat_logo.svg/800px-Tropicana_green_flat_logo.svg.png",
            "https://cdn.shopify.com/s/files/1/0582/8457/2829/files/fft_logo_1.png?v=1634643664",
            "https://www.savatree.com/wp-content/uploads/2021/10/savatree-mobile-500.png",
            "https://livelihoods.eu/wp-content/uploads/2017/03/HD-LOGO-LIVELIHOODS-FUNDS-HORIZONTAL.png",
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Tropicana_green_flat_logo.svg/800px-Tropicana_green_flat_logo.svg.png",
            "https://www.savatree.com/wp-content/uploads/2021/10/savatree-mobile-500.png",
            "https://livelihoods.eu/wp-content/uploads/2017/03/HD-LOGO-LIVELIHOODS-FUNDS-HORIZONTAL.png",
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Tropicana_green_flat_logo.svg/800px-Tropicana_green_flat_logo.svg.png",
            "https://cdn.shopify.com/s/files/1/0582/8457/2829/files/fft_logo_1.png?v=1634643664",
            "https://www.savatree.com/wp-content/uploads/2021/10/savatree-mobile-500.png",
            "https://livelihoods.eu/wp-content/uploads/2017/03/HD-LOGO-LIVELIHOODS-FUNDS-HORIZONTAL.png",
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Tropicana_green_flat_logo.svg/800px-Tropicana_green_flat_logo.svg.png",
          ].map((e, i) => {
            return (
              <Image
                src={e}
                key={i}
                alt=""
                className="w-28 h-28 object-contain md:mx-10  mx-5"
                width={100}
                height={100}
              />
            );
          })}
        </div>
      </Marquee>
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="grid lg:grid-cols-2 gap-10 mt-12">
          <div className="relative md:p-10 flex justify-center items-center">
            <div className="w-[90%] h-48 md:h-[480px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
            <Image
              src="https://www.plant-for-the-planet.org/wp-content/uploads/2020/12/20190919_ac_curitiba_19-scaled.jpg"
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[480px]  rounded-2xl object-cover h-48  "
            />
          </div>
          <div className="md:text-left text-center md:mt-5">
            <h1
              className={`${montserrat.className} font-extrabold uppercase lg:text-5xl text-2xl`}
            >
              Why we need to be <br /> more{" "}
              <span className="text-main">sustianable</span>
            </h1>
            <p className="md:text-xl  mt-5">
              The world currently has three trillion trees and has space for a
              trillion more. Trees are one of the most powerful tools that buy
              us time in the fight against the climate crisis. Only by restoring
              these forests, we will be able to keep temperature rise below
              1.5°C.
            </p>
            <Link
              href="#"
              className="uppercase font-bold text-main mt-5 flex md:justify-start justify-center items-center"
            >
              Learn More About Our Vision <RiArrowDropRightLine size={35} />
            </Link>
            <div className="grid md:grid-cols-2 gap-4 md:mt-6 mt-4 ">
              {Array.from({ length: 2 }).map((_, i) => {
                return (
                  <div
                    className=" bg-green-50/50  rounded-xl p-7 shadow-md shadow-green-50/20 transition-all flex flex-col justify-start items-start gap-2"
                    key={i}
                  >
                    <p className="font-semibold text-green-950">
                      RiArrowDropRightLine
                    </p>
                    <div className=" flex justify-start items-center gap-2">
                      <BiCategory />
                      <p>2024-11-10</p>
                    </div>
                    <div className=" flex justify-start items-center gap-2">
                      <FaRegHeart />
                      <p>21508, Gelenary,DE</p>
                    </div>
                    <div className=" flex justify-start items-center gap-2">
                      <MdOutlineLocationOn />
                      <p>MdOutlineLocationOn</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex md:justify-start md:items-start gap-3 mt-6 justify-center items-center md:gap-4">
              <Button
                className={`${lora.className} text-xl py-[24px] md:w-auto w-full  px-8 rounded-full donateBtn border-none`}
              >
                Join US
              </Button>
              <Button
                className={`${lora.className} text-xl py-[22px] md:w-auto w-full  px-7 rounded-full  border-2 border-main bg-transparent text-main hover:text-white`}
              >
                Ideas & Tools
              </Button>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 mt-12">
          <div className="md:text-left text-center md:mt-5">
            <h1
              className={`${montserrat.className} font-extrabold uppercase lg:text-3xl text-xl`}
            >
              Climate Justice Ambassadors: <br />
              <span className="text-main">We Make Ourselves Heard</span>
            </h1>
            <p className="md:text-xl  mt-5">
              Over 100,273 children and youth have already been trained at 1,866
              academies in 76 countries, where we teach each other about the
              climate crisis. As Climate Justice Ambassadors we fight for our
              future by planting trees, giving speeches, protesting, and much
              more.
            </p>
            <Link
              href="#"
              className="capitalize font-bold text-main mt-5 flex md:justify-start justify-center items-center"
            >
              Learn More About Our Academics <RiArrowDropRightLine size={35} />
            </Link>
          </div>

          <div className="relative md:p-10 flex justify-center items-center">
            <div className="w-[90%] h-48 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:ml-12 ml-10 rounded-2xl mb-10"></div>
            <Image
              src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/06/Trillion-Trees-Map.jpg"
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[380px]  rounded-2xl object-cover h-48  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPartners;
