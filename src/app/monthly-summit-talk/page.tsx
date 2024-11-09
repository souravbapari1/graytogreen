import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import MonthlySummitTalkContent from "@/components/sections/MonthlySummitTalk/MonthlySummitTalkContent";
import MonthlySummitTalkHero from "@/components/sections/MonthlySummitTalk/MonthlySummitTalkHero";
import Navbar from "@/components/sections/Navbar/Navbar";
import { gql, useQuery } from "@apollo/client";
import React from "react";
import Loading from "../loading";
import { MonthlySummitTalksData } from "./mst";
import client from "@/graphql/client";

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
          urls
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

async function page({ searchParams }: { searchParams: any }) {
  const { data } = await client.query<MonthlySummitTalksData>({
    query: MST_GQL,
  });

  const getData = () => {
    const language = searchParams.ln || "english";
    return (
      data?.monthlySummitTalks.find(
        (item) => item.language.name === language
      ) ||
      data?.monthlySummitTalks.find((item) => item.language.name === "english")
    );
  };

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
