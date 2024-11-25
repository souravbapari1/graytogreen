"use client";
import { ResearchesLab } from "@/app/academies/researches-labs/ResearchesLabs";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import Image from "next/image";
import { Fade } from "react-slideshow-image";

function ResearchSlide({ slide }: { slide: ResearchesLab["textSlides"] }) {
  return (
    <Fade
      cssClass="w-full "
      transitionDuration={500}
      indicators={true}
      autoplay={false}
      infinite={true}
    >
      {slide.text.map((text, i) => {
        return (
          <div
            className="lg:h-72 h-auto py-20 bg-main relative"
            key={"Slider-text-" + i}
          >
            <Image
              src={strApi + slide.bgImage.url}
              width={2000}
              height={2000}
              className="w-full h-full object-cover absolute top-0 right-0"
              alt=""
            />
            <div className="bg-main/70 w-full h-full absolute top-0 right-0"></div>
            <div className="container flex justify-center items-center relative text-white md:text-xl font-bold h-full text-center">
              <h1
                className={`${montserrat.className} max-w-[1200px]`}
                dangerouslySetInnerHTML={{ __html: text.content }}
              />
            </div>
          </div>
        );
      })}
    </Fade>
  );
}

export default ResearchSlide;
