import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";
import ApplyForm from "./ApplyForm,";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";

function ResearchApply() {
  return (
    <div>
      <div className="w-screen h-screen overflow-auto flex-col  md:bg-[url('https://forms.plant-for-the-planet.org/wp-content/uploads/2022/05/We-make-ourselveds-heard-Tinified.jpg')] bg-no-repeat bg-cover bg-center flex justify-start items-center">
        <div className="block  md:mb-40">
          <div className="md:h-60"></div>
          <div className="w-screen max-w-[700px]  md:mt-24 bg-white border-t-[5px] md:shadow-2xl md:rounded-3xl p-8 border-primary">
            <br />
            <Link href="/" className="mt-6 mb-6">
              <Image
                src="/logo/main-logo.png"
                width={200}
                height={200}
                alt="logo"
                className="w-auto mx-auto object-contain md:h-[65px] lg:-mt-3 h-16 py-3 mb:pb-5"
              />
            </Link>
            <br />
            <hr />
            <div className={montserrat.className}>
              <h1 className="text-2xl font-bold mt-8 mb-3">Registration for</h1>
              <p>T | November 9, 2024</p>
              <br />
              <ApplyForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResearchApply;
