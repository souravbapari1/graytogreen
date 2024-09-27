import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

function AboutHero() {
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
            className={montserrat.className + " lg:text-4xl text-3xl font-bold"}
          >
            About Grey to <span className="text-main">Green</span> Organization
          </h1>
          <p className={montserrat.className + " lg:text-xl mt-10 mb-8"}>
            <span className="text-main">Grey to Green</span> is a global
            movement to restore forest ecosystems to tackle the climate crisis
            and biodiversity loss. To do so, we 
            <span className="text-main">
              empower young people, restore ecosystems, conduct restoration
              research, provide free software tools
            </span>
             and <span className="text-main">restoration advice</span> for
            organizations around the world. <br />
            <br /> We believe that we need to protect the world’s three trillion
            trees and 
            <span className="text-main">
              bring back a further one trillion trees.
            </span>
            <br />
            <br />
            Grey to Green t is a network of independent organisations united by
            a common vision.
          </p>
        </div>
        <div className="">
          <div className="relative md:p-10 flex justify-center items-center">
            {/* <div className="w-[90%] h-48 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:-mr-12 -mr-10 rounded-2xl mb-10"></div> */}
            <Image
              src="https://img.freepik.com/free-photo/person-caring-protecting-mother-earth-earth-day_23-2151262651.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=ais_user"
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

export default AboutHero;
