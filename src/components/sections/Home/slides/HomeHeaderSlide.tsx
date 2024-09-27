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
        {[
          "https://images.theconversation.com/files/440454/original/file-20220112-25-zmd311.jpg?ixlib=rb-4.1.0&rect=0%2C1300%2C6928%2C3464&q=45&auto=format&w=1356&h=668&fit=crop",
          "https://help.gardeningexpress.co.uk/wp-content/uploads/2023/04/Untitled-design-1-1024x576.png",
          "https://images.theconversation.com/files/440454/original/file-20220112-25-zmd311.jpg?ixlib=rb-4.1.0&rect=0%2C1300%2C6928%2C3464&q=45&auto=format&w=1356&h=668&fit=crop",
          "https://help.gardeningexpress.co.uk/wp-content/uploads/2023/04/Untitled-design-1-1024x576.png",
        ].map((e, i) => {
          return (
            <div
              className="each-slide md:max-h-[600px] max-h-[300px]  h-[1200px] w-full overflow-hidden  "
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
                    src={e}
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
