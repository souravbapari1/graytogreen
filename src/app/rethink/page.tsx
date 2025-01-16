import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";
import { getMicroActions } from "../account/micro-action/actions";
import MicroActionView from "../account/micro-action/MicroActionView";
import MicroActionsList from "../account/micro-action/MicroActionsList";
import { auth } from "@/auth";
import MicroAbout from "../account/micro-action/MicroAbout";

export const revalidate = 0;
export const metadata = {
  title: "Rethink - Gray To Green",
  description: "Rethink",
};
async function page() {
  const data = await getMicroActions({ all: true });
  const user = await auth();

  return (
    <div>
      <Navbar />
      <div className="container mt-10">
        <MicroActionView session={user} count={0} />
        <MicroActionsList data={data.items} />
        {/* <MicroAbout /> */}
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
