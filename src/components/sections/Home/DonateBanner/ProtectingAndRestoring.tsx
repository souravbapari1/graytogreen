import { Button } from "@/components/ui/button";
import { lora, montserrat } from "@/fonts/font";
import React from "react";

function ProtectingAndRestoring() {
  return (
    <div className="w-full  shadow-lg bg-gradient-to-br from-[rgba(160,249,138,0.2)] via-[rgba(219,255,213,0)] to-[rgba(187,249,138,0.2)]  py-10">
      <div className="container flex justify-center items-center text-center flex-col md:gap-6 gap-4 py-10">
        <h1
          className={`lg:text-4xl text-2xl font-bold capitalize max-w-[1000px] ${montserrat.className}`}
        >
          Protecting and restoring <span className="text-main">our planet</span>{" "}
          with <span className="text-main">one trillion new trees.</span>
        </h1>
        <p className=" max-w-[700px]">
          We believe that we need to protect the world’s three trillion trees
          and bring back a further one trillion trees
        </p>
        <div className="flex md:justify-start md:items-start gap-3 mt-6 justify-center items-center md:gap-4">
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

export default ProtectingAndRestoring;
