import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";
import TreeMap from "./_components/TreeMap";
import { Input } from "@/components/ui/input";
import { montserrat } from "@/fonts/font";

function page() {
  return (
    <div>
      <Navbar />
      <div
        className={`grid grid-cols-7 container gap-10 mt-16 ${montserrat.className}`}
      >
        <div className="col-span-2 h-[80vh] bg-gray-100 rounded-xl p-2">
          {/* <div className="w-full h-56 bg-white rounded-md"></div> */}
          <Input
            placeholder="Order ID, Tree No"
            className="shadow-none bg-white"
          />
          <div className="mt-3">
            <div className="p-1">
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <p
                    key={i}
                    className="bg-white text-xs px-4 py-2 border-b font-semibold hover:bg-primary select-none cursor-pointer hover:text-white "
                  >
                    Tree ID: 3462
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-5 h-[80vh] bg-gray-100 rounded-xl overflow-hidden shadow-lg">
          <TreeMap />
        </div>
      </div>
    </div>
  );
}

export default page;
