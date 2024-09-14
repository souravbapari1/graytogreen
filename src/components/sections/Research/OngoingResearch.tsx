import { montserrat } from "@/fonts/font";
import Image from "next/image";
import React from "react";

function OngoingResearch() {
  return (
    <div className="bg-green-50/50 w-full  shadow-md py-20 mt-10">
      <div className="container gap-10 ">
        <h1
          className={`${montserrat.className} md:text-4xl text-3xl text-center font-bold `}
        >
          <span className="text-main">Ongoing</span> Research
        </h1>
        <div className="grid md:grid-cols-2 gap-5 mt-20">
          <div className="md:mb-0 mb-10">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[480px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/07/Planting-Density-Map-Research.jpg"
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[480px]  rounded-2xl object-cover h-64 border border-gray-100  "
              />
            </div>
          </div>
          <div className="flex justify-center flex-col items-start gap-5">
            <h1
              className={`${montserrat.className} md:text-3xl text-2xl uppercase text-center font-bold `}
            >
              Planting Density Optimisation
            </h1>
            <p>
              How do different soil conditions affect the optimal planting
              density and planting pattern? That’s one of the key questions for
              tree planting efforts. To address this, we replicated a range of
              planting densities across a range of soil conditions in our
              largest experiment with 1.2 million seedlings of 21 species. This
              effort was integrated directly into our ongoing restoration
              effort. <br />
              We seek to understand how different planting densities affect the
              short and long term carbon and biodiversity dynamics of regrowing
              forests in different soil conditions. <br /> The experiment was
              set up in 2021 in collaboration with Dr. Leland Werden and is set
              out to be a 30-year trial. We expect to publish the first data
              after three years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OngoingResearch;
