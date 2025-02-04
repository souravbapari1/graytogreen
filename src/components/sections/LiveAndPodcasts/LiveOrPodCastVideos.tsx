import { montserrat } from "@/fonts/font";
import { Collection } from "@/interface/collection";
import { LiveAndPopcastItem } from "@/interface/liveandpodcast";
import { client } from "@/request/actions";
import React from "react";
import NoLive from "./NoLive";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import ManagePodcastVideos from "./ManagePodcastVideos";
import { Button } from "@/components/ui/button";

async function LiveOrPodCastVideos({
  category,
}: {
  category: {
    id: string;
    name: string;
  }[];
}) {
  const liveVideos = await client
    .get("/api/collections/lives/records", {
      perPage: 6,
      sort: "created",
    })
    .send<Collection<LiveAndPopcastItem>>();

  const podcastVideos = await client
    .get("/api/collections/podcasts/records", {
      perPage: 6,
      sort: "created",
      expand: "category",
    })
    .send<Collection<LiveAndPopcastItem>>();

  // const liveNowVideos = await client
  //   .get("/api/collections/lives/records", {
  //     perPage: 6,

  //   })
  //   .send<Collection<LiveAndPopcastItem>>();

  return (
    <div>
      {/* {liveNowVideos.items.map((e, i) => {
        return <NoLive key={e.id + i} id={e.videoId} data={e} />;
      })} */}
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
                    className="w-full lg:h-52 bg-gray-50 md:h-56 h-48 rounded object-cover"
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
          <div className="w-full flex justify-center items-center">
            <Link
              href="https://www.youtube.com/watch?v=oN9bqO5-T88&ab_channel=UNEnvironmentProgramme"
              target="_blank"
              className="mt-10 block mx-auto"
            >
              <Button className="rounded-full px-10 mx-auto " size="lg">
                <p>View All Live Videos</p>
              </Button>
            </Link>
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
          <ManagePodcastVideos
            category={category}
            videos={podcastVideos.items}
          />
          <div className="w-full flex justify-center items-center">
            <Link
              href="https://www.youtube.com/watch?v=oN9bqO5-T88&ab_channel=UNEnvironmentProgramme"
              target="_blank"
              className="mt-10 block mx-auto"
            >
              <Button className="rounded-full px-10 mx-auto " size="lg">
                <p>View All Podcasts</p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveOrPodCastVideos;
