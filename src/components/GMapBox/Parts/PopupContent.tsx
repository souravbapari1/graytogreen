import { cn } from "@/lib/utils";
import React from "react";

export const PopupContent = ({
  className,
}: {
  className?: string | undefined;
}) => (
  <div className={cn("w-72 h-auto bg-white rounded-2xl p-2 shadow", className)}>
    <img
      src="https://st2.depositphotos.com/2632165/11804/i/450/depositphotos_118049482-stock-photo-young-plant-in-the-morning.jpg"
      className="w-full md:h-44 h-40 rounded-xl object-cover"
    />
    <div className="p-2 py-3 flex justify-between items-center">
      <div>
        <p>
          <span className="font-bold">1,179 Trees</span> • Ukraine
        </p>
        <p>
          <span className="font-bold">₹193.19</span> per tree
        </p>
      </div>
      <div className="w-28 px-0 h-9 rounded-md donateBtn shadow-none flex justify-center items-center">
        <p className="font-bold text-white cursor-pointer">Act Now</p>
      </div>
    </div>
    <div className="h-7 text-[9px] rounded-xl w-full bg-green-900/15 flex justify-center items-center">
      <p>By Mama Saves The Planet</p>
    </div>
  </div>
);
