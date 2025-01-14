"use client";
import { Collection } from "@/interface/collection";
import { OrderPayItem } from "@/interface/PaymentItem";
import { UserItem } from "@/interface/user";
import { client } from "@/request/actions";
import { getTargetStatus } from "@/request/worker/targetStatus";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function CouminityCo2Save({ user }: { user: UserItem }) {
  //   const [community, setCommunity] = useState<OrderPayItem[]>([]);

  const community = useQuery({
    queryKey: ["co2-contribution", user.id],
    queryFn: async () => {
      const data = await client.get(`/forest/status`).send<
        {
          impact: number;
          name: string;
          projects: number;
        }[]
      >();
      return data;
    },
    refetchOnWindowFocus: false,
  });

  return (
    <div className="w-full h-[552px] overflow-auto   rounded-b-3xl text-sm font-semibold p-5  bg-white">
      {community.data?.length == 0 && (
        <div className="flex justify-center items-center mt-10">
          <p className="text-center text-xl font-bold text-primary">
            No Community Contribution Found
          </p>
        </div>
      )}
      {community.data
        ?.filter((e) => e.impact > 0)
        .map((e) => {
          return (
            <div
              className="flex justify-between items-center py-4 border-b"
              key={e.name + "commmunity"}
            >
              <p>{e.name}</p>
              <p>{e.impact.toFixed(2)} Co2 Saved</p>
            </div>
          );
        })}
    </div>
  );
}

export default CouminityCo2Save;
