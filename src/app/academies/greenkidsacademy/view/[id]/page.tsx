import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import ViewAcademy from "./ViewAcademy";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { UpcomingAcademyData } from "./academy";
import NotFound from "@/app/not-found";
import { Metadata } from "next";

export const revalidate = 0;

const GQL = gql`
  query UpcomingAcademies($filters: UpcomingAcademieFiltersInput) {
    upcomingAcademies(filters: $filters) {
      amount
      createdAt
      documentId
      applications
      endDate
      languge
      locale
      location
      locationType
      maxParticipents
      name
      pricing
      publishedAt
      registerationEndDate
      slug
      startDate
      time
      title
      otherComments
      program_Timeline
      content
      aboutTheSession
      Flyer {
        url
      }
      aboutImages {
        url
      }
      otherCommentsImages {
        url
      }
      timeLineImages {
        url
      }
    }
  }
`;

export let metadata: Metadata = {};
async function Page({ params }: { params: { id: string } }) {
  const { data } = await client.query<UpcomingAcademyData>({
    query: GQL,
    variables: {
      filters: {
        slug: {
          eq: params.id,
        },
      },
    },
  });

  if (data?.upcomingAcademies?.length === 0) {
    return <NotFound />;
  }

  const pageData = data?.upcomingAcademies[0];
  metadata = {
    title: pageData?.title,
    description: pageData?.languge,
  };
  return (
    <div>
      <Navbar />
      <ViewAcademy data={pageData} />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default Page;
