import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";
import BeVolunteerHero from "./BeVolunteerHero";
import BeVolunteerAction from "./BeVolunteerAction";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Footer from "@/components/sections/Footer/Footer";

function BeVolunteer() {
  return (
    <div>
      <Navbar />
      <BeVolunteerHero />
      <BeVolunteerAction />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default BeVolunteer;
