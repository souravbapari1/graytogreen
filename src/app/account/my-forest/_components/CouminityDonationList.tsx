"use client";
import { Collection } from "@/interface/collection";
import { OrderPayItem } from "@/interface/PaymentItem";
import { UserItem } from "@/interface/user";
import { client } from "@/request/actions";
import { getTargetStatus } from "@/request/worker/targetStatus";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function CouminityDonationList({ user }: { user: UserItem }) {
  //   const [community, setCommunity] = useState<OrderPayItem[]>([]);

  const community = useQuery({
    queryKey: ["community-contribution", user.id],
    queryFn: async () => {
      const data = await client
        .get(`/api/collections/payments/records`, {
          perPage: 20,
          expand: "user",
          filter: `(status='paid' && orderPlaced=true && donate='tree')`,
          sort: `-quantity`,
        })
        .send<Collection<OrderPayItem>>();
      return data;
    },
    refetchOnWindowFocus: false,
  });

  return (
    <div className="w-full h-[552px] overflow-auto   rounded-b-3xl text-sm font-semibold p-5  bg-white">
      {community.data?.items.length == 0 && (
        <div className="flex justify-center items-center mt-10">
          <p className="text-center text-xl font-bold text-primary">
            No Community Contribution Found
          </p>
        </div>
      )}
      {community.data?.items.map((e, i) => {
        return (
          <div
            className="flex justify-between items-center py-4 border-b"
            key={e.id + "commmunity"}
          >
            <p>{e.expand.user.first_name + " " + e.expand.user.last_name}</p>
            <p>{e.quantity} Tree</p>
          </div>
        );
      })}
    </div>
  );
}

export default CouminityDonationList;
