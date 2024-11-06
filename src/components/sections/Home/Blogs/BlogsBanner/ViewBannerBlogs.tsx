import React from "react";
import BlogsBanner from "./BlogsBanner";
import { getBlogs } from "@/request/worker/manageBlog";

export const revalidate = 0;
async function ViewBannerBlogs() {
  const blogs = await getBlogs(1, "(public=true)");
  return <BlogsBanner blogs={blogs.items} />;
}

export default ViewBannerBlogs;
