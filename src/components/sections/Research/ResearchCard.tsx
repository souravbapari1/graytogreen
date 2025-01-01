import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import { formatTimestampCustom } from "@/helper/dateTime";
import { ResearchItem } from "@/interface/researches";
import { genPbFiles } from "@/request/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ResearchCard({
  data,
}: {
  data: ResearchItem["researchPosts"][number];
}) {
  return (
    <Link
      href={"/research/" + data?.slug}
      className={`${montserrat.className}  relative  transition-all   overflow-hidden`}
    >
      <div className="donateBtn p-0 w-10 h-10 flex justify-center items-center absolute top-5 left-5 ">
        R
      </div>
      <Image
        src={strApi + data.previewImage.url}
        width={2000}
        height={2000}
        alt=""
        className="w-full h-56  object-cover rounded-3xl"
      />
      <div className="flex flex-col gap-2 py-5">
        <h1 className="md:text-xl font-bold line-clamp-2">{data.title}</h1>
        <p className="md:text-sm text-xs line-clamp-3 text-gray-500">
          {data.description}
        </p>
        <p className="font-semibold md:text-base text-sm text-gray-400">
          {formatTimestampCustom(data.publishedAt)} -{" "}
          <span className="uppercase">{data.state}</span>
        </p>
      </div>
    </Link>
  );
}

export default ResearchCard;
