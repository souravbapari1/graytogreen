"use client";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import { Fade } from "react-slideshow-image";

function ResearchSlide() {
  return (
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
            className="lg:h-72 h-auto py-20 bg-main relative"
            key={"Slider-text-" + i}
          >
            <Image
              src="https://scottamyx.com/wp-content/uploads/2019/03/green-forest-trees.jpg.860x0_q70_crop-scale.jpg"
              width={2000}
              height={2000}
              className="w-full h-full object-cover absolute top-0 right-0"
              alt=""
            />
            <div className="bg-main/70 w-full h-full absolute top-0 right-0"></div>
            <div className="container flex justify-center items-center relative text-white md:text-3xl font-bold h-full text-center">
              <h1 className={`${montserrat.className} max-w-[1200px]`}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci quod ipsam nostrum quis ullam nobis. Sint quae quidem
                nisi animi iure excepturi. Laudantium, reiciendis earum rerum
                ullam possimus voluptas nihil?
              </h1>
            </div>
          </div>
        );
      })}
    </Fade>
  );
}

export default ResearchSlide;
