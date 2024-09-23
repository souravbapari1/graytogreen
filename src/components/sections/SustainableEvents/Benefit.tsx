import { montserrat } from "@/fonts/font";
import Image from "next/image";
import React from "react";

function Benefit() {
  return (
    <div className="w-full relative -mt-10 mb-40  bg-[url('https://www.scienceinschool.org/wp-content/uploads/2016/04/8753467625_c3c90a6648_k.jpg')] bg-cover bg-no-repeat bg-center ">
      <div
        className={`w-full h-full py-20  bg-black/60 ${montserrat.className} text-white`}
      >
        <div className="container flex justify-center items-center flex-col h-full">
          <h1 className="text-3xl text-center uppercase font-bold max-w-[700px] mb-6">
            Benefit sustainably from climate protection events as a company!
          </h1>
          <div className="grid lg:grid-cols-3 lg:gap-6 gap-10 w-full my-10">
            {Array.from({ length: 3 }).map((_, i) => (
              <div className="flex flex-col justify-center items-center text-center gap-4">
                <div className="bg-white flex justify-center items-center p-4 rounded-full">
                  <Image
                    src="/assets/solidarity.png"
                    width={230}
                    height={120}
                    alt=""
                    className="w-12 h-12 "
                  />
                </div>
                <h1 className="font-bold text-2xl">
                  Lorem ipsum dolor sit amet.
                </h1>
                <p className="text-sm bg-opacity-70">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                  velit nam aperiam mollitia, nulla veniam tempore magni
                  adipisci doloribus id dolore aspernatur, officia error sequi,
                  tenetur libero quaerat quidem cupiditate!
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefit;
