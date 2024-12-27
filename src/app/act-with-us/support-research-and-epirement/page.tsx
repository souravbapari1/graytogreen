import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";
import SupportResearchAndEpirementHero from "./SupportResearchAndEpirementHero";
import SupportResearchAndEpirementAction from "./SupportResearchAndEpirementAction";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Footer from "@/components/sections/Footer/Footer";
import client from "@/graphql/client";
import {
  SupportResearchAndExperiment,
  SupportResearchAndExperimentData,
} from "./SupportResearchAndExperiment";
import { gql } from "@apollo/client";

export const revalidate = 0;
const GQL = gql`
  query SupportResearchAndExperiments {
    supportResearchAndExperiments {
      applyLink {
        linkUrl
        linkText
        id
      }
      banner {
        title
        id
        description
        bannerImage {
          url
        }
      }
      contact {
        title
        mobileNo
        id
        email
        bookMeetLink
        personImage {
          url
        }
      }
      content
      publishedAt
      createdAt
      documentId
    }
  }
`;

async function SupportResearchAndEpirementPage() {
  const { data } = await client.query<SupportResearchAndExperimentData>({
    query: GQL,
  });

  const pageData = data.supportResearchAndExperiments?.[0];

  return (
    <div>
      <Navbar />
      <SupportResearchAndEpirementHero data={pageData?.banner} />
      <SupportResearchAndEpirementAction data={pageData} />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default SupportResearchAndEpirementPage;
