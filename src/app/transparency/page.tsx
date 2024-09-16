import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import TransparencyHero from "@/components/sections/Transparency/TransparencyHero";
import TransparencyReports from "@/components/sections/Transparency/TransparencyReports";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa";

function Transparency() {
  return (
    <div>
      <Navbar />
      <TransparencyHero />
      <TransparencyReports />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default Transparency;
