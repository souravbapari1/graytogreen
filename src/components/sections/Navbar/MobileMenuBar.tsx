"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RiMenu2Line } from "react-icons/ri";
import { navData, ServicesMenuItems } from "./navData";
import Link from "next/link";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { useState } from "react";
import Image from "next/image";
import { IoMdOpen } from "react-icons/io";
import NavLink from "./NavLink";

function MobileMenuBar() {
  const [index, setIndex] = useState<null | ServicesMenuItems[]>(null);

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden block">
        <RiMenu2Line size={22} className="text-green-700" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className={
          "overflow-y-auto p-0 " + ` ${index == null && "bg-[#f8fff7]"}`
        }
      >
        <div className="p-5 bg-white">
          <Image
            src="/logo/main-logo.png"
            width={1000}
            height={500}
            alt=""
            className="w-24 mb-5 h-auto object-contain"
          />
          <div className="flex flex-col font-semibold text-gray-700 gap-3 transition-all duration-300">
            {index != null && (
              <div
                className="flex justify-start items-center w-20 gap-1 cursor-pointer text-green-700 mb-2"
                onClick={() => setIndex(null)}
              >
                <MdOutlineKeyboardArrowLeft size={20} />
                <p>Back</p>
              </div>
            )}
            {index == null &&
              navData.map((e, i) => {
                if (!e.isSubmenu) {
                  return (
                    <NavLink
                      key={i}
                      href={e.href}
                      exact
                      className="py-2 transition-all hover:text-green-600"
                    >
                      {e.title}
                    </NavLink>
                  );
                } else {
                  return (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2 cursor-pointer transition-all hover:text-green-600"
                      onClick={() => setIndex(e.submenu!)}
                    >
                      <p>{e.title}</p>
                      <MdKeyboardArrowRight />
                    </div>
                  );
                }
              })}

            {index !== null && (
              <div className="transition-all duration-300  h-full">
                {index.map((submenuItem, i) => {
                  return (
                    <div key={i} className="mb-2">
                      <p className="py-2 transition-all font-extrabold underline">
                        {submenuItem.title}
                      </p>
                      <div className="flex flex-col gap-1">
                        {submenuItem.list.map((link, j) => (
                          <NavLink
                            key={j}
                            href={link.href}
                            exact
                            className="py-2 transition-all hover:text-green-600"
                          >
                            {link.title}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        {index == null && (
          <div className=" w-full py-10 ">
            <div className="lg:px-20 px-5 lg:w-auto w-full   z-50 lg:rounded-tl-full flex justify-start flex-col items-start  gap-5">
              <Link className="" href="/about-us">
                About Us
              </Link>
              <Link className="" href="/transparency">
                Transparency
              </Link>
              <Link className="" href="/live-and-podcasts">
                Live & podcasts
              </Link>
              <Link className="" href="/tracking">
                Tracking
              </Link>
              <Link className="" href="/blogs">
                Blogs
              </Link>
              <Link className="" href="/auth/signin">
                Sign In
              </Link>
              <Link
                href="/platform"
                className="bg-white p-6 w-full text-xs rounded-xl mt-5 py-[15px] border font-bold text-green-900 flex justify-center items-center gap-2"
              >
                <IoMdOpen size={15} />
                <p> Open Platform</p>
              </Link>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenuBar;
