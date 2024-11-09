import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import React from "react";
import { PagesData } from "./Pages";
import NotFound from "@/app/not-found";
import { Metadata } from "next";

export let metadata: Metadata = {};

const PAGE_GQL = gql`
  query Pages($filters: PageFiltersInput) {
    pages(filters: $filters) {
      documentId
      title
      slug
      content
      createdAt
      updatedAt
      publishedAt
    }
  }
`;

export const revalidate = 0;
async function TermsAndConditions({ params }: { params: { slug: string } }) {
  const { data } = await client.query<PagesData>({
    query: PAGE_GQL,
    variables: {
      filters: {
        slug: {
          eq: params.slug,
        },
      },
    },
  });

  if (data?.pages?.length === 0) {
    return <NotFound />;
  }

  const post = data?.pages[0];

  metadata = {
    title: post?.title,
    description: post?.content,
  };

  return (
    <div>
      <Navbar />
      <div className={`${montserrat.className} container py-12`}>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default TermsAndConditions;
