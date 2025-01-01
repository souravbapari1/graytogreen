import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import React from "react";
import { ResearchLabsProgram } from "../../ResearchesLabs";
import { notFound } from "next/navigation";
import Link from "next/link";

export const revalidate = 0;

const GQL = gql`
  query ResearchLabsPrograms($filters: ResearchLabsProgramFiltersInput) {
    researchLabsPrograms(filters: $filters) {
      Apply_Link
      content
      createdAt
      description
      documentId
      icon {
        url
      }
      image {
        url
      }
      publishedAt
      title
      updatedAt
    }
  }
`;

async function page({ params }: { params: { id: string } }) {
  const id = params.id;

  const { data } = await client.query<{
    researchLabsPrograms: ResearchLabsProgram[];
  }>({
    query: GQL,
    variables: {
      filters: {
        documentId: {
          eq: id,
        },
      },
    },
  });

  if (data?.researchLabsPrograms.length === 0) {
    return notFound();
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="flex flex-col gap-10 mt-20 w-full">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-3xl font-bold text-center">
              {data?.researchLabsPrograms[0].title}
            </h1>
            <Link
              target="_blank"
              href={data?.researchLabsPrograms[0].Apply_Link}
              className="donateBtn py-2 shadow-none rounded-md"
            >
              Apply Now
            </Link>
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: data?.researchLabsPrograms[0].content,
            }}
          />
          <br />
          <br />
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
