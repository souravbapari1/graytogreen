import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import BlogCard from "./BloCard";

function Blogs() {
  return (
    <div>
      <Navbar />
      <div className="fixed lg:hidden flex bottom-7 right-0 text-main w-14 h-14 border rounded-s-xl shadow-lg border-main/20 bg-white/80 backdrop-blur-lg  justify-center items-center">
        <BiSearch size={25} />
      </div>
      <div className="flex justify-center items-center md:gap-10 gap-5 md:mt-20 mt-10  bg-white flex-wrap  ">
        {[
          "All",
          "Platform",
          "Children & Youth",
          "Restoration",
          "Global Board",
        ].map((e, i) => {
          return (
            <p
              className={`${montserrat.className} ${
                i == 0 ? "underline text-main" : null
              } lg:text-base text-sm font-bold hover:underline text-gray-600 text-nowrap underline-offset-1 under cursor-pointer`}
            >
              {e}
            </p>
          );
        })}
      </div>

      <div className="container grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10">
        {Array.from({ length: 9 }).map((_, i) => {
          return <BlogCard key={i} />;
        })}
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default Blogs;
