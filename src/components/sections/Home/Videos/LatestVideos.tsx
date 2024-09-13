import { montserrat } from "@/fonts/font";
import React from "react";

function LatestVideos() {
  return (
    <div className="container mt-20">
      <h1
        className={`${montserrat.className} md:text-6xl text-center text-4xl font-bold`}
      >
        Latest <span className="text-main">Videos</span>
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-14">
        {Array.from({ length: 6 }).map((e, i) => {
          return (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zFmeeMZioio?si=VCJ45jaB0xb5Y9h5"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full lg:h-80 md:h-56 h-48 rounded-3xl object-cover"
            ></iframe>
          );
        })}
      </div>
    </div>
  );
}

export default LatestVideos;
