"use client";
import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";
import StandersHero from "./section/StandersHero";
import ReviewBoard from "./section/ReviewBoard";
import StandardsInfo from "./section/StandardsInfo";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Footer from "@/components/sections/Footer/Footer";
import { gql, useQuery } from "@apollo/client";
import Loading from "../loading";
import { StandardData } from "./standerds";

const STANDERS_GQL = gql`
  query standards {
    standards {
      banner {
        description
        id
        title
        bannerImage {
          url
        }
      }
      boardMembers {
        about
        id
        linkdinProfile
        name
        position
        image {
          url
        }
      }
      documentId
      language {
        name
        id
      }
      membersDescription
      membersTitle
      plantingReports {
        description
        id
        title
        file {
          url
        }
      }
      plantingReportsDesc
      plantingReportsTitle
      plasticReports {
        description
        file {
          url
        }
        id
        title
      }
      plasticReportsDesc
      plasticReportsTitle
    }
  }
`;

function Standards() {
  const { loading, data, error } = useQuery<StandardData>(STANDERS_GQL, {
    variables: {},
  });

  if (loading) {
    return <Loading className="" />;
  }

  const getData = () => {
    const language = localStorage.getItem("language") || "english";
    return (
      data?.standards.find((item) => item.language.name === language) ||
      data?.standards.find((item) => item.language.name === "english")
    );
  };

  return (
    <div>
      <Navbar />
      <StandersHero data={getData()?.banner} />
      <ReviewBoard
        data={getData()?.boardMembers}
        description={getData()?.membersDescription}
        title={getData()?.membersTitle}
      />
      <StandardsInfo data={getData()} />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default Standards;
