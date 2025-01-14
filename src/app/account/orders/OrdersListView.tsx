"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatTimestampCustom } from "@/helper/dateTime";
import { useMyDonation } from "@/redux/state/useMyDonations";
import { getUserOrderAllHistoryRequest } from "@/request/worker/account/ordersRequest";
import { tree } from "next/dist/build/templates/app-page";
import React, { useEffect, useState } from "react";
import { MdFileDownload } from "react-icons/md";
import OrderCard from "./_sections/OrderCard";
import UserAllOrders from "./_sections/UserAllOrders";
import UserTreeOrders from "./_sections/UserTreeOrders";
import UserOthersOrders from "./_sections/UserOthersOrders";

function OrdersListView() {
  const [filter, setFilter] = useState("all");

  return (
    <div>
      <h1 className="text-2xl font-bold">Payment Orders</h1>
      <p>Manage all your donations and payments from one place.</p>
      <br />
      <Tabs defaultValue="all" onValueChange={setFilter}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="tree">Tree Project</TabsTrigger>
          <TabsTrigger value="others">Other Project</TabsTrigger>
          <TabsTrigger value="academic">Academy Order</TabsTrigger>
          <TabsTrigger value="fund">Funding</TabsTrigger>
          <TabsTrigger value="membership">Plans Orders</TabsTrigger>
        </TabsList>
      </Tabs>

      <br />
      {filter == "all" && <UserAllOrders />}
      {filter == "tree" && <UserTreeOrders />}
      {filter == "others" && <UserOthersOrders order="others" />}
      {filter == "academic" && <UserOthersOrders order="academic" />}
      {filter == "fund" && <UserOthersOrders order="fund" />}
      {filter == "membership" && <UserOthersOrders order="membership" />}
    </div>
  );
}

export default OrdersListView;
