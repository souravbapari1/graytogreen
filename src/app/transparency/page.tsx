import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import TransparencyHero from "@/components/sections/Transparency/TransparencyHero";
import TransparencyReports from "@/components/sections/Transparency/TransparencyReports";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { TransparencyData } from "./transparencies";

const TransparenciesGQL = gql`
  query Transparencies {
    transparencies {
      documentId
      language {
        name
        id
      }
      reports {
        description
        file {
          url
        }
        title
        id
      }
      banner {
        description
        id
        title
        leftImage {
          url
        }
        rightImage {
          url
        }
        centerImage {
          url
        }
      }
    }
  }
`;

export const revalidate = 0;
export const metadata = {
  title: "Transparency",
};

async function Transparency({ searchParams }: { searchParams?: any }) {
  const { data } = await client.query<TransparencyData>({
    query: TransparenciesGQL,
    variables: {},
  });

  const getData = () => {
    const language = searchParams.ln || "english";
    return (
      data?.transparencies.find((item) => item.language.name === language) ||
      data?.transparencies.find((item) => item.language.name === "english")
    );
  };

  return (
    <div>
      <Navbar />
      <TransparencyHero data={getData()?.banner} />
      <TransparencyReports reports={getData()?.reports} />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default Transparency;
