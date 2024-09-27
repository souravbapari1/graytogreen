import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";
import EndowmentHero from "./EndowmentHero";
import EndowmentAction from "./EndowmentAction";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";

function page() {
  return (
    <div>
      <Navbar />
      <EndowmentHero />
      <EndowmentAction />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
