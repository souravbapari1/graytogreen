import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import TransparencyHero from "@/components/sections/Transparency/TransparencyHero";
import TransparencyReports from "@/components/sections/Transparency/TransparencyReports";
import { Header } from "@radix-ui/react-accordion";
import React from "react";
import CertificationHero from "./CertificationHero";
import LicensesCertificationList from "./LicensesCertificationList";

function page() {
  return (
    <div>
      <Navbar />

      <CertificationHero />
      <LicensesCertificationList />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
