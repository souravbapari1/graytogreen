import { Button } from "@/components/ui/button";
import { lora, montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

function OurStory() {
  return (
    <div className="container mt-20">
      <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center text-center lg:text-left gap-5 lg:items-center">
        <div className="">
          <h1
            className={`${montserrat.className} md:text-5xl text-4xl font-bold capitalize`}
          >
            Your path to be <br />
            <span className="text-main">positive natural Parteners</span>
          </h1>
          <p
            className={`${montserrat.className}  max-w-[500px] mt-3 font-bold`}
          >
            From Grey to Green: Our Journey to Protect the Environment and
            Reclaim Nature by Planting Trees.
          </p>
        </div>
        <div className="">
          <Button className="donateBtn border-none rounded-full md:text-lg md:px-10 px-8 md:py-7 py-5">
            Support Us
          </Button>
        </div>
      </div>
      <div className="w-full flex mt-20 justify-center items-center">
        <Image
          src="/assets/tree.svg"
          width={2000}
          height={5000}
          alt=""
          className="md:w-[70%] w-full h-full "
          draggable={false}
        />
      </div>
      <div
        className=" mt-10 w-full relative mb-10
      "
      >
        <div className=" grid md:order-1 order-last lg:grid-cols-2 md:gap-16 gap-10  py-10">
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
              className={`${montserrat.className} uppercase md:text-3xl text-2xl  font-bold`}
            >
              How it <span className="text-main">works</span>
            </h1>
            <p className=" md:text-lg">
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
                className=" text-main flex md:justify-start justify-center items-center"
              >
                Explore reforestation projects{" "}
                <RiArrowDropRightLine size={35} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
