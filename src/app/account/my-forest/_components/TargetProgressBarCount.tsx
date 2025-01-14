"use client";
import { Progress } from "@/components/ui/progress";
import { UserItem } from "@/interface/user";
import { getTargetStatus } from "@/request/worker/targetStatus";
import { useQuery } from "@tanstack/react-query";
import { Milk } from "lucide-react";
import Link from "next/link";
import React from "react";
import { MdOutlineCo2 } from "react-icons/md";
import { PiPlant } from "react-icons/pi";

function TargetProgressBarCount({ user }: { user: UserItem }) {
  const status = useQuery({
    queryKey: ["target-status", user.id],
    queryFn: async () => {
      const data = await getTargetStatus(user.id);
      return data;
    },
    refetchOnWindowFocus: false,
  });
  return (
    <div className="w-full  bg-white shadow-md p-3 rounded-3xl mt-10">
      {user.targetCo2Save ? (
        <div className="w-full h-full py-4 mb-5 bg-gray-400/5 rounded-3xl flex gap-5 justify-start items-center px-5">
          <div className="w-10 h-10 ">
            <div className="bg-yellow-600/60 w-10 h-10 text-xl flex justify-center items-center text-white rounded-xl">
              <MdOutlineCo2 />
            </div>
          </div>
          <div className="flex w-full justify-center text-xs font-semibold items-start gap-1 flex-col">
            <h1>
              {status?.data?.carbon || 0} of {user.targetCo2Save} Kg Of Co2 Eq
            </h1>
            <div className="flex justify-between w-full gap-6 items-center">
              <div className="w-full relative">
                <Progress
                  className="w-[100%] bg-gray-200"
                  color="yellow"
                  value={
                    ((status?.data?.carbon || 0) / +user.targetCo2Save) * 100
                  }
                />
              </div>
              <p className="text-nowrap">
                {(
                  ((status?.data?.carbon || 0) / +user.targetCo2Save) *
                  100
                ).toFixed(2)}{" "}
                %
              </p>
            </div>
            {user.user_type == "ambassador" && (
              <p className="text-[10px] font-normal">
                {status?.data?.support_carbon || 0} from your community
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <Link href="/account/profile">Set Your Carbon Target</Link>
        </div>
      )}
      {user.targetTrees ? (
        <div className="w-full h-full py-4 bg-primary/5 rounded-3xl flex gap-5 justify-start items-center px-5">
          <div className="w-10 h-10 ">
            <div className="bg-primary w-10 h-10 text-xl flex justify-center items-center text-white rounded-xl">
              <PiPlant />
            </div>
          </div>
          <div className="flex w-full justify-center text-xs font-semibold items-start gap-1 flex-col">
            <h1>
              {status.data?.tree} of {user.targetTrees} Trees
            </h1>
            <div className="flex justify-between w-full gap-6 items-center">
              <div className="w-full relative">
                <Progress
                  className="w-[100%]"
                  value={((status?.data?.tree || 0) / +user.targetTrees) * 100}
                />
              </div>
              <p className="text-nowrap">
                {(
                  ((status?.data?.tree || 0) / +user.targetTrees) *
                  100
                ).toFixed(2)}{" "}
                %
              </p>
            </div>
            {user.user_type == "ambassador" && (
              <p className="text-[10px] font-normal">
                {status?.data?.support_tree || 0} from your community
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center text-main underline">
          <Link href="/account/profile">Set Your Trees Target</Link>
        </div>
      )}
      <br />
      {user.targetPlastic ? (
        <div className="w-full h-full py-4 -10 bg-gray-400/5 rounded-3xl flex gap-5 justify-start items-center px-5">
          <div className="w-10 h-10 ">
            <div className="bg-gray-700 w-10 h-10 text-xl flex justify-center items-center text-white rounded-xl">
              <Milk />
            </div>
          </div>
          <div className="flex w-full justify-center text-xs font-semibold items-start gap-1 flex-col">
            <h1>
              {status?.data?.plastic.toFixed(2) || 0} of {user.targetPlastic}{" "}
              Plastic Collected Or Recycled ( Kg)
            </h1>
            <div className="flex justify-between w-full gap-6 items-center">
              <div className="w-full relative">
                <Progress
                  className="w-[100%] bg-gray-200"
                  color="gray"
                  value={
                    ((status?.data?.plastic || 0) / +user.targetPlastic) * 100
                  }
                />
              </div>
              <p className="text-nowrap">
                {(
                  ((status?.data?.plastic || 0) / +user.targetPlastic) *
                  100
                ).toFixed(2)}{" "}
                %
              </p>
            </div>
            {user.user_type == "ambassador" && (
              <p className="text-[10px] font-normal">
                {status?.data?.support_plastic || 0} from your community
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <Link href="/account/profile">Set Your Plastic Target</Link>
        </div>
      )}
    </div>
  );
}

export default TargetProgressBarCount;
