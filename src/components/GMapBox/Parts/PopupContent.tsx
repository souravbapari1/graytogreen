import { ProjectType } from "@/interface/project";
import { cn } from "@/lib/utils";
import React from "react";

export const PopupContent = ({
  className,
  data,
}: {
  className?: string | undefined;
  data?: ProjectType;
}) => {
  function getPriceLabel(type?: string): string {
    return type === "Tree Project" ? "USD/Trees" : "USD/kg";
  }

  function getProjectColor(type?: string, status?: string): string {
    if (type === "Carbon Project") {
      switch (status) {
        case "active":
          return "bg-gray-300 "; // Gray for active Carbon Project
        case "completed":
          return "bg-green-200"; // Green for completed Carbon Project
        case "top":
          return "bg-orange-200"; // Orange for top Carbon Project
        default:
          return "bg-gray-300"; // Default color (if status is unknown)
      }
    } else if (type === "Plastic Project") {
      switch (status) {
        case "active":
          return "bg-blue-300"; // Blue for active Plastic Project
        case "completed":
          return "bg-green-300"; // Green for completed Plastic Project
        case "top":
          return "bg-orange-300"; // Orange for top Plastic Project
        default:
          return "bg-gray-300"; // Default color (if status is unknown)
      }
    }
    return "bg-gray-300"; // Default color for unknown types
  }

  function getTypeLabel(type?: string): string | undefined {
    return type === "Tree Project" ? "Trees" : type;
  }

  return (
    <div
      className={cn("w-72 h-auto bg-white rounded-2xl p-2 shadow", className)}
    >
      <img
        src={
          data?.image ||
          "https://st2.depositphotos.com/2632165/11804/i/450/depositphotos_118049482-stock-photo-young-plant-in-the-morning.jpg"
        }
        className="w-full md:h-44 h-40 rounded-xl object-cover"
      />
      <div className="p-2 py-3 flex justify-between items-center">
        <div>
          <p>
            <span className="font-bold">
              {data?.count || "1,179"} {getTypeLabel(data?.type) || "Trees"}
            </span>
          </p>
          <p>{data?.country}</p>
          <p>
            <span className="font-bold">${data?.price || "123.00"}</span>{" "}
            {getPriceLabel(data?.type)}
          </p>
        </div>
        <div className="w-28 px-0 h-9 rounded-md donateBtn shadow-none flex justify-center items-center">
          <p className="font-bold text-white cursor-pointer">Act Now</p>
        </div>
      </div>
      <div
        className={cn(
          "h-7 text-[9px] rounded-xl w-full  flex justify-center items-center",
          getProjectColor(data?.type, data?.status)
        )}
      >
        <p>By Mama Saves The Planet</p>
      </div>
    </div>
  );
};
