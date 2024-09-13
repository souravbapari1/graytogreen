import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import AllResearchPartner from "@/components/sections/Research/AllResearchPartner";
import FunctionalDiversityRestoration from "@/components/sections/Research/FunctionalDiversityRestoration";
import InfrastructureAndTeam from "@/components/sections/Research/InfrastructureAndTeam";
import NitrogenFixingSpecies from "@/components/sections/Research/NitrogenFixingSpecies";
import OngoingResearch from "@/components/sections/Research/OngoingResearch";
import RecentPublications from "@/components/sections/Research/RecentPublications";
import ResearchFellowships from "@/components/sections/Research/ResearchFellowships";
import ResearchHero from "@/components/sections/Research/ResearchHero";
import RestorationAdviceTeam from "@/components/sections/Research/RestorationAdviceTeam";
import TourOfTheCampus from "@/components/sections/Research/TourOfTheCampus";
import React from "react";

function ResearchPage() {
  return (
    <div>
      <Navbar />
      <ResearchHero />
      <OngoingResearch />
      <NitrogenFixingSpecies />
      <FunctionalDiversityRestoration />
      <RestorationAdviceTeam />
      <InfrastructureAndTeam />
      <TourOfTheCampus />
      <RecentPublications />
      <ResearchFellowships />
      <AllResearchPartner />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default ResearchPage;
