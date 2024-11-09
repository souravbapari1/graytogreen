import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import Benefit from "@/components/sections/SustainableEvents/Benefit";
import GiveYouthVoice from "@/components/sections/SustainableEvents/GiveYouthVoice";
import SustainableEventsHero from "@/components/sections/SustainableEvents/SustainableEventsHero";
import TreeCounter from "@/components/sections/SustainableEvents/TreeCounter";
import TreeVouchers from "@/components/sections/SustainableEvents/TreeVouchers";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { SustainableEventData } from "./SustainableEventsData";

const STBGQL = gql`
  query SustainableEvents {
    sustainableEvents {
      benefitsTitle
      documentId
      speechsoundlike {
        videoId
        title
        id
      }
      language {
        name
        id
      }
      benefit {
        description
        id
        image {
          url
        }
        title
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
      giveyouthavoice {
        RequesOfflineForm
        RequesOnlineFormLink
        bannerImage {
          url
        }
        description
        id
        title
      }
      headerBanner {
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

export const metadata = {
  title: "Sustainable Events",
  description: "Sustainable Events",
};

export const revalidate = 0;

async function SustainableEvents({ searchParams }: { searchParams?: any }) {
  const { data } = await client.query<SustainableEventData>({
    variables: {},
    query: STBGQL,
  });

  const getData = () => {
    const language = searchParams.ln || "english";
    return (
      data?.sustainableEvents.find((item) => item.language.name === language) ||
      data?.sustainableEvents.find((item) => item.language.name === "english")
    );
  };

  return (
    <div>
      <Navbar />
      <SustainableEventsHero data={getData()?.headerBanner} />
      <GiveYouthVoice
        data={getData()?.giveyouthavoice}
        videoData={getData()?.speechsoundlike}
      />
      <Benefit title={getData()?.benefitsTitle} data={getData()?.benefit} />
      <TreeCounter />
      <TreeVouchers data={getData()?.contact} />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default SustainableEvents;
