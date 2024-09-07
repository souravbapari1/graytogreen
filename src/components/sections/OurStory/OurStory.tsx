import { Button } from "@/components/ui/button";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import React from "react";

function OurStory() {
  return (
    <div className="container">
      <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center text-center lg:text-left gap-5 lg:items-center">
        <div className="">
          <h1
            className={`${montserrat.className} md:text-6xl text-4xl font-bold`}
          >
            Our <span className="text-main">Story</span>
          </h1>
          <p
            className={`${montserrat.className} md:text-lg max-w-[500px] mt-3 font-bold`}
          >
            From Green to Grey: Our Journey to Protect the Environment and
            Reclaim Nature by Planting Trees.
          </p>
        </div>
        <div className="">
          <Button className="donateBtn border-none rounded-full md:text-xl md:px-10 px-8 md:py-7 py-5">
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
    </div>
  );
}

export default OurStory;
