"use client";
import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";
import GeneralFundingAction from "./GeneralFundingAction";
import GeneralFundingHero from "./GeneralFundingHero";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import { gql, useQuery } from "@apollo/client";
import Loading from "@/app/loading";
import { GeneralFundingsPage } from "./genralfunding";

const GEBERALFUNDING = gql`
  query GeneralFundings {
    generalFundings {
      title
      bannerDesc
      applyFormLink
      bannerImage {
        url
      }
      contact {
        bookMeetLink
        email
        id
        mobileNo
        personImage {
          url
        }
      }
      description
      documentId
      language {
        name
        id
      }
    }
  }
`;

function GeneralFunding() {
  const { loading, data } = useQuery<GeneralFundingsPage>(GEBERALFUNDING, {
    variables: {},
  });

  if (loading) {
    return <Loading className="" />;
  }

  const getData = () => {
    const language = localStorage.getItem("language") || "english";
    return (
      data?.generalFundings.find((item) => item.language.name === language) ||
      data?.generalFundings.find((item) => item.language.name === "english")
    );
  };

  return (
    <div>
      <Navbar />
      <GeneralFundingHero
        bannerImage={getData()?.bannerImage?.url}
        desc={getData()?.bannerDesc}
        title={getData()?.title}
      />
      <GeneralFundingAction
        applyLink={getData()?.applyFormLink}
        conatctInfo={getData()?.contact}
        description={getData()?.description}
      />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default GeneralFunding;
