import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";
import { getMicroActions } from "../account/micro-action/actions";
import MicroActionView from "../account/micro-action/MicroActionView";
import MicroActionsList from "../account/micro-action/MicroActionsList";

export const revalidate = 0;
export const metadata = {
  title: "Rethink - Gray To Green",
  description: "Rethink",
};
async function page() {
  const data = await getMicroActions();

  return (
    <div>
      <Navbar />
      <div className="container mt-10">
        <MicroActionView />
        <MicroActionsList data={data.items} />
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
