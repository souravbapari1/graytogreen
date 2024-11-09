import { montserrat } from "@/fonts/font";
import React from "react";
import { ContactUseData } from "./contact";
import Link from "next/link";

function ContactUsHeader({
  data,
}: {
  data?: ContactUseData["contactUses"][0];
}) {
  return (
    <div className={`${montserrat.className} container md:mt-32 mt-20`}>
      <div className="flex flex-col justify-center items-center gap-8">
        <h1
          className="text-4xl font-bold"
          dangerouslySetInnerHTML={{ __html: data?.title || "" }}
        />
        <p
          className="max-w-[900px] text-center"
          dangerouslySetInnerHTML={{ __html: data?.description || "" }}
        />
        <div className="w-full flex flex-col justify-center items-center gap-8 ">
          <p className="font-semibold text-center mt-5">
            What can we help you with?*
          </p>
          <div className="grid md:grid-cols-3 gap-6 w-full max-w-[800px]">
            {data?.conatctLinks.map((e, i) => {
              return (
                <div
                  className="w-full h-32 bg-main/10 text-center rounded-3xl border-2 border-main/10 flex justify-center flex-col gap-4 items-center font-bold text-green-900"
                  key={i}
                >
                  <p className="w-8 h-8 flex justify-center items-center rounded-full font-light bg-main/20">
                    {i + 1}
                  </p>
                  <Link
                    href={e.linkUrl}
                    className="hover:underline text-green-900"
                  >
                    {e.linkText}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsHeader;
