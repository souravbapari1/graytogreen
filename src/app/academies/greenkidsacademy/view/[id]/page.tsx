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
      documentId
      title
      date
      time
      languge
      location
      name
      content
      slug
      maxParticipants
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
