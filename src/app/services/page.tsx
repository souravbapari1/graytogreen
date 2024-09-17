import AboutPatrons from "@/components/sections/AboutUS/AboutPatrons";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import MembershipView from "@/components/sections/Services/MembershipView";
import OurSolution from "@/components/sections/Services/OurSolution";
import ServiceAdditionalPartnership from "@/components/sections/Services/ServiceAdditionalPartnership";
import ServicesHero from "@/components/sections/Services/ServicesHero";
import ServicesView from "@/components/sections/Services/ServicesView";
import { montserrat } from "@/fonts/font";
import Link from "next/link";
import React from "react";

function Services() {
  return (
    <>
      <Navbar />
      <ServicesHero />
      <OurSolution />
      <ServiceAdditionalPartnership />
      <ServicesView />
      <AboutPatrons title="Our Team" />
      <MembershipView />
      <FooterTop />
      <Footer />
    </>
  );
}

export default Services;
