import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function MembershipPricing() {
  return (
    <div className="flex justify-center py-20 items-center w-full">
      <div className="max-w-[1200px] w-full">
        <div className="container grid md:grid-cols-3 xl:gap-12 gap-6">
          {Array.from({ length: 3 }).map((_, i) => {
            return (
              <div className="w-full   bg-main/10 rounded-3xl overflow-hidden ">
                <div className="w-full h-48 bg-main/20 border-b-[8px] border-white flex justify-center items-center">
                  <Image
                    src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/11/seed-icon.png"
                    alt=""
                    width={1200}
                    height={1200}
                    className="h-20 w-auto"
                  />
                </div>
                <div
                  className={`${montserrat.className} text-center  p-3 pt-10 pb-3 flex justify-between flex-col items-center`}
                >
                  <div className="">
                    <h1 className="font-bold text-xl mb-6">
                      Donor-Circle "Seed"
                    </h1>
                    <p className="font-semibold">$3</p>
                    <p className="capitalize">per month</p>
                  </div>
                  <Link
                    href="/"
                    className="donateBtn shadow-2xl py-3 mt-8 mb-7 md:px-6 px-8"
                  >
                    Continue
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MembershipPricing;
