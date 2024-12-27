import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Standard } from "../standerds";
import { strApi } from "@/graphql/client";
import { Linkedin } from "lucide-react";

function ReviewBoard({
  data,
  description,
  title,
}: {
  data?: Standard["boardMembers"];
  title?: string;
  description?: string;
}) {
  if (!data) {
    return <></>;
  }
  return (
    <div className="bg-primary/5">
      <div className={`${montserrat.className} container py-20`}>
        <h1 className="text-3xl text-center font-bold">{title}</h1>
        <p
          className="text-center max-w-[1000px] mx-auto mt-4"
          dangerouslySetInnerHTML={{ __html: description || "" }}
        />

        <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 text-center mt-20">
          {data?.map((e, i) => {
            return (
              <div
                className="flex flex-col gap-3 items-center justify-center"
                key={e.id}
              >
                <Image
                  src={strApi + e.image.url}
                  height={3000}
                  alt=""
                  width={3000}
                  className=" object-cover rounded-full w-56 h-56 border-[8px] border-[#5eb05b]"
                />
                <h1 className="text-center font-bold text-xl mt-5">{e.name}</h1>
                <p className="font-bold text-gray-700">{e.position}</p>
                <p className="text-gray-500">{e.about}</p>
                <Link href={e.linkdinProfile || "#"} target="_blank">
                  <Linkedin />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ReviewBoard;
