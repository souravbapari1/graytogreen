import { montserrat } from "@/fonts/font";
import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa";
import { Standard } from "../standerds";
import { strApi } from "@/graphql/client";

function StandardsInfo({ data }: { data?: Standard }) {
  if (!data) {
    return <></>;
  }
  return (
    <div className="container flex justify-center flex-col items-center">
      <div className="max-w-[900px] w-full">
        <h1
          className={`${montserrat.className} md:text-left text-center text-3xl font-bold mt-20`}
        >
          {data.plantingReportsTitle}
        </h1>
        <h1
          className={`${montserrat.className} text-primary md:text-left text-center text-3xl font-bold mt-10`}
        >
          Requirements
        </h1>

        <p className="mt-3 md:text-left text-center">
          {data.plantingReportsDesc}
        </p>
        <div className="flex flex-col gap-10 mt-20">
          {data.plasticReports.map((e, i) => {
            return (
              <div
                className="flex justify-between items-center md:flex-row flex-col md:text-left text-center "
                key={i}
              >
                <div className="">
                  <h2
                    className={`${montserrat.className} md:text-2xl font-bold text-gray-900`}
                  >
                    {e.title}
                  </h2>
                  <p
                    className={`${montserrat.className} text-gray-500 md:text-sm py-2 font-bold`}
                  >
                    {e.description}
                  </p>
                </div>
                <Link
                  target="_blank"
                  href={strApi + e.file.url}
                  className="donateBtn py-3 md:text-base text-xs flex justify-center md:mt-0 mt-2 items-center gap-3"
                >
                  <FaDownload />{" "}
                  <span className={montserrat.className}>Download</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-[900px] w-full mt-20">
        <h1
          className={`${montserrat.className} md:text-left text-center text-3xl font-bold mt-20`}
        >
          {data.plantingReportsTitle}
        </h1>
        <h1
          className={`${montserrat.className} text-primary md:text-left text-center text-3xl font-bold mt-10`}
        >
          Requirements
        </h1>

        <p className="mt-3 md:text-left text-center">
          {data.plantingReportsDesc}
        </p>
        <div className="flex flex-col gap-10 mt-20">
          {data.plasticReports.map((e, i) => {
            return (
              <div
                className="flex justify-between items-center md:flex-row flex-col md:text-left text-center "
                key={i}
              >
                <div className="">
                  <h2
                    className={`${montserrat.className} md:text-2xl font-bold text-gray-900`}
                  >
                    {e.title}
                  </h2>
                  <p
                    className={`${montserrat.className} text-gray-500 md:text-sm py-2 font-bold`}
                  >
                    {e.description}
                  </p>
                </div>
                <Link
                  target="_blank"
                  href={strApi + e.file.url}
                  className="donateBtn py-3 md:text-base text-xs flex justify-center md:mt-0 mt-2 items-center gap-3"
                >
                  <FaDownload />{" "}
                  <span className={montserrat.className}>Download</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StandardsInfo;
