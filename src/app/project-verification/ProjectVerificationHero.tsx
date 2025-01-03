import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { VerificationAndReview } from "./VerificationAndReviewData";
import { strApi } from "@/graphql/client";

function ProjectVerificationHero({
  data,
  link,
}: {
  data?: VerificationAndReview["banner"];
  link?: string;
}) {
  if (!data) {
    return <></>;
  }
  return (
    <div className="relative w-full overflow-hidden bg-primary/5 py-10">
      <Image
        src="/assets/Lingkaran.svg"
        alt="roubd"
        height={2000}
        width={2000}
        className="w-64 h-64 absolute left-0 -ml-24 mt-40"
      />

      <div className="grid lg:grid-cols-2  gap-8 container mt-10">
        <div className="flex flex-col justify-center">
          <h1
            className={montserrat.className + " lg:text-4xl text-3xl font-bold"}
          >
            {data.title}
          </h1>

          <p
            className={montserrat.className + " text-lg mt-10 mb-8"}
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          <Link className="donateBtn py-3 text-center w-40" href={link || "#"}>
            Learn More
          </Link>
        </div>
        <div className="">
          <div className="relative md:p-10 flex justify-center items-center">
            <div className="w-[90%] h-48 md:h-[350px] bg-green-700/20 absolute -z-[1] lg:-mr-12 -mr-10 rounded-2xl mb-10"></div>
            <Image
              src={strApi + data.bannerImage.url}
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[350px]  rounded-2xl object-cover h-48  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectVerificationHero;
