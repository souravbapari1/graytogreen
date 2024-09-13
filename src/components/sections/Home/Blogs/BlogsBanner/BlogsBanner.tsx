"use client";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function BlogsBanner() {
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
    <div className="relative mt-20 w-full" style={{ height: bannerHeight }}>
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
          The Plant for the Planet Blog
        </h1>
        <p
          className={`${montserrat.className} font-semibold mt-5 text-xl  text-white  text-center mb-20`}
        >
          Empowering global youth to restore our planet—one tree at a time
        </p>
        <div className="w-full grid xl:grid-cols-4 macAir:grid-cols-3 lg:grid-cols-2  grid-cols-1 gap-10">
          {Array.from({ length: 6 }).map((_, i) => {
            return (
              <div
                className="bg-white rounded-xl overflow-hidden shadow "
                key={i}
              >
                <Image
                  src="https://st.depositphotos.com/2632165/4026/i/450/depositphotos_40264933-stock-photo-young-plant.jpg"
                  width={1200}
                  height={1200}
                  alt=""
                  className="w-full h-60"
                />
                <div className="p-5">
                  <h1 className="text-xl ">
                    The Power Of Achieve More Together
                  </h1>
                  <p className="mt-2 text-gray-500">
                    Explore the concept of collaboration and its impact on
                    productivity.
                  </p>
                  <div className="flex mt-3">
                    <div className="flex justify-start items-center gap-3">
                      <Image
                        src="https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-600nw-1703979295.jpg"
                        alt=""
                        width={1200}
                        height={1200}
                        about=""
                        className="w-12 h-12 object-cover rounded-full"
                      />
                      <div className="">
                        <p className="font-bold text-green-950">
                          William Goham
                        </p>
                        <p className="text-xs mt-1">7 July 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BlogsBanner;
