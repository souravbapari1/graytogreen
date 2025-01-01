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
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { IoClose } from "react-icons/io5";

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
      Job_Status
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
        <h1 className="font-bold lg:text-4xl text-2xl text-center">
          Careers at Gray To Green
        </h1>
        <p className="text-center md:mt-5 md:text-base text-xs">
          Join us to create solutions for climate crisis!
        </p>
        <div className="grid lg:grid-cols-3 gap-5 mt-10">
          {data?.jobs?.map((e) => {
            return (
              <Link
                key={e.documentId}
                href={e.Job_Status == "CLOSED" ? "#" : "/careers/" + e.slug}
                className={cn(
                  "flex justify-center relative items-center overflow-hidden flex-col w-full bg-primary/10 border-2 border-green-500/10 rounded-lg p-4",
                  e.Job_Status == "CLOSED"
                    ? " bg-red-200/20 border-red-500/10 "
                    : "opacity-100"
                )}
              >
                {e.Job_Status == "CLOSED" && (
                  <div className="w-full h-full bg-red-600/30 absolute top-0 right-0 flex justify-center items-center text-white flex-col gap-2">
                    <IoClose
                      size={60}
                      className="bg-red-600 p-2 rounded-full"
                    />
                    <p className="font-bold text-sm">No openning Role</p>
                  </div>
                )}
                <Badge
                  variant={e.Job_Status == "CLOSED" ? "destructive" : "default"}
                  className="absolute top-6 right-6 rounded-sm shadow-lg border-2 border-primary/10"
                >
                  {e.Job_Status}
                </Badge>
                <Image
                  src={strApi + e.image.url}
                  width={1000}
                  height={1000}
                  className="h-48 w-full rounded-lg object-cover "
                  alt=""
                />
                <div className="w-full px-1 flex flex-col justify-start items-start mt-4">
                  <p className="text-md font-bold">{e.jon_position}</p>
                  <p className="text-sm ">{e.location}</p>
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
