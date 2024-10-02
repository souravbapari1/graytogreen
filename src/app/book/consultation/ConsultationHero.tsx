import { montserrat } from "@/fonts/font";
import React from "react";

function ConsultationHero() {
  return (
    <div className="w-full md:h-[40vh] min-h-[200px] h-[30vh] z-20 relative bg-[url('https://www.inspeyeredtree.com/wp-content/uploads/2024/06/tree-consultation-hero.webp')] bg-cover bg-no-repeat bg-center ">
      <div className="w-full h-full bg-black/50 absolute top-0 right-0"></div>
      <div className="container relative flex justify-center items-center z-10 h-full flex-col text-xl text-white">
        <h1
          className={`md:text-5xl text-2xl  font-bold mb-5 text-center ${montserrat.className}`}
        >
          Book Your Consultation
        </h1>
      </div>
    </div>
  );
}

export default ConsultationHero;
