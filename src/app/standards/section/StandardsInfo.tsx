import { donations } from "@/app/statistics-and-records/StatisticsAndRecords";
import { montserrat } from "@/fonts/font";
import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa";

function StandardsInfo() {
  return (
    <div className="container flex justify-center flex-col items-center">
      <div className="max-w-[900px] w-full">
        <h1
          className={`${montserrat.className} md:text-left text-center text-3xl font-bold mt-20`}
        >
          Transparency Reports
        </h1>
        <h1
          className={`${montserrat.className} text-primary md:text-left text-center text-3xl font-bold mt-10`}
        >
          Requirements
        </h1>

        <p className="mt-3 md:text-left text-center">
          Projects must meet at least 27 of the 32 main standards (including all
          mandatory standards- marked in beige) to receive donations via the
          Plant-for-the-Planet platform. To qualify as a top project, you must
          meet at least 12 of the 19 top standards.
        </p>
        <div className="flex flex-col gap-10 mt-20">
          {Array.from({ length: 3 }).map((_, i) => {
            return (
              <div
                className="flex justify-between items-center md:flex-row flex-col md:text-left text-center "
                key={i}
              >
                <div className="">
                  <h2
                    className={`${montserrat.className} md:text-2xl font-bold text-gray-900`}
                  >
                    Transparency Report 2022
                  </h2>
                  <p
                    className={`${montserrat.className} text-gray-500 md:text-lg py-2 font-bold`}
                  >
                    English
                  </p>
                </div>
                <Link
                  href="#"
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
          Standards of Plastic Offset Projects
        </h1>
        <h1
          className={`${montserrat.className} text-primary md:text-left text-center text-3xl font-bold mt-10`}
        >
          Requirements
        </h1>

        <p className="mt-3 md:text-left text-center">
          Projects must meet at least 27 of the 32 main standards (including all
          mandatory standards- marked in beige) to receive donations via the
          Plant-for-the-Planet platform. To qualify as a top project, you must
          meet at least 12 of the 19 top standards.
        </p>
        <div className="flex flex-col gap-10 mt-20">
          {Array.from({ length: 3 }).map((_, i) => {
            return (
              <div
                className="flex justify-between items-center md:flex-row flex-col md:text-left text-center "
                key={i}
              >
                <div className="">
                  <h2
                    className={`${montserrat.className} md:text-2xl font-bold text-gray-900`}
                  >
                    Transparency Report 2022
                  </h2>
                  <p
                    className={`${montserrat.className} text-gray-500 md:text-lg py-2 font-bold`}
                  >
                    English
                  </p>
                </div>
                <Link
                  href="#"
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
