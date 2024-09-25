import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function WorkSpace() {
  return (
    <div className={`relative ${montserrat.className}`}>
      <div className="w-full fixed top-0 z-40 h-16 border-b bg-white flex ">
        <div className="w-80"></div>
        <h1>sds</h1>
      </div>
      <div className="w-80 border-r z-50 h-screen bg-white fixed left-0 top-0 p-6">
        <Link href="/account">
          <Image
            src="/logo/main-logo.png"
            width={200}
            height={200}
            alt="logo"
            className="w-auto object-contain md:h-[65px] lg:-mt-3 h-16 py-3 mb:pb-5"
          />
        </Link>
        <div className="mt-5 font-medium flex flex-col gap-3">
          <Link href="#" className="bg-primary/20 p-2 px-5 ">
            <p>My Balance</p>
          </Link>
          <Link href="#" className="bg-gray-100 p-2 px-5 ">
            <p>My Projects</p>
          </Link>
          <Link href="#" className="bg-gray-100 p-2 px-5 ">
            <p>My Forest</p>
          </Link>
          <Link href="#" className="bg-gray-100 p-2 px-5 ">
            <p>Social impacts</p>
          </Link>
          <Link href="#" className="bg-gray-100 p-2 px-5 ">
            <p>Logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WorkSpace;
