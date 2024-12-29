import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdCall } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";

const footerLinks = [
  {
    title: "About Us",
    links: [
      { text: "About Us", href: "/about-us" },
      { text: "Team", href: "/team" },
      { text: "Ambassador", href: "/ambassador" },
      { text: "Blog", href: "/blogs" },
      { text: "Transparency", href: "/transparency" },
      { text: "Clubs", href: "/clubs" },
      { text: "FAQ", href: "/pages/faq" },
    ],
  },
  {
    title: "Children & Youth",
    links: [
      { text: "Academies", href: "/academies" },
      { text: "Re-thinks", href: "/re-thinks" },
      { text: "Youth Summit Talks", href: "/youth-summit-talks" },
      { text: "Volunteers", href: "/volunteers" },
    ],
  },
  {
    title: "Partner with us",
    links: [
      { text: "Become Partner", href: "/become-partner" },
      { text: "Sustainable Events", href: "/sustainable-events" },
      { text: "Services", href: "/services" },
      { text: "Consultation", href: "/consultation" },
    ],
  },
  {
    title: "Support Us",
    links: [
      { text: "Planting Trees", href: "/planting-trees" },
      { text: "Acting on Reducing Plastics Waste", href: "/reducing-plastics" },
      { text: "Support Researches & Experiments", href: "/research-support" },
      { text: "General Funding", href: "/general-funding" },
      { text: "Donate for Land", href: "/donate-land" },
      { text: "Endowment", href: "/endowment" },
      { text: "Be a Volunteer", href: "/be-volunteer" },
    ],
  },
  {
    title: "Other Projects",
    links: [
      { text: "Platform", href: "/platform" },
      { text: "Projects", href: "/projects" },
      { text: "Standards", href: "/standards" },
      { text: "Tracking Tools", href: "/tracking-tools" },
      { text: "Statics", href: "/statics" },
    ],
  },
  {
    title: "Other",
    links: [
      { text: "Privacy", href: "/pages/privacy-policy" },
      { text: "Terms", href: "/pages/terms-and-conditions" },
      {
        text: "Licenses and Certification",
        href: "/licenses-and-certification",
      },
      { text: "Standards", href: "/standards" },
      { text: "Verification & Reviews", href: "/verification-reviews" },
      { text: "Jobs", href: "/jobs" },
      { text: "Green Movement Plans", href: "/membership" },
    ],
  },
];

function Footer() {
  return (
    <div className="bg-[#326047] w-full mt-20 py-10 pb-0 relative">
      <Image
        src="/assets/planet.svg"
        width={1000}
        height={1000}
        alt="Image"
        className="lg:w-56 w-28 lg:h-56 h-28 absolute right-10 md:-top-28 -top-14"
      />
      <div className="container">
        <Image
          src="/logo/main-logo.png"
          width={1000}
          height={1000}
          alt=""
          className="w-48 h-auto"
        />
        <div className="grid xl:grid-cols-8 md:grid-cols-3 grid-cols-2 gap-8 gap-x-3 mt-10">
          {footerLinks.map((section, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h1 className={`${montserrat.className} font-bold text-white`}>
                {section.title}
              </h1>
              <div className="flex flex-col gap-4 text-white/70 mt-3 font-medium">
                {section.links.map((link, index) => (
                  <Link
                    key={index}
                    className="hover:text-white transition-all text-sm"
                    href={link.href}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-3 xl:col-span-2 md:col-span-1 col-span-2">
            <h1 className={`${montserrat.className} font-bold text-white`}>
              Contact us
            </h1>
            <div className="flex flex-col gap-8 text-white/70 mt-5 font-medium text-xl">
              <Link
                className="hover:text-white transition-all text-sm flex justify-start items-center gap-3"
                href="#"
              >
                <MdCall size={25} />
                <span>+91 123456789</span>
              </Link>
              <Link
                className="hover:text-white transition-all text-sm flex justify-start items-center gap-3"
                href="#"
              >
                <HiOutlineMail size={25} />
                <span>info@GreyToGreen.com</span>
              </Link>
              <Link
                className="hover:text-white transition-all text-sm flex justify-start items-center gap-3"
                href="#"
              >
                <FaMapMarkerAlt size={25} />
                <span>102-Complex, Xyz Road City name, State, 136458</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:h-16 h-12 bg-green-900 mt-16">
        <div className="container text-white h-full flex md:text-base text-xs justify-center text-center items-center">
          <p>@ Gray to Green all rights reserved 2024</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
