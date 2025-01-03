import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImWhatsapp } from "react-icons/im";

import { FaPhone } from "react-icons/fa6";
import { SustainableEvent } from "@/app/sustainable-events/SustainableEventsData";
import { strApi } from "@/graphql/client";
import { Button } from "@/components/ui/button";

function TreeVouchers({ data }: { data?: SustainableEvent["contact"] }) {
  return (
    <div className="container">
      <div className="mt-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[320px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/04/20105541/remote-work-environment-earth-day-1024x512.png"
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[320px]  rounded-2xl object-cover h-64  "
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1
              className={`lg:text-3xl text-2xl  lg:mb-10 mb-5 font-bold uppercase ${montserrat.className}`}
            >
              <p className="">Tree Vouchers </p>
            </h1>
            <p className="lg:text-lg text-gray-700 ">
              Do you have a goodie bag to fill? Or need a gift for your
              speakers? Do it sustainably!
              <br />
              <br />
              With our tree vouchers you can gift trees with ease. Choose
              between a printed voucher or a digital version for your thank you
              emails.
              <br />
              <br />
              Contact us at{" "}
              <Link href="#" className="text-main">
                event@graytogreen.com
              </Link>
              <br />
            </p>
          </div>
        </div>
      </div>
      {data && (
        <div className="flex container justify-start md:flex-row flex-col items-center  md:gap-20 gap-10   mt-28  ">
          <div className="">
            <Image
              src={strApi + data?.personImage.url}
              width={1000}
              height={1000}
              alt=""
              className="w-72 h-80 object-cover rounded-3xl"
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-8 ">
            <h1 className="text-xl font-bold">{data?.title}</h1>
            <p className="">
              Email:{" "}
              <Link href="#" className="text-main">
                {data?.email}
              </Link>
            </p>
            <p className="">
              Tel:{" "}
              <Link href="#" className="text-main">
                {data?.mobileNo}
              </Link>
            </p>

            <Link href={data?.bookMeetLink}>
              <Button className="donateBtn px-8 shadow-none rounded-full">
                Book A Meeting
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default TreeVouchers;
