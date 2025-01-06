import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";
import PartnerForm from "./PartnerForm";

function page() {
  return (
    <div>
      <Navbar />
      <div className="container mt-10">
        <PartnerForm />
      </div>
    </div>
  );
}

export default page;
