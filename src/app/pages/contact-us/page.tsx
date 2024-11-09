import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";
import ContactUsHeader from "./ContactUsHeader";
import { montserrat } from "@/fonts/font";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Footer from "@/components/sections/Footer/Footer";
import { gql } from "@apollo/client";
import client from "@/graphql/client";
import { ContactUseData } from "./contact";
const contacts = [
  {
    title: "Donor Inquiries",
    email: "spende@plant-for-the-planet.org",
  },
  {
    title: "Events",
    email: "event@plant-for-the-planet.org",
  },
  {
    title: "Partnership",
    email: "partner@plant-for-the-planet.org",
  },
  {
    title: "Press & Media",
    email: "media@plant-for-the-planet.org",
  },
];

export const metadata = {
  title: "Contact Us",
  description: "Contact Us",
};
export const revalidate = 0;
const GQL = gql`
  query ContactUses {
    contactUses {
      documentId
      conatctLinks {
        id
        linkText
        linkUrl
      }
      email {
        id
        name
        email
      }
      address {
        id
        name
        address
        mobileNo
        mapLocation
      }
      title
      description
      createdAt
      updatedAt
      publishedAt
    }
  }
`;
async function ContactUs() {
  const { data } = await client.query<ContactUseData>({
    query: GQL,
  });

  const pageData = data?.contactUses[0];

  return (
    <div>
      <Navbar />
      <ContactUsHeader data={pageData} />
      <div className="container grid lg:grid-cols-3 gap-8 mt-24">
        <div className={`${montserrat.className}`}>
          <h1 className="text-4xl font-bold">E-Mail</h1>
          <div className="flex flex-col gap-4 mt-10 ">
            {pageData.email.map((contact, index) => (
              <div key={index}>
                <strong>{contact.name}:</strong>{" "}
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            ))}
          </div>
        </div>
        <div className={`${montserrat.className}`}>
          <h1 className="text-4xl font-bold">Mailing Address</h1>
          <div className="flex flex-col gap-2 mt-10 ">
            <h3 className="font-bold">{pageData.address.name}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: pageData.address.address || "",
              }}
            />

            {pageData.address.mobileNo && (
              <p className="mt-3">Phone: {pageData.address.mobileNo}</p>
            )}
          </div>
        </div>
        <div className="w-full">
          <iframe
            src={pageData.address.mapLocation}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-72"
          ></iframe>
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default ContactUs;
