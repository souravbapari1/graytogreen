import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import Link from "next/link";

function FooterTop() {
  return (
    <div className="container flex flex-col justify-center items-center gap-3">
      <div className="flex justify-center mt-14 items-center ">
        {[
          "/logo/main-logo.png",
          "https://livelihoods.eu/wp-content/uploads/2017/03/HD-LOGO-LIVELIHOODS-FUNDS-HORIZONTAL.png",
          "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Tropicana_green_flat_logo.svg/800px-Tropicana_green_flat_logo.svg.png",
          "https://cdn.shopify.com/s/files/1/0582/8457/2829/files/fft_logo_1.png?v=1634643664",
        ].map((e, i) => {
          return (
            <Image
              src={e}
              key={i}
              alt=""
              className="md:w-28 md:h-28 w-16 h-16 aspect-video object-contain md:mx-10 mx-3"
              width={1200}
              height={1200}
            />
          );
        })}
      </div>
      <div className="flex justify-center items-center md:gap-8 gap-4 mb-8">
        <Link
          href="#"
          className="w-12 h-12 bg-gray-100 hover:bg-main hover:text-white transition-all text-gray-900 flex justify-center items-center rounded-full"
        >
          <FaFacebookF />
        </Link>
        <Link
          href="#"
          className="w-12 h-12 bg-gray-100 hover:bg-main hover:text-white transition-all text-gray-900 flex justify-center items-center rounded-full"
        >
          <BsTwitterX />
        </Link>
        <Link
          href="#"
          className="w-12 h-12 bg-gray-100 hover:bg-main hover:text-white transition-all text-gray-900 flex justify-center items-center rounded-full"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href="#"
          className="w-12 h-12 bg-gray-100 hover:bg-main hover:text-white transition-all text-gray-900 flex justify-center items-center rounded-full"
        >
          <FiInstagram />
        </Link>
      </div>
      <p className="text-justify  text-base max-w-[1000px]">
        is a global movement empowering young people and organizations to
        restore forest ecosystems and fight for climate justice. To do so,
        we educate young people, restore ecosystems, conduct restoration
        research, provide free software tools and restoration advice for
        organizations around the world.
        <br />
        <br />
        We believe that we need to protect the world’s three trillion trees and
        bring back a further one trillion trees.
      </p>
    </div>
  );
}

export default FooterTop;
