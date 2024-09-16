import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdCall } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#326047] w-full mt-20 py-10 pb-0">
      <div className="container">
        <Image
          src="/logo/main-logo.png"
          width={1000}
          height={1000}
          alt=""
          className="w-48 h-auto "
        />
        <div className="grid xl:grid-cols-7 md:grid-cols-3 grid-cols-2  gap-8 gap-x-3 mt-10">
          <div className="flex flex-col gap-3">
            <h1 className={`${montserrat.className}  font-bold text-white`}>
              About Us
            </h1>
            <div className="flex flex-col gap-4 text-white/70 mt-3 font-medium">
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Contact
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                About US
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Annual Reports
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Blog
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Press
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Team
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className={`${montserrat.className}  font-bold text-white`}>
              Children & Youth
            </h1>
            <div className="flex flex-col gap-4 text-white/70 mt-3 font-medium">
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Academies
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Ideas & Tools
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Global Board
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Children's Conferences
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Youth Summit
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Youth Summit Talks
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className={`${montserrat.className}  font-bold text-white`}>
              Restoration Tools
            </h1>
            <div className="flex flex-col gap-4 text-white/70 mt-3 font-medium">
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Restoration Advice
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Platform
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                FireAlert
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                PlanetCash API
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Principles
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Restoration Organisations
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className={`${montserrat.className}  font-bold text-white`}>
              Partner with us
            </h1>
            <div className="flex flex-col gap-4 text-white/70 mt-3 font-medium">
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Climate conscious
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                My Forest
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Sustainable Events
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Products with Trees
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className={`${montserrat.className}  font-bold text-white`}>
              Support Us
            </h1>
            <div className="flex flex-col gap-4 text-white/70 mt-3 font-medium">
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Donate
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Membership
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Gift Trees
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Bank Accounts
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Endowment
              </Link>
              <Link
                className="hover:text-white transition-all text-sm"
                href="#"
              >
                Inheritance
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 xl:col-span-2 md:col-span-1 col-span-2">
            <h1 className={`${montserrat.className}  font-bold text-white`}>
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
      <div className="w-full h-16 bg-green-900 mt-16">
        <div className="container text-white h-full flex justify-center text-center items-center">
          <p>Gray to Green @ all right reserved 2024</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
