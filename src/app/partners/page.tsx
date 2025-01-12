import ScientificAdvisors from "@/components/sections/AboutUS/ScientificAdvisors";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import OurSolution from "@/components/sections/Partners/OurSolution";
import PartnersHero from "@/components/sections/Partners/PartnersHero";
import ServiceAdditionalPartnership from "@/components/sections/Partners/ServiceAdditionalPartnership";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { PartenerWithUses } from "./partners";

const PARTNERS = gql`
  query PartenerWithUses {
    partenerWithUses {
      OurTeamTitle
      advantages {
        description
        id
        image {
          url
        }
        title
      }
      advantagesTitle
      banner {
        bannerImage {
          url
        }
        id
        title
        description
      }
      documentId
      language {
        name
        id
      }
      ourSolution {
        align
        description
        id
        image {
          url
          name
        }
        linkText
        linkUrl
        title
      }
      ourTeam {
        about
        id
        linkdinProfile
        name
        image {
          url
        }
      }
      requestFormLink
      OurTeamDesc
    }
  }
`;

export const metadata = {
  title: "Partners",
  description: "Partners",
};

export const revalidate = 0;

async function page({ searchParams }: { searchParams?: any }) {
  const { data } = await client.query<PartenerWithUses>({
    variables: {},
    query: PARTNERS,
  });

  const getData = () => {
    const language = searchParams.ln || "english";
    return (
      data?.partenerWithUses.find(
        (item: any) => item.language.name === language
      ) ||
      data?.partenerWithUses.find(
        (item: any) => item.language.name === "english"
      )
    );
  };

  return (
    <div>
      <Navbar />
      <PartnersHero
        data={getData()?.banner}
        requestFormLink={getData()?.requestFormLink}
      />
      <OurSolution data={getData()?.ourSolution} />
      <ServiceAdditionalPartnership
        title={getData()?.advantagesTitle}
        data={getData()?.advantages}
      />
      <br />
      <ScientificAdvisors
        title={getData()?.OurTeamTitle}
        desc={getData()?.OurTeamDesc}
        data={getData()?.ourTeam}
      />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
