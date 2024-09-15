import React from "react";

import Navbar from "@/components/sections/Navbar/Navbar";
import HomeHeaderSlide from "@/components/sections/Home/slides/HomeHeaderSlide";
import OurPartners from "@/components/sections/Home/OurSponsor/OurSponsor";
import DonateBanner from "@/components/sections/Home/DonateBanner/DonateBanner";
import PlatformToolsBanner from "@/components/sections/Home/PlatformToolsBanner/PlatformToolsBanner";
import PartnerWithUs from "@/components/sections/Home/PartnerWithUs/PartnerWithUs";
import BlogsBanner from "@/components/sections/Home/Blogs/BlogsBanner/BlogsBanner";
import OurStory from "@/components/sections/Home/OurStory/OurStory";
import LatestVideos from "@/components/sections/Home/Videos/LatestVideos";
import ProtectingAndRestoring from "@/components/sections/Home/DonateBanner/ProtectingAndRestoring";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Footer from "@/components/sections/Footer/Footer";

import { montserrat } from "@/fonts/font";
import GGMapBox from "@/components/GMapBox/GGMapBox";
import Faq from "@/components/sections/Home/Faq/Faq";

async function page() {
  return (
    <div>
      <Navbar />
      <HomeHeaderSlide />
      <div className="container my-20">
        <h1
          className={`lg:text-4xl text-2xl font-bold text-center mb-20 mt-20 ${montserrat.className}`}
        >
          295+ Projects united{" "}
          <span className="text-main">to bring back a Trillion Trees.</span>
          <p className="mt-2 ">Donate Now!</p>
        </h1>

        <GGMapBox disableScroll />
      </div>
      <OurPartners />
      <DonateBanner />
      <PartnerWithUs />
      <OurStory />
      <PlatformToolsBanner />
      <ProtectingAndRestoring />
      <LatestVideos />
      <BlogsBanner />
      <Faq />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
