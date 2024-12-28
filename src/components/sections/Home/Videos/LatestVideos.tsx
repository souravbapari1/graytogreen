import { Button } from "@/components/ui/button";
import { montserrat } from "@/fonts/font";
import { createResource } from "@/helper/createResource";
import { Collection } from "@/interface/collection";
import { LiveAndPopcastItem } from "@/interface/liveandpodcast";
import { client } from "@/request/actions";
import Link from "next/link";
import React from "react";
const videosResource = createResource(
  client
    .get("/api/collections/podcasts/records?perPage=6")
    .send<Collection<LiveAndPopcastItem>>()
);
function LatestVideos() {
  const videos = videosResource.read();
  return (
    <div className="container mt-20">
      <h1
        className={`${montserrat.className} md:text-5xl text-center text-4xl font-bold`}
      >
        Latest <span className="text-main">Videos</span>
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-14">
        {videos.items.map((e, i) => {
          return (
            <iframe
              width="560"
              height="315"
              key={e.id}
              src={"https://www.youtube.com/embed/" + e.videoId}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full lg:h-52 h-48 rounded-xl object-cover"
            ></iframe>
          );
        })}
      </div>
      <div className="w-full mt-10 flex justify-center items-center">
        <Link href="/live-and-podcasts">
          <Button className="donateBtn shadow-none border-none rounded-full mx-auto ">
            View All Videos
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default LatestVideos;
