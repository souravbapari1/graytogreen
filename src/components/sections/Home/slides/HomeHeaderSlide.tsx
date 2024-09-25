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
              className="each-slide md:max-h-[500px] max-h-[300px]  h-[1200px] w-full overflow-hidden  "
              key={"s" + i}
            >
              <div className="h-full relative w-full">
                <div className="w-full h-full  z-10 absolute text-white flex justify-center items-center ">
                  {/* <video
                    src="https://cdn.pixabay.com/video/2023/10/19/185726-876210695_tiny.mp4"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover absolute top-0 right-0 bg-green-50"
                  /> */}
                  <Image
                    src="https://pixabay.com/get/g04121149a7b5a7f2079ed8848fa4d60ecc75cd6abce09639850eb3b8475e2e98db1c2101364a27002bcca45c3cc3a1c3.jpg"
                    // autoPlay={true}
                    // muted={true}
                    // loop={true}
                    width={2000}
                    height={2000}
                    alt=""
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
