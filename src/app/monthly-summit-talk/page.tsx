import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import MonthlySummitTalkContent from "@/components/sections/MonthlySummitTalk/MonthlySummitTalkContent";
import MonthlySummitTalkHero from "@/components/sections/MonthlySummitTalk/MonthlySummitTalkHero";
import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <MonthlySummitTalkHero />
      <MonthlySummitTalkContent />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
