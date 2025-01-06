"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import { ChartViewComponent } from "./components/DataChart";
import { useSession } from "next-auth/react";
import { FaSpinner } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/request/actions";

function ChartBar() {
  const [year, setYear] = useState(new Date().getFullYear());
  const session = useSession();
  const data = useQuery({
    queryKey: ["user_donate_chart", year],
    queryFn: async () => {
      return await client
        .get("/user/donate/chart", {
          user: session?.data?.user?.id || "",
          year: year,
        })
        .send();
    },
  });

  if (!session || data.isLoading) {
    return (
      <div className="w-full md:max-w-[100%] h-56 bg-gray-100 rounded-md flex justify-center items-center ">
        <FaSpinner className="animate-spin text-gray-600 " />
      </div>
    );
  }

  return (
    <div className="w-full md:max-w-[100%]  ">
      <Card className="shadow-none md:border border-none">
        <CardHeader className="flex justify-center items-end">
          <Select onValueChange={(e) => setYear(+e)} value={year.toString()}>
            <SelectTrigger className="w-[120px] rounded-none shadow-none text-center">
              <SelectValue placeholder={year} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={new Date().getFullYear().toString()}>
                {new Date().getFullYear()}
              </SelectItem>
              <SelectItem value={(new Date().getFullYear() - 1).toString()}>
                {new Date().getFullYear() - 1}
              </SelectItem>
              <SelectItem value={(new Date().getFullYear() - 2).toString()}>
                {new Date().getFullYear() - 2}
              </SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className=" p-0 ">
          <ChartViewComponent chartData={data.data} />
        </CardContent>
      </Card>
    </div>
  );
}

export default ChartBar;
