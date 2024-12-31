import Navbar from "@/components/sections/Navbar/Navbar";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";

import ConsultationHero from "./ConsultationHero";
import CForm from "./CForm";

function consultation() {
  return (
    <div>
      <Navbar />
      <ConsultationHero />
      <CForm />
    </div>
  );
}

export default consultation;
