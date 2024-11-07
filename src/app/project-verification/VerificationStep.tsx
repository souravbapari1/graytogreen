import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { VerificationAndReview } from "./VerificationAndReviewData";
function VerificationStep({
  data,
}: {
  data?: VerificationAndReview["verificationSteps"];
}) {
  if (!data) {
    return <></>;
  }
  return (
    <div className={`container py-20 ${montserrat.className}`}>
      <h1 className="text-3xl font-bold text-center">
        Quality Control and Verification Measures
      </h1>
      <div className="grid md:grid-cols-3 gap-20 mt-20">
        {data.map((e, i) => {
          return (
            <div className="flex flex-col gap-3" key={e.id}>
              <div className="flex items-center">
                <div className="w-10">
                  <GoCheckCircleFill size={24} className="text-primary" />
                </div>
                <h1 className="text-2xl font-bold">{e.title}</h1>
              </div>
              <p className="text-lg text-gray-500">{e.description}</p>
              {e.linkUrl && (
                <Link
                  href={e.linkUrl}
                  className="text-primary text-base font-bold flex items-center gap-4"
                >
                  {e.linkText}
                  <MdOutlineKeyboardDoubleArrowRight />
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VerificationStep;
