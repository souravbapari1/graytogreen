import AcademicsInfo from "@/components/sections/Academies/AcademicsInfo";
import AcademicsMore from "@/components/sections/Academies/AcademicsMore";
import UpcomingAcademies from "@/components/sections/Academies/UpcomingAcademies";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { GreenKidsAcademyData } from "./GreenKidsAcademys";

const GKA_GQL = gql`
  query GreenKidsAcademies {
    greenKidsAcademies {
      documentId
      banner {
        id
        title
        description
        bannerImage {
          url
        }
      }
      Academies {
        id
        title
        description
        image {
          url
        }
        links {
          id
          linkText
          linkUrl
        }
      }
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
      language {
        id
        name
      }
      createdAt
      flowChatImage {
        url
      }
      flowChatMobileImage {
        url
      }
      flowChatTitle
    }
    upcomingAcademies {
      documentId
      title
      date
      time
      languge
      location
      name
      slug
    }
  }
`;

export const metadata = {
  title: "Green Kids Academy",
  description: "Green Kids Academy",
};

export const revalidate = 0;

async function GreenKidsAcademy({ searchParams }: { searchParams?: any }) {
  const { data } = await client.query<GreenKidsAcademyData>({
    query: GKA_GQL,
  });

  const getData = () => {
    const language = searchParams.ln || "english";
    return (
      data?.greenKidsAcademies.find(
        (item) => item.language.name === language
      ) ||
      data?.greenKidsAcademies.find((item) => item.language.name === "english")
    );
  };

  const pageData = getData();

  return (
    <div>
      <Navbar />
      <AcademicsInfo
        banner={pageData?.banner}
        academies={pageData?.Academies}
      />
      <UpcomingAcademies data={data.upcomingAcademies} />
      <AcademicsMore
        data={pageData?.cards}
        flowChatImage={pageData?.flowChatImage?.url}
        flowChatMobileImage={pageData?.flowChatMobileImage?.url}
        flowChatTitle={pageData?.flowChatTitle}
      />

      <FooterTop />
      <Footer />
    </div>
  );
}

export default GreenKidsAcademy;
