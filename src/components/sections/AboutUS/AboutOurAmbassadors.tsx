"use client";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import { useCallback, useState } from "react";
import { G2Gambassador, TeamMember } from "@/app/about-us/aboutus";
import { FaLinkedinIn } from "react-icons/fa";
import { strApi } from "@/graphql/client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function AboutOurAmbassadors({ data }: { data: G2Gambassador }) {
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = useCallback(() => {
    return data.Members.map((e) => {
      return e.tabName;
    });
  }, [data]);

  const viewData = useCallback(() => {
    if (tabIndex == 0) {
      const allMembers = data.Members.flatMap((e) => {
        return e.members;
      });

      return allMembers;
    } else {
      return data.Members[tabIndex - 1].members;
    }
  }, [data, tabIndex]);

  return (
    <div
      className="flex flex-col justify-center items-center text-center mt-40 container"
      id="ambassadors"
    >
      <h1
        className={`${montserrat.className} text-2xl lg:text-4xl font-bold text-center capitalize`}
        dangerouslySetInnerHTML={{ __html: data?.Title || "" }}
      />
      <p
        className="text-center  text-md max-w-[800px] mt-8 "
        dangerouslySetInnerHTML={{ __html: data?.Description || "" }}
      />
      <div className="flex justify-center items-center gap-5 gap-x-10 mt-10 flex-wrap  ">
        {["All", ...tabs()].map((e, i) => {
          return (
            <p
              onClick={() => setTabIndex(i)}
              key={i}
              className={`${montserrat.className} ${
                tabIndex == i ? "underline text-main" : null
              } lg:text-base text-xs font-bold hover:underline text-gray-600 text-nowrap underline-offset-1 under cursor-pointer`}
            >
              {e}
            </p>
          );
        })}
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2   w-full max-w-[1100px] gap-8 mt-24">
        {viewData().map((e, i) => {
          return (
            <div className={montserrat.className} key={e.id}>
              <div className="w-full group md:h-[350px]   relative bg-gray-100 h-[300px] overflow-hidden rounded-3xl">
                <Image
                  src={strApi + e.image.url}
                  width={3200}
                  height={3200}
                  alt=""
                  className="w-full h-full object-cover "
                />
                <div className="w-full h-64 -mb-96 transition-all group-hover:mb-0 text-left bg-white border-t-2 border-primary absolute bottom-0 px-5 py-4">
                  <h1
                    className="font-bold text-xl "
                    dangerouslySetInnerHTML={{ __html: e.name || "" }}
                  />
                  <p
                    className="text-gray-500 text-sm mt-2"
                    dangerouslySetInnerHTML={{ __html: e.about || "" }}
                  />
                </div>
              </div>
              <div className="flex justify-between pt-6  px-2">
                <div className="">
                  <p
                    className="font-bold text-xl"
                    dangerouslySetInnerHTML={{ __html: e.name || "" }}
                  />
                  <p
                    className="text-left"
                    dangerouslySetInnerHTML={{ __html: e.position || "" }}
                  />
                </div>
                <div className="flex text-xl flex-row gap-4 text-gray-300 ">
                  <FaLinkedinIn className="hover:text-gray-900" />
                </div>
              </div>
              {e.Other_Links &&
                e.Other_Links.map((e, i) => {
                  return (
                    <div key={i} className="flex text-sm flex-row gap-4  ">
                      <Link
                        href={e.linkUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-gray-900 w-full mt-3"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="shadow-none rounded p-0 w-full"
                        >
                          {e.linkText}
                        </Button>
                      </Link>
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutOurAmbassadors;
