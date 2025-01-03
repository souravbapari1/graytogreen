import OngoingResearch from "@/app/research/ResearchesList";
import ScientificAdvisors from "@/components/sections/AboutUS/ScientificAdvisors";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import ApplyResearchPrograms from "@/components/sections/Research/ApplyResearchPrograms";

import RecentPublications from "@/components/sections/Research/RecentPublications";
import ResearchFellowships from "@/components/sections/Research/ResearchFellowships";
import ResearchHero from "@/components/sections/Research/ResearchHero";
import RestorationAdviceTeam from "@/components/sections/Research/RestorationAdviceTeam";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { ResearchesLabData } from "./ResearchesLabs";
import ResearchSlide from "@/components/sections/Research/ResearchSlide";
import AllResearchPartner from "@/components/sections/Research/AllResearchPartner";

const GQL = gql`
  query About {
    researchesLabs {
      about {
        title
        linkUrl
        linkText
        image {
          url
        }
        id
        description
        align
      }
      challenges {
        title
        sortTitle
        id
      }
      header {
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
        id
      }
      documentId
      infoCards {
        title
        id
        description
        cards {
          title
          linkUrl
          linkText
          id
          description
          align
          image {
            url
          }
        }
      }
      members {
        title
        id
        description
        member {
          name
          position
          image {
            url
          }
          about
          id
          linkdinProfile
        }
      }
      researchPartner {
        title
        id
        member {
          name
          link
          id
          image {
            url
          }
        }
      }
      textSlides {
        bgImage {
          url
        }
        id
        text {
          id
          content
        }
      }
      locale
    }
    researchLabsPrograms {
      Apply_Link
      content
      createdAt
      description
      documentId
      icon {
        url
      }
      image {
        url
      }
      title
      publishedAt
      updatedAt
    }
  }
`;

export const revalidate = 0;

async function page() {
  const { data } = await client.query<ResearchesLabData>({ query: GQL });

  const pageData = data?.researchesLabs[0];

  return (
    <div>
      <Navbar />
      <ResearchHero header={pageData?.header} />
      <ApplyResearchPrograms
        data={pageData?.challenges}
        labs={data?.researchLabsPrograms}
      />
      <OngoingResearch viewAll={true} />
      <ResearchFellowships data={pageData?.infoCards} />
      <ScientificAdvisors
        data={pageData?.members.member}
        desc={pageData?.members.description}
        title={pageData?.members.title}
      />

      <ResearchSlide slide={pageData?.textSlides} />

      <AllResearchPartner partnenrs={pageData?.researchPartner} />
      {/* <NitrogenFixingSpecies /> */}
      {/* <FunctionalDiversityRestoration /> */}
      <RestorationAdviceTeam data={pageData?.about} />
      {/* <InfrastructureAndTeam /> */}
      {/* <TourOfTheCampus /> */}

      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
