import React from "react";

import Navbar from "@/components/sections/Navbar/Navbar";
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

import Loading from "./loading";
import HomeHeaderSlide from "@/components/sections/Home/slides/HomeHeaderSlide";
import OurPartners from "@/components/sections/Home/OurPartners/OurPartners";
import DonateBanner from "@/components/sections/Home/DonateBanner/DonateBanner";
import PlatformToolsBanner from "@/components/sections/Home/PlatformToolsBanner/PlatformToolsBanner";
import PartnerWithUs from "@/components/sections/Home/PartnerWithUs/PartnerWithUs";
import BlogsBanner from "@/components/sections/Home/Blogs/BlogsBanner/BlogsBanner";
import OurStory from "@/components/sections/Home/OurStory/OurStory";
import LatestVideos from "@/components/sections/Home/Videos/LatestVideos";
import ProtectingAndRestoring from "@/components/sections/Home/DonateBanner/ProtectingAndRestoring";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Footer from "@/components/sections/Footer/Footer";

async function page() {
  await delay(3000);

  return (
    <div>
      <Navbar />
      <HomeHeaderSlide />
      <OurPartners />
      <DonateBanner />
      <PlatformToolsBanner />
      <PartnerWithUs />
      <BlogsBanner />
      <OurStory />
      <LatestVideos />
      <ProtectingAndRestoring />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
