"use client";
import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";
import EndowmentHero from "./EndowmentHero";
import EndowmentAction from "./EndowmentAction";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import { gql, useQuery } from "@apollo/client";
import Loading from "@/app/loading";
import { EndowmentsData } from "./endowment";

const ENDOWMENTS = gql`
  query Endowments {
    endowments {
      bannerImage {
        url
        name
      }
      contact {
        mobileNo
        id
        email
        bookMeetLink
        personImage {
          url
        }
      }
      documentId
      language {
        name
        id
      }
      title
      bannerDesc
      description
    }
  }
`;

function page() {
  const { loading, data } = useQuery<EndowmentsData>(ENDOWMENTS, {
    variables: {},
  });

  if (loading) {
    return <Loading className="" />;
  }

  const getData = () => {
    const language = localStorage.getItem("language") || "english";
    return (
      data?.endowments.find((item) => item.language.name === language) ||
      data?.endowments.find((item) => item.language.name === "english")
    );
  };

  return (
    <div>
      <Navbar />
      <EndowmentHero
        bannerImage={getData()?.bannerImage?.url}
        desc={getData()?.bannerDesc}
        title={getData()?.title}
      />
      <EndowmentAction
        conatctInfo={getData()?.contact}
        description={getData()?.description}
      />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
