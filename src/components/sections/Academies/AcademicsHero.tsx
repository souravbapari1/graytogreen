import { Button } from "@/components/ui/button";
import { montserrat } from "@/fonts/font";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

function AcademicsHero() {
  return (
    <div className="relative">
      <div className="w-full md:h-[70vh] min-h-[400px] h-[70vh] z-10 relative bg-[url('https://www.ugaoo.com/cdn/shop/articles/shutterstock_649766830.jpg?v=1661881786')] bg-cover bg-no-repeat bg-center ">
        <div className="w-full h-full bg-black/50 absolute top-0 right-0"></div>
        <div className="container relative flex justify-center md:pb-48   items-start z-10 h-full flex-col text-xl text-white">
          <h1
            className={`md:text-4xl text-3xl  font-bold mb-5 mt-20 text-left ${montserrat.className}`}
          >
            MERGING <span className="text-main">MINDS, METHODS</span> AND{" "}
            <span className="text-main">MOTHER EARTH</span>
          </h1>
          <p
            className={`max-w-[900px] text-left lg:text-xl text-sm ${montserrat.className}`}
          >
            Only talking won't stop glaciers from melting! Everyone is talking
            about the climate crisis. But what is actually happening there? And
            what can we children do about it?
          </p>
          <div
            className={` flex gap-5 mt-10 ${montserrat.className} md:mb-0 mb-32`}
          >
            <Button className="rounded-none  p-6">Find Out More</Button>
            <Button className="rounded-none p-6" variant="secondary">
              Join With Us
            </Button>
          </div>
        </div>
      </div>
      <div className="container -mt-20 z-30">
        <div className="md:grid flex flex-wrap lg:grid-cols-5 items-center justify-center grid-cols-2 md:gap-5 z-30">
          {[
            {
              image: "/assets/eco.png",
              title: "Recycling",
              desc: "Lorem ipsum dolor sit amet.",
            },
            {
              image: "/assets/education.png",
              title: "Educate",
              desc: "Lorem ipsum dolor sit amet.",
            },
            {
              image: "/assets/support.png",
              title: "Engage",
              desc: "Lorem ipsum dolor sit amet.",
            },
            {
              image: "/assets/public-relation.png",
              title: "Equid",
              desc: "Lorem ipsum dolor sit amet.",
            },
            {
              image: "/assets/plant.png",
              title: "Equid",
              desc: "Lorem ipsum dolor sit amet.",
            },
          ].map((e, i) => {
            return (
              <div
                className={cn(
                  `w-full max-w-[350px] h-40  z-30 bg-white md:shadow md:hover:shadow-lg transition-all p-3.5 flex justify-center items-center text-center gap-3 flex-col ${montserrat.className}`,
                  `${
                    i == 0
                      ? "md:h-52 md:-mt-2.5 bg-gray-400 text-white"
                      : i == 4
                      ? "md:h-52 md:-mt-2.5 bg-green-600 text-white"
                      : " md:h-48 text-gray-800 border-t "
                  }`
                )}
              >
                <Image
                  src={e.image}
                  width={300}
                  height={200}
                  alt=""
                  className="w-auto md:h-16 h-10"
                />
                <h1 className="lg:text-xl text-lg font-bold ">{e.title}</h1>
                <p className="lg:text-sm text-xs opacity-60">{e.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AcademicsHero;
