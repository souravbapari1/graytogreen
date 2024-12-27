import Loading from "@/app/loading";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { gql, useQuery } from "@apollo/client";
import { DonateForLands } from "./donateforland";
import DonateForLandAction from "./DonateForLandAction";
import DonateForLandHero from "./DonateForLandHero";
import client from "@/graphql/client";

const DONATE_FOR_LAND = gql`
  query DonateForLands {
    donateForLands {
      bannerDesc
      contact {
        personImage {
          url
        }
        mobileNo
        id
        email
        bookMeetLink
        title
      }
      createdAt
      description
      documentId
      language {
        name
        id
      }
      publishedAt
      requestFormLink
      title
      bannerImage {
        url
      }
    }
  }
`;

export const metadata = {
  title: "Donate For Land",
  description: "Donate For Land",
};

export const revalidate = 0;
async function GeneralFunding({ searchParams }: { searchParams?: any }) {
  const { data } = await client.query<DonateForLands>({
    query: DONATE_FOR_LAND,
  });

  const getData = () => {
    const language = searchParams.ln || "english";
    return (
      data?.donateForLands.find((item) => item.language.name === language) ||
      data?.donateForLands.find((item) => item.language.name === "english")
    );
  };

  return (
    <div>
      <Navbar />
      <DonateForLandHero
        bannerImage={getData()?.bannerImage?.url}
        title={getData()?.title}
        desc={getData()?.bannerDesc}
      />
      <DonateForLandAction
        applyLink={getData()?.requestFormLink}
        conatctInfo={getData()?.contact}
        description={getData()?.description}
      />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default GeneralFunding;
