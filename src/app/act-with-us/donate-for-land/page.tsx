"use client";
import Loading from "@/app/loading";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { gql, useQuery } from "@apollo/client";
import { DonateForLands } from "./donateforland";
import DonateForLandAction from "./DonateForLandAction";
import DonateForLandHero from "./DonateForLandHero";

const DONATE_FOR_LAND = gql`
  query DonateForLands {
    donateForLands {
      bannerDesc
      contact {
        personImage {
          url
        }
        mobileNo
        id
        email
        bookMeetLink
      }
      createdAt
      description
      documentId
      language {
        name
        id
      }
      publishedAt
      requestFormLink
      title
      bannerImage {
        url
      }
    }
  }
`;

function GeneralFunding() {
  const { loading, data } = useQuery<DonateForLands>(DONATE_FOR_LAND, {
    variables: {},
  });

  if (loading) {
    return <Loading className="" />;
  }
  const getData = () => {
    const language = localStorage.getItem("language") || "english";
    return (
      data?.donateForLands.find((item) => item.language.name === language) ||
      data?.donateForLands.find((item) => item.language.name === "english")
    );
  };

  return (
    <div>
      <Navbar />
      <DonateForLandHero
        bannerImage={getData()?.bannerImage?.url}
        title={getData()?.title}
        desc={getData()?.bannerDesc}
      />
      <DonateForLandAction
        applyLink={getData()?.requestFormLink}
        conatctInfo={getData()?.contact}
        description={getData()?.description}
      />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default GeneralFunding;
