import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { BeVolunteers } from "./beVolunteer";
import BeVolunteerAction from "./BeVolunteerAction";
import BeVolunteerHero from "./BeVolunteerHero";

const BE_VOLUNTEER = gql`
  query BeVolunteers {
    beVolunteers {
      applyFormLink
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
      description
      createdAt
      documentId
      publishedAt
      title
      language {
        name
        id
      }
      bannerImage {
        url
      }
    }
  }
`;
export const metadata = {
  title: "Be a Volunteer",
  description: "Be a Volunteer",
};
export const revalidate = 0;
async function BeVolunteer({ searchParams }: { searchParams?: any }) {
  const { data } = await client.query<BeVolunteers>({ query: BE_VOLUNTEER });

  const getData = () => {
    const language = searchParams.ln || "english";
    return (
      data?.beVolunteers.find((item) => item.language.name === language) ||
      data?.beVolunteers.find((item) => item.language.name === "english")
    );
  };

  return (
    <div>
      <Navbar />
      <BeVolunteerHero
        bannerImage={getData()?.bannerImage?.url}
        desc={getData()?.bannerDesc}
        title={getData()?.title}
      />
      <BeVolunteerAction
        applyLink={getData()?.applyFormLink}
        conatctInfo={getData()?.contact}
        description={getData()?.description}
      />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default BeVolunteer;
