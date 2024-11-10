
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import React from "react";
import FilterTab, { MobFilterTab } from "./FilterTab";
import { client } from "@/request/actions";
import { Collection } from "@/interface/collection";
import { ProjectItem } from "@/interface/project";
import { PopupContent } from "@/components/GMapBox/Parts/PopupContent";
import ProjectsView from "./ProjectsView";

function getBackgroundColor(percentage: number): string {
  if (percentage >= 80) {
    return "bg-green-500"; // Green for >= 80%
  } else if (percentage >= 50) {
    return "bg-orange-500"; // Orange for >= 50%
  } else {
    return "bg-red-500"; // Red for < 50%
  }
}

export const revalidate = 0;
export const metadata = {
  title: "Projects",
}

async function Projects() {

  return (
    <div className="relative">
      <Navbar />
    <ProjectsView/>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default Projects;
