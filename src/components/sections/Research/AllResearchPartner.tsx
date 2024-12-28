import { ResearchesLab } from "@/app/academies/researches-labs/ResearchesLabs";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function AllResearchPartner({
  partnenrs,
}: {
  partnenrs?: ResearchesLab["researchPartner"];
}) {
  if (!partnenrs) {
    return <></>;
  }
  return (
    <div className="mt-20">
      {partnenrs.map((e, i) => {
        return (
          <div className="container ">
            <h1
              className={`${montserrat.className} lg:text-3xl text-2xl font-bold capitalize text-center`}
              dangerouslySetInnerHTML={{ __html: e.title || "" }}
            />
            <div className="flex  justify-center flex-wrap md:mt-10 mt-5 md:mb-14 items-center ">
              {e.member.map((member, i) => {
                return (
                  <Link href={member.link || "#"} key={i} target="_blank">
                    <Image
                      src={strApi + member.image.url}
                      key={i}
                      alt=""
                      className="w-28 h-28 object-contain md:mx-10  mx-5"
                      width={100}
                      height={100}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* <div className="mt-10">
        <div className="container bg-green-50/50 pt-10 pb-2">
          <h1
            className={`${montserrat.className} lg:text-3xl text-2xl font-bold capitalize text-center`}
          >
            Top partner
          </h1>
          <div className="flex  justify-center flex-wrap md:mt-14 mt-5 md:mb-20 items-center ">
            {[
              "https://www.savatree.com/wp-content/uploads/2021/10/savatree-mobile-500.png",
              "https://livelihoods.eu/wp-content/uploads/2017/03/HD-LOGO-LIVELIHOODS-FUNDS-HORIZONTAL.png",
              "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Tropicana_green_flat_logo.svg/800px-Tropicana_green_flat_logo.svg.png",
              "https://cdn.shopify.com/s/files/1/0582/8457/2829/files/fft_logo_1.png?v=1634643664",
              "https://www.savatree.com/wp-content/uploads/2021/10/savatree-mobile-500.png",
              "https://livelihoods.eu/wp-content/uploads/2017/03/HD-LOGO-LIVELIHOODS-FUNDS-HORIZONTAL.png",
            ].map((e, i) => {
              return (
                <Image
                  src={e}
                  key={i}
                  alt=""
                  className="w-28 h-28 object-contain md:mx-10  mx-5"
                  width={100}
                  height={100}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="container mt-16 ">
        <h1
          className={`${montserrat.className} lg:text-3xl text-2xl font-bold capitalize text-center`}
        >
          project partner
        </h1>
        <div className="flex  justify-center flex-wrap md:mt-14 mt-5 md:mb-20 items-center ">
          {[
            "https://www.savatree.com/wp-content/uploads/2021/10/savatree-mobile-500.png",
            "https://livelihoods.eu/wp-content/uploads/2017/03/HD-LOGO-LIVELIHOODS-FUNDS-HORIZONTAL.png",
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Tropicana_green_flat_logo.svg/800px-Tropicana_green_flat_logo.svg.png",
            "https://cdn.shopify.com/s/files/1/0582/8457/2829/files/fft_logo_1.png?v=1634643664",
            "https://www.savatree.com/wp-content/uploads/2021/10/savatree-mobile-500.png",
            "https://livelihoods.eu/wp-content/uploads/2017/03/HD-LOGO-LIVELIHOODS-FUNDS-HORIZONTAL.png",
          ].map((e, i) => {
            return (
              <Image
                src={e}
                key={i}
                alt=""
                className="w-28 h-28 object-contain md:mx-10  mx-5"
                width={100}
                height={100}
              />
            );
          })}
        </div>
      </div> */}
      {/* <div className="container bg-green-50/50 pt-10 pb-10 flex flex-col justify-center items-center gap-5">
        <h1
          className={`${montserrat.className} lg:text-3xl text-2xl font-bold capitalize text-center`}
        >
          <span className="text-main">scientific</span> advisors
        </h1>
        <p
          className={`${montserrat.className} max-w-[800px] text-2xl text-center`}
        >
          The research efforts are guided by members of our Scientific Advisory
          Board
        </p>
      </div> */}
    </div>
  );
}

export default AllResearchPartner;
