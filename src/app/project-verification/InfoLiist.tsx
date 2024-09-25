import { montserrat } from "@/fonts/font";
import Image from "next/image";
import React from "react";

function InfoList() {
  return (
    <div className="container mt-16 md:mt-0">
      {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="   flex flex-col justify-center items-start">
          <h1
            className={`lg:text-3xl text-2xl   mb-5 font-bold uppercase ${montserrat.className}`}
          >
            About Plant-for-the-Planet Platform
          </h1>
          <p className=" text-gray-700 ">
            Meet our free and open-source platform where restoration
            organizations can showcase their projects and receive donations.
          </p>
        </div>

        <div className="mt-5">
          <div className="relative md:p-10 flex justify-center items-center">
            <div className="w-[90%] h-64 md:h-[300px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
            <Image
              src="https://images.sw.cdn.siemens.com/siemens-disw-assets/public/4qsNV0gi93qkMi6Fool3wq/en-US/agromilloragroup_agromillora_group_84175_feature_7__640x360_tcm27_103428.jpg?w=900&fit=max&q=60&dpr=1&auto=format"
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[300px]  rounded-2xl object-cover h-64  "
            />
          </div>
        </div>
      </div>
      {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}

      {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="mt-5">
          <div className="relative md:p-10 flex justify-center items-center">
            <div className="w-[90%] h-64 md:h-[300px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
            <Image
              src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/06/Shadehouse-Planet-Research.jpg"
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[300px]  rounded-2xl object-cover h-64  "
            />
          </div>
        </div>
        <div className="   flex flex-col justify-center items-start">
          <h1
            className={`lg:text-3xl text-2xl   mb-5 font-bold uppercase ${montserrat.className}`}
          >
            Over 63 Million trees
          </h1>
          <p className=" text-gray-700 ">
            have been funded through the platform as of February 2022. Plant
            your trees today.
          </p>
        </div>
      </div>
      {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}

      {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="   flex flex-col justify-center items-start">
          <h1
            className={`lg:text-3xl text-2xl   mb-5 font-bold uppercase ${montserrat.className}`}
          >
            295+ Projects
          </h1>
          <p className=" text-gray-700 ">
            Meet restoration and conservation projects around the world.
          </p>
        </div>

        <div className="mt-5">
          <div className="relative md:p-10 flex justify-center items-center">
            <div className="w-[90%] h-64 md:h-[300px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
            <Image
              src="https://www.agromillora.com/olint/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-07-at-7.52.39-AM.jpeg"
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[300px]  rounded-2xl object-cover h-64  "
            />
          </div>
        </div>
      </div>
      {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
    </div>
  );
}

export default InfoList;
