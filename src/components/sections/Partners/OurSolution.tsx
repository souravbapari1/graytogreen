import { PartenerWithUse } from "@/app/partners/partners";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

function OurSolution({ data }: { data?: PartenerWithUse["ourSolution"] }) {
  if (!data) {
    return <></>;
  }
  return (
    <div className="container">
      <h1
        className={`${montserrat.className} lg:text-4xl text-3xl font-bold text-center mt-20`}
      >
        Our <span className="text-main">Solution</span>
      </h1>
      <div>
        {data.map((e, i) => {
          return (
            <div
              className="container grid lg:grid-cols-2 gap-10 mt-12 "
              key={e.id}
            >
              <div
                className={cn(
                  "md:text-left text-center md:mt-20 ",
                  e.align == "right" && "order-2"
                )}
              >
                <h1
                  className={`${montserrat.className} font-extrabold uppercase lg:text-3xl text-xl`}
                  dangerouslySetInnerHTML={{
                    __html: e.title,
                  }}
                />
                <p className="md:text-lg text-gray-600  mt-5">
                  {e.description}
                </p>
                {e.linkUrl && (
                  <Link
                    href={e.linkUrl}
                    className="capitalize font-bold text-main mt-5 flex md:justify-start justify-center items-center"
                  >
                    {e.linkText}
                    <RiArrowDropRightLine size={35} />
                  </Link>
                )}
              </div>

              <div className="relative md:p-10 flex justify-center items-center order-1">
                <div className="w-[90%] h-48 md:h-[280px] bg-green-700/20 absolute -z-[1] lg:ml-12 ml-10 rounded-2xl mb-10"></div>
                <Image
                  src={strApi + e.image.url}
                  width={1200}
                  height={1200}
                  alt=""
                  className="md:w-full w-[90%]  md:h-[280px]  rounded-2xl object-cover h-48  "
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurSolution;
