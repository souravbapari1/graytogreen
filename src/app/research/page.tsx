import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";

import ResearchCard from "@/components/sections/Research/ResearchCard";

import { montserrat } from "@/fonts/font";
import Link from "next/link";
import React from "react";

function ResearchPage() {
  return (
    <div>
      <Navbar />

      <div className="bg-green-50/50 w-full   py-20 ">
        <div className="container gap-10 ">
          <h1
            className={`${montserrat.className} md:text-4xl text-3xl text-center font-bold `}
          >
            <span className="text-main">Ongoing</span> Research
          </h1>
          <div
            className={`flex justify-center items-center md:gap-6 gap-3 ${montserrat.className} mt-10 md:text-base text-sm font-bold`}
          >
            {["Active", "Completed", "Restoration", "Planting"].map((e) => (
              <p className={`${e == "Active" ? "underline text-main" : null}`}>
                {e}
              </p>
            ))}
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 gap-y-5 mt-10">
            {Array.from({ length: 6 }).map(() => {
              return <ResearchCard />;
            })}
          </div>
          <div className="w-full flex justify-center items-center pt-10">
            <Link href="#" className="donateBtn py-3">
              Load More
            </Link>
          </div>
        </div>
      </div>

      <FooterTop />
      <Footer />
    </div>
  );
}

export default ResearchPage;
