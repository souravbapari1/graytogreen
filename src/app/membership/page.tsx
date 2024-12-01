import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import MembershipHero from "@/components/sections/Membership/MembershipHero";
import MembershipPlanDetails from "@/components/sections/Membership/MembershipPlanDetails";
import MembershipPricing from "@/components/sections/Membership/MembershipPricing";
import Navbar from "@/components/sections/Navbar/Navbar";
import { getMembership } from "@/request/worker/membership";
import React from "react";

export const revalidate = 0;
async function Membership() {
  const data = await getMembership(1);
  return (
    <div>
      <Navbar />
      <MembershipHero />
      <MembershipPricing data={data.items} />
      <MembershipPlanDetails />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default Membership;
