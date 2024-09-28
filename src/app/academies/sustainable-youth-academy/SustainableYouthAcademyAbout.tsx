import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiPlantFill, PiPottedPlantBold } from "react-icons/pi";
import { RiArrowDropRightLine } from "react-icons/ri";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { Button } from "@/components/ui/button";

function SustainableYouthAcademyAbout() {
  return (
    <div className=" py-20">
      <div className="container grid lg:grid-cols-2 gap-10">
        <div className="">
          <div className="relative md:p-10 flex justify-center items-center">
            <div className="w-[90%] h-64 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
            <Image
              src="https://media.istockphoto.com/id/1180948772/photo/photo-of-cheerful-attractive-handsome-bearded-man-smiling-toothily-showing-you-double-ok-sign.jpg?s=612x612&w=0&k=20&c=6O_STRds8iKOjBSKRQM0UhI4HFpsZPhqJTxtT-uuknY="
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[380px]  rounded-2xl object-cover h-64  "
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="flex text-main items-center gap-3 mb-4">
            {" "}
            <PiPlantFill />
            <p className={`${montserrat.className} text-sm font-semibold`}>
              Learn Something New
            </p>
          </div>
          <h1
            className={`lg:text-4xl text-xl text-gray-900 lg:mb-10 mb-5 font-bold ${montserrat.className}`}
          >
            Join our Future Sustainability Leaders Program (FSLP)
          </h1>
          <div className="">
            <div className="flex gap-4">
              <PiPottedPlantBold size={40} className="text-main w-10" />
              <div className={`${montserrat.className}`}>
                <h3 className="font-bold md:text-xl mb-2">Lorem, ipsum.</h3>
                <p className={` text-xs text-gray-500 max-w-[400px]`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  exercitationem numquam quasi necessitatibus, veniam ea
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-5">
              <GiEarthAfricaEurope size={40} className="text-main w-10" />
              <div className={`${montserrat.className}`}>
                <h3 className="font-bold md:text-xl mb-2">Lorem, ipsum.</h3>
                <p className={` text-xs text-gray-500 max-w-[400px]`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  exercitationem numquam quasi necessitatibus, veniam ea
                </p>
              </div>
            </div>
          </div>
          <div
            className={`flex justify-normal items-center gap-6 mt-8 ${montserrat.className}`}
          >
            <Button className=" shadow-none font-bold donateBtn px-10 py-6">
              Register
            </Button>
            <Button
              className=" shadow-none font-bold  px-10 py-6"
              variant="secondary"
            >
              View More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SustainableYouthAcademyAbout;
