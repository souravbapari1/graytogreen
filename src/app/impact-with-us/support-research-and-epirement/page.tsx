import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";
import SupportResearchAndEpirementHero from "./SupportResearchAndEpirementHero";
import SupportResearchAndEpirementAction from "./SupportResearchAndEpirementAction";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Footer from "@/components/sections/Footer/Footer";

function SupportResearchAndEpirementPage() {
  return (
    <div>
      <Navbar />
      <SupportResearchAndEpirementHero />
      <SupportResearchAndEpirementAction />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default SupportResearchAndEpirementPage;
