import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import client, { strApi } from "@/graphql/client";
import { gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { JobsData } from "./jobs";

export const metadata = {
  title: "Available Jobs",
  description: "Sustainable Youth Academy",
};

const JOB_GQL = gql`
  query Jobs {
    jobs {
      documentId
      jon_position
      location
      image {
        url
      }
      slug
    }
  }
`;
export const revalidate = 0;
async function Careers() {
  const { data } = await client.query<JobsData>({
    query: JOB_GQL,
  });

  return (
    <div>
      <Navbar />
      <div className={`${montserrat.className} container md:py-20 py-14`}>
        <h1 className="font-bold lg:text-5xl text-2xl text-center">
          Careers at Gray To Green
        </h1>
        <p className="text-center md:mt-5 md:text-base text-xs">
          Join us to create solutions for climate crisis!
        </p>
        <div className="grid lg:grid-cols-4 gap-5 mt-10">
          {data?.jobs?.map((e) => {
            return (
              <Link
                key={e.documentId}
                href={"/careers/" + e.slug}
                className="flex justify-center items-center flex-col w-full"
              >
                <Image
                  src={strApi + e.image.url}
                  width={1000}
                  height={1000}
                  className="h-48 w-auto object-contain"
                  alt=""
                />
                <div className="">
                  <p className="text-lg font-bold">{e.jon_position}</p>
                  <p className="text-lg ">{e.location}</p>
                </div>
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

export default Careers;
