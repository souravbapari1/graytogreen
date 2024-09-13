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

      <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 container mt-10">
        <div className="">
          <h1
            className={montserrat.className + " lg:text-5xl text-3xl font-bold"}
          >
            <span className="text-main">Restoration</span> Research Park
          </h1>
          <h2 className={montserrat.className + " text-xl font-bold mt-10"}>
            Center for Applied Forest Restoration Research & Advice
          </h2>
          <h5 className={montserrat.className + " text-2xl font-light mt-10"}>
            in Mexico's Balam-Kú Ecosystem Reserve
          </h5>
          <p className={montserrat.className + " lg:text-2xl mt-10 mb-8"}>
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
            <div className="w-[90%] h-48 md:h-[480px] bg-green-700/20 absolute -z-[1] lg:-mr-12 -mr-10 rounded-2xl mb-10"></div>
            <Image
              src="https://www.plant-for-the-planet.org/wp-content/uploads/2023/02/Research-Office-Plant-for-the-Planet.jpg"
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[480px]  rounded-2xl object-cover h-48  "
            />
            <div className="">
              <Image
                alt=""
                width={2000}
                height={2000}
                src="https://media.istockphoto.com/id/964163202/photo/young-handsome-hispanic-man-against-green-background.jpg?s=612x612&w=0&k=20&c=mvdrdVwFDEPDlv6vRdm_wdB5Q7e1UFb-U1lCek26ZY4="
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResearchHero;
