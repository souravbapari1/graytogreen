import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";
import EndowmentHero from "./endowment/EndowmentHero";
import EndowmentAction from "./endowment/EndowmentAction";

function page() {
  return (
    <div>
      <Navbar />
      <EndowmentHero />
      <EndowmentAction />
    </div>
  );
}

export default page;
