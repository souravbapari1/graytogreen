import AboutOurTeam from "@/components/sections/AboutUS/AboutOurTeam";
import ScientificAdvisors from "@/components/sections/AboutUS/ScientificAdvisors";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import OurSolution from "@/components/sections/Partners/OurSolution";
import PartnersHero from "@/components/sections/Partners/PartnersHero";
import ServiceAdditionalPartnership from "@/components/sections/Partners/ServiceAdditionalPartnership";
import MembershipView from "@/components/sections/Services/MembershipView";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <PartnersHero />
      <OurSolution />
      <ServiceAdditionalPartnership />
      <br />
      <ScientificAdvisors title="Our Team in Partenerships departement" />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
