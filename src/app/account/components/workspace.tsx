import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

function WorkSpace({ children }: { children: ReactNode }) {
  return (
    <div className={`relative ${montserrat.className}`}>
      <div className="w-full fixed top-0 z-40 h-16 border-b bg-white flex items-center ">
        <div className="w-80"></div>
        <div className="px-20">{/* ///////// */}</div>
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
          <Link href="/account/company" className="bg-primary/20 p-2 px-5 ">
            <p>My Balance</p>
          </Link>
          <Link
            href="/account/company/my-projects"
            className="bg-gray-100 p-2 px-5 "
          >
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
      <div className="mt-20 pl-80">
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
}

export default WorkSpace;
