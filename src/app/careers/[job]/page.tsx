import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import Link from "next/link";
import React from "react";
import { JobData } from "./job";
import NotFound from "@/app/not-found";
import { Metadata } from "next";
export let metadata: Metadata = {};
export const revalidate = 0;
const JOB_GQL = gql`
  query Jobs($filters: JobFiltersInput) {
    jobs(filters: $filters) {
      documentId
      jon_position
      location
      slug
      content
      applyLink
      image {
        url
      }
    }
  }
`;
async function page({ params }: { params: { job: string } }) {
  const { data } = await client.query<JobData>({
    query: JOB_GQL,
    variables: {
      filters: {
        slug: {
          eq: params.job,
        },
      },
    },
  });

  if (data?.jobs?.length === 0) {
    return <NotFound />;
  }

  const pageData = data?.jobs[0];
  metadata = {
    title: pageData?.jon_position || "Job",
  };
  return (
    <div>
      <Navbar />
      <div
        className={`container ${montserrat.className} py-20 flex justify-center items-center flex-col gap-10`}
      >
        <div className=" max-w-[800px] w-full md:shadow-lg md:p-14 md:border md:rounded-xl md:border-gray-100">
          <h1 className="md:text-4xl text-2xl font-bold text-center mb-8">
            {pageData?.jon_position}
          </h1>
          <div className="">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: pageData?.content || "" }}
            />
            <br />
            <br />
            <Link
              target="_blank"
              href={pageData?.applyLink || "#"}
              className="donateBtn py-4 mx-auto block text-center shadow-none"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
