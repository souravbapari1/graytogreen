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

import ViewBannerBlogs from "@/components/sections/Home/Blogs/BlogsBanner/ViewBannerBlogs";
import Faq from "@/components/sections/Home/Faq/Faq";
import HomePlatform, {
  HomePlatformLoading,
} from "@/components/sections/Home/HomePlatform";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { Suspense } from "react";
import { HomePages } from "./homePage";

const HOME_PAGE = gql`
  query HomePages {
    homePages {
      documentId
      banner {
        image {
          url
          alternativeText
        }
        title
        id
      }
      sponsors {
        brandImage {
          url
        }
        id
      }
      Academies {
        description
        id
        title
        Academies {
          title
          time
          startDate
          slug
          registerationEndDate
          pricing
          name
          locationType
          location
          languge
          endDate
          applications
          amount
          maxParticipents
        }
        images {
          center {
            url
          }
          left {
            url
          }
          right {
            url
          }
        }
        links {
          linkText
          id
          linkUrl
        }
      }
      actionSpeaks {
        description
        id
        title
        videoId
        Links {
          id
          linkText
          linkUrl
        }
      }
      listCardView {
        align
        description
        id
        title
        linkUrl
        linkText
        image {
          url
          name
        }
      }
      howItWorks {
        description
        id
        title
        videoId
        Links {
          linkUrl
          linkText
          id
        }
      }
      faqs {
        answer
        id
        question
      }
      createdAt
      language {
        name
        id
      }
    }
  }
`;

export const revalidate = 30;
async function page({ searchParams }: { searchParams?: any }) {
  const { data } = await client.query<HomePages>({
    query: HOME_PAGE,
  });

  const getData = () => {
    const language = searchParams.ln || "english";
    return (
      data?.homePages.find((item) => item.language.name === language) ||
      data?.homePages.find((item) => item.language.name === "english")
    );
  };

  return (
    <div>
      <Navbar />
      <HomeHeaderSlide data={getData()?.banner} />

      <Suspense fallback={<HomePlatformLoading />}>
        <HomePlatform />
      </Suspense>
      <OurPartners
        academics={getData()?.Academies}
        sponsers={getData()?.sponsors}
      />
      <DonateBanner
        data={getData()?.actionSpeaks}
        cardData={getData()?.listCardView}
      />
      <PartnerWithUs />
      <OurStory data={getData()?.howItWorks} />
      <PlatformToolsBanner />
      <ProtectingAndRestoring />
      <Suspense>
        <LatestVideos />
      </Suspense>
      <ViewBannerBlogs />
      <Faq data={getData()?.faqs} />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
