import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";
import ProjectVerificationHero from "./ProjectVerificationHero";
import VerificationStep from "./VerificationStep";
import VerificationApplyStep from "./VerificationApplyStep";
import InfoList from "./InfoLiist";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import ReviewBoard from "../standards/section/ReviewBoard";
import { montserrat } from "@/fonts/font";
import Link from "next/link";

function ProjectVerification() {
  return (
    <div>
      <Navbar />
      <ProjectVerificationHero />
      <VerificationStep />
      <VerificationApplyStep />
      <InfoList />
      <ReviewBoard />
      <div className={`container py-10 ${montserrat.className}`}>
        <div className="w-full">
          <div className="mx-auto max-w-[900px]">
            <h1 className="text-3xl font-bold">Report Fraud</h1>
            <p className="mt-2 ">
              Are you aware of fraud or misuse of any kind on our platform?
              Please send an email to{" "}
              <Link href="#" className="text-main">
                complaints@plant-for-the-planet.org
              </Link>{" "}
              so we can look into it.
            </p>
            <br />
            <p>If requested, we will keep your identity anonymous.</p>
          </div>
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default ProjectVerification;
