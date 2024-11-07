import { Suspense } from "react";
import BlogsBanner from "./BlogsBanner";

function ViewBannerBlogs() {
  return (
    <Suspense fallback={<div></div>}>
      <BlogsBanner />
    </Suspense>
  );
}

export default ViewBannerBlogs;
