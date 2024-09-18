import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";
import StatisticsAndRecords from "./StatisticsAndRecords";
import StatisticsCount from "./StatisticsCount";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Footer from "@/components/sections/Footer/Footer";

function StatisticsAndRecordsPage() {
  return (
    <div>
      <Navbar />
      <StatisticsAndRecords />
      <StatisticsCount />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default StatisticsAndRecordsPage;
