import { montserrat } from "@/fonts/font";
import Image from "next/image";
import React from "react";

function ResearchHero() {
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src="/assets/Lingkaran.svg"
        alt="roubd"
        height={2000}
        width={2000}
        className="w-64 h-64 absolute left-0 -ml-24 mt-40"
      />

      <div className="grid lg:grid-cols-2  gap-8 container mt-10">
        <div className="">
          <h1
            className={montserrat.className + " lg:text-4xl text-3xl font-bold"}
          >
            <span className="text-main"> Lab's Programs </span> Restoration
            Research Park
          </h1>
          <h2 className={montserrat.className + " text-xl font-bold mt-5"}>
            Center for Applied Forest Restoration Research & Advice
          </h2>
          <h5 className={montserrat.className + " text-2xl font-light mt-5"}>
            in Mexico's Balam-Kú Ecosystem Reserve
          </h5>
          <p className={montserrat.className + " text-lg mt-10 mb-8"}>
            Planting a single tree is easy. But how do you restore vast,
            degraded forests and bring back as many of the locally lost species
            as possible? Which restoration methods are most effective in
            different ecosystems and different levels of degradation? How can
            regrowing forests withstand and mitigate the complex challenges of
            the climate crisis? How can restoration be maximally beneficial to
            the local community? Many important scientific questions remain
            unanswered. And restoration initiatives around the world are waiting
            for answers.
          </p>
        </div>
        <div className="">
          <div className="relative md:p-10 flex justify-center items-center">
            <div className="w-[90%] h-48 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:-mr-12 -mr-10 rounded-2xl mb-10"></div>
            <Image
              src="https://www.plant-for-the-planet.org/wp-content/uploads/2023/02/Research-Office-Plant-for-the-Planet.jpg"
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[380px]  rounded-2xl object-cover h-48  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResearchHero;
