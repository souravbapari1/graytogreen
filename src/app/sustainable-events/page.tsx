import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import GiveYouthVoice from "@/components/sections/SustainableEvents/GiveYouthVoice";
import SustainableEventsHero from "@/components/sections/SustainableEvents/SustainableEventsHero";
import TreeCounter from "@/components/sections/SustainableEvents/TreeCounter";
import TreeVouchers from "@/components/sections/SustainableEvents/TreeVouchers";
import React from "react";

function SustainableEvents() {
  return (
    <div>
      <Navbar />
      <SustainableEventsHero />
      <GiveYouthVoice />
      <TreeCounter />
      <TreeVouchers />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default SustainableEvents;
