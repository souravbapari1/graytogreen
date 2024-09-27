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
            {/* <div className="w-[90%] h-48 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:-mr-12 -mr-10 rounded-2xl mb-10"></div> */}
            <Image
              src="https://cid-inc.com/app/uploads/2023/04/Plamnt-research.jpg"
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[380px]   object-cover h-48  "
            />
            <Image
              src="https://img.freepik.com/premium-photo/tree-that-grows-pile-money_104677-1067.jpg?w=360"
              width={1200}
              height={1200}
              alt=""
              className="md:w-52 w-28 absolute  md:h-[140px] right-0 top-0 border-2 border-white md:p-2 p-1  bg-white  object-cover h-20  "
            />
            <Image
              src="https://media.istockphoto.com/id/1039079320/photo/tree-sapling-baby-hand-on-the-dark-ground-the-concept-implanted-childrens-consciousness-into.jpg?s=612x612&w=0&k=20&c=t3d4xpcSyoNlYDJ1MC2chYDeT1w_a-2140t40cBFVOY="
              width={1200}
              height={1200}
              alt=""
              className="md:w-52 w-28 absolute  md:h-[140px] left-0 bottom-0 border-2 border-white bg-white md:p-2 p-1   object-cover h-20  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResearchHero;
