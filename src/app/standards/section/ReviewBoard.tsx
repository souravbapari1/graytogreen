import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ReviewBoard() {
  return (
    <div className="bg-primary/5">
      <div className={`${montserrat.className} container py-20`}>
        <h1 className="text-3xl text-center font-bold">
          Restoration Project Review Board
        </h1>
        <p className="text-center max-w-[1000px] mx-auto mt-4">
          The Restoration Project Review board advises on restoration project
          standards and makes the final decision on which projects meet our
          restoration standards to participate on the Plant-for-the-Planet
          Platform.
        </p>
        <p className="text-center mt-3">
          Contact us at{" "}
          <Link className="text-main " href="#">
            reviewboard@plant-for-the-planet.org
          </Link>
        </p>
        <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 text-center mt-20">
          {Array.from({ length: 5 }).map((_, i) => {
            return (
              <div className="flex flex-col gap-3 items-center justify-center">
                <Image
                  src={"https://i.pravatar.cc/120" + i}
                  height={3000}
                  alt=""
                  width={3000}
                  className=" object-cover rounded-full w-80 h-80 border-[8px] border-[#5eb05b]"
                />
                <h1 className="text-center font-bold text-xl mt-5">
                  Dr. Pilar Angelica Gómez Ruiz
                </h1>
                <p className="font-bold text-gray-700">Professor</p>
                <p className="text-gray-500">
                  Centro de Investigación Científica de Yucatán (CICY)
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ReviewBoard;
