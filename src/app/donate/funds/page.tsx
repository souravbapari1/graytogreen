import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { montserrat } from "@/fonts/font";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FundingDonateBox from "../box/FundingBox";
import { notFound } from "next/navigation";

function page({ searchParams }: { searchParams: any }) {
  if (!searchParams.reason) {
    return notFound();
  }
  return (
    <div className="w-full min-h-screen h-full flex justify-center items-center bg-gray-100 select-none">
      <div className="flex md:flex-row flex-col justify-center items-center relative">
        <div className="w-80 md:h-96 h-52  rounded-xl  py-3  md:-mr-10 overflow-hidden md:mb-0 -mb-8 relative ">
          <div
            className="w-full h-full bg-primary shadow-md   rounded-xl bg-cover bg-center bg-no-repeat relative overflow-hidden"
            // style={{
            //   backgroundImage: `url(${genPbFiles(
            //     project,
            //     project.preview_image
            //   )})`,
            // }}
          >
            <div
              className={cn(
                "w-full h-full p-5 bg-gradient-to-t from-black to-transparent absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end items-end",
                montserrat.className
              )}
            >
              <div className="flex flex-col justify-start items-start w-full">
                <div className="flex justify-start items-start">
                  <div className="text-white/90 text-xl font-semibold md:pr-9">
                    {searchParams.reason}
                  </div>
                </div>
                <p className="text-[10px] text-white/80 mt-2 md:pr-9 md:mb-0 mb-4 ">
                  With your donation, you help us expand our global network,
                  train children at our academies to become Climate Justice
                  Ambassadors, and plant more trees. Even with small
                  contributions we can achieve a lot - and every donation brings
                  us a little closer to our goals. Thank you for your
                  contribution!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "w-80 md:h-96 bg-white z-20 p-5 rounded-xl shadow-md shadow-gray-400/20",
            montserrat.className
          )}
        >
          <FundingDonateBox reason={searchParams.reason} />
        </div>
        <Image
          alt=""
          src="/assets/brand-shape.png"
          width={1040}
          height={1040}
          className="absolute -top-8 md:block hidden -right-16 h-16 w-16 object-contain "
        />
      </div>
    </div>
  );
}

export default page;
