import { Button } from "@/components/ui/button";
import { lora, montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

function PlatformToolsBanner() {
  return (
    <div className="pt-20">
      <div className="container grid lg:grid-cols-2 gap-10 ">
        <div className="flex flex-col gap-5">
          <h1
            className={`${montserrat.className} uppercase md:text-4xl text-3xl  font-bold`}
          >
            The <span className="text-main"> </span> <br />
            Platforms
          </h1>
          <p className="">
            A free software toolset to fund, manage and monitor forest
            restoration. Used by over 300 projects around the world. Get started
            within minutes.
          </p>
          <Link
            href="/platform"
            className="  text-main flex md:justify-start justify-center  text-xl items-center"
          >
            Explore reforestation projects <RiArrowDropRightLine size={35} />
          </Link>
        </div>
        <Image
          src="/assets/Platform.svg"
          width={1200}
          height={1200}
          alt=""
          className="h-72 object-contain"
        />
      </div>
      <div className=" mt-32 w-full relative bg-gradient-to-r from-green-500 to-emerald-700   lg:h-64 py-8">
        <div className="container  flex justify-evenly lg:flex-row flex-col items-center ">
          <Image
            src="/assets/kid_cut_out.webp"
            width={2000}
            height={2000}
            alt=""
            className="h-96 w-auto top-0 -mt-48"
          />
          <div className="h-full">
            <div className="flex flex-col gap-5 justify-center items-center h-full">
              <h1
                className={`${montserrat.className} uppercase md:text-3xl text-2xl text-white font-bold`}
              >
                Empower children and support us!
              </h1>
              <p className="text-white/80 md:text-lg">
                Empower children and support them, shaping a brighter future
                together.
              </p>
              <div className="flex justify-center items-center gap-5 w-full  md:gap-10 mt-3">
                <Link href="/academies">
                  <Button
                    className={`${lora.className} text-xl py-[24px] md:w-auto w-full  px-8 rounded-full bg-green-500 shadow-none border-none`}
                  >
                    Join Us
                  </Button>
                </Link>
                <Link
                  href="/soon"
                  className="  text-white flex md:justify-start md:w-auto w-full justify-center items-center"
                >
                  Ideas & Tools
                  <RiArrowDropRightLine size={35} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlatformToolsBanner;
