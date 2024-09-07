import { montserrat } from "@/fonts/font";
import Image from "next/image";
import React from "react";

function PartnerWithUs() {
  return (
    <div className="container flex justify-center items-center flex-col gap-5">
      <h1
        className={`capitalize lg:text-5xl text-3xl font-bold text-center ${montserrat.className}`}
      >
        <span className="text-main">Partner</span> with us!
      </h1>
      <p className="text-center md:text-xl max-w-[600px] ">
        We want to work with you on your climate journey and mobilize your
        community for forest restoration.
      </p>
      <div className="my-10 select-none">
        <Image
          className="w-full h-full"
          draggable={false}
          width={2000}
          height={1200}
          src="/assets/partner-with-us.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default PartnerWithUs;
