"use client";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import CertificationHero from "./CertificationHero";
import LicensesCertificationList from "./LicensesCertificationList";
import { gql, useQuery } from "@apollo/client";
import Loading from "../loading";
import { LicensesAndCertificationsData } from "./LicensesAndCertification";

const LicensesCertification_GQL = gql`
  query Banner {
    licensesAndCertifications {
      banner {
        title
        id
        description
        bannerImage {
          url
        }
      }
      certifications {
        description
        id
        title
        file {
          url
        }
      }
      documentId
      language {
        name
      }
    }
  }
`;

function page() {
  const { loading, data, error } = useQuery<LicensesAndCertificationsData>(
    LicensesCertification_GQL,
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
      data?.licensesAndCertifications.find(
        (item) => item.language.name === language
      ) ||
      data?.licensesAndCertifications.find(
        (item) => item.language.name === "english"
      )
    );
  };
  return (
    <div>
      <Navbar />
      <CertificationHero data={getData()?.banner} />
      <LicensesCertificationList certificates={getData()?.certifications} />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
