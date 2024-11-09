import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { UpcomingAcademy } from "./academy";

function ViewAcademy({ data }: { data: UpcomingAcademy }) {
  return (
    <div className={`container ${montserrat.className} py-20`}>
      <div className="">
        <div className="">
          <h1 className="md:text-2xl mb-5 font-bold">{data.name}</h1>
          <h3 className="md:text-4xl text-2xl font-bold">{data.title}</h3>
          <p className="font-semibold mt-5">{data.location}</p>
          <p className="mt-2">Date - {data.date}</p>
          <div className="flex md:flex-row flex-col gap-8  justify-between mt-10 items-center">
            <p className="font-semibold text-lg">Participate for free</p>
            <Link
              target="_blank"
              href={data.registerLink}
              className="donateBtn py-3 shadow-none rounded-2xl"
            >
              Register Now
            </Link>
          </div>
          <br />
          <br />

          <div className="grid md:grid-cols-4 md:gap-5 border-b-2 border-t-2">
            <div className="border-l-2 border-r-2 md:border-b-0 border-b-2 p-5">
              <p className="text-xl font-bold mb-2">Date</p>
              <p>{data.date}</p>
            </div>
            <div className="border-r-2 p-5 md:border-b-0 border-b-2 md:border-l-0 border-l-2">
              <p className="text-xl font-bold mb-2">Time</p>
              <p>{data.time}</p>
            </div>

            <div className=" border-r-2 p-5 md:border-b-0 border-b-2 md:border-l-0 border-l-2">
              <p className="text-xl font-bold mb-2">Max Participants</p>
              <p>{data.maxParticipants}</p>
            </div>
            <div className=" border-r-2 p-5 md:border-l-0 border-l-2">
              <p className="text-xl font-bold mb-2">Language</p>
              <p className="uppercase">{data.languge}</p>
            </div>
          </div>

          <br />
          <br />

          <div
            className=""
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
      </div>
    </div>
  );
}

export default ViewAcademy;
