import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
function VerificationStep() {
  return (
    <div className={`container py-20 ${montserrat.className}`}>
      <h1 className="text-3xl font-bold text-center">
        Quality Control and Verification Measures
      </h1>
      <div className="grid md:grid-cols-3 gap-20 mt-20">
        {[
          {
            title: "Satellite imagery",
            desc: "TimeTravel allows a year-to-year comparison at a glance",
            linkText: "Check it out here",
            href: "#",
          },
          {
            title: "Standardized reporting",
            desc: "Check out our free monitoring tool TreeMapper",
            linkText: "Learn More",
            href: "#",
          },
          {
            title: "On-site reviews",
            desc: "The field verification process allows us insights into the projects.",
            linkText: "See Standards",
            href: "#",
          },
        ].map((e, i) => {
          return (
            <div className="flex flex-col gap-3">
              <div className="flex items-center">
                <div className="w-10">
                  <GoCheckCircleFill size={24} className="text-primary" />
                </div>
                <h1 className="text-2xl font-bold">{e.title}</h1>
              </div>
              <p className="text-lg text-gray-500">{e.desc}</p>
              <Link
                href={e.href}
                className="text-primary text-base font-bold flex items-center gap-4"
              >
                {e.linkText}
                <MdOutlineKeyboardDoubleArrowRight />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VerificationStep;
