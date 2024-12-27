import AcademicsHero from "@/components/sections/Academies/AcademicsHero";
import AcademicsInfoLists from "@/components/sections/Academies/AcademicsInfoLists";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { AcademiesAndLabs } from "./AcademiesAndLab";

const ACADEMICS = gql`
  query AcademiesAndLabs {
    academiesAndLabs {
      BootCamps
      bannerImage {
        url
      }
      climateChangeExperts
      documentId
      graduatedAmbassadors
      headerDescription
      headerTitle

      releasedResearches
      workspace
      publishedAt
      infocard {
        id
        link
        title
        image {
          url
          name
        }
      }
      language {
        id
        name
      }
      Slogons {
        title
        id
        description
        bannerImage {
          url
        }
      }
    }
  }
`;
export const revalidate = 30;
async function page({ searchParams }: { searchParams?: any }) {
  const { data } = await client.query<AcademiesAndLabs>({
    query: ACADEMICS,
  });

  const getData = () => {
    const language = searchParams.ln || "english";
    return (
      data?.academiesAndLabs.find((item) => item.language.name === language) ||
      data?.academiesAndLabs.find((item) => item.language.name === "english")
    );
  };

  return (
    <div>
      <Navbar />
      <AcademicsHero
        slogans={getData()?.Slogons}
        headerDescription={getData()?.headerDescription}
        headerImage={getData()?.bannerImage?.url}
        hraderTitle={getData()?.headerTitle}
      />
      <AcademicsInfoLists
        BootCamps={getData()?.BootCamps}
        climateChangeExperts={getData()?.climateChangeExperts}
        graduatedAmbassadors={getData()?.graduatedAmbassadors}
        infocard={getData()?.infocard}
        releasedResearches={getData()?.releasedResearches}
        workspace={getData()?.workspace}
      />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
