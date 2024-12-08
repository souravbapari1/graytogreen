import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import MembershipHero from "@/components/sections/Membership/MembershipHero";
import MembershipPlanDetails from "@/components/sections/Membership/MembershipPlanDetails";
import MembershipPricing from "@/components/sections/Membership/MembershipPricing";
import Navbar from "@/components/sections/Navbar/Navbar";
import client from "@/graphql/client";
import { getMembership } from "@/request/worker/membership";
import { gql } from "@apollo/client";
import React from "react";
import { MembershipPageData } from "./membership";

export const revalidate = 0;
async function Membership() {
  const data = await getMembership(1);
  const pageData = await client.query<MembershipPageData>({
    query: gql`
      query MembershipPage {
        membershipPage {
          headerDescription
          headerImage {
            url
          }
          locale
          thankYouComment
        }
      }
    `,
  });

  return (
    <div>
      <Navbar />
      <MembershipHero data={pageData.data} />
      <MembershipPricing data={data.items} />
      <MembershipPlanDetails data={pageData.data} />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default Membership;
