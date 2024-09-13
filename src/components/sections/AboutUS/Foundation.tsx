import { Button } from "@/components/ui/button";
import { lora, montserrat } from "@/fonts/font";
import Image from "next/image";
import React from "react";

function Foundation() {
  return (
    <div className="w-full  shadow-lg bg-gradient-to-br from-[rgba(160,249,138,0.2)] via-[rgba(219,255,213,0)] to-[rgba(187,249,138,0.2)] mt-20 py-10">
      <div className="container flex justify-center items-center flex-col">
        <h1
          className={`${montserrat.className} text-4xl font-bold text-center`}
        >
          The <span className="text-gray-700">Grey</span> to{" "}
          <span className="text-main">Green</span> Foundation
        </h1>
        <p className="text-center text-xl max-w-[800px] mt-2 ">
          The Foundation Council oversees and reviews the Foundation in
          strategic and operational matters.
        </p>
        <h1
          className={`${montserrat.className} text-2xl mt-8 text-main font-bold text-center`}
        >
          Foundation Council
        </h1>
        <div className="grid lg:grid-cols-3 gap-10 mt-10 lg:px-20">
          {Array.from({ length: 3 }).map((_, i) => {
            return (
              <div className="flex flex-col justify-center items-center text-center">
                <div className="">
                  <div className=" bg-gradient-to-r from-green-600 to-green-900 p-3 rounded-full">
                    <Image
                      src={"https://i.pravatar.cc/140" + i}
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
              </div>
            );
          })}
        </div>
        <div className="flex md:justify-start md:items-start gap-3 justify-center items-center md:gap-4 mt-20">
          <Button
            className={`${lora.className} text-xl py-[24px] md:w-auto w-full  px-8 rounded-full donateBtn border-none`}
          >
            Join US
          </Button>
          <Button
            className={`${lora.className} text-xl py-[22px] md:w-auto w-full  px-7 rounded-full  border-2 border-main bg-transparent text-main hover:text-white`}
          >
            Support Us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Foundation;
