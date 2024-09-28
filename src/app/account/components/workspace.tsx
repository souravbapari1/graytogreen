import NavLink from "@/components/sections/Navbar/NavLink";
import { montserrat } from "@/fonts/font";
import Image from "next/image";

import React, { ReactNode } from "react";
import MobNav from "./MobNav";
import ProfileMenu from "./ProfileMenu";

function WorkSpace({ children }: { children?: ReactNode }) {
  return (
    <div className={`relative ${montserrat.className}`}>
      <div className="w-full lg:px-20 px-5 fixed flex justify-between items-center top-0 z-40 h-16 border-b bg-white ">
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
          <NavLink exact href="/account" className="text-primary/90 ">
            <p>My Balance</p>
          </NavLink>
          <NavLink exact href="/account/my-projects" className=" ">
            <p>My Projects</p>
          </NavLink>
          <NavLink exact href="#" className=" ">
            <p>My Forest</p>
          </NavLink>
          <NavLink exact href="#" className=" ">
            <p>Social impacts</p>
          </NavLink>
          <NavLink exact href="#" className=" ">
            <p>My Program</p>
          </NavLink>
          <ProfileMenu />
        </div>
      </div>

      <div className="mt-20 ">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default WorkSpace;
