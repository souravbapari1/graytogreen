import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import DesktopMenuBar from "./DesktopMenuBar";
import MobileMenuBar from "./MobileMenuBar";
import Link from "next/link";
import { IoMdOpen } from "react-icons/io";

function Navbar() {
  return (
    <div className="sticky top-0 right-0 z-40">
      <div className="w-full flex bg-white z-50 justify-end items-end">
        <div className="lg:px-20 px-5 lg:w-auto w-full h-10 text-sm bg-[#68B030]/20 z-50 lg:rounded-tl-full flex justify-end items-center gap-10">
          <Link className="lg:block hidden" href="#">
            About Us
          </Link>
          <Link className="lg:block hidden" href="#">
            Transparency
          </Link>
          <Link className="lg:block hidden" href="#">
            Press
          </Link>
          <Link className="lg:block hidden" href="#">
            Sign In
          </Link>
          <Link
            href="#"
            className="bg-white p-4 text-xs rounded-full py-[6px] font-bold text-green-900 flex justify-center items-center gap-2"
          >
            <IoMdOpen size={15} />
            <p> Open Platform</p>
          </Link>
        </div>
      </div>
      <div className="w-full h-16 overflow-hidden bg-white  border-b border-b-green-950/5 z-40 ">
        <div className="container flex justify-between items-center w-full h-full">
          <div className="lg:w-44 flex justify-start items-center gap-3 h-full ">
            <MobileMenuBar />
            <Link href="/">
              <Image
                src="/logo/main-logo.png"
                width={200}
                height={200}
                alt="logo"
                className="w-auto object-contain md:h-20 h-16 py-3 mb:pb-5"
              />
            </Link>
          </div>

          <DesktopMenuBar />

          <div className="md:w-28">
            <Button className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-md shadow-green-400/60 border-none md:px-8 px-5   font-extrabold text-white/85">
              Donate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
