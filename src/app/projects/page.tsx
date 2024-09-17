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

      <div className="w-full md:h-[70vh] min-h-[300px] h-[50vh] z-20 relative bg-[url('https://juftrust.com/wp-content/uploads/edd/2021/03/Avoid-Errors-Claiming-Personal-Super-Contributions-Deductions-%E2%80%93-ATO-Update.jpg')] bg-cover bg-no-repeat bg-center ">
        <div className="w-full h-full bg-black/50 absolute top-0 right-0"></div>
        <div className="container relative flex justify-end md:pb-36 pb-16 items-center z-10 h-full flex-col text-xl text-white">
          <h1
            className={`md:text-5xl text-3xl  font-bold mb-5 text-center ${montserrat.className}`}
          >
            Our Planting Trees Projects
          </h1>
          <p className="max-w-[900px] text-center lg:text-xl text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis aliquid quasi nihil iusto laborum fugit in blanditiis
            nemo esse debitis laboriosam, sequi exercitationem! Harum
            necessitatibus corrupti id saepe, magnam natus.
          </p>
        </div>
      </div>

      <div className=""></div>
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
