import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function StandersHero() {
  return (
    <div className="w-full md:h-[70vh] min-h-[400px]  z-20 relative bg-[url('https://onesteptowardspeace.com/wp-content/uploads/2015/12/4.jpg')] bg-cover bg-no-repeat bg-center ">
      <div className="w-full h-full bg-black/50 absolute top-0 right-0"></div>
      <div
        className={`${montserrat.className} container gap-4 relative flex justify-center  pt-10 pb-6 items-start z-10 h-full flex-col text-xl text-white`}
      >
        <h1 className="md:text-3xl text-xl font-bold">
          Standards for Reforestation within Restoration projects
        </h1>
        <div className="md:text-xl flex flex-col gap-4 text-xs">
          <p>
            As restoration is in itself an intricate network of interrelated
            actions, it makes sense that the best option to achieve long-term
            success is to use a holistic approach towards ecosystem restoration.
            With this in mind, Plant-for-the-Planet has developed
            restoration/reforestation guidelines covering biological, social,
            and economic aspects to ensure high quality projects are supported
            by our platform.
          </p>
          <p>
            These standards build on{" "}
            <Link href="#" className="font-bold text-main">
              academic literature
            </Link>
            and the{" "}
            <Link href="#" className="font-bold text-main">
              International Principles and Standards for the Practice of
              Ecological Restoration
            </Link>{" "}
            (by SER et al.),{" "}
            <Link href="#" className="font-bold text-main">
              the Principles for Ecosystem Restoration to Guide the United
              Nations Decade 2021–2030
            </Link>{" "}
            (by UN Environment Program, FAO et al.), and the{" "}
            <Link href="#" className="font-bold text-main">
              Road to Restoration
            </Link>
            (by WRI & FAO).
          </p>
          <p>We would love to receive any comments, feedback, or suggestion.</p>
          <p>
            Please feel free to write to{" "}
            <Link href="#" className="font-bold text-main">
              maximilian.schmid@plant-for-the-planet.org
            </Link>{" "}
            anytime.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StandersHero;
