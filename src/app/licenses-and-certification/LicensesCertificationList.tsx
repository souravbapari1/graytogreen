import { montserrat } from "@/fonts/font";
import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa";

function LicensesCertificationList() {
  return (
    <div className={`container ${montserrat.className}  my-20`}>
      <h1 className="font-bold text-4xl text-center ">
        Licenses & Certificates
      </h1>
      <div className="flex flex-col max-w-[800px] mx-auto gap-10 mt-20">
        {Array.from({ length: 10 }).map((_, i) => {
          return (
            <div
              className="flex justify-between items-center md:flex-row flex-col md:text-left text-center "
              key={i}
            >
              <div className="">
                <h2
                  className={`${montserrat.className} md:text-2xl font-bold text-gray-900`}
                >
                  Certificate {2002 + i}
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
  );
}

export default LicensesCertificationList;
