"use client";
import { montserrat } from "@/fonts/font";
import React, { useState } from "react";
import HowReviewsWork from "./steps/HowReviewsWork";
import HowToApply from "./steps/HowToApply";
import YourBenefits from "./steps/YourBenefits";
import { cn } from "@/lib/utils";
import { VerificationAndReview } from "./VerificationAndReviewData";

function VerificationApplyStep({
  data,
}: {
  data?: VerificationAndReview["applyInfoSteps"];
}) {
  if (!data) {
    return <></>;
  }
  const [index, setIndex] = useState(0);
  return (
    <div className="bg-gray-50 py-20">
      <div className={`container ${montserrat.className}`}>
        <h1 className="text-3xl font-bold text-center">{data.title}</h1>
        <p
          className="max-w-[800px] mx-auto mt-7"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
        <div className="max-w-[900px] mx-auto mt-14 bg-white min-h-96 rounded-xl ">
          <div className="w-full h-14  grid grid-cols-3 md:text-sm  overflow-hidden select-none">
            <h1
              onClick={() => {
                setIndex(0);
              }}
              className={cn(
                "font-bold h-full flex justify-center items-center text-center border-b-[3px] border-white hover:border-primary cursor-pointer",
                `${index == 0 ? "border-primary" : null}`
              )}
            >
              How reviews work
            </h1>
            <h1
              onClick={() => {
                setIndex(1);
              }}
              className={cn(
                "font-bold h-full flex justify-center items-center text-center border-b-[3px] border-white hover:border-primary cursor-pointer",
                `${index == 1 ? "border-primary" : null}`
              )}
            >
              How to apply
            </h1>
            <h1
              onClick={() => {
                setIndex(2);
              }}
              className={cn(
                "font-bold h-full flex justify-center items-center text-center border-b-[3px] border-white hover:border-primary cursor-pointer",
                `${index == 2 ? "border-primary" : null}`
              )}
            >
              Your benefits
            </h1>
          </div>
          <div className="p-4">
            {
              [
                <HowReviewsWork content={data.howReviewsWork} />,
                <HowToApply content={data.howToApply} />,
                <YourBenefits content={data.yourBenefits} />,
              ][index]
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerificationApplyStep;
