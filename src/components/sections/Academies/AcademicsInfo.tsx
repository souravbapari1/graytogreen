import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

function AcademicsInfo() {
  return (
    <div className="bg-green-50/20 py-20">
      <div className="container grid lg:grid-cols-2 gap-10">
        <div className="">
          <div className="relative md:p-10 flex justify-center items-center">
            <div className="w-[90%] h-64 md:h-[480px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
            <Image
              src="https://media.istockphoto.com/id/1180948772/photo/photo-of-cheerful-attractive-handsome-bearded-man-smiling-toothily-showing-you-double-ok-sign.jpg?s=612x612&w=0&k=20&c=6O_STRds8iKOjBSKRQM0UhI4HFpsZPhqJTxtT-uuknY="
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[480px]  rounded-2xl object-cover h-64  "
            />
          </div>
        </div>
        <div className=" lg:mt-10 mt-4">
          <h1
            className={`lg:text-5xl text-3xl text-main lg:mb-10 mb-5 font-bold ${montserrat.className}`}
          >
            Academies
          </h1>
          <p className="lg:text-xl text-gray-700 ">
            During a one-day workshop, you will learn about the climate crisis
            from your peers and train how to give presentations.  You will plant
            trees with your own hands and can do something for our future. The
            highlight of every Academy is the moment when you can present to
            your parents and friends what you have learned on the day. Your
            chance to take the stage and give your first presentation.  At the
            end of the one-day workshop, you will receive a certificate and an
            Ambassador-kit: your own library for climate savers. You are now
            officially a Climate Justice Ambassador.
          </p>
          <Link
            href="#"
            className="uppercase font-bold  md:text-lg text-xs text-main mt-11 flex md:justify-start justify-center items-center"
          >
            What is an Academy <RiArrowDropRightLine size={35} />
          </Link>
          <Link
            href="#"
            className="uppercase font-bold md:text-lg text-xs mb-8 text-main flex md:justify-start justify-center items-center"
          >
            Information for participants and parents{" "}
            <RiArrowDropRightLine size={35} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AcademicsInfo;
