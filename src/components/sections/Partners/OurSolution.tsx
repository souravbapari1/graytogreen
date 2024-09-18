import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

function OurSolution() {
  return (
    <div className="container">
      <h1
        className={`${montserrat.className} lg:text-4xl text-3xl font-bold text-center mt-20`}
      >
        Our <span className="text-main">Solution</span>
      </h1>
      {/* Offset Your CO2 and Build Your Forest  */}
      <div className="mt-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className=" mt-4 flex flex-col justify-center items-start">
            <h1
              className={`lg:text-3xl text-2xl  lg:mb-10 mb-5 font-bold uppercase ${montserrat.className}`}
            >
              <p className="">
                Offset Your CO2 and{" "}
                <span className="text-main">Build Your Forest</span>
              </p>
            </h1>
            <p className="lg:text-lg text-gray-700 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              quidem voluptatem doloribus praesentium a! Inventore laborum quam
              alias, accusantium suscipit possimus odit accusamus quidem
              officiis facilis vitae aliquam reiciendis odio!
            </p>
          </div>

          <div className="">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://cdn.shopify.com/s/files/1/0019/5952/files/Could_global_CO2_levels_be_reduced_by_planting_trees.jpg?v=1689693722"
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[380px]  rounded-2xl object-cover h-64  "
              />
            </div>
          </div>
        </div>
      </div>
      {/* Calimate Naturatly  */}
      <div className="mt-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/04/20105541/remote-work-environment-earth-day-1024x512.png"
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[380px]  rounded-2xl object-cover h-64  "
              />
            </div>
          </div>
          <div className="  mt-4 flex flex-col justify-center items-start">
            <h1
              className={`lg:text-3xl text-2xl  lg:mb-10 mb-5 font-bold uppercase ${montserrat.className}`}
            >
              <p className="">Calimate Naturatly</p>
            </h1>
            <p className="lg:text-lg text-gray-700 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              quidem voluptatem doloribus praesentium a! Inventore laborum quam
              alias, accusantium suscipit possimus odit accusamus quidem
              officiis facilis vitae aliquam reiciendis odio!
            </p>
          </div>
        </div>
      </div>
      {/* Empowerment and Climate Education  */}
      <div className="mt-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="  mt-4 flex flex-col justify-center items-start">
            <h1
              className={`lg:text-3xl text-2xl  lg:mb-10 mb-5 font-bold uppercase ${montserrat.className}`}
            >
              <p className="">Empowerment and Climate Education</p>
            </h1>
            <p className="lg:text-lg text-gray-700 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              quidem voluptatem doloribus praesentium a! Inventore laborum quam
              alias, accusantium suscipit possimus odit accusamus quidem
              officiis facilis vitae aliquam reiciendis odio!
            </p>
          </div>
          <div className="">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://assets.ireland.ie/images/Children_IA_Annual_Report-red.aa2232ed.fill-960x540-c100.jpg"
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[380px]  rounded-2xl object-cover h-64  "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Restoration Research and project-related cooperation */}
      <div className="mt-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/04/20105541/remote-work-environment-earth-day-1024x512.png"
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[380px]  rounded-2xl object-cover h-64  "
              />
            </div>
          </div>
          <div className="  mt-4 flex flex-col justify-center items-start">
            <h1
              className={`lg:text-3xl text-2xl  lg:mb-10 mb-5 font-bold uppercase ${montserrat.className}`}
            >
              <p className="">
                Restoration Research and project-related cooperation
              </p>
            </h1>
            <p className="lg:text-lg text-gray-700 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              quidem voluptatem doloribus praesentium a! Inventore laborum quam
              alias, accusantium suscipit possimus odit accusamus quidem
              officiis facilis vitae aliquam reiciendis odio!
            </p>
          </div>
        </div>
      </div>
      {/* Sponsor Free   Tools  */}
      <div className="mt-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="  mt-4 flex flex-col justify-center items-start">
            <h1
              className={`lg:text-3xl text-2xl  lg:mb-10 mb-5 font-bold uppercase ${montserrat.className}`}
            >
              <p className="">Sponsor Free Tools</p>
            </h1>
            <p className="lg:text-lg text-gray-700 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              quidem voluptatem doloribus praesentium a! Inventore laborum quam
              alias, accusantium suscipit possimus odit accusamus quidem
              officiis facilis vitae aliquam reiciendis odio!
            </p>
          </div>
          <div className="">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://assets.ireland.ie/images/Children_IA_Annual_Report-red.aa2232ed.fill-960x540-c100.jpg"
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[380px]  rounded-2xl object-cover h-64  "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sustainable Events  */}
      <div className="mt-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/04/20105541/remote-work-environment-earth-day-1024x512.png"
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[380px]  rounded-2xl object-cover h-64  "
              />
            </div>
          </div>
          <div className="  mt-4 flex flex-col justify-center items-start">
            <h1
              className={`lg:text-3xl text-2xl  lg:mb-10 mb-5 font-bold uppercase ${montserrat.className}`}
            >
              <p className="">Sustainable Events</p>
            </h1>
            <p className="lg:text-lg text-gray-700 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              quidem voluptatem doloribus praesentium a! Inventore laborum quam
              alias, accusantium suscipit possimus odit accusamus quidem
              officiis facilis vitae aliquam reiciendis odio!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurSolution;
