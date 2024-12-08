"use client";
import { montserrat } from "@/fonts/font";
import { Collection } from "@/interface/collection";
import { LiveAndPopcastItem } from "@/interface/liveandpodcast";
import { client } from "@/request/actions";
import React, { useState } from "react";
import NoLive from "./NoLive";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { cn } from "@/lib/utils";
function ManagePodcastVideos({
  category,
  videos,
}: {
  category: {
    id: string;
    name: string;
  }[];
  videos: LiveAndPopcastItem[];
}) {
  const [tab, settab] = useState("all");
  return (
    <div>
      <div className="flex justify-center items-center gap-10 mt-10 flex-wrap">
        {[{ id: "all", name: "All" }, ...category].map((e, i) => {
          return (
            <h1
              onClick={() => settab(e.id)}
              className={cn(
                `${montserrat.className} text-xl font-semibold cursor-pointer text-center capitalize`,
                e.id == tab && "text-main underline"
              )}
              key={e.id}
            >
              {e.name}
            </h1>
          );
        })}
      </div>
      {videos.length == 0 && (
        <h1 className="text-center text-3xl font-bold mt-20">
          No videos found
        </h1>
      )}

      {videos.filter((e) => e.category == tab).length == 0 && tab != "all" && (
        <h1 className="text-center text-3xl font-bold mt-20">
          No videos found
        </h1>
      )}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-14">
        {tab == "all" &&
          videos.map((e, i) => {
            return (
              <div className={montserrat.className} key={e.id + i}>
                <iframe
                  width="560"
                  height="315"
                  src={"https://www.youtube.com/embed/" + e.videoId}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full lg:h-64 bg-gray-50 md:h-56 h-48 rounded object-cover"
                ></iframe>
                <p className="line-clamp-3 mt-2 text-sm text-gray-700">
                  {e.title}
                </p>
                <Link
                  href={e.location_url}
                  target="_blank"
                  className="flex items-center gap-3 mt-2"
                >
                  <FaLocationDot className={cn("text-primary")} />{" "}
                  <span
                    className={`text-lg ${montserrat.className} font-bold text-primary`}
                  >
                    {e.location}
                  </span>
                </Link>
              </div>
            );
          })}

        {tab != "all" &&
          videos
            .filter((e) => e.category == tab)
            .map((e, i) => {
              return (
                <div className={montserrat.className} key={e.id + i}>
                  <iframe
                    width="560"
                    height="315"
                    src={"https://www.youtube.com/embed/" + e.videoId}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full lg:h-64 bg-gray-50 md:h-56 h-48 rounded object-cover"
                  ></iframe>
                  <p className="line-clamp-3 mt-2 text-sm text-gray-700">
                    {e.title}
                  </p>
                  <Link
                    href={e.location_url}
                    target="_blank"
                    className="flex items-center gap-3 mt-2"
                  >
                    <FaLocationDot className={cn("text-primary")} />{" "}
                    <span
                      className={`text-lg ${montserrat.className} font-bold text-primary`}
                    >
                      {e.location}
                    </span>
                  </Link>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default ManagePodcastVideos;
