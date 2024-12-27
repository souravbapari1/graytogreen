import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SupportResearchAndExperiment } from "./SupportResearchAndExperiment";
import { strApi } from "@/graphql/client";

function SupportResearchAndEpirementAction({
  data,
}: {
  data: SupportResearchAndExperiment;
}) {
  return (
    <div className={`py-20 ${montserrat.className}`}>
      <div className="container flex flex-col gap-5 justify-center items-center">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        <Link
          className="donateBtn py-4 px-10 mt-10"
          href={data.applyLink.linkUrl}
        >
          {data.applyLink.linkText}
        </Link>
      </div>
      <div className="flex container justify-start md:flex-row flex-col items-center  md:gap-20 gap-10   mt-28  ">
        <div className="">
          <Image
            src={strApi + data.contact.personImage.url}
            width={1000}
            height={1000}
            alt=""
            className="w-72 h-96 object-cover rounded-3xl"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-8 ">
          <h1 className="text-xl font-bold">{data.contact.title}</h1>
          <p className="">
            Email:{" "}
            <Link href={"mailto:" + data.contact.email} className="text-main">
              {data.contact.email}
            </Link>
          </p>
          <p className="">
            Tel:{" "}
            <Link href={"tel:" + data.contact.mobileNo} className="text-main">
              {data.contact.mobileNo}
            </Link>
          </p>
          <Link
            className="donateBtn py-3 capitalize shadow-none"
            href={data.contact.bookMeetLink}
          >
            Book 15 min Meeting
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SupportResearchAndEpirementAction;
