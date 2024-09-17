import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import MembershipHero from "@/components/sections/Membership/MembershipHero";
import MembershipPlanDetails from "@/components/sections/Membership/MembershipPlanDetails";
import MembershipPricing from "@/components/sections/Membership/MembershipPricing";
import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";

function Membership() {
  return (
    <div>
      <Navbar />
      <MembershipHero />
      <MembershipPricing />
      <MembershipPlanDetails />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default Membership;
