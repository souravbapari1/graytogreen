import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import CertificationHero from "./CertificationHero";
import { LicensesAndCertificationsData } from "./LicensesAndCertification";
import LicensesCertificationList from "./LicensesCertificationList";

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

export const metadata = {
  title: "Licenses And Certifications",
};
export const revalidate = 0;

async function page({ searchParams }: { searchParams?: any }) {
  const { data } = await client.query<LicensesAndCertificationsData>({
    query: LicensesCertification_GQL,
  });

  const getData = () => {
    const language = searchParams.ln || "english";
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
