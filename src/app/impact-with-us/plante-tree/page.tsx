import PlantTreeAction from "@/app/impact-with-us/plante-tree/PlantTreeAction";
import PlantTreeHero from "@/app/impact-with-us/plante-tree/PlantTreeHero";
import EndowmentHero from "@/app/impact-with-us/plante-tree/PlantTreeHero";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <PlantTreeHero />
      <PlantTreeAction />
      <FooterTop />
      <Footer />
    </div>
  );
}
