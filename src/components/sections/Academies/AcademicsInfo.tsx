import { GreenKidsAcademy } from "@/app/academies/greenkidsacademy/GreenKidsAcademys";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

function AcademicsInfo({
  banner,
  academies,
}: {
  banner?: GreenKidsAcademy["banner"];
  academies?: GreenKidsAcademy["Academies"];
}) {
  return (
    <div className="">
      {banner && (
        <div
          style={{ backgroundImage: `url(${strApi + banner.bannerImage.url})` }}
          className="w-full md:h-[70vh] min-h-[400px] h-[50vh] z-20 relative  bg-cover bg-no-repeat bg-center "
        >
          <div className="w-full h-full bg-black/50 absolute top-0 right-0"></div>
          <div className="container relative flex justify-end md:pb-36 pb-16 items-center z-10 h-full flex-col text-xl text-white">
            <h1
              className={`md:text-5xl text-3xl  font-bold mb-5 text-center ${montserrat.className}`}
            >
              {banner.title}
            </h1>
            <p className="max-w-[900px] text-center lg:text-xl text-sm ">
              {banner.description}
            </p>
          </div>
        </div>
      )}
      {academies && (
        <div className="bg-green-50/20 py-20">
          <div className="container grid lg:grid-cols-2 gap-20">
            <div className=" flex justify-center items-center">
              <div className="w-full">
                <div className="relative flex justify-center items-center">
                  <Image
                    src={strApi + academies.SideImages.center.url}
                    width={1200}
                    height={1200}
                    alt=""
                    className="md:w-full w-[90%]  md:h-[313px]   object-cover h-48  "
                  />
                  <Image
                    src={strApi + academies.SideImages.right.url}
                    width={1200}
                    height={1200}
                    alt=""
                    className="md:w-52 w-28 absolute  md:h-[140px] md:-right-10 right-0 top-0 md:-top-10  border-2 border-white md:p-2 p-1  bg-white  object-cover h-20  "
                  />
                  <Image
                    src={strApi + academies.SideImages.left.url}
                    width={1200}
                    height={1200}
                    alt=""
                    className="md:w-52 w-28 absolute  md:h-[140px] md:-left-10 left-0 bottom-0 md:-bottom-10 border-2 border-white bg-white md:p-2 p-1   object-cover h-20  "
                  />
                </div>
              </div>
            </div>

            <div className=" lg:mt-10 mt-4">
              <h1
                className={`lg:text-4xl text-3xl text-main lg:mb-10 mb-5 font-bold ${montserrat.className}`}
                dangerouslySetInnerHTML={{ __html: academies.Title }}
              />
              <p
                className=" text-gray-700 "
                dangerouslySetInnerHTML={{ __html: academies.description }}
              />
              <br />
              {academies.Links &&
                academies.Links.map((link) => (
                  <Link
                    key={link.id}
                    href={link.linkUrl}
                    className="uppercase font-bold  text-sm text-main flex md:justify-start justify-center items-center"
                  >
                    {link.linkText} <RiArrowDropRightLine size={35} />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AcademicsInfo;
