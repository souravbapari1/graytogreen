import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <div className="w-full lg:h-[90vh] h-[70vh] relative">
        <Image
          src="https://c.pxhere.com/photos/7a/da/tunnel_train_track_track_railway_railroad-99269.jpg!d"
          alt=""
          width={2000}
          height={2000}
          className="w-full h-full object-cover  right-0 top-0"
        />
        <div className="w-full h-full p-5 bg-green-950/80 absolute top-0 right-0 flex justify-center items-center">
          <div
            className={`w-[600px]  rounded-3xl shadow-2xl bg-white p-8 ${montserrat.className}`}
          >
            <p>
              Looking for more information on other ecosystems? Enter a treecode
              from a certificate or chocolate package
            </p>
            <div className="flex justify-center lg:flex-row flex-col mt-10 items-center gap-5">
              <Input
                className="p-5 shadow-none"
                placeholder="Enter Tree Code/Order No"
              />
              <Button className="shadow-none p-5 border-none donateBtn">
                View Status
              </Button>
            </div>
            <br />
          </div>
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
