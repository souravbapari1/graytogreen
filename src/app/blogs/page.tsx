import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Collection } from "@/interface/collection";
import BlogsList from "./BlogsList";
import { ResearchItem } from "@/interface/researches";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { BlogCategoryItem } from "@/interface/category";

async function Blogs() {
  const tabs = await client.query<BlogCategoryItem>({
    query: gql`
      query BlogCategories(
        $locale: I18NLocaleCode
        $filters: BlogCategoryFiltersInput
      ) {
        blogCategories(locale: $locale, filters: $filters) {
          name
          locale
        }
      }
    `,
    variables: {
      locale: "en",
      filters: {
        showOnTab: {
          eq: true,
        },
      },
    },
  });
  return (
    <div>
      <Navbar />
      <BlogsList tabs={tabs.data.blogCategories} />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default Blogs;
