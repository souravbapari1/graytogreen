import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import { navData } from "./navData";
import NavLink from "./NavLink";
import { cn } from "@/lib/utils";
import { montserrat } from "@/fonts/font";

function DesktopMenuBar() {
  return (
    <div className="lg:flex lg:gap-8 gap-5 font-medium text-gray-500 hidden h-full bg-white w-full justify-center items-center">
      {navData.map((e, i) => {
        return (
          <div className="relative group" key={"NavLink-" + i}>
            <NavLink
              exact
              href={e.href}
              className="flex items-center gap-2 group-hover:text-green-600 text-sm cursor-pointer h-full"
            >
              {e.title}
              {e.isSubmenu && (
                <RiArrowUpSLine className="rotate-180 group-hover:rotate-0 transition-all duration-300 mt-1" />
              )}
            </NavLink>
            {e.isSubmenu && (
              <div className="w-full h-72 -z-10 bg-green-50 fixed shadow-md shadow-gray-50 top-12 right-0 transition-all duration-500 transform -translate-y-96 group-hover:translate-y-10 ">
                <div className="container h-full flex justify-evenly items-start  macAir:px-40 gap-3">
                  <div className="h-full  justify-center items-center  mid:flex hidden">
                    <Image
                      src={e.image!}
                      width={800}
                      height={800}
                      alt=""
                      className="h-56  w-auto"
                    />
                  </div>
                  {e.submenu?.map((menu, i) => {
                    return (
                      <div className="flex justify-start flex-col gap-4 pt-8">
                        <h1 className="text-gray-600/40 uppercase font-semibold mb-2 macAir:text-sm text-xs">
                          {menu.title}
                        </h1>
                        <div
                          className={cn(
                            "flex flex-col  justify-start gap-3",
                            e.className
                          )}
                        >
                          {menu.list.map((e, i) => {
                            return (
                              <NavLink
                                href={e.href}
                                exact
                                className="opacity-85 hover:opacity-100 transition-all macAir:text-sm text-xs font-semibold"
                              >
                                <p>
                                  {e.icon && (
                                    <span className="text-sm mr-3 ">
                                      {e.icon}
                                    </span>
                                  )}
                                  {e.title}
                                </p>
                                {e.subtitle && (
                                  <p
                                    className={` mt-1 font-light text-xs text-gray-600 mb-5 ${montserrat.className}`}
                                  >
                                    {e.subtitle}
                                  </p>
                                )}
                              </NavLink>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default DesktopMenuBar;
