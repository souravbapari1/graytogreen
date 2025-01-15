import AboutHero from "@/components/sections/AboutUS/AboutHero";
import AboutOurAmbassadors from "@/components/sections/AboutUS/AboutOurAmbassadors";
import AboutOurTeam from "@/components/sections/AboutUS/AboutOurTeam";
import AboutPatrons from "@/components/sections/AboutUS/AboutPatrons";
import BordOfDirectors from "@/components/sections/AboutUS/BordOfDirectors";
import EducationAdvisors from "@/components/sections/AboutUS/EducationAdvisors";
import Foundation from "@/components/sections/AboutUS/Foundation";
import FoundationSecretariatBanner from "@/components/sections/AboutUS/FoundationSecretariatBanner";
import ScientificAndSustainabilityAdvisors from "@/components/sections/AboutUS/ScientificAndSustainabilityAdvisors";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import React from "react";
import { AboutUseData } from "./aboutus";

export const revalidate = 0;

const GQL = gql`
  query AboutUses {
    aboutUses {
      bordMembers {
        id
        member {
          id
          name
          about
          image {
            url
          }
          linkdinProfile
          position
        }
        title
        description
      }
      documentId
      educationalAdvisors {
        id
        member {
          id
          name
          about
          image {
            url
          }
          linkdinProfile
          position
        }
        title
        description
      }
      esg {
        id
        title
        description
        linkText
        linkUrl
        align
        image {
          url
        }
        More_Links {
          linkText
          linkUrl
          id
        }
      }
      foundationCouncil {
        id
        member {
          id
          name
          about
          image {
            url
          }
          linkdinProfile
          position
        }
        title
        description
      }
      foundationCouncilLink1 {
        id
        linkText
        linkUrl
      }
      foundationCouncilLink2 {
        id
        linkText
        linkUrl
      }
      header {
        id
        title

        description
        images {
          id
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
      }
      missionAndVission {
        id
        title
        description
        linkText
        linkUrl
        align
        image {
          url
        }
        More_Links {
          linkText
          linkUrl
          id
        }
      }
      parteners {
        id
        member {
          id
          name
          about
          image {
            url
          }
          linkdinProfile
          position
        }
        title
        description
      }
      scientificAndSustainabilityAdvisors {
        id
        member {
          id
          name
          about
          image {
            url
          }
          linkdinProfile
          position
        }
        title
        description
      }
    }
    teamMember {
      Teams {
        members {
          id
          name
          about
          image {
            url
          }
          linkdinProfile
          position
        }
        tabName
        id
      }
      title
      description
    }
    g2GAmbassador {
      Description
      Title
      Members {
        tabName
        id
        members {
          position
          name
          linkdinProfile
          id
          about
          image {
            url
          }
          Other_Links {
            linkUrl
            linkText
            id
          }
        }
      }
    }
  }
`;

async function AboutUs() {
  const { data } = await client.query<AboutUseData>({
    query: GQL,
  });

  const pageData = data?.aboutUses[0];

  return (
    <div>
      <Navbar />
      <AboutHero heroData={pageData?.header} />
      <FoundationSecretariatBanner
        data={pageData.missionAndVission}
        seg={pageData.esg}
      />
      <AboutPatrons data={pageData?.parteners} />
      <AboutOurTeam data={data.teamMember} />
      <Foundation
        data={pageData?.foundationCouncil || ""}
        link1={pageData?.foundationCouncilLink1 || ""}
        link2={pageData?.foundationCouncilLink2 || ""}
      />
      <BordOfDirectors data={pageData?.bordMembers} />
      <AboutOurAmbassadors data={data.g2GAmbassador} />
      <ScientificAndSustainabilityAdvisors
        data={pageData?.scientificAndSustainabilityAdvisors}
      />
      <EducationAdvisors data={pageData?.educationalAdvisors} />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default AboutUs;
