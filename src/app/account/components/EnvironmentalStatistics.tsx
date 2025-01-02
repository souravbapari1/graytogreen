"use client";
import { SDGITEM } from "@/interface/sdg";
import { cn } from "@/lib/utils";
import { genPbFiles } from "@/request/actions";
import Image from "next/image";
import React, { useState } from "react";

const EnvironmentalStatistics = ({
  data,
}: {
  data: (SDGITEM & {
    count: {
      id: string;
      name: string;
      unit: string;
      value: string;
    }[];
  })[];
}) => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="grid grid-cols-4 gap-8">
        <div className="flex flex-col gap-5">
          {data.map((e, i) => {
            return (
              <div
                className={cn(
                  "flex justify-start items-center gap-4 border-2 cursor-pointer p-2",
                  index == i && "border-main bg-main text-white"
                )}
                key={e.id}
                onClick={() => setIndex(i)}
              >
                <Image
                  src={genPbFiles(e, e.image)}
                  alt=""
                  width={200}
                  height={200}
                  className="w-20 h-20"
                />
                <p className="font-bold">{e.name}</p>
              </div>
            );
          })}
        </div>
        <div className="col-span-3">
          <h1 className="text-2xl font-bold underline mb-7">Impact Reports</h1>
          {data[index].count.map((v, i) => {
            return (
              <div
                className={cn(
                  "border p-4 flex justify-between items-center",
                  i % 2 == 0 && "bg-gray-100",
                  i != 0 && "border-t-0"
                )}
                key={i}
              >
                <div className="flex justify-start items-center gap-4">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{
                      background: `linear-gradient(to right, ${data[index].main_color}, ${data[index].sub_color})`,
                    }}
                  />
                  <p className="font-semibold">{v.name}</p>
                </div>
                <p>
                  <span className="font-semibold">{v.value}</span> {v.unit}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EnvironmentalStatistics;
