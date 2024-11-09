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
  query ResearchesLabs {
    researchesLabs {
      documentId
      header {
        id
        title
        title2
        title3
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
      challenges {
        id
        sortTitle
        title
        experienceCard {
          id
          title
          description
          topImage {
            url
          }
          image {
            url
          }
          link {
            id
            linkText
            linkUrl
          }
        }
      }
      infoCards {
        id
        title
        description
        cards {
          id
          title
          description
          linkText
          linkUrl
          align
          image {
            url
          }
        }
      }
      textSlides {
        id
        bgImage {
          url
        }
        text {
          id
          text
        }
      }
      researchPartner {
        id
        title
        member {
          id
          name
          link
          image {
            url
          }
        }
      }
      about {
        id
        title
        description
        linkText
        linkUrl
        align
        image {
          url
        }
      }
      members {
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
  }
`;

async function page() {
  const { data } = await client.query<ResearchesLabData>({ query: GQL });

  const pageData = data?.researchesLabs[0];

  return (
    <div>
      <Navbar />
      <ResearchHero header={pageData?.header} />
      <ApplyResearchPrograms data={pageData?.challenges} />
      <OngoingResearch />
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
