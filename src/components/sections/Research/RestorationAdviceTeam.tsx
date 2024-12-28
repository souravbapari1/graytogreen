import { ResearchesLab } from "@/app/academies/researches-labs/ResearchesLabs";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

function RestorationAdviceTeam({ data }: { data?: ResearchesLab["about"] }) {
  if (!data) {
    return <></>;
  }
  return (
    <div className="bg-green-50/50 md:py-20 py-5 mt-10">
      <div className="container grid lg:grid-cols-2 gap-8">
        <div className="mt-16">
          <h1
            className={`md:text-4xl text-2xl font-bold ${montserrat.className}`}
            dangerouslySetInnerHTML={{ __html: data.title || "" }}
          />
          <p
            className=" mt-5"
            dangerouslySetInnerHTML={{ __html: data.description || "" }}
          />
          <Link
            href={data.linkUrl}
            className="uppercase font-bold  md:text-lg text-sm text-main mt-11 flex md:justify-start justify-center items-center"
          >
            {data.linkText} <RiArrowDropRightLine size={35} />
          </Link>
        </div>
        <div className="">
          <div className="relative md:p-10 flex justify-center items-center">
            <div className="w-[90%] h-48 md:h-[320px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
            <Image
              src={strApi + data.image.url}
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[320px]  rounded-2xl object-cover h-48  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestorationAdviceTeam;
