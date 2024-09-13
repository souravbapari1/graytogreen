import { montserrat } from "@/fonts/font";
import React from "react";

function TourOfTheCampus() {
  return (
    <div className="bg-[url('/assets/bg_image.svg')] w-full p-10 bg-no-repeat bg-cover">
      <div className="container">
        <h1
          className={`${montserrat.className} text-center font-bold text-4xl`}
        >
          Tour of the Campus
        </h1>
        <div className="flex justify-center items-center mt-20">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zFmeeMZioio?si=VCJ45jaB0xb5Y9h5"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full lg:max-w-[1100px] lg:h-[600px] md:h-96 h-56 rounded-3xl object-cover"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default TourOfTheCampus;
