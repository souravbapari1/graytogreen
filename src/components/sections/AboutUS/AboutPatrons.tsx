import { AboutUse } from "@/app/about-us/aboutus";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function AboutPatrons({ data }: { data?: AboutUse["parteners"] }) {
  if (!data) {
    return <></>;
  }
  const { title, description } = data || {};
  return (
    <div className="container mt-20 flex justify-center items-center flex-col gap-6 ">
      <h1
        className={`${montserrat.className} text-5xl font-bold text-center text-main`}
      >
        {title || "Patrons"}
      </h1>
      <p className="text-center text-xl max-w-[800px] ">
        {description ||
          "We would like to thank our patrons who have accompanied  from the very beginning."}
      </p>
      <div className="grid lg:grid-cols-3 gap-10 mt-10">
        {data.member.map((e, i) => {
          return (
            <div
              className="flex flex-col justify-center items-center text-center"
              key={e.id}
            >
              <div className="">
                <div className=" bg-gradient-to-r from-green-600 to-green-900 p-3 rounded-full">
                  <Image
                    src={strApi + e.image.url}
                    height={3000}
                    alt=""
                    width={3000}
                    className=" object-cover rounded-full w-80 h-80  border-main"
                  />
                </div>
              </div>
              <h1
                className="text-2xl font-bold mt-8 mb-3"
                dangerouslySetInnerHTML={{ __html: e.name || "" }}
              />
              <p dangerouslySetInnerHTML={{ __html: e.about || "" }} />
              <div className="flex  flex-row gap-4 mt-5 text-gray-500 ">
                {/* <FaSquareXTwitter className="hover:text-gray-900" size={18} /> */}
                <Link href={e.linkdinProfile || ""} target="_blank">
                  <FaLinkedinIn className="hover:text-gray-900" size={18} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutPatrons;
