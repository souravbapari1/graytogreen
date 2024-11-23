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
      <div className="flex justify-center items-center min-h-screen ">
        <div className="w-11/12 md:w-3/4 lg:w-2/3">
          <h1 className="text-4xl text-green-700 font-bold text-center mb-8">
            Environmental Statistics
          </h1>

          {/* Carbon Offset Section */}
          <div className="bg-white border-t-[5px] border-primary rounded-lg shadow-lg p-6 mb-8 hover:scale-105 transform transition duration-300">
            <h2 className="text-2xl font-bold text-green-600 border-b-2 border-green-600 pb-2 mb-4">
              Carbon Offset
            </h2>
            <ul className="list-none">
              <li className="text-lg mb-3">
                Hectare Restored:{" "}
                <span className="font-bold text-green-700">12 Kha</span>
              </li>
              <li className="text-lg mb-3">
                Number of Planted Trees:{" "}
                <span className="font-bold text-green-700">500,000</span>{" "}
                <span className="font-bold text-red-500">
                  (Target: 1,000,000)
                </span>
              </li>
              <li className="text-lg mb-3">
                CO2 Removal:{" "}
                <span className="font-bold text-green-700">
                  100,000 tons/year
                </span>{" "}
                <span className="font-bold text-red-500">
                  (Target: 150,000 tons/year)
                </span>
              </li>
              <li className="text-lg mb-3">
                CO2 Storage:{" "}
                <span className="font-bold text-green-700">50,000 kg/year</span>
              </li>
              <li className="text-lg mb-3">
                Air Quality Improvement:{" "}
                <span className="font-bold text-green-700">200 kg/year</span>
              </li>
              <li className="text-lg mb-3">
                Rain Observed:{" "}
                <span className="font-bold text-green-700">
                  300,000 liters/year
                </span>
              </li>
              <li className="text-lg mb-3">
                Energy Saved:{" "}
                <span className="font-bold text-green-700">
                  50,000 KwH/year
                </span>
              </li>
            </ul>
          </div>

          {/* Plastic Offset Section */}
          <div className="bg-white  border-t-[5px] border-primary rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-300">
            <h2 className="text-2xl font-bold text-green-600 border-b-2 border-green-600 pb-2 mb-4">
              Plastic Offset
            </h2>
            <ul className="list-none">
              <li className="text-lg mb-3">
                Kg of Collected Plastic:{" "}
                <span className="font-bold text-green-700">20,000 kg</span>
              </li>
              <li className="text-lg mb-3">
                Kg of Recycled Plastic:{" "}
                <span className="font-bold text-green-700">15,000 kg</span>
              </li>
            </ul>
          </div>

          <div className="text-center text-gray-500 text-sm mt-8">
            <p>
              Data as of 2024. All targets are based on environmental goals for
              this year.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnvironmentalStatistics;
