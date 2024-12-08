import { MembershipPageData } from "@/app/membership/membership";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import Link from "next/link";
import React from "react";

function MembershipHero({ data }: { data: MembershipPageData }) {
  return (
    <div
      style={{
        backgroundImage: `url('${
          strApi + data.membershipPage.headerImage.url
        }')`,
      }}
      className="w-full md:h-[70vh] min-h-[400px] h-[50vh] z-20 relative bg-cover bg-no-repeat bg-center "
    >
      <div className="w-full h-full bg-black/50 absolute top-0 right-0"></div>
      <div className="container relative flex justify-end md:pb-36 pb-16 items-center z-10 h-full flex-col text-xl text-white">
        <h1
          className={`md:text-5xl text-2xl  font-bold mb-5 text-center ${montserrat.className}`}
          dangerouslySetInnerHTML={{
            __html: data.membershipPage.headerDescription || "",
          }}
        />
      </div>
    </div>
  );
}

export default MembershipHero;
