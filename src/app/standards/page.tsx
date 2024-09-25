import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";
import StandersHero from "./section/StandersHero";
import ReviewBoard from "./section/ReviewBoard";
import StandardsInfo from "./section/StandardsInfo";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Footer from "@/components/sections/Footer/Footer";

function Standards() {
  return (
    <div>
      <Navbar />
      <StandersHero />
      <ReviewBoard />
      <StandardsInfo />

      <FooterTop />
      <Footer />
    </div>
  );
}

export default Standards;
