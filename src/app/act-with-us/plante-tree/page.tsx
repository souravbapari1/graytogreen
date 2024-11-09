import PlantTreeAction from "@/app/act-with-us/plante-tree/PlantTreeAction";
import PlantTreeHero from "@/app/act-with-us/plante-tree/PlantTreeHero";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { PlantTreeData } from "./palntTree";

export const metadata = {};

export const revalidate = 0;
const GQL = gql`
  query PlantTrees {
    plantTrees {
      documentId
      banner {
        id
        title
        description
        bannerImage {
          url
        }
      }
      content
      applyLink {
        id
        linkText
        linkUrl
      }
      contact {
        id
        email
        mobileNo
        bookMeetLink
        personImage {
          url
        }
        title
      }
      language {
        id
        name
      }
    }
  }
`;

export default async function page() {
  const { data } = await client.query<PlantTreeData>({
    query: GQL,
  });

  const pageData = data?.plantTrees[0];

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
