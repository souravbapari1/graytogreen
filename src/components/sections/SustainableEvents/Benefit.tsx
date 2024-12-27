"use client";
import { SustainableEvent } from "@/app/sustainable-events/SustainableEventsData";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Benefit({
  data,
  title,
}: {
  data?: SustainableEvent["benefit"];
  title?: string;
}) {
  if (!data) {
    return <></>;
  }
  return (
    <div className="w-full relative -mt-10 mb-40  bg-[url('https://www.scienceinschool.org/wp-content/uploads/2016/04/8753467625_c3c90a6648_k.jpg')] bg-cover bg-no-repeat bg-center ">
      <div
        className={`w-full h-full py-20  bg-black/60 ${montserrat.className} text-white`}
      >
        <div className="container flex justify-center items-center flex-col h-full">
          <h1 className="text-3xl text-center uppercase font-bold max-w-[700px] mb-6">
            {title}
          </h1>
          <div className="w-full h-full">
            <Carousel responsive={responsive} autoPlay={true} infinite>
              {data.map((e, i) => (
                <div
                  className="flex flex-col justify-center items-center text-center md:px-5 gap-4"
                  key={e.id}
                >
                  <div className="bg-white flex justify-center items-center p-4 rounded-full">
                    <Image
                      src={strApi + e.image.url}
                      width={230}
                      height={120}
                      alt=""
                      className="w-12 h-12 "
                    />
                  </div>
                  <h1 className="font-bold text-2xl">{e.title}</h1>
                  <p className="text-sm bg-opacity-70">{e.description}</p>
                </div>
              ))}
            </Carousel>
          </div>
          {/* <div className="grid lg:grid-cols-4 lg:gap-6 gap-10 w-full my-10">
            {data.map((e, i) => (
              <div
                className="flex flex-col justify-center items-center text-center gap-4"
                key={e.id}
              >
                <div className="bg-white flex justify-center items-center p-4 rounded-full">
                  <Image
                    src={strApi + e.image.url}
                    width={230}
                    height={120}
                    alt=""
                    className="w-12 h-12 "
                  />
                </div>
                <h1 className="font-bold text-2xl">{e.title}</h1>
                <p className="text-sm bg-opacity-70">{e.description}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Benefit;
