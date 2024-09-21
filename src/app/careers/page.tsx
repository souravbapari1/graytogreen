import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Careers() {
  return (
    <div>
      <Navbar />
      <div className={`${montserrat.className} container md:py-20 py-14`}>
        <h1 className="font-bold lg:text-5xl text-2xl text-center">
          Careers at Gray To Green
        </h1>
        <p className="text-center md:mt-5 md:text-base text-xs">
          Join us to create solutions for climate crisis!
        </p>
        <div className="grid lg:grid-cols-4 gap-5 mt-10">
          {Array.from({ length: 20 }).map((e) => {
            return (
              <Link
                href="/careers/page"
                className="flex justify-center items-center flex-col w-full"
              >
                <Image
                  src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/01/planet_dev.jpg"
                  width={1000}
                  height={1000}
                  className="h-48 w-auto"
                  alt=""
                />
                <div className="">
                  <p className="text-lg font-bold">
                    Lorem ipsum dolor sit amet.
                  </p>
                  <p className="text-lg ">Worldwide</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default Careers;
