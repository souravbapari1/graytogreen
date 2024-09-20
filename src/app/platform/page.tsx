import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar/Navbar";
const GGMapBox = dynamic(() => import("@/components/GMapBox/GGMapBox"), {
  ssr: false,
});
function page() {
  return (
    <div>
      <Navbar />
      <GGMapBox
        style={{ width: "100%", height: "90.8vh" }}
        className="rounded-none shadow-none"
      />
    </div>
  );
}

export default page;
