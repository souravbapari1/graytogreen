import { Button } from "@/components/ui/button";
import React from "react";
import { MdLiveTv } from "react-icons/md";

function NoLive({ id }: { id: string }) {
  return (
    <div className="container mt-20">
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
    </div>
  );
}

export default NoLive;
