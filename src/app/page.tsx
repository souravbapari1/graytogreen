import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import DonateBanner from "@/components/sections/Home/DonateBanner/DonateBanner";
import ProtectingAndRestoring from "@/components/sections/Home/DonateBanner/ProtectingAndRestoring";
import OurPartners from "@/components/sections/Home/OurSponsor/OurSponsor";
import OurStory from "@/components/sections/Home/OurStory/OurStory";
import PartnerWithUs from "@/components/sections/Home/PartnerWithUs/PartnerWithUs";
import PlatformToolsBanner from "@/components/sections/Home/PlatformToolsBanner/PlatformToolsBanner";
import HomeHeaderSlide from "@/components/sections/Home/slides/HomeHeaderSlide";
import LatestVideos from "@/components/sections/Home/Videos/LatestVideos";
import Navbar from "@/components/sections/Navbar/Navbar";

import GGMapBox from "@/components/GMapBox/GGMapBox";
import ViewBannerBlogs from "@/components/sections/Home/Blogs/BlogsBanner/ViewBannerBlogs";
import Faq from "@/components/sections/Home/Faq/Faq";
import { montserrat } from "@/fonts/font";
import { Collection } from "@/interface/collection";
import { ProjectItem } from "@/interface/project";
import { client } from "@/request/actions";
import Link from "next/link";

export const revalidate = 0;
async function page() {
  const project = await client
    .get("/api/collections/projects/records/", {
      expand: "operated_by,reports,sdgs,sdgs.sdg,unit_types,type",
    })
    .send<Collection<ProjectItem>>();

  return (
    <div>
      <Navbar />
      <HomeHeaderSlide />
      <div className="container my-20">
        <h1
          className={`lg:text-4xl text-2xl font-bold text-center mb-20 mt-20 ${montserrat.className}`}
        >
          295+ Projects united to{" "}
          <span className="text-primary">bring back a Trillion Trees</span> &
          200+ Projects to remove{" "}
          <span className="text-blue-700">10 m of Plastic waste</span>
          <p className="mt-2 ">Act Now!</p>
        </h1>

        <div className="w-full lg:h-auto h-96  relative overflow-hidden rounded-3xl ">
          <div className="w-full h-full z-[31] absolute top-0 right-0 bg-black/30 lg:hidden flex justify-center items-center">
            <Link
              href="/platform"
              className={`${montserrat.className} donateBtn font-extrabold  py-3`}
            >
              Open Platform
            </Link>
          </div>
          <GGMapBox disableScroll data={project} />
        </div>
      </div>
      <OurPartners />
      <DonateBanner />
      <PartnerWithUs />
      <OurStory />
      <PlatformToolsBanner />
      <ProtectingAndRestoring />
      <LatestVideos />
      <ViewBannerBlogs />
      <Faq />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
