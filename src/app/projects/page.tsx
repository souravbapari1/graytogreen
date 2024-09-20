import { PopupContent } from "@/components/GMapBox/Parts/PopupContent";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import React from "react";
import FilterTab, { MobFilterTab } from "./FilterTab";

function Projects() {
  return (
    <div className="relative">
      <Navbar />
      <MobFilterTab />
      <div className={`${montserrat.className} container`}>
        <div className=" grid lg:grid-cols-12  gap-10  py-5 relative">
          <div className="xl:col-span-3 lg:col-span-4 mt-5 lg:block hidden">
            <FilterTab />
          </div>
          <div className="xl:col-span-9 lg:col-span-8 grid xl:grid-cols-3   md:grid-cols-2  gap-6">
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
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default Projects;
