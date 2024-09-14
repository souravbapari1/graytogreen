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

function MobileMenuBar() {
  const [index, setIndex] = useState<null | ServicesMenuItems[]>(null);

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden block">
        <RiMenu2Line size={22} className="text-green-700" />
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-auto">
        <div className="flex flex-col font-semibold text-gray-700 gap-1 transition-all duration-300">
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
                  <Link
                    key={i}
                    href={e.href}
                    className="py-2 transition-all hover:text-green-600"
                  >
                    {e.title}
                  </Link>
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
            <div className="transition-all duration-300">
              {index.map((submenuItem, i) => {
                return (
                  <div key={i} className="mb-2">
                    <p className="py-2 transition-all font-extrabold underline">
                      {submenuItem.title}
                    </p>
                    <div className="flex flex-col gap-1">
                      {submenuItem.list.map((link, j) => (
                        <Link
                          key={j}
                          href={link.href}
                          className="py-2 transition-all hover:text-green-600"
                        >
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenuBar;
