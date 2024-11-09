import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import ReviewBoard from "./section/ReviewBoard";
import StandardsInfo from "./section/StandardsInfo";
import StandersHero from "./section/StandersHero";
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
export const metadata = {
  title: "Standards",
  description: "Standards",
};
export const revalidate = 0;

async function Standards({ searchParams }: { searchParams?: any }) {
  const { data } = await client.query<StandardData>({
    variables: {},
    query: STANDERS_GQL,
  });

  const getData = () => {
    const language = searchParams.ln || "english";
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
