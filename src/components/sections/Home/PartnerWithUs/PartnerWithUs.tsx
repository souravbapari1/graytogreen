import { montserrat } from "@/fonts/font";
import Image from "next/image";
import React from "react";

function PartnerWithUs() {
  return (
    <div className="container flex justify-center items-center flex-col mt-20 gap-5 overflow-hidden">
      <h1
        className={`capitalize lg:text-4xl text-3xl font-bold text-center ${montserrat.className}`}
      >
        <span className="text-main">Partner</span> with us!
      </h1>
      <p className="text-center md:text-lg max-w-[600px]">
        We want to work with you on your climate journey and mobilize your
        community for forest restoration.
      </p>
      <div className="my-10 select-none ">
        <Image
          className="w-full h-full md:block hidden"
          draggable={false}
          width={2000}
          height={2500}
          src="/assets/partner-with-us.svg"
          alt=""
        />
        <Image
          className=" w-[150vw] h-auto md:hidden block ml-12"
          draggable={false}
          width={2000}
          height={1200}
          src="/assets/flow.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default PartnerWithUs;
