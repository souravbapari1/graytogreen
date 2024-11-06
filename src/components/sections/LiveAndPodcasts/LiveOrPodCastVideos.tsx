import { montserrat } from "@/fonts/font";
import { Collection } from "@/interface/collection";
import { LiveAndPopcastItem } from "@/interface/liveandpodcast";
import { client } from "@/request/actions";
import React from "react";

export const revalidate = 0;
async function LiveOrPodCastVideos() {
  const liveVideos = await client
    .get("/api/collections/lives/records")
    .send<Collection<LiveAndPopcastItem>>();

  const podcastVideos = await client
    .get("/api/collections/podcasts/records")
    .send<Collection<LiveAndPopcastItem>>();

  return (
    <div>
      <div className="bg-green-50/50 h-auto lg:py-10 py-1 pb-28 w-full ">
        <div className="container mt-20">
          <h1
            className={`${montserrat.className} md:text-5xl text-center text-4xl font-bold`}
          >
            Live <span className="text-main">Videos</span>
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-14">
            {liveVideos.items.map((e, i) => {
              return (
                <div className={montserrat.className}>
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
                  <p className="font-bold mt-2 text-main">{e.location}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" h-auto lg:py-10 py-1 pb-28 w-full">
        <div className="container mt-20">
          <h1
            className={`${montserrat.className} md:text-5xl text-center text-4xl font-bold`}
          >
            Our <span className="text-main">Podcasts</span>
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-14">
            {podcastVideos.items.map((e, i) => {
              return (
                <div className={montserrat.className}>
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
                  <p className="font-bold mt-2 text-main">{e.location}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveOrPodCastVideos;
