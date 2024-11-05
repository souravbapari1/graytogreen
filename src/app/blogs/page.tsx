import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import BlogCard from "./BloCard";
import { client } from "@/request/actions";
import { Collection } from "@/interface/collection";
import BlogsList from "./BlogsList";
import { ResearchItem } from "@/interface/researches";

async function Blogs() {
  const tabs = await client
    .get("/api/collections/blog_category/records", {
      filter: `(showOnTab=true)`,
    })
    .send<Collection<ResearchItem>>();
  return (
    <div>
      <Navbar />
      <BlogsList tabs={tabs.items} />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default Blogs;
