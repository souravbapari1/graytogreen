import NavLink from "@/components/sections/Navbar/NavLink";
import { montserrat } from "@/fonts/font";
import Image from "next/image";

import React, { ReactNode } from "react";
import MobNav from "./MobNav";
import ProfileMenu from "./ProfileMenu";
import MenuLinks from "./MenuLinks";

function WorkSpace({ children }: { children?: ReactNode }) {
  return (
    <div className={`relative ${montserrat.className}`}>
      <div className="w-full  lg:px-20 px-5 fixed  top-0 z-40 h-16 border-b bg-white ">
        <div className="container flex justify-between items-center">
          <NavLink exact href="/">
            <Image
              src="/logo/main-logo.png"
              width={200}
              height={200}
              alt="logo"
              className="w-auto object-contain md:h-[65px]  h-16 py-3 mb:pb-5"
            />
          </NavLink>
          <div className="lg:hidden block">
            <MobNav />
          </div>
          <div className="font-medium lg:flex hidden justify-end items-center  gap-6 text-sm">
            <MenuLinks />
            <ProfileMenu />
          </div>
        </div>
      </div>

      <div className="pt-20 bg-gray-50/60 min-h-screen ">
        <div className="container">{children}</div>
      </div>
    </div>
  );
}

export default WorkSpace;
