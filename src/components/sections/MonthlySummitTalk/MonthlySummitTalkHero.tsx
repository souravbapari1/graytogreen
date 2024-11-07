import { MonthlySummitTalk } from "@/app/monthly-summit-talk/mst";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function MonthlySummitTalkHero({
  data,
}: {
  data?: MonthlySummitTalk["header"];
}) {
  if (!data) {
    return <></>;
  }
  return (
    <div className="bg-green-50/50 lg:py-3  py-5 w-full h-full">
      <div className="lg:h-screen lg:max-h-[550px] mt-16 container grid lg:grid-cols-2 gap-10">
        <div className="h-full flex justify-center flex-col gap-6">
          <h1
            className={`${montserrat.className} md:text-4xl text-2xl font-bold md:mt-0 `}
            dangerouslySetInnerHTML={{ __html: data.title }}
          />

          <p
            className="md:text-base text-sm"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>
        <div className="">
          <div className="relative md:p-10 flex justify-center items-center">
            {/* <div className="w-[90%] h-48 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:-mr-12 -mr-10 rounded-2xl mb-10"></div> */}
            <Image
              src={strApi + data.centerImage.url}
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[380px]   object-cover h-48  "
            />
            <Image
              src={strApi + data.rightImage.url}
              width={1200}
              height={1200}
              alt=""
              className="md:w-52 w-28 absolute  md:h-[140px] right-0 top-0  md:p-2 p-1  bg-white  object-cover h-20  "
            />
            <Image
              src={strApi + data.leftImage.url}
              width={1200}
              height={1200}
              alt=""
              className="md:w-52 w-28 absolute  md:h-[140px] left-0 bottom-0 border-2 border-white bg-white md:p-2 p-1   object-cover h-20  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonthlySummitTalkHero;
