import { Button } from "@/components/ui/button";
import { lora, montserrat } from "@/fonts/font";
import Image from "next/image";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";

function BordOfDirectors() {
  return (
    <div className="container flex justify-center items-center flex-col my-32">
      <h1
        className={`${montserrat.className} md:text-4xl text-2xl font-bold text-center`}
      >
        Board of Directors
      </h1>
      <p className="text-center max-w-[800px] mt-4 ">
        The Board of Directors exercises overall responsibility for the
        policies, programs, and direction of Foundation.
      </p>

      <div className="grid lg:grid-cols-3 gap-10 mt-10 lg:px-20">
        {Array.from({ length: 6 }).map((_, i) => {
          return (
            <div className="flex flex-col justify-center items-center text-center">
              <div className="">
                <div className=" bg-gradient-to-r from-green-600 to-green-900 p-3 rounded-full">
                  <Image
                    src={"https://i.pravatar.cc/120" + i}
                    height={3000}
                    alt=""
                    width={3000}
                    className=" object-cover rounded-full w-80 h-80  border-main"
                  />
                </div>
              </div>
              <h1 className="text-2xl font-bold mt-8 mb-3">Chiagozie Udeh</h1>
              <p>
                Chairman of the Foundation Council of the Plant-for-the-Planet
                Foundation
              </p>
              <div className="flex  flex-row gap-4 mt-5 text-gray-500 ">
                <FaSquareXTwitter className="hover:text-gray-900" size={18} />
                <FaLinkedinIn className="hover:text-gray-900" size={18} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BordOfDirectors;
