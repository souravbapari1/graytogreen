import { PartenerWithUse } from "@/app/partners/partners";
import { Button } from "@/components/ui/button";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function PartnersHero({
  data,
  requestFormLink,
}: {
  data?: PartenerWithUse["banner"];
  requestFormLink?: string | null;
}) {
  if (!data) {
    return <></>;
  }
  return (
    <div className="container ">
      <div className="w-full  mt-10 lg:h-[80vh] h-[50vh] min-h-[460px] max-h-[800px] rounded-3xl overflow-hidden shadow-md relative">
        <Image
          src={strApi + data?.bannerImage.url}
          width={3000}
          height={3000}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 w-full h-full">
          <Button
            className={`bg-white/80 shadow-md backdrop-blur-sm lg:px-10 lg:py-6 lg:text-base text-xs rounded-full absolute right-10 top-8 text-main hover:text-white uppercase font-bold ${montserrat.className}`}
          >
            Partner Dashboard
          </Button>
          <div className="absolute bottom-20 lg:left-16 left-5">
            <div className=" w-72">
              <div
                className={`bg-black/10 flex justify-center items-center  text-white  h-10 px-5 border-2 text-sm rounded-full ${montserrat.className} font-bold`}
              >
                <p>Help tackle the climate crisis</p>
              </div>
            </div>
            <h1
              className={`${montserrat.className} lg:text-5xl text-2xl font-bold text-white mt-6`}
            >
              {data?.title}
            </h1>
            <p
              className={`${montserrat.className} lg:text-xl font-bold text-white mt-6`}
            >
              {data.description}
            </p>
            <br />
            <br />
            <Link
              href={requestFormLink || "#"}
              className={`${montserrat.className} donateBtn py-3 shadow-none  text-sm`}
            >
              Register as Partner
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnersHero;
