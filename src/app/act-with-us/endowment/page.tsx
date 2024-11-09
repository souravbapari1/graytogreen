import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { EndowmentsData } from "./endowment";
import EndowmentAction from "./EndowmentAction";
import EndowmentHero from "./EndowmentHero";

const ENDOWMENTS = gql`
  query Endowments {
    endowments {
      bannerImage {
        url
        name
      }
      contact {
        mobileNo
        id
        email
        bookMeetLink
        personImage {
          url
        }
      }
      documentId
      language {
        name
        id
      }
      title
      bannerDesc
      description
    }
  }
`;

export const metadata = {
  title: "Endowment",
};
export const revalidate = 0;
async function page({ searchParams }: { searchParams?: any }) {
  const { data } = await client.query<EndowmentsData>({ query: ENDOWMENTS });

  const getData = () => {
    const language = searchParams.ln || "english";
    return (
      data?.endowments.find((item) => item.language.name === language) ||
      data?.endowments.find((item) => item.language.name === "english")
    );
  };

  return (
    <div>
      <Navbar />
      <EndowmentHero
        bannerImage={getData()?.bannerImage?.url}
        desc={getData()?.bannerDesc}
        title={getData()?.title}
      />
      <EndowmentAction
        conatctInfo={getData()?.contact}
        description={getData()?.description}
      />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
