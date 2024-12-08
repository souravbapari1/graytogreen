import { MembershipPageData } from "@/app/membership/membership";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { IoGiftOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";

function MembershipPlanDetails({ data }: { data: MembershipPageData }) {
  return (
    <div className="">
      <div className="w-full relative mt-20 lg:h-[650px] h-auto">
        <Image
          src="/assets/wave.svg"
          className="w-full absolute bottom-0 right-0 z-10 block  object-fill float-end "
          width={3000}
          height={3000}
          alt=""
        />

        <Image
          src="https://images.squarespace-cdn.com/content/v1/565cf1d6e4b0df45d8c1bb69/1525727750392-9UVS4IIL5WVBL9SYIVI4/JvilleWdLds_Birding_TF+%283%29.JPG"
          className="w-[60%] lg:block hidden h-[650px] object-cover float-end img-hor"
          width={3000}
          height={3000}
          alt=""
        />
        <div
          className={`${montserrat.className} w-full lg:h-[650px]  grid lg:grid-cols-5 lg:absolute relative top-0 right-0`}
        >
          <div className="lg:col-span-3 bg-gradient-to-r lg:pb-36 flex justify-center items-start flex-col text-left  from-green-600 to-green-900 relative lg:arrow_path container py-20 ">
            <h1 className="lg:text-3xl text-xl font-bold text-white uppercase">
              Membership plan details
            </h1>

            <div className="flex flex-col justify-start items-start gap-3 mt-8">
              <div className="flex justify-normal items-center gap-4 text-white">
                <div className="w-8">
                  <div className="h-8 w-8 rounded-full bg-white/10 flex gap-5 justify-center items-center">
                    <IoGiftOutline />
                  </div>
                </div>
                <p className="lg:text-lg md:text-sm text-xs">
                  you will receive a welcome pack (EU only) consisting of:
                </p>
              </div>

              <div className="flex justify-start items-center gap-4 text-white">
                <div className="w-8">
                  <div className="h-8 w-8 rounded-full bg-white/10 flex gap-5 justify-center items-center">
                    <MdOutlineMarkEmailRead />
                  </div>
                </div>
                <p className="lg:text-lg md:text-sm text-xs">
                  we will send you our monthly newsletter with project updates
                  and dates,
                </p>
              </div>

              <div className="flex justify-start items-center gap-4 text-white">
                <div className="w-8">
                  <div className="h-8 w-8 rounded-full bg-white/10 flex gap-5 justify-center items-center">
                    <HiOutlineReceiptTax />
                  </div>
                </div>
                <p className="lg:text-lg md:text-sm text-xs">
                  you will automatically receive a tax-deductible tax receipt in
                  the first quarter of the following year,
                </p>
              </div>

              <div className="flex justify-start items-center gap-4 text-white">
                <div className="w-8">
                  <div className="h-8 w-8 rounded-full bg-white/10 flex gap-5 justify-center items-center">
                    <FaHandHoldingHeart />
                  </div>
                </div>
                <p className="lg:text-lg md:text-sm text-xs">
                  you are part of a global network that is committed to fighting
                  the climate crisis and promoting climate justice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container mt-10">
          <div className="">
            <h1
              className={
                montserrat.className +
                " lg:text-4xl lg:mt-10 text-3xl font-bold"
              }
            >
              <span className="text-main">Thanks to your support</span>
            </h1>
            <p
              className={montserrat.className + "  mt-10 "}
              dangerouslySetInnerHTML={{
                __html: data.membershipPage.thankYouComment,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipPlanDetails;
