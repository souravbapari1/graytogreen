import { montserrat } from "@/fonts/font";
import { MembershipItem } from "@/interface/membership";
import { genPbFiles } from "@/request/actions";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function MembershipPricing({ data }: { data: MembershipItem[] }) {
  return (
    <div className="flex justify-center py-20 items-center w-full">
      <div className="max-w-[1200px] w-full">
        <div className="container grid md:grid-cols-3 xl:gap-12 gap-6">
          {data.map((e, i) => {
            return (
              <div
                key={i + e.id}
                className="w-full   bg-main/10 rounded-3xl overflow-hidden "
              >
                <div className="w-full h-48 bg-main/20 border-b-[8px] border-white flex justify-center items-center">
                  <Image
                    src={genPbFiles(e, e.image)}
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
                    <h1 className="font-bold text-xl mb-6">{e.name}</h1>
                    <p className="font-semibold">{e.amount.toFixed(2)} OMR</p>
                    <p className="capitalize">Life Time</p>
                  </div>
                  <Link
                    href={"/membership/apply/" + e.id}
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
