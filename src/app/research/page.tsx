import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";

import ResearchCard from "@/components/sections/Research/ResearchCard";

import { montserrat } from "@/fonts/font";
import Link from "next/link";
import React from "react";
import ResearchesList from "./ResearchesList";
import OngoingResearch from "./ResearchesList";

function ResearchPage() {
  return (
    <div>
      <Navbar />
      <OngoingResearch />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default ResearchPage;
