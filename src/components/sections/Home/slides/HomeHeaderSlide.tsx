"use client";
import Image from "next/image";
import React from "react";
import { Fade } from "react-slideshow-image";

function HomeHeaderSlide() {
  return (
    <div className="w-full overflow-hidden ">
      <Fade
        cssClass="w-full "
        transitionDuration={500}
        indicators={true}
        autoplay={false}
        infinite={true}
      >
        {Array.from({ length: 4 }).map((_, i) => {
          return (
            <div
              className="each-slide md:h-[400px] max-h-[400px] h-60 w-full overflow-hidden  "
              key={"s" + i}
            >
              <div className="h-full relative w-full">
                <div className="w-full h-full  z-10 absolute text-white flex justify-center items-center ">
                  <video
                    src="https://cdn.pixabay.com/video/2020/03/04/33212-395657672_tiny.mp4"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover absolute top-0 right-0 bg-green-50"
                  />
                  <div className="w-full h-full z-10 flex justify-center items-center p-20 mt-12 text-center  md:text-4xl font-extrabold text-xl">
                    <h1>
                      The world had 3 trillion trees. But do you know where they
                      are?
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Fade>
    </div>
  );
}

export default HomeHeaderSlide;
