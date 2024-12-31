"use client";

import { Progress } from "@/components/ui/progress";
import { ProjectItem } from "@/interface/project";
import { cn } from "@/lib/utils";
import { client, genPbFiles } from "@/request/actions";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FaStar } from "react-icons/fa";

export const PopupContent = ({
  className,
  data,
  onClick,
}: {
  className?: string | undefined;
  data?: ProjectItem | undefined;
  onClick?: () => void;
}) => {
  const params = useSearchParams();
  function getPriceLabel(type?: string): string {
    return type === "Plastic Offset" ? "OMR/kg" : "OMR/Trees";
  }

  function getProjectColor(type?: string, status?: string): string {
    if (type?.toLowerCase() === "carbon offset") {
      switch (status?.toLowerCase()) {
        case "active":
          return "bg-gray-300 "; // Gray for active Carbon Project
        case "completed":
          return "bg-green-200"; // Green for completed Carbon Project
        case "top":
          return "bg-orange-200"; // Orange for top Carbon Project
        default:
          return "bg-gray-300"; // Default color (if status is unknown)
      }
    } else if (type?.toLowerCase() === "plastic offset") {
      switch (status?.toLowerCase()) {
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

  const complete = useQuery({
    queryKey: ["complete", data?.id],
    queryFn: async () => {
      const res = await client
        .get("/project/target", {
          id: data?.id || "",
          type: data?.project_prefix || "",
        })
        .send<{ total: number }>();
      return res.total < 100 ? res.total : 100;
    },
  });

  function calculatePercentage(completed: number, target: number): string {
    return ((completed / target) * 100).toFixed(2);
  }

  return (
    <div
      className={cn(
        "w-72 h-auto bg-white rounded p-2 border-gray-100 border-2",
        className
      )}
    >
      <div
        onClick={onClick}
        className="rounded relative  md:h-44 h-40 cursor-pointer  overflow-hidden rounded-b-none "
      >
        <img
          src={genPbFiles(data, data?.preview_image!)}
          className="w-full h-full object-cover"
        />
        <div
          className={cn(
            "w-full h-24  absolute bottom-0 bg-gradient-to-t from-black to-transparent",
            `${data?.top_project ? "from-yellow-800" : ""}`
          )}
        ></div>
        {data?.top_project && (
          <div className="absolute top-3 flex justify-start px-0.5 items-center right-4 w-16 rounded-full h-6 bg-yellow-600">
            <div className="h-5 w-5 bg-white rounded-full flex justify-center items-center">
              <FaStar className="text-yellow-600" />
            </div>
            <p className="font-bold text-white text-center ml-1.5">TOP</p>
          </div>
        )}
        <div className="flex justify-start absolute text-white left-4 bottom-4 items-center gap-x-2">
          <div className="text-xs ">
            <div className="flex  justify-start items-start gap-2">
              <img
                src={"/icons" + data?.marker?.values.image}
                className="w-3 h-3 cursor-pointer"
              />
              <p className="font-semibold text-[10px]">
                {data?.expand?.type?.name || "NO NME"}
              </p>
            </div>
            <p className="text-[12px] ">{data?.sort_title}</p>
          </div>
        </div>
      </div>
      <Progress
        className="rounded-t-none h-1"
        value={
          +calculatePercentage(
            complete.data || 0,
            data?.number_of_target_unit || 0
          ) || 0
        }
        max={100}
      />
      <div className="p-2 py-3 flex justify-between flex-col items-start gap-3 w-full">
        <p>
          <span className="font-bold">{data?.name || "Trees"}</span>
        </p>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-1 w-full ">
            <p className="text-xs">
              {data?.country} - {data?.city}
            </p>

            <p>
              <span className="font-bold">﷼{data?.omr_unit || "123.00"}</span>{" "}
              {getPriceLabel(data?.expand?.type?.name)}
            </p>
          </div>
          <Link
            href={`/donate?by=project&id=${data?.id}&donate=${
              data?.project_prefix
            }${
              params?.get("support") ? "&support=" + params?.get("support") : ""
            }`}
            className="w-32 px-0 h-9 rounded-md donateBtn shadow-none flex justify-center items-center"
          >
            <p className="font-bold text-white cursor-pointer">Act Now</p>
          </Link>
        </div>
      </div>
      <div
        className={cn(
          "h-7 text-[9px] rounded-xl w-full  flex justify-center items-center",
          getProjectColor(data?.expand?.type?.name, data?.status)
        )}
      >
        <p>{data?.comments || "By Mama Saves The Planet"}</p>
      </div>
    </div>
  );
};
