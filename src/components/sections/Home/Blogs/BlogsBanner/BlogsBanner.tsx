"use client";
import BlogCard from "@/app/blogs/BloCard";
import { montserrat } from "@/fonts/font";
import { BlogItem } from "@/interface/blog";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function BlogsBanner({ blogs }: { blogs: BlogItem[] }) {
  const bannerRef = useRef<HTMLDivElement | null>(null); // Create a ref for the banner
  const [bannerHeight, setBannerHeight] = useState<number>(0); // State to hold dynamic height

  // Function to calculate and set the banner height
  const updateBannerHeight = () => {
    if (bannerRef.current) {
      setBannerHeight(bannerRef.current.offsetHeight); // Set the height dynamically
    }
  };

  useEffect(() => {
    // Set initial height
    updateBannerHeight();

    // Add event listener for window resize
    window.addEventListener("resize", updateBannerHeight);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateBannerHeight);
    };
  }, []);
  return (
    <div className="relative mt-28 w-full" style={{ height: bannerHeight }}>
      <div className="absolute top-0 right-0 left-0 mx-auto w-full z-10">
        <Image
          width={2000}
          height={2000}
          alt=""
          className="w-full  object-cover lg:h-[780px] h-96 z-10"
          src="/assets/world-map.svg"
        />
        <div className=" object-cover lg:h-[780px] w-full h-96 bg-black/50 absolute top-0 right-0 left-0 mx-auto z-20"></div>
      </div>
      <div
        ref={bannerRef}
        className="absolute top-0 right-0 left-0 mx-auto container z-30 py-20"
      >
        <h1
          className={`${montserrat.className} font-bold text-4xl  text-white  text-center`}
        >
          The Blog
        </h1>
        <p
          className={`${montserrat.className} font-semibold mt-5 text-xl  text-white  text-center mb-20`}
        >
          Empowering global youth to restore our planet—one tree at a time
        </p>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2   grid-cols-1 gap-10">
          {blogs.map((e, i) => {
            return <BlogCard key={"vlog" + i} blog={e} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default BlogsBanner;
