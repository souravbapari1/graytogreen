import { auth } from "@/auth";
import { formatTimestampCustom } from "@/helper/dateTime";
import { Collection } from "@/interface/collection";
import { OrderPayItem } from "@/interface/PaymentItem";
import { UserItem } from "@/interface/user";
import { cn } from "@/lib/utils";
import { client, genPbFiles } from "@/request/actions";
import { useMutation, useQuery } from "@tanstack/react-query";
import { CalendarHeart } from "lucide-react";

import Link from "next/link";
import React, { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { PiPlantFill } from "react-icons/pi";

function ContributeCard({
  order,
  user,
}: {
  order: OrderPayItem;
  user: UserItem;
}) {
  const moreOrders = async (): Promise<Collection<OrderPayItem>> => {
    const data = await client
      .get(`/api/collections/payments/records`, {
        perPage: 2,
        filter: `(project='${order.expand.project.id}' && status='paid' && orderPlaced=true && user!='${user.id}')`,
        expand: "support",
      })
      .send<Collection<OrderPayItem>>();
    return data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["moreOrders-" + order.id],
    queryFn: moreOrders,
  });
  return (
    <div
      className={cn(
        "w-full bg-primary/5 h-auto mt-2 rounded-xl flex justify-start flex-col items-start relative p-2",
        order?.support && "bg-orange-100"
      )}
    >
      <div className="md:flex justify-start w-full items-start relative">
        <div className="md:w-auto w-full">
          <div
            style={{
              backgroundImage: `url(${genPbFiles(
                order.expand.project,
                order.expand.project.preview_image
              )})`,
            }}
            className={`md:w-40 w-full h-40 rounded-xl bg-white bg-cover bg-center`}
          ></div>
        </div>
        <div className="px-4 w-full flex-col h-full justify-between">
          <div className="flex flex-col  h-full w-full">
            <p className="flex justify-start items-center gap-2 text-xs text-primary font-semibold">
              <PiPlantFill size={16} />
              {order.expand.project.expand?.type?.name}
            </p>
            <h1 className="text-lg mt-2 font-semibold">
              {order.expand.project.name}
            </h1>
            <p className="text-xs">{order.expand.project.comment}</p>
            <div className="flex justify-start items-center gap-5">
              <p className="text-xs mt-1 flex justify-start items-center gap-1">
                <FaLocationDot size={12} /> {order.expand.project.country} •{" "}
                {order.expand.project.city}
              </p>
              <p className="text-xs mt-1 flex float-start items-center gap-1">
                <CalendarHeart size={12} />{" "}
                {formatTimestampCustom(order.created)}
              </p>
            </div>
            {order.support && (
              <p className="text-xs mt-1">
                Supported by : {order?.expand?.support?.first_name}{" "}
                {order?.expand?.support?.last_name}
              </p>
            )}
            <p className="text-xs mt-1">
              {order.quantity} {order.expand.project.unit_measurement} • of{" "}
              {order.expand.project.omr_unit} Omr
            </p>
          </div>
          <div className="flex justify-between pt-0 items-center ">
            <h1 className="font-bold  text-lg">
              {order.quantity} {order.expand.project.unit_measurement}
            </h1>
            <Link
              className="donateBtn text-sm -mt-4 py-2 rounded-xl text-white shadow-none"
              href={`/donate?by=project&id=${order.expand.project.id}&donate=${order.donate}`}
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContributeCard;
