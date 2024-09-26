import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ViewAcademy from "./ViewAcademy";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Footer from "@/components/sections/Footer/Footer";

function Page() {
  return (
    <div>
      <Navbar />
      <ViewAcademy />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default Page;
