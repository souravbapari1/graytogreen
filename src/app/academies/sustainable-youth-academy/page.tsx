import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import SustainableYouthAcademyAbout from "./SustainableYouthAcademyAbout";
import SustainableYouthAcademyHero from "./SustainableYouthAcademyHero";
import YouthAcademyWahtYouExperience from "./YouthAcademyWahtYouExperience";
import { gql } from "@apollo/client";
import client from "@/graphql/client";
import { SustainableYouthAcademyData } from "./SustainableYouthAcademy";

export const metadata = {
  title: "Sustainable Youth Academy",
  description: "Sustainable Youth Academy",
};

const GYA_GQL = gql`
  query SustainableYouthAcademies {
    sustainableYouthAcademies {
      documentId
      banner {
        id
        title
        description
        bannerImage {
          url
        }
      }
      sustainabilityRegisterCard {
        id
        title
        subtitle
        info {
          id
          title
          description
          bannerImage {
            url
          }
        }
        registerBtn {
          id
          linkText
          linkUrl
        }
        viewMoreBtn {
          id
          linkText
          linkUrl
        }
        sideImage {
          url
        }
      }
      Experience {
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
        }
      }
      createdAt
      language {
        id
        name
      }
    }
  }
`;

export const revalidate = 0;
async function SustainableYouthAcademy({
  searchParams,
}: {
  searchParams?: any;
}) {
  const { data } = await client.query<SustainableYouthAcademyData>({
    query: GYA_GQL,
  });

  const getData = () => {
    const language = searchParams.ln || "english";
    return (
      data?.sustainableYouthAcademies.find(
        (item) => item.language.name === language
      ) ||
      data?.sustainableYouthAcademies.find(
        (item) => item.language.name === "english"
      )
    );
  };

  const pageData = getData();

  return (
    <div>
      <Navbar />
      <SustainableYouthAcademyHero data={pageData?.banner} />
      <SustainableYouthAcademyAbout
        data={pageData?.sustainabilityRegisterCard}
      />
      <YouthAcademyWahtYouExperience data={pageData?.Experience} />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default SustainableYouthAcademy;
