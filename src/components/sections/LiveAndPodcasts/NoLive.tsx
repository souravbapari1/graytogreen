import { Button } from "@/components/ui/button";
import { montserrat } from "@/fonts/font";
import { LiveAndPopcastItem } from "@/interface/liveandpodcast";
import { cn } from "@/lib/utils";
import { Monsieur_La_Doulaise } from "next/font/google";
import Link from "next/link";
import React from "react";
import { FaMarker } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdLiveTv } from "react-icons/md";

function NoLive({ id, data }: { id: string; data: LiveAndPopcastItem }) {
  return (
    <div className="container mt-20 mb-20">
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full xl:h-[700px] lg:h-[500px] md:h-[400px] bg-gray-50 h-[240px] rounded object-cover"
      ></iframe>

      <h1 className="text-3xl font-bold mt-6 mb-3">{data.title}</h1>

      <div className="flex justify-between items-center">
        <Link
          href={data.location_url}
          target="_blank"
          className="flex items-center gap-3"
        >
          <FaLocationDot className={cn("text-primary")} />{" "}
          <span
            className={`text-lg ${montserrat.className} font-bold text-primary`}
          >
            {data.location}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default NoLive;
