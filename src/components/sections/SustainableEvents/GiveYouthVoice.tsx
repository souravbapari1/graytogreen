import { SustainableEvent } from "@/app/sustainable-events/SustainableEventsData";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function GiveYouthVoice({
  data,
  videoData,
}: {
  data?: SustainableEvent["giveyouthavoice"];
  videoData?: SustainableEvent["speechsoundlike"];
}) {
  if (!data) {
    return <></>;
  }
  return (
    <div className="relative w-full overflow-hidden py-10 pb-0">
      <Image
        src="/assets/Lingkaran.svg"
        alt="roubd"
        height={2000}
        width={2000}
        className="w-64 h-64 absolute left-0 -ml-24 mt-40"
      />

      <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 container mt-10 mb-8">
        <div className="mt-5">
          <h1
            className={
              montserrat.className + " lg:text-4xl text-3xl font-bold text-main"
            }
          >
            Give youth a voice!
          </h1>

          <p
            className={montserrat.className + "  mt-8 mb-8"}
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          <div className="flex md:flex-row flex-col text-center lg:mb-0 mb-10 gap-6">
            <Link
              href={data.RequesOfflineForm}
              className={`${montserrat.className} donateBtn py-3`}
            >
              Request Offline Speech
            </Link>
            <Link
              href={data.RequesOnlineFormLink}
              className={`${montserrat.className} donateBtn py-3`}
            >
              Request Online Speech
            </Link>
          </div>
        </div>
        <div className="">
          <div className="relative md:p-10 flex justify-center items-center">
            <div className="w-[90%] h-48 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:-mr-12 -mr-10 rounded-2xl mb-10"></div>
            <Image
              src={strApi + data.bannerImage.url}
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[380px]  rounded-2xl object-cover h-48 border  "
            />
          </div>
        </div>
      </div>
      {videoData && (
        <div className=" mt-10 w-full bg-gradient-to-r from-green-500 to-emerald-700 relative mb-10">
          <div className="  order-last  container py-20">
            <h1 className="text-center lg:text-5xl text-xl text-white mb-20 font-bold">
              {videoData.title}
            </h1>
            <iframe
              width="560"
              height="315"
              src={"https://www.youtube.com/embed/" + videoData.videoId}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full lg:h-[620px] h-52 rounded-3xl object-cover"
            ></iframe>
          </div>
          <Image
            src="/assets/yucatan_bush.svg"
            className="absolute w-36 ml-28 -mt-10"
            width={1200}
            height={1200}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default GiveYouthVoice;
