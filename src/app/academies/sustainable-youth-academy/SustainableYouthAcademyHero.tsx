import { Button } from "@/components/ui/button";
import { montserrat } from "@/fonts/font";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

function SustainableYouthAcademyHero() {
  return (
    <div className="relative">
      <div className="w-full md:h-[70vh] min-h-[400px] h-[70vh] z-10 relative bg-[url('https://www.ugaoo.com/cdn/shop/articles/shutterstock_649766830.jpg?v=1661881786')] bg-cover bg-no-repeat bg-center ">
        <div className="w-full h-full bg-black/50 absolute top-0 right-0"></div>
        <div className="container relative flex justify-center  md:pb-10  items-start z-10 h-full flex-col text-xl text-white">
          <h1
            className={`md:text-5xl text-3xl  max-w-[800px] uppercase  font-bold mb-5 mt-20 text-left ${montserrat.className}`}
          >
            The Future Sustainability Leaders Program
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
            <Button className="rounded-none  p-6">Join Us</Button>
            <Button className="rounded-none p-6 capitalize" variant="secondary">
              What you will experiences
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SustainableYouthAcademyHero;
