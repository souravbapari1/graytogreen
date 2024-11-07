import { PartenerWithUse } from "@/app/partners/partners";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import Image from "next/image";
import React from "react";

function ServiceAdditionalPartnership({
  data,
  title,
}: {
  data?: PartenerWithUse["advantages"];
  title?: string;
}) {
  if (!data) {
    return <></>;
  }
  return (
    <div
      className={`${montserrat.className} donateBtn font-medium rounded-none shadow-none text-base w-full py-10 mt-10 flex justify-center flex-col items-center`}
    >
      <h1 className="md:text-4xl text-2xl font-bold mb-20 mt-10 text-white container text-center ">
        {title}
      </h1>
      <div className="container grid lg:grid-cols-3 h-full xl:gap-16 gap-5 text-white">
        {data.map((e, i) => {
          return (
            <div
              className="w-full h-full bg-green-900/30 rounded-3xl xl:p-8 p-5 "
              key={e.id}
            >
              <Image
                src={strApi + e.image.url}
                width={1000}
                height={1000}
                alt=""
                className="w-full h-60 rounded-3xl object-cover "
              />
              <br />
              <h1 className="md:text-4xl text-2xl font-bold">{e.title}</h1>
              <br />
              <p className="text-sm opacity-85 line-clamp-5">{e.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceAdditionalPartnership;
