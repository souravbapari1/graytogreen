import { montserrat } from "@/fonts/font";
import Image from "next/image";
import React from "react";

function FoundationSecretariatBanner() {
  return (
    <div className="w-full relative mt-20 lg:h-[550px] h-auto">
      <Image
        src="/assets/tree_bg.png"
        className="w-[60%] lg:block hidden h-[500px] object-cover float-end img-hor"
        width={3000}
        height={3000}
        alt=""
      />
      <div
        className={`${montserrat.className} w-full lg:h-[500px]  grid lg:grid-cols-5 lg:absolute relative top-0 right-0`}
      >
        <div className="lg:col-span-3 bg-gradient-to-r flex justify-center items-start flex-col text-left  from-green-600 to-green-900 relative lg:arrow_path container py-20 ">
          <h1 className="lg:text-3xl text-xl font-bold text-white">
            Plant-for-the-Planet Foundation Secretariat
          </h1>
          <p className="pr-20 lg:text-xl  mt-10 text-white/75 ">
            As the secretariat of the Plant-for-the-Planet Foundation, we
            support young people in achieving their ambitious goals. Our main
            activities are: partnerships and donor support, events, academies,
            our app, the sale of the Change Chocolate, communication and
            administration. Our passion comes from our people. We embrace
            diversity and believe that different backgrounds, ideas and
            perspectives make us a stronger and more capable team. We put our
            heart and soul into Plant-for-the-Planet. We are passionate
            activists for climate justice.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FoundationSecretariatBanner;
