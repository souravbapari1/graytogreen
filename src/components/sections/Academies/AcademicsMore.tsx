import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

function AcademicsMore() {
  return (
    <div>
      <div className="container">
        <Image
          src="/assets/academy_steps.svg"
          className="w-full lg:h-[600px] h-auto mt-40 md:block hidden"
          width={2000}
          height={2000}
          alt=""
        />
      </div>
      <div className="overflow-hidden">
        <Image
          src="/assets/academy_steps_mob.svg"
          className="w-full lg:h-[600px] h-auto mt-40 md:hidden block ml-32"
          width={2000}
          height={2000}
          alt=""
        />
      </div>

      <div className="container mt-32 mb-20">
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://www.rhs.org.uk/getmedia/4e2108e3-9e5c-4996-830d-3c041488f267/broad-bean-seedlings.jpg?width=940&height=624&ext=.jpg"
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[380px]  rounded-2xl object-cover h-64  "
              />
            </div>
          </div>
          <div className=" lg:mt-10 mt-4 flex flex-col justify-center items-start">
            <h1
              className={`lg:text-3xl text-2xl  lg:mb-10 mb-5 font-bold uppercase ${montserrat.className}`}
            >
              <p className="text-main">Support us at academy</p>
            </h1>
            <p className="lg:text-lg text-gray-700 ">
              Over 100,273 children and youth have already been trained at 1,866
              academies in 76 countries, where we teach each other about the
              climate crisis. As Climate Justice Ambassadors we fight for our
              future by planting trees, giving speeches, protesting, and much
              more.
            </p>
            <Link
              href="#"
              className="uppercase font-bold   text-main mt-11 flex md:justify-start justify-center items-center"
            >
              Presentation <RiArrowDropRightLine size={35} />
            </Link>
          </div>
        </div>
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
      </div>

      <div className="container px-5 bg-green-50/50">
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className=" lg:mt-10 mt-4 flex flex-col justify-center items-start">
            <p className="lg:text-lg text-gray-700 ">
              On the Yucatán Peninsula and the state of Mexico, we are restoring
              forests to fight the climate crisis. Forest restoration generates
              jobs, protects biodiversity, and absorbs the greenhouse gas CO2.
            </p>
            <Link
              href="#"
              className="uppercase font-bold   text-main mt-11 flex md:justify-start justify-center items-center"
            >
              Become an Academy Organiser <RiArrowDropRightLine size={35} />
            </Link>
          </div>

          <div className="md:mt-0 mt-10">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://www.housedigest.com/img/gallery/the-best-time-of-day-to-water-your-houseplants/intro-1686927655.jpg"
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[380px]  rounded-2xl object-cover h-64  "
              />
            </div>
          </div>
        </div>
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
      </div>
    </div>
  );
}

export default AcademicsMore;
