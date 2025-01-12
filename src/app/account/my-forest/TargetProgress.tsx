import { Progress } from "@/components/ui/progress";
import { UserItem } from "@/interface/user";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdOutlineCo2 } from "react-icons/md";
import { PiPlant } from "react-icons/pi";
import ContributeCard from "./ContributeCard";
import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";

import { useMyDonation } from "@/redux/state/useMyDonations";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Collection } from "@/interface/collection";
import { OrderPayItem } from "@/interface/PaymentItem";
import { client } from "@/request/actions";
import TargetProgressBarCount from "./_components/TargetProgressBarCount";

function TargetProgress({ user }: { user: UserItem }) {
  const { mydonation, status } = useMyDonation();
  const [loading, setloading] = useState(true);
  const [community, setCommunity] = useState<OrderPayItem[]>([]);
  const [sort, setSort] = useState("created");
  const lodeCommunity = async () => {
    setloading(true);
    try {
      const data = await client
        .get(`/api/collections/payments/records`, {
          perPage: 20,
          expand: "user",
          filter: `(status='paid' && orderPlaced=true)`,
          sort: `-${sort}`,
        })
        .send<Collection<OrderPayItem>>();
      setCommunity(data.items);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    lodeCommunity();
  }, [sort]);

  return (
    <>
      <TargetProgressBarCount user={user} />

      <div className="grid lg:grid-cols-2 gap-10 mt-10 pb-20">
        <div className="w-full h-[700px] bg-white overflow-hidden relative shadow-lg p-2 rounded-3xl ">
          <div className="w-full h-[130px] bg-primary/10 overflow-hidden rounded-t-3xl flex justify-between items-center">
            <h1 className="text-xl font-bold md:pl-10 pl-5 text-primary">
              Your`s Contributions
            </h1>
            <Image
              src="/icons/plant.svg"
              width={200}
              height={200}
              alt=""
              className="object-contain bottom-0 h-28 mt-5"
            />
          </div>
          <div className="w-full h-[552px] overflow-auto p-2  rounded-b-3xl  bg-white">
            {mydonation.length == 0 && (
              <div className="flex justify-center items-center mt-10">
                <p className="text-center text-xl font-bold text-primary">
                  No Donation Found
                </p>
              </div>
            )}
            {mydonation.map((e, i) => {
              return (
                <ContributeCard key={e.id + i + "pay"} order={e} user={user} />
              );
            })}
          </div>
        </div>
        <div className="w-full h-[700px] bg-white overflow-hidden relative shadow-lg p-2 rounded-3xl ">
          <div className="w-full h-[130px] bg-orange-100 overflow-hidden rounded-t-3xl flex justify-between items-center">
            <div className="">
              <h1 className="text-xl font-bold md:pl-10 pl-5 text-primary">
                Community Contributions
              </h1>
              <div className="">
                <Tabs defaultValue={sort} className=" md:pl-10 pl-5 mt-4">
                  <TabsList className="bg-white rounded-sm">
                    <TabsTrigger
                      className="rounded-sm shadow-none"
                      value="created"
                      onClick={() => setSort("created")}
                    >
                      Most recent
                    </TabsTrigger>
                    <TabsTrigger
                      className="rounded-sm shadow-none"
                      value="quantity"
                      onClick={() => setSort("quantity")}
                    >
                      Most Co2 Save
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
            <Image
              src="/icons/rank.svg"
              width={200}
              height={200}
              alt=""
              className="object-contain bottom-0 h-28 mt-5"
            />
          </div>
          <div className="w-full h-[552px] overflow-auto   rounded-b-3xl text-sm font-semibold p-5  bg-white">
            {community.length == 0 && (
              <div className="flex justify-center items-center mt-10">
                <p className="text-center text-xl font-bold text-primary">
                  No Community Contribution Found
                </p>
              </div>
            )}
            {community.map((e, i) => {
              return (
                <div
                  className="flex justify-between items-center py-4 border-b"
                  key={e.id + "commmunity"}
                >
                  <p>
                    {sort == "created"
                      ? e.expand.user.first_name + " " + e.expand.user.last_name
                      : "Example Project Type"}
                  </p>
                  <p>
                    {" "}
                    {e.quantity} {sort == "created" ? "trees" : "Co2 Saved"}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TargetProgress;
