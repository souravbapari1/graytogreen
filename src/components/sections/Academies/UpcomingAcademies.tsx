import { UpcomingAcademy } from "@/app/academies/greenkidsacademy/GreenKidsAcademys";
import { montserrat } from "@/fonts/font";
import Link from "next/link";
import React from "react";
import { BiCategory } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

function UpcomingAcademies({
  data,
  desc,
  title,
}: {
  data?: UpcomingAcademy[];
  title?: string;
  desc?: string;
}) {
  return (
    <div className="container">
      <h1
        className={`lg:text-4xl text-3xl font-bold text-main   ${montserrat.className} text-center`}
        dangerouslySetInnerHTML={{ __html: title || "Upcoming academies" }}
      />
      <p
        className={`${montserrat.className} text-center mt-5 mb-10 text-xl`}
        dangerouslySetInnerHTML={{
          __html: desc || "Explore our academies and register",
        }}
      />
      <div
        className={` grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:mt-6 mt-4 ${montserrat.className}`}
      >
        {data?.map((e, i) => {
          return (
            <Link href={"/academies/greenkidsacademy/view/" + e.slug}>
              <div
                className=" bg-green-50/50   rounded-xl p-7 hover:shadow-md border border-green-50 shadow-green-950/10 transition-all flex flex-col justify-start items-start gap-2"
                key={i}
              >
                <p
                  className="font-semibold text-green-950"
                  dangerouslySetInnerHTML={{ __html: e.title }}
                />
                <div className=" flex justify-start items-center gap-2">
                  <BiCategory />
                  <p>{e.title}</p>
                </div>
                <div className=" flex justify-start items-center gap-2">
                  <FaRegHeart />
                  <p>{e.languge}</p>
                </div>
                <div className=" flex justify-start items-center gap-2">
                  <MdOutlineLocationOn />
                  <p>{e.location}</p>
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
