"use client";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import MonthlySummitTalkContent from "@/components/sections/MonthlySummitTalk/MonthlySummitTalkContent";
import MonthlySummitTalkHero from "@/components/sections/MonthlySummitTalk/MonthlySummitTalkHero";
import Navbar from "@/components/sections/Navbar/Navbar";
import { gql, useQuery } from "@apollo/client";
import React from "react";
import Loading from "../loading";
import { MonthlySummitTalksData } from "./mst";

const MST_GQL = gql`
  query MonthlySummitTalks {
    monthlySummitTalks {
      documentId
      header {
        description
        id
        title
        rightImage {
          url
        }
        leftImage {
          url
        }
        centerImage {
          url
        }
      }
      youthSummitTalks {
        title
        sortTitle
        linkUrl
        linkText
        id
        description
        image {
          url
        }
      }
      experience {
        id
        sortTitle
        title
        experienceCard {
          description
          id
          title
          topImage {
            url
          }
          image {
            url
          }
        }
      }
      language {
        id
        name
      }
      sessionsCards {
        title
        registerSessionLink
        registerIndividualsSessionLink
        id
        description
      }
      upcomingSession {
        title
        subTitle
        sessionInfo
        id
        description
        sessionDateTime
        centerImage {
          url
        }
        leftImage {
          url
        }
        rightImage {
          url
        }
      }
    }
  }
`;

function page() {
  const { loading, data, error } = useQuery<MonthlySummitTalksData>(MST_GQL, {
    variables: {},
  });
  if (loading) {
    return <Loading className="" />;
  }

  const getData = () => {
    const language = localStorage.getItem("language") || "english";
    return (
      data?.monthlySummitTalks.find(
        (item) => item.language.name === language
      ) ||
      data?.monthlySummitTalks.find((item) => item.language.name === "english")
    );
  };
  console.log(data);

  return (
    <div>
      <Navbar />
      <MonthlySummitTalkHero data={getData()?.header} />
      <MonthlySummitTalkContent data={getData()} />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
