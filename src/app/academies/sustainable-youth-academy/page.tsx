import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";
import SustainableYouthAcademyHero from "./SustainableYouthAcademyHero";
import SustainableYouthAcademyAbout from "./SustainableYouthAcademyAbout";
import YouthAcademyWahtYouExperience from "./YouthAcademyWahtYouExperience";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Footer from "@/components/sections/Footer/Footer";

function SustainableYouthAcademy() {
  return (
    <div>
      <Navbar />
      <SustainableYouthAcademyHero />
      <SustainableYouthAcademyAbout />
      <YouthAcademyWahtYouExperience />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default SustainableYouthAcademy;
