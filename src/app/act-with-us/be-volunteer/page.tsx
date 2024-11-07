"use client";
import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";
import BeVolunteerHero from "./BeVolunteerHero";
import BeVolunteerAction from "./BeVolunteerAction";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Footer from "@/components/sections/Footer/Footer";
import { gql, useQuery } from "@apollo/client";
import Loading from "@/app/loading";
import { BeVolunteers } from "./beVolunteer";

const BE_VOLUNTEER = gql`
  query BeVolunteers {
    beVolunteers {
      applyFormLink
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
      description
      createdAt
      documentId
      publishedAt
      title
      language {
        name
        id
      }
      bannerImage {
        url
      }
    }
  }
`;

function BeVolunteer() {
  const { loading, data } = useQuery<BeVolunteers>(BE_VOLUNTEER, {
    variables: {},
  });

  if (loading) {
    return <Loading className="" />;
  }

  const getData = () => {
    const language = localStorage.getItem("language") || "english";
    return (
      data?.beVolunteers.find((item) => item.language.name === language) ||
      data?.beVolunteers.find((item) => item.language.name === "english")
    );
  };

  return (
    <div>
      <Navbar />
      <BeVolunteerHero
        bannerImage={getData()?.bannerImage?.url}
        desc={getData()?.bannerDesc}
        title={getData()?.title}
      />
      <BeVolunteerAction
        applyLink={getData()?.applyFormLink}
        conatctInfo={getData()?.contact}
        description={getData()?.description}
      />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default BeVolunteer;
