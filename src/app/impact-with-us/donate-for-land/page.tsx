import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";
import DonateForLandHero from "./DonateForLandHero";
import DonateForLandAction from "./DonateForLandAction";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";

function GeneralFunding() {
  return (
    <div>
      <Navbar />
      <DonateForLandHero />
      <DonateForLandAction />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default GeneralFunding;
