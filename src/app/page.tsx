import React from "react";

import Navbar from "@/components/sections/Navbar/Navbar";
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

import Loading from "./loading";
import HomeHeaderSlide from "@/components/sections/slides/HomeHeaderSlide";
import OurPartners from "@/components/sections/OurPartners/OurPartners";
import DonateBanner from "@/components/sections/DonateBanner/DonateBanner";
import PlatformToolsBanner from "@/components/sections/PlatformToolsBanner/PlatformToolsBanner";
import PartnerWithUs from "@/components/sections/PartnerWithUs/PartnerWithUs";
import BlogsBanner from "@/components/sections/Blogs/BlogsBanner/BlogsBanner";
import OurStory from "@/components/sections/OurStory/OurStory";
import LatestVideos from "@/components/sections/Videos/LatestVideos";
import ProtectingAndRestoring from "@/components/sections/DonateBanner/ProtectingAndRestoring";
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
