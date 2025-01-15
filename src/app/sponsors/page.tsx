import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import client, { strApi } from "@/graphql/client";
import { gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SponsorData } from "./sponsers";

export const revalidate = 0;
async function page() {
  const data = await client.query<SponsorData>({
    query: gql`
      query Sponsors {
        homePages {
          sponsors {
            id
            name
            url
            brandImage {
              url
            }
          }
        }
      }
    `,
  });
  return (
    <div>
      <Navbar />
      <div className={`${montserrat.className} container`}>
        <h1 className="md:text-4xl text-3xl md:mt-16 mt-10 font-extrabold text-center">
          Our <span className="text-main ">Sponsor</span>
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-2 md:mt-14 mt-5 md:mb-10 items-center ">
          {data.data.homePages?.[0].sponsors?.map((e, i) => {
            return (
              <Link
                key={i + e.name}
                href={e.url}
                target="_blank"
                className="w-full border flex flex-col hover:bg-green-50 transition-all justify-center items-center"
              >
                <Image
                  src={strApi + e.brandImage.url}
                  key={i}
                  alt=""
                  className=" h-36 object-contain md:mx-10  mx-5"
                  width={100}
                  height={100}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
