import AcademicsInfo from "@/components/sections/Academies/AcademicsInfo";
import AcademicsInfoLists from "@/components/sections/Academies/AcademicsInfoLists";
import AcademicsMore from "@/components/sections/Academies/AcademicsMore";
import UpcomingAcademies from "@/components/sections/Academies/UpcomingAcademies";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";

function GreenKidsAcademy() {
  return (
    <div>
      <Navbar />
      <AcademicsInfo />
      <UpcomingAcademies />
      <AcademicsMore />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default GreenKidsAcademy;
