import AboutHero from "@/components/sections/AboutUS/AboutHero";
import AboutOurAmbassadors from "@/components/sections/AboutUS/AboutOurAmbassadors";
import AboutOurTeam from "@/components/sections/AboutUS/AboutOurTeam";
import AboutPatrons from "@/components/sections/AboutUS/AboutPatrons";
import BordOfDirectors from "@/components/sections/AboutUS/BordOfDirectors";
import EducationAdvisors from "@/components/sections/AboutUS/EducationAdvisors";
import Foundation from "@/components/sections/AboutUS/Foundation";
import FoundationSecretariatBanner from "@/components/sections/AboutUS/FoundationSecretariatBanner";
import ScientificAndSustainabilityAdvisors from "@/components/sections/AboutUS/ScientificAndSustainabilityAdvisors";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <FoundationSecretariatBanner />
      <AboutPatrons />
      <AboutOurTeam />
      <Foundation />
      <BordOfDirectors />
      {/* <AboutOurAmbassadors /> */}
      <ScientificAndSustainabilityAdvisors />
      <EducationAdvisors />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default AboutUs;
