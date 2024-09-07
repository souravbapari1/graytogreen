import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import { navData } from "./navData";

function DesktopMenuBar() {
  return (
    <div className="lg:flex lg:gap-12 gap-5 font-medium text-gray-500 hidden h-full bg-white w-full justify-center items-center">
      {navData.map((e, i) => {
        return (
          <div className="relative group">
            <div className="flex items-center gap-2 group-hover:text-green-600 cursor-pointer h-full">
              {e.title}
              {e.isSubmenu && (
                <RiArrowUpSLine className="rotate-180 group-hover:rotate-0 transition-all duration-300 mt-1" />
              )}
            </div>
            {e.isSubmenu && (
              <div className="w-full h-72 -z-10 bg-green-50 fixed shadow-md shadow-gray-50 top-16 right-0 transition-all duration-500 transform -translate-y-96 group-hover:translate-y-10 ">
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
                        <div className="flex flex-col  justify-start gap-3">
                          {menu.list.map((e, i) => {
                            return (
                              <Link
                                href={e.href}
                                className="opacity-85 hover:opacity-100 transition-all macAir:text-sm text-xs font-semibold"
                              >
                                <p>
                                  <span className="text-sm mr-3 ">
                                    {e.icon}
                                  </span>{" "}
                                  {e.title}
                                </p>
                                {e.subtitle != "" && (
                                  <p className="font-semibold mt-1 text-xs text-gray-700">
                                    {e.subtitle}
                                  </p>
                                )}
                              </Link>
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
