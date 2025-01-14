"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ChartViewComponent } from "./components/DataChart";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  getTransitions,
  getUserPaymentHistory,
  MyBalanceItem,
} from "@/request/worker/account/getUserPaymentData";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { formatTimestampCustom } from "@/helper/dateTime";
import { Terminal } from "lucide-react";
import { UserItem } from "@/interface/user";
import Link from "next/link";
import ChartBar from "./ChartBar";
import PartnerWallet from "./components/PartnerWallet";
function MyBalance({ balance, user }: { balance: number; user: UserItem }) {
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const filterQuery = () => {
    if (start_date && end_date) {
      return `created>='${start_date}' && created<='${end_date}'`;
    }
    return "";
  };
  const transactions = useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      return await getTransitions(1, user.id, filterQuery());
    },
  });

  const getStatus = () => {
    if (user.user_type == "partner") {
      if (user.expand?.company?.approved_status == "pending") {
        return (
          <Alert className="mb-8 p-5 px-8" variant="warning">
            <AlertTitle className="text-xl font-bold">Under Review!</AlertTitle>
            <AlertDescription>
              Your account is under review by our team. Please wait for the
              review to be completed.
            </AlertDescription>
          </Alert>
        );
      } else if (user.expand?.company?.approved_status == "rejected") {
        return (
          <Alert className="mb-8 p-5 px-8 border" variant="destructive">
            <AlertTitle className="text-xl font-bold">Rejected!</AlertTitle>
            <AlertDescription>
              Your account has been rejected by our team. Please contact us for
              more information.{" "}
              <Link href="/contact-us" className="font-bold">
                Contact Us
              </Link>
            </AlertDescription>
          </Alert>
        );
      }
    }
  };

  return (
    <div>
      {getStatus()}
      {/* <Tabs defaultValue="All" className="w-full">
        <TabsList>
          <TabsTrigger value="All">All</TabsTrigger>
          <TabsTrigger value="Carbon Offset">Carbon Offset</TabsTrigger>
          <TabsTrigger value="Plastic Offset">Plastic Offset</TabsTrigger>
          <TabsTrigger value="Others">Others</TabsTrigger>
        </TabsList>
      </Tabs> */}
      <div className="grid lg:grid-cols-3 mt-6 gap-10">
        <div className="lg:col-span-2">
          <div className=" gap-5 grid lg:grid-cols-2 ">
            <Card x-chunk="dashboard-01-chunk-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium flex justify-between items-center w-full">
                  <p>My Impacts Amount (OMR)</p>
                  <p className="text-2xl text-gray-500">$</p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {balance.toFixed(2)} OMR
                </div>
                <p className="text-xs text-muted-foreground">
                  your total donation
                </p>
              </CardContent>
            </Card>

            <PartnerWallet user={user} balance={user.wallet} />
          </div>

          <div className="">
            <div>
              <div className="mt-8">
                <div className="mt-0  flex lg:items-end lg:justify-end">
                  <div className="w-full">
                    <Label className="text-xs">Date From</Label>
                    <Input
                      type="date"
                      className="block rounded-none border-r-0 border-b-0 "
                      onChange={(e) => {
                        setStart_date(e.target.value);
                      }}
                      value={start_date}
                    />
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <Label className="text-xs">Date To</Label>
                      {end_date && start_date && (
                        <p
                          className="text-xs text-red-600 font-bold uppercase select-none cursor-pointer"
                          onClick={() => {
                            setEnd_date("");
                            setStart_date("");
                            setTimeout(() => {
                              transactions.refetch();
                            }, 100);
                          }}
                        >
                          Clear
                        </p>
                      )}
                    </div>
                    <Input
                      type="date"
                      className="block rounded-none border-b-0"
                      onChange={(e) => {
                        setEnd_date(e.target.value);
                      }}
                      value={end_date}
                    />
                  </div>
                  <div className="flex justify-end items-end flex-col">
                    <Label className="text-xs "> </Label>
                    <Button
                      className="rounded-none"
                      onClick={() => {
                        transactions.refetch();
                      }}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
                <Table className="border text-xs">
                  <TableCaption>
                    A list of your recent Transaction.
                  </TableCaption>
                  <TableHeader className="bg-gray-300  ">
                    <TableRow>
                      <TableHead className=" font-bold py-3 md:w-[160px] text-center">
                        Transaction ID
                      </TableHead>
                      <TableHead className=" font-bold py-3 border-r border-l text-center">
                        Transaction Reasons
                      </TableHead>
                      <TableHead className=" font-bold py-3 text-center border-r">
                        Date - Time
                      </TableHead>
                      <TableHead className=" font-bold py-3 text-center border-r">
                        Amount (OMR)
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.data?.items.map((e, i) => {
                      return (
                        <TableRow
                          key={i}
                          style={{
                            background: e.type == "DONATE" ? "#F3F4F6" : "",
                          }}
                        >
                          <TableCell className="py-3 text-center border-r uppercase">
                            {e.id}
                          </TableCell>
                          <TableCell className="py-3 text-center border-r">
                            {e.reason}
                          </TableCell>
                          <TableCell className="py-3 text-center border-r">
                            {formatTimestampCustom(e.created)}
                          </TableCell>
                          <TableCell className="py-3 text-center border-r">
                            {e.type == "CREDIT"
                              ? "+"
                              : e.type == "DEBIT"
                                ? "-"
                                : ""}{" "}
                            {e.amount.toFixed(2)} OMR
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-start">
          <ChartBar user={user} />
        </div>
      </div>
    </div>
  );
}

export default MyBalance;
