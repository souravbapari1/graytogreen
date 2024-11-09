import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import MembershipView from "@/components/sections/Services/MembershipView";
import ServicesView from "@/components/sections/Services/ServicesView";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { ServicePages } from "./ServicePages";

const SERVICE_PAGE = gql`
  query Services {
    services {
      title
      documentId
      description
      Industries {
        id
        image {
          url
        }
        title
      }
      language {
        name
        id
      }
    }
  }
`;

export const revalidate = 0;
async function Services({ searchParams }: { searchParams?: any }) {
  const { data } = await client.query<ServicePages>({
    query: SERVICE_PAGE,
  });

  const getData = () => {
    const language = searchParams.ln || "english";
    return (
      data?.services.find((item) => item.language.name === language) ||
      data?.services.find((item) => item.language.name === "english")
    );
  };

  return (
    <>
      <Navbar />
      <ServicesView data={getData()} />
      <MembershipView />
      <FooterTop />
      <Footer />
    </>
  );
}

export default Services;
