import { Service } from "@/app/services/ServicePages";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ServicesListView({ data }: { data?: Service }) {
  // Industry Titles and Images Array

  return (
    <div
      className={`${montserrat.className} container grid xl:grid-cols-10 my-20 gap-10`}
    >
      {/* Top Section */}
      <div className="w-full  xl:col-span-10 ">
        <h1
          className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-4 md:mb-6 leading-tight text-gray-900"
          dangerouslySetInnerHTML={{ __html: data?.title || "" }}
        />
        <p className="text-base sm:text-sm md:text-lg text-gray-700 leading-relaxed sm:mb-6 md:mb-8">
          {data?.description}
        </p>
        <h2 className="text-2xl sm:text-xl md:text-3xl font-bold col-span-10 mb-4 sm:mb-6 text-main">
          Industries
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data?.Industries.map((industry, i) => (
            <div
              key={i}
              className="h-48 md:h-64 lg:h-40 relative w-full overflow-hidden   hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={strApi + industry.image.url}
                width={1200}
                height={1200}
                alt={`Industry Image for ${industry.title}`}
                className="w-full h-full object-cover absolute top-0 right-0"
              />
              <div className="w-full h-full bg-gradient-to-t from-black/60 via-black/30 to-transparent relative flex justify-center items-center text-center">
                <p className="text-lg sm:text-base md:text-xl lg:text-xl p-5 font-bold text-white">
                  {industry.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col gap-12 xl:col-span-10 xl:mt-10 xl:mb-6">
        {/* Row 1 */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {data?.Service_Cards.map((card, i) => (
            <ServiceCard
              key={i}
              icon={strApi + card.Icon.url}
              title={card.title}
              description={card.Description}
              linkText={card.link.linkText}
              link={card.link.linkUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  link: string;
}

function ServiceCard({
  icon,
  title,
  description,
  link,
  linkText,
}: ServiceCardProps) {
  return (
    <div className="w-full bg-white border-2 border-primary/10 rounded p-8 flex flex-col gap-6  transition-all duration-300">
      <div className="w-16 h-16 rounded-full bg-main flex justify-center items-center text-4xl text-white">
        <Image
          src={icon}
          width={1200}
          height={1200}
          alt="Service Icon"
          className="w-8 h-8 object-contain"
        />
      </div>
      <p className="text-xl font-semibold text-gray-800">{title}</p>
      <p className="text-base text-gray-600 leading-relaxed">{description}</p>
      <Link
        className="py-3 text-center w-full donateBtn shadow-none text-white font-semibold rounded mt-4 hover:bg-main-dark transition duration-200"
        href={link}
      >
        {linkText}
      </Link>
    </div>
  );
}

export default ServicesListView;
