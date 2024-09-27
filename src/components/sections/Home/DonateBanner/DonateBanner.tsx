import { Button } from "@/components/ui/button";
import { lora, montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

function DonateBanner() {
  return (
    <div className="">
      <div
        className=" mt-10 w-full bg-gradient-to-r from-green-500 to-emerald-700 relative mb-10
      "
      >
        <div className=" grid md:order-1 order-last lg:grid-cols-2 md:gap-16 gap-10 container py-10">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zFmeeMZioio?si=VCJ45jaB0xb5Y9h5"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full lg:h-96 h-52 rounded-3xl object-cover"
          ></iframe>
          <div className="flex flex-col gap-5 justify-center">
            <h1
              className={`${montserrat.className} uppercase md:text-3xl text-2xl text-white font-bold`}
            >
              Where action speaks
            </h1>
            <p className="text-white/80 md:text-lg">
              On the Yucatán Peninsula and the state of Mexico, we are restoring
              forests to fight the climate crisis. Forest restoration generates
              jobs, protects biodiversity, and absorbs the greenhouse gas CO2.
            </p>
            <div className="flex justify-start items-center md:flex-row flex-col gap-10 mt-3">
              <Button
                className={`${lora.className} text-xl py-[24px] md:w-auto w-full  px-8 rounded-full bg-green-500 shadow-none border-none`}
              >
                Act Now
              </Button>
              <Link
                href="#"
                className="  text-white flex md:justify-start justify-center items-center"
              >
                Explore reforestation projects{" "}
                <RiArrowDropRightLine size={35} />
              </Link>
            </div>
          </div>
        </div>
        <Image
          src="/assets/yucatan_bush.svg"
          className="absolute w-36 ml-28 -mt-10"
          width={1200}
          height={1200}
          alt=""
        />
      </div>

      <div className="container grid lg:grid-cols-2 gap-10 mt-12">
        <div className="md:text-left text-center md:mt-20">
          <h1
            className={`${montserrat.className} font-extrabold uppercase lg:text-3xl text-xl`}
          >
            Why we need to
            <span className="text-main"> bemore sustianable</span>
          </h1>
          <p className="md:text-lg  mt-5">
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
          <div className="w-[90%] h-48 md:h-[320px] bg-green-700/20 absolute -z-[1] lg:ml-12 ml-10 rounded-2xl mb-10"></div>
          <Image
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/06/Trillion-Trees-Map.jpg"
            width={1200}
            height={1200}
            alt=""
            className="md:w-full w-[90%]  md:h-[320px]  rounded-2xl object-cover h-48  "
          />
        </div>
      </div>
      <div className="container grid lg:grid-cols-2 gap-10 mt-12">
        <div className="relative md:p-10 flex justify-center items-center">
          <div className="w-[90%] h-48 md:h-[320px] bg-green-700/20 absolute -z-[1] lg:ml-12 ml-10 rounded-2xl mb-10"></div>
          <Image
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/06/Trillion-Trees-Map.jpg"
            width={1200}
            height={1200}
            alt=""
            className="md:w-full w-[90%]  md:h-[320px]  rounded-2xl object-cover h-48  "
          />
        </div>
        <div className="md:text-left text-center md:mt-20">
          <h1
            className={`${montserrat.className} font-extrabold uppercase lg:text-3xl text-xl`}
          >
            Well thought out well done
          </h1>
          <p className="md:text-lg  mt-5">
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
      </div>
    </div>
  );
}

export default DonateBanner;
