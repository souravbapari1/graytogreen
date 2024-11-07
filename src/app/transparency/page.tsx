"use client";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import TransparencyHero from "@/components/sections/Transparency/TransparencyHero";
import TransparencyReports from "@/components/sections/Transparency/TransparencyReports";
import { gql, useQuery } from "@apollo/client";
import Loading from "../loading";
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
        bannerImage {
          url
        }
      }
    }
  }
`;

function Transparency() {
  const { loading, data, error } = useQuery<TransparencyData>(
    TransparenciesGQL,
    {
      variables: {},
    }
  );

  if (loading) {
    return <Loading className="" />;
  }

  const getData = () => {
    const language = localStorage.getItem("language") || "english";
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
