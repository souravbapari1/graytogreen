import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import GeneralFundingAction from "./GeneralFundingAction";
import GeneralFundingHero from "./GeneralFundingHero";
import { GeneralFundingsPage } from "./genralfunding";

const GEBERALFUNDING = gql`
  query GeneralFundings {
    generalFundings {
      title
      bannerDesc
      applyFormLink
      bannerImage {
        url
      }
      contact {
        bookMeetLink
        email
        id
        mobileNo
        personImage {
          url
        }
      }
      description
      documentId
      language {
        name
        id
      }
    }
  }
`;

export const metadata = {
  title: "General Funding",
  description: "General Funding",
};

async function GeneralFunding({ searchParams }: { searchParams?: any }) {
  const { data } = await client.query<GeneralFundingsPage>({
    query: GEBERALFUNDING,
  });

  const getData = () => {
    const language = searchParams.ln || "english";
    return (
      data?.generalFundings.find((item) => item.language.name === language) ||
      data?.generalFundings.find((item) => item.language.name === "english")
    );
  };

  return (
    <div>
      <Navbar />
      <GeneralFundingHero
        bannerImage={getData()?.bannerImage?.url}
        desc={getData()?.bannerDesc}
        title={getData()?.title}
      />
      <GeneralFundingAction
        applyLink={getData()?.applyFormLink}
        conatctInfo={getData()?.contact}
        description={getData()?.description}
      />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default GeneralFunding;
