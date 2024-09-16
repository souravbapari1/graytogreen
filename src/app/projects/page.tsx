import { PopupContent } from "@/components/GMapBox/Parts/PopupContent";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import React from "react";

function Projects() {
  return (
    <div className="relative">
      <Navbar />
      <div className="flex justify-center items-center md:gap-10 gap-5 md:mt-20 mt-10  bg-white flex-wrap  ">
        {["Active", "Completed", "Restoration", "Planting"].map((e, i) => {
          return (
            <p
              className={`${montserrat.className} ${
                i == 0 ? "underline text-main" : null
              } lg:text-base text-sm font-bold hover:underline text-gray-600 text-nowrap underline-offset-1 under cursor-pointer`}
            >
              {e}
            </p>
          );
        })}
      </div>
      <div className={`${montserrat.className} container`}>
        <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  gap-4 py-5">
          {Array.from({ length: 40 }).map((_, i) => {
            return (
              <PopupContent
                className="w-full mt-3 text-sm"
                key={"project_" + i}
              />
            );
          })}
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default Projects;
