import { ResearchesLabData } from "@/app/academies/researches-labs/ResearchesLabs";
import { Button } from "@/components/ui/button";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ResearchFellowships({
  data,
}: {
  data?: ResearchesLabData["researchesLabs"][0]["infoCards"];
}) {
  if (!data) {
    return <></>;
  }
  return (
    <div className="container mt-20">
      <h1
        className={`${montserrat.className} text-center text-3xl font-bold`}
        dangerouslySetInnerHTML={{ __html: data?.title || "" }}
      />
      <h1
        className={`${montserrat.className} text-md text-center mt-4 capitalize font-light `}
        dangerouslySetInnerHTML={{ __html: data?.description || "" }}
      />
      {/* Research Team */}
      <div className="container mt-16 md:mt-20">
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
        {data.cards.map((e, i) => {
          return (
            <div className="grid md:grid-cols-2 gap-6 mt-4" key={e.id}>
              <div className={e.align == "right" ? "order-2" : ""}>
                <div className="relative md:p-10 flex justify-center items-center">
                  <div className="w-[90%] h-64 md:h-[300px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
                  <Image
                    src={strApi + e.image.url}
                    width={1200}
                    height={1200}
                    alt=""
                    className="md:w-full w-[90%]  md:h-[300px]  rounded-2xl object-cover h-64  "
                  />
                </div>
              </div>
              <div className="   flex flex-col justify-center items-start">
                <h1
                  className={`lg:text-3xl text-2xl  lg:mb-4 mb-3 font-bold uppercase ${montserrat.className}`}
                  dangerouslySetInnerHTML={{ __html: e.title || "" }}
                />
                <div
                  className=" text-gray-700 "
                  dangerouslySetInnerHTML={{ __html: e.description || "" }}
                />
              </div>
            </div>
          );
        })}
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
      </div>
    </div>
  );
}

export default ResearchFellowships;
