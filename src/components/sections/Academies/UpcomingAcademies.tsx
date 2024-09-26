import { montserrat } from "@/fonts/font";
import Link from "next/link";
import React from "react";
import { BiCategory } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

function UpcomingAcademies() {
  return (
    <div className="container">
      <h1
        className={`lg:text-4xl text-3xl font-bold text-main   ${montserrat.className} text-center`}
      >
        Upcoming Academies
      </h1>
      <p className={`${montserrat.className} text-center mt-5 mb-10 text-xl`}>
        Your participation is free! Anyone aged 8-14 years is invited.
      </p>
      <div
        className={` grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:mt-6 mt-4 ${montserrat.className}`}
      >
        {Array.from({ length: 12 }).map((_, i) => {
          return (
            <Link href="/academies/greenkidsacademy/view/page">
              <div
                className=" bg-green-50/50   rounded-xl p-7 hover:shadow-md border border-green-50 shadow-green-950/10 transition-all flex flex-col justify-start items-start gap-2"
                key={i}
              >
                <p className="font-semibold text-green-950">
                  RiArrowDropRightLine
                </p>
                <div className=" flex justify-start items-center gap-2">
                  <BiCategory />
                  <p>2024-11-10</p>
                </div>
                <div className=" flex justify-start items-center gap-2">
                  <FaRegHeart />
                  <p>21508, Gelenary,DE</p>
                </div>
                <div className=" flex justify-start items-center gap-2">
                  <MdOutlineLocationOn />
                  <p>MdOutlineLocationOn</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default UpcomingAcademies;
