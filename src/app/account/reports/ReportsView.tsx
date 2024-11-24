"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { getReports } from "@/request/worker/reports/manageReports";
import { Eye } from "lucide-react";
import { MonthlyReportItem } from "@/interface/monthlyReport";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function getCurrentDateData(): { year: string; month: number } {
  const currentDate = new Date(); // Get the current date
  const year = currentDate.getFullYear().toString(); // Extract year as string
  const month = currentDate.getMonth(); // Extract month (1-based)

  return {
    year,
    month,
  };
}

function ReportsView({ user }: { user: string }) {
  const [year, setYear] = useState("2024");
  const [month, setMonth] = useState(0);
  const data = useQuery({
    queryKey: ["reports", year, user],
    queryFn: () => getReports(user, year),
  });
  useEffect(() => {
    const { year, month } = getCurrentDateData();
    setYear(year);
    setMonth(month);
  }, []);

  const monthData = (month: string) =>
    data.data?.items.find((e) => e.month == month);

  const reportCount = (month: string) => {
    const data = monthData(month);
    if (!data) return { count: 0, data };
    const weeks = [data.week1, data.week2, data.week3, data.week4];
    return {
      count: weeks.reduce((count, week) => (week ? count + 1 : count), 0),
      data,
    };
  };

  const monthDataView = reportCount(months[month]);

  if (data.isLoading) return <p>Loading...</p>;
  if (data.isError) return <p>Error loading reports ! something went wrong</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-10">Reports</h1>
      <div className="flex lg:flex-row flex-col gap-10">
        <div className="">
          <div className=" w-44 h-full max-h-[calc(100vh-130px)] bg-primary/5 sticky top-24 overflow-auto p-3  rounded-2xl">
            <Select value={year} onValueChange={(e) => setYear(e)}>
              <SelectTrigger className="w-full bg-white shadow-none border-none">
                <SelectValue placeholder={year} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2026">2026</SelectItem>
              </SelectContent>
            </Select>
            <br />
            {months.map((e, i) => {
              const currentData = reportCount(months[i]);
              return (
                <div
                  key={e}
                  onClick={() => setMonth(i)}
                  className={cn(
                    "bg-white w-full select-none cursor-pointer hover:bg-green-50 flex justify-between items-center text-xs px-3 h-9 border-b",
                    month == i && "bg-green-100"
                  )}
                >
                  <h1 className="font-semibold">{e.toUpperCase()}</h1>
                  <p className="text-gray-400">{currentData?.count}/4</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full">
          <div className="w-full grid grid-cols-2 gap-5">
            {["week1", "week2", "week3", "week4"].map((e, i) => {
              return (
                <div className="w-full h-32 flex justify-between items-center shadow px-6 py-2 rounded-2xl bg-white">
                  <div className="h-full flex justify-center flex-col items-start">
                    <h1 className="text-2xl font-bold mb-3">Week {i + 1}</h1>
                    <p>{`${7 * i + 1}st-${7 * i + 7}th`} - Sep 2024</p>
                  </div>
                  <div className="flex flex-col justify-end items-center">
                    {monthDataView?.data?.[e as keyof MonthlyReportItem] && (
                      <h1 className="text-xl font-bold mb-3 text-primary">
                        Submitted
                      </h1>
                    )}

                    {!monthDataView?.data?.[e as keyof MonthlyReportItem] ? (
                      <Link
                        href={
                          "/account/reports/submit?id=" +
                          `${year}-${months[month]}-WEEK${i + 1}`
                        }
                        className=""
                      >
                        <AiOutlinePlusCircle size={30} />
                      </Link>
                    ) : (
                      <Link
                        href={
                          "/account/reports/view/" +
                          `week${i + 1}/${monthDataView.data.id}`
                        }
                        className=""
                      >
                        <Eye size={30} />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportsView;
