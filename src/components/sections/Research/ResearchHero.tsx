import { ResearchesLabData } from "@/app/academies/researches-labs/ResearchesLabs";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import Image from "next/image";
import React from "react";

function ResearchHero({
  header,
}: {
  header?: ResearchesLabData["researchesLabs"][0]["header"];
}) {
  if (!header) {
    return <></>;
  }

  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src="/assets/Lingkaran.svg"
        alt="roubd"
        height={2000}
        width={2000}
        className="w-64 h-64 absolute left-0 -ml-24 mt-40"
      />

      <div className="grid lg:grid-cols-2  gap-8 container mt-10">
        <div className="">
          <h1
            className={montserrat.className + " lg:text-4xl text-3xl font-bold"}
            dangerouslySetInnerHTML={{ __html: header.title || "" }}
          />
          <h2
            className={montserrat.className + " text-xl font-bold mt-5"}
            dangerouslySetInnerHTML={{ __html: header.title2 || "" }}
          />

          <h5
            className={montserrat.className + " text-2xl font-light mt-5"}
            dangerouslySetInnerHTML={{ __html: header.title2 || "" }}
          />
          <p
            className={montserrat.className + " text-lg mt-10 mb-8"}
            dangerouslySetInnerHTML={{ __html: header.description || "" }}
          />
        </div>
        <div className="">
          <div className="relative md:p-10 flex justify-center items-center">
            {/* <div className="w-[90%] h-48 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:-mr-12 -mr-10 rounded-2xl mb-10"></div> */}
            <Image
              src={strApi + header.images.center.url}
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[380px]   object-cover h-48  "
            />
            <Image
              src={strApi + header.images.right.url}
              width={1200}
              height={1200}
              alt=""
              className="md:w-52 w-28 absolute  md:h-[140px] right-0 top-0 border-2 border-white md:p-2 p-1  bg-white  object-cover h-20  "
            />
            <Image
              src={strApi + header.images.left.url}
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

export default ResearchHero;
