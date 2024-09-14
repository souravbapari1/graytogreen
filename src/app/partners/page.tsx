import Navbar from "@/components/sections/Navbar/Navbar";
import PartnersHero from "@/components/sections/Partners/PartnersHero";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <PartnersHero />
      <div className="container mt-20">
        <h1
          className={`${montserrat.className} lg:text-4xl text-2xl font-bold text-center `}
        >
          <span className="text-main">Restoration</span> Research Park
        </h1>
        <p className="text-center lg:text-lg  mt-8">
          Plant-for-the-Planet is a global movement fighting for climate
          justice. We work on solutions for the most urgent challenges in the
          field of ecosystem restoration. We empower children and young people,
          restore ecosystems ourselves, conduct research, provide free software
          tools and advice to restoration organizations around the world.
        </p>
        <div className="grid grid-cols-2 gap-10">
          <div className="relative">
            <Image
              src="/assets/Youth-empowerment.webp"
              width={2000}
              height={2000}
              alt=""
              className="w-full h-auto"
            />
            <div className="absolute top-10 left-10">
              <h1>Youth Empowerment</h1>
              children & youth to fight the climate crisis
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
