import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GeneralFunding } from "./genralfunding";
import { strApi } from "@/graphql/client";

function GeneralFundingAction({
  description,
  applyLink,
  conatctInfo,
}: {
  description?: string;
  applyLink?: string;
  conatctInfo?: GeneralFunding["contact"];
}) {
  return (
    <div className={`py-20 ${montserrat.className}`}>
      <div className="container flex flex-col gap-5 justify-center items-center">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: description || "" }}
        />
        <Link className="donateBtn py-4 px-10 mt-10" href={applyLink || "#"}>
          Apply Now
        </Link>
      </div>
      {conatctInfo && (
        <div className="flex container justify-start md:flex-row flex-col items-center  md:gap-20 gap-10   mt-28  ">
          <div className="">
            <Image
              src={strApi + conatctInfo?.personImage.url}
              width={1000}
              height={1000}
              alt=""
              className="w-72 h-96 object-cover rounded-3xl"
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-8 ">
            <h1 className="text-xl font-bold">
              {conatctInfo?.title || "Contact Us"}
            </h1>
            <p className="">
              Email:{" "}
              <Link href="#" className="text-main">
                {conatctInfo.email}
              </Link>
            </p>
            <p className="">
              Tel:{" "}
              <Link href="#" className="text-main">
                {conatctInfo.mobileNo}
              </Link>
            </p>
            <Link
              className="donateBtn py-3 capitalize shadow-none"
              href={conatctInfo.bookMeetLink}
            >
              Book 15 min Meeting
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default GeneralFundingAction;
