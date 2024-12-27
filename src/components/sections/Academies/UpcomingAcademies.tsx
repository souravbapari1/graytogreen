import { UpcomingAcademy } from "@/app/academies/greenkidsacademy/GreenKidsAcademys";
import { montserrat } from "@/fonts/font";
import { isExpiryValid } from "@/helper/validate";
import { cn } from "@/lib/utils";
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
        className={` grid lg:grid-cols-3 md:grid-cols-2 gap-5 md:mt-6 mt-4 ${montserrat.className}`}
      >
        {data?.map((e, i) => {
          const isValid = isExpiryValid(e.registerationEndDate);
          const isFull = e.maxParticipents <= (e.applications || 0);
          const validate = () => {
            if (isValid) {
              return isFull;
            }
            return true;
          };
          return (
            <Link
              href={
                validate() ? "#" : "/academies/greenkidsacademy/view/" + e.slug
              }
            >
              <div
                className={cn(
                  " bg-green-600/10 text-primary text-sm  relative overflow-hidden rounded-xl p-5 hover:shadow-md border-2 border-green-600/10  shadow-green-450/50 transition-all flex flex-col justify-start items-start gap-2",
                  validate() &&
                    "cursor-not-allowed bg-gray-200 text-gray-600 border-gray-300 opacity-50"
                )}
                key={i}
              >
                {validate() && (
                  <div className="absolute top-0 right-0 w-full h-full z-0  p-5 flex justify-center items-center">
                    <p className=" font-semibold text-red-600 -rotate-12 bg-red-300/20 border-2  border-red-300 px-6 py-2 rounded-lg opacity-100  relative text-sm backdrop-blur-sm  block">
                      {isFull ? "Registration Full" : "Registration Closed"}
                    </p>
                  </div>
                )}
                <div className="flex justify-between items-center gap-2 mb-2">
                  <p className="text-xs font-bold bg-primary px-3 py-1 rounded-md text-white shadow-sm">
                    {e.pricing.toUpperCase()}
                  </p>
                  {e.amount > 0 && (
                    <p className="text-xs font-bold bg-white text-primary px-3 py-1 rounded-md  shadow-sm">
                      {e.amount} OMR
                    </p>
                  )}
                </div>

                <div className=" flex justify-start items-center gap-2 font-bold">
                  <div className="w-4">
                    <BiCategory />
                  </div>
                  <p>{e.title}</p>
                </div>
                <div className=" flex justify-start items-center gap-2 ">
                  <div className="w-4">
                    <FaRegHeart />
                  </div>
                  <p>{e.languge}</p>
                </div>
                <div className=" flex justify-start items-center gap-2">
                  <div className="w-4">
                    <MdOutlineLocationOn />
                  </div>
                  <p className="line-clamp-1">
                    {e.locationType == "offline" ? e.location : "Online"}
                  </p>
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
