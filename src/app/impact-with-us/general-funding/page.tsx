import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";
import GeneralFundingAction from "./GeneralFundingAction";
import GeneralFundingHero from "./GeneralFundingHero";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";

function GeneralFunding() {
  return (
    <div>
      <Navbar />
      <GeneralFundingHero />
      <GeneralFundingAction />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default GeneralFunding;
