"use client";
import { montserrat } from "@/fonts/font";
import { UserItem } from "@/interface/user";
import { cn } from "@/lib/utils";
import { genPbFiles } from "@/request/actions";
import { getUser } from "@/request/worker/auth";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function SupportBox() {
  const params = useSearchParams();
  const [supporter, setSupporter] = useState<UserItem | null>(null);
  const loadSupporter = async () => {
    if (params.get("support")) {
      try {
        const user = await getUser(params.get("support") || "");
        setSupporter(user);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    loadSupporter();
  }, []);

  if (!supporter) {
    return <></>;
  }
  return (
    <div className=" w-auto  bg-white rounded-full shadow-lg flex justify-start items-center p-1 pr-8">
      <Image
        src={genPbFiles(supporter, supporter?.avatar)}
        width={40}
        height={40}
        alt=""
        className=" w-8 h-8 object-cover  rounded-full"
      />
      {
        <div
          className={cn(
            "flex flex-col justify-start items-start ml-2 text-left",
            montserrat.className
          )}
        >
          <p className="text-[10px] font-semibold text-primary">Supported by</p>
          <p className="text-xs font-bold ">
            {supporter?.first_name} {supporter?.last_name}
          </p>
        </div>
      }
    </div>
  );
}

export default SupportBox;
