import { AcademiesAndLab, Slogon } from "@/app/academies/AcademiesAndLab";
import { Button } from "@/components/ui/button";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AcademicsHero({
  headerDescription,
  headerImage,
  hraderTitle,
  slogans,
}: {
  hraderTitle?: string;
  headerDescription?: string;
  headerImage?: string;
  slogans?: Slogon[];
}) {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(${strApi + headerImage})`,
        }}
        className="w-full md:h-[70vh] min-h-[400px] h-[70vh] z-10 relative  bg-cover bg-no-repeat bg-center "
      >
        <div className="w-full h-full bg-black/50 absolute top-0 right-0"></div>
        <div className="container relative flex justify-center md:pb-48   items-start z-10 h-full flex-col text-xl text-white">
          <h1
            className={`md:text-4xl text-3xl  font-bold mb-5 mt-20 text-left ${montserrat.className}`}
            dangerouslySetInnerHTML={{ __html: hraderTitle || "" }}
          />

          <p
            className={`max-w-[900px] text-left lg:text-xl text-sm ${montserrat.className}`}
          >
            {headerDescription}
          </p>
          <div
            className={` flex gap-5 mt-10 ${montserrat.className} md:mb-0 mb-32`}
          >
            <Link href="#academies">
              <Button className="rounded-none p-6" variant="secondary">
                Join With Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container -mt-20 z-30">
        <div className="md:grid flex flex-wrap lg:grid-cols-5 items-center justify-center grid-cols-2 md:gap-5 z-30">
          {slogans?.map((e, i) => {
            return (
              <div
                className={cn(
                  `w-full max-w-[350px] h-36  z-30 bg-white md:shadow md:hover:shadow-lg transition-all p-2 flex justify-center items-center text-center gap-3 flex-col ${montserrat.className}`,
                  `${
                    i == 0
                      ? "md:h-52 md:-mt-2.5 bg-gray-400 text-white"
                      : i == 4
                      ? "md:h-52 md:-mt-2.5 bg-green-600 text-white"
                      : " md:h-48 text-gray-800 border-t "
                  }`
                )}
              >
                <Image
                  src={strApi + e.bannerImage.url}
                  width={300}
                  height={200}
                  alt=""
                  className="w-auto md:h-12 h-8"
                />
                <h1 className="lg:text-xl text-lg font-bold ">{e.title}</h1>
                <p className="px-2 text-xs opacity-60">{e.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AcademicsHero;
