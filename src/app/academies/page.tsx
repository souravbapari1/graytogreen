import AcademicsHero from "@/components/sections/Academies/AcademicsHero";
import AcademicsInfo from "@/components/sections/Academies/AcademicsInfo";
import AcademicsInfoLists from "@/components/sections/Academies/AcademicsInfoLists";
import UpcomingAcademies from "@/components/sections/Academies/UpcomingAcademies";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <AcademicsHero />
      {/* <AcademicsInfo /> */}
      {/* <UpcomingAcademies /> */}
      <AcademicsInfoLists />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
