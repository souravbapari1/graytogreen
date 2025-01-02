import Loading from "@/app/loading";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { gql, useQuery } from "@apollo/client";

import client from "@/graphql/client";
import { DonateForLands } from "../donate-for-land/donateforland";
import DonateForLandHero from "../donate-for-land/DonateForLandHero";
import DonateForLandAction from "../donate-for-land/DonateForLandAction";
import { ActingOnReducingPlasticsWaste } from "./ActingOnReducingPlasticsWaste";
import PlantTreeHero from "../plante-tree/PlantTreeHero";
import PlantTreeAction from "../plante-tree/PlantTreeAction";

const DONATE_FOR_LAND = gql`
  query ActingOnReducingPlasticsWastes {
    actingOnReducingPlasticsWastes {
      banner {
        title
        id
        description
        bannerImage {
          url
        }
      }
      applyLink {
        linkUrl
        linkText
        id
      }
      contact {
        title
        mobileNo
        id
        email
        bookMeetLink
        personImage {
          url
        }
      }
      content
      publishedAt
      updatedAt
      documentId
      createdAt
    }
  }
`;

export const metadata = {
  title: "Acting on Reducing Plastics Waste",
  description: "Acting on Reducing Plastics Waste",
};

export const revalidate = 0;
async function GeneralFunding({ searchParams }: { searchParams?: any }) {
  const { data } = await client.query<ActingOnReducingPlasticsWaste>({
    query: DONATE_FOR_LAND,
  });

  const pageData = data?.actingOnReducingPlasticsWastes[0];

  return (
    <div>
      <Navbar />
      <PlantTreeHero data={pageData?.banner} />
      <PlantTreeAction
        content={pageData?.content}
        link={pageData?.applyLink}
        contact={pageData?.contact}
      />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default GeneralFunding;
