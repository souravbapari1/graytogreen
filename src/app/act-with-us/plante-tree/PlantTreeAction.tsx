import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PlantTree } from "./palntTree";
import { strApi } from "@/graphql/client";

function PlantTreeAction({
  content,
  link,
  contact,
}: {
  content?: PlantTree["content"];
  link?: PlantTree["applyLink"];
  contact?: PlantTree["contact"];
}) {
  return (
    <div className={`py-20 ${montserrat.className}`}>
      <div className="container flex flex-col gap-5 justify-center items-center">
        <div
          className="md:text-xl content"
          dangerouslySetInnerHTML={{ __html: content || "" }}
        />
        <Link
          className="donateBtn py-4 px-10 mt-10"
          href={link?.linkUrl || "#"}
        >
          {link?.linkText}
        </Link>
      </div>
      <div className="flex container justify-start md:flex-row flex-col items-center  md:gap-20 gap-10   mt-28  ">
        <div className="">
          <Image
            src={strApi + contact?.personImage.url}
            width={1000}
            height={1000}
            alt=""
            className="w-72 h-96 object-cover rounded-3xl"
          />
        </div>
        {contact && (
          <div className="flex flex-col justify-center items-start gap-8 ">
            <h1
              className="text-xl font-bold"
              dangerouslySetInnerHTML={{ __html: contact?.title || "" }}
            />
            <p className="">
              Email:{" "}
              <Link
                href={"mailto:" + contact?.email || "#"}
                className="text-main"
              >
                {contact?.email}
              </Link>
            </p>
            <p className="">
              Tel:{" "}
              <Link href={"tel:" + contact?.mobileNo} className="text-main">
                {contact?.mobileNo}
              </Link>
            </p>
            <Link
              className="donateBtn py-3 capitalize shadow-none"
              href={contact?.bookMeetLink}
            >
              Book 15 min Meeting
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default PlantTreeAction;
