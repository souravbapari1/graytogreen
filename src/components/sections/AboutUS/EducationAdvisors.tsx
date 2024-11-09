import { AboutUse } from "@/app/about-us/aboutus";
import { Button } from "@/components/ui/button";
import { lora, montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";

function EducationAdvisors({
  data,
}: {
  data?: AboutUse["educationalAdvisors"];
}) {
  if (!data) {
    return <></>;
  }
  return (
    <div className="container flex justify-center items-center flex-col my-32">
      <h1
        className={`${montserrat.className} md:text-4xl text-2xl font-bold text-center`}
        dangerouslySetInnerHTML={{ __html: data?.title || "" }}
      />
      <p
        className="text-center  max-w-[800px] mt-5 "
        dangerouslySetInnerHTML={{ __html: data?.description || "" }}
      />

      <div className="grid lg:grid-cols-3 gap-10 mt-10 lg:px-20">
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
                <Link href={e.linkdinProfile} target="_blank">
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

export default EducationAdvisors;
