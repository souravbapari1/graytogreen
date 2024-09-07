import { Button } from "@/components/ui/button";
import { lora, montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

function DonateBanner() {
  return (
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
            Mexican Reforestation Projects
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
              Donate Us
            </Button>
            <Link
              href="#"
              className="  text-white flex md:justify-start justify-center items-center"
            >
              Explore reforestation projects <RiArrowDropRightLine size={35} />
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
  );
}

export default DonateBanner;
