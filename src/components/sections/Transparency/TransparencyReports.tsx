import { Transparency } from "@/app/transparency/transparencies";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa";

function TransparencyReports({
  reports,
}: {
  reports?: Transparency["reports"];
}) {
  if (!reports) {
    return <></>;
  }
  return (
    <div className="container flex justify-center items-center">
      <div className="max-w-[900px] w-full">
        <h1
          className={`${montserrat.className} md:text-left text-center text-3xl font-bold mt-20`}
        >
          Transparency Reports
        </h1>
        <div className="flex flex-col gap-10 mt-20">
          {reports?.map((e, i) => {
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

export default TransparencyReports;
