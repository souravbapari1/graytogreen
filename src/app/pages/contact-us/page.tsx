import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";
import ContactUsHeader from "./ContactUsHeader";
import { montserrat } from "@/fonts/font";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Footer from "@/components/sections/Footer/Footer";
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
function ContactUs() {
  return (
    <div>
      <Navbar />
      <ContactUsHeader />
      <div className="container grid lg:grid-cols-3 gap-8 mt-24">
        <div className={`${montserrat.className}`}>
          <h1 className="text-4xl font-bold">E-Mail</h1>
          <div className="flex flex-col gap-4 mt-10 ">
            {contacts.map((contact, index) => (
              <div key={index}>
                <strong>{contact.title}:</strong>{" "}
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            ))}
          </div>
        </div>
        <div className={`${montserrat.className}`}>
          <h1 className="text-4xl font-bold">Mailing Address</h1>
          <div className="flex flex-col gap-2 mt-10 ">
            <h3 className="font-bold">Gray to Green Foundation</h3>
            <p>Lindemannstr. 13</p>
            <p>82327 Tutzing</p>
            <p>Germany</p>
            <br />
            <p>Phone: +49 (0)8808 9345</p>
          </div>
        </div>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9825444.23931849!2d50.86090492408859!3d21.419194785564677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd69f66a9d59bbf%3A0x3a064c7665b1a817!2sOman!5e1!3m2!1sen!2sin!4v1726668480935!5m2!1sen!2sin"
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
