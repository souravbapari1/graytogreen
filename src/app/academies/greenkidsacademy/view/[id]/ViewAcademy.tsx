import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { UpcomingAcademy } from "./academy";
import { strApi } from "@/graphql/client";
import { FaTable } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ViewAcademy({ data }: { data: UpcomingAcademy }) {
  return (
    <div className={`container ${montserrat.className} py-20`}>
      <div className="">
        <div className="">
          <h1 className="md:text-2xl mb-5 font-bold">{data.name}</h1>
          <h3 className="md:text-4xl text-2xl font-bold">{data.title}</h3>
          <p className="font-semibold mt-5 capitalize">
            Location: <span className="text-primary">{data.locationType}</span>{" "}
            {data.location && `- ${data.location}`}
          </p>
          <p className="font-semibold mt-2 capitalize">
            Amount : <span className="text-primary">{data.pricing}</span> -{" "}
            <span>{data.amount} OMR</span>
          </p>

          <p className="mt-2">
            Date - {data.startDate} to {data.endDate}
          </p>
          <div className="flex md:flex-row flex-col gap-8  justify-between mt-10 items-center">
            <p className="font-semibold text-lg">Register to Participate</p>
            {data.maxParticipents >= data.applications ? (
              <Link
                target="_blank"
                href={
                  "/academies/greenkidsacademy/registration/" + data.documentId
                }
                className="donateBtn py-3 shadow-none rounded-2xl"
              >
                Register Now
              </Link>
            ) : (
              <Button
                variant="secondary"
                className=" py-5 px-8 cursor-not-allowed text-gray-800 shadow-none rounded-2xl"
              >
                Register Closed
              </Button>
            )}
          </div>
          <br />
          <br />
          <div className="grid md:grid-cols-5 md:gap-5 border-b-2 border-t-2">
            <div className="border-l-2 border-r-2 md:border-b-0 border-b-2 p-5">
              <p className="text-xl font-bold mb-2">Date</p>
              <p>
                {data.startDate} to {data.endDate}
              </p>
            </div>
            <div className="border-r-2 p-5 md:border-b-0 border-b-2 md:border-l-0 border-l-2">
              <p className="text-xl font-bold mb-2">Time</p>
              <p>{data.time}</p>
            </div>

            <div className=" border-r-2 p-5 md:border-b-0 border-b-2 md:border-l-0 border-l-2">
              <p className="text-xl font-bold mb-2">Flyer</p>
              <p>
                {data.Flyer.map((e, i) => {
                  return (
                    <Link
                      className="text-xs text-primary"
                      href={strApi + e.url}
                    >
                      Download File {i + 1}
                    </Link>
                  );
                })}
              </p>
            </div>

            <div className=" border-r-2 p-5 md:border-b-0 border-b-2 md:border-l-0 border-l-2">
              <p className="text-xl font-bold mb-2">Max Participants</p>
              <p>{data.maxParticipents}</p>
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

          <h1 className="md:text-2xl text-xl font-bold mt-10">
            About the Session
          </h1>
          <div
            className="mt-5"
            dangerouslySetInnerHTML={{ __html: data.aboutTheSession }}
          />
          <ImageSlides data={data.aboutImages.map((e) => strApi + e.url)} />

          <h1 className="md:text-2xl text-xl font-bold mt-10">
            Program Timeline
          </h1>
          <div
            className="mt-5"
            dangerouslySetInnerHTML={{ __html: data.program_Timeline }}
          />
          <ImageSlides data={data.timeLineImages.map((e) => strApi + e.url)} />

          <h1 className="md:text-2xl text-xl font-bold mt-10">
            Other Comments
          </h1>
          <div
            className="mt-5"
            dangerouslySetInnerHTML={{ __html: data.otherComments }}
          />
          <ImageSlides
            data={data.otherCommentsImages.map((e) => strApi + e.url)}
          />
        </div>
      </div>
    </div>
  );
}

export default ViewAcademy;

function ImageSlides({ data }: { data: string[] }) {
  return (
    <div className="lg:px-0 px-12 mt-10">
      <Carousel>
        <CarouselContent>
          {data.map((e, i) => {
            return (
              <CarouselItem key={e}>
                <Image
                  alt=""
                  src={e}
                  width={1200}
                  height={1200}
                  className="w-full md:h-96 h-56 object-cover"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
