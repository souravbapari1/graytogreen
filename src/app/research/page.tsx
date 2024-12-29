import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";

import OngoingResearch from "./ResearchesList";

function ResearchPage() {
  return (
    <div>
      <Navbar />
      <OngoingResearch />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default ResearchPage;
