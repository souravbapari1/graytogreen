"use client";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import Benefit from "@/components/sections/SustainableEvents/Benefit";
import GiveYouthVoice from "@/components/sections/SustainableEvents/GiveYouthVoice";
import SustainableEventsHero from "@/components/sections/SustainableEvents/SustainableEventsHero";
import TreeCounter from "@/components/sections/SustainableEvents/TreeCounter";
import TreeVouchers from "@/components/sections/SustainableEvents/TreeVouchers";
import { gql, useQuery } from "@apollo/client";
import React from "react";
import Loading from "../loading";
import { SustainableEventData } from "./SustainableEventsData";

const STBGQL = gql`
  query SustainableEvents {
    sustainableEvents {
      benefitsTitle
      documentId
      speechsoundlike {
        videoId
        title
        id
      }
      language {
        name
        id
      }
      benefit {
        description
        id
        image {
          url
        }
        title
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
      giveyouthavoice {
        RequesOfflineForm
        RequesOnlineFormLink
        bannerImage {
          url
        }
        description
        id
        title
      }
      headerBanner {
        description
        id
        title
        bannerImage {
          url
        }
      }
    }
  }
`;

function SustainableEvents() {
  const { loading, data } = useQuery<SustainableEventData>(STBGQL, {
    variables: {},
  });
  if (loading) {
    return <Loading className="" />;
  }
  const getData = () => {
    const language = localStorage.getItem("language") || "english";
    return (
      data?.sustainableEvents.find((item) => item.language.name === language) ||
      data?.sustainableEvents.find((item) => item.language.name === "english")
    );
  };

  return (
    <div>
      <Navbar />
      <SustainableEventsHero data={getData()?.headerBanner} />
      <GiveYouthVoice
        data={getData()?.giveyouthavoice}
        videoData={getData()?.speechsoundlike}
      />
      <Benefit title={getData()?.benefitsTitle} data={getData()?.benefit} />
      <TreeCounter />
      <TreeVouchers data={getData()?.contact} />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default SustainableEvents;
