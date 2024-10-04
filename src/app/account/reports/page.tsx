import React from "react";
import WorkSpace from "../components/workspace";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Reporting() {
  return (
    <WorkSpace>
      <h1 className="text-2xl font-bold mb-10">Reports</h1>
      <div className="flex lg:flex-row flex-col gap-10">
        <div className="">
          <div className=" w-44 h-full max-h-[calc(100vh-130px)] bg-primary/5 sticky top-24 overflow-auto p-3  rounded-2xl">
            <Select>
              <SelectTrigger className="w-full bg-white shadow-none border-none">
                <SelectValue placeholder="2024" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">2024</SelectItem>
                <SelectItem value="dark">2023</SelectItem>
                <SelectItem value="system">2022</SelectItem>
              </SelectContent>
            </Select>
            <br />
            {Array.from({ length: 12 }).map((_, i) => {
              return (
                <div className="bg-white w-full select-none cursor-pointer hover:bg-green-50 flex justify-between items-center text-xs px-3 h-9 border-b">
                  <h1 className="font-semibold">Month {i + 1}</h1>
                  <p className="text-gray-400">0/4</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full">
          <div className="w-full grid grid-cols-2 gap-5">
            <div className="w-full h-32 flex justify-between items-center  shadow px-6 py-2 rounded-2xl bg-white ">
              <div className="h-full flex justify-center flex-col  items-start">
                <h1 className="text-2xl font-bold mb-3">Week 1</h1>
                <p>1st-7th - Sep 2024</p>
              </div>
              <div className="flex flex-col justify-end items-center ">
                <h1 className="text-xl font-bold mb-3 text-primary">
                  Submitted
                </h1>

                <Link href="/account/reports/submit" className="">
                  <AiOutlinePlusCircle size={30} />
                </Link>
              </div>
            </div>

            <div className="w-full h-32 flex justify-between items-center  shadow px-6 py-2 rounded-2xl bg-white ">
              <div className="h-full flex justify-center flex-col  items-start">
                <h1 className="text-2xl font-bold mb-3">Week 2</h1>
                <p>1st-7th - Sep 2024</p>
              </div>
              <div className="flex flex-col justify-end items-center ">
                <h1 className="text-xl font-bold mb-3 text-primary">
                  Submitted
                </h1>

                <Link href="/account/reports/submit" className="">
                  <AiOutlinePlusCircle size={30} />
                </Link>
              </div>
            </div>

            <div className="w-full h-32 flex justify-between items-center  shadow px-6 py-2 rounded-2xl bg-white ">
              <div className="h-full flex justify-center flex-col  items-start">
                <h1 className="text-2xl font-bold mb-3">Week 3</h1>
                <p>1st-7th - Sep 2024</p>
              </div>
              <div className="flex flex-col justify-end items-center ">
                <h1 className="text-xl font-bold mb-3 text-primary">
                  Submitted
                </h1>

                <Link href="/account/reports/submit" className="">
                  <AiOutlinePlusCircle size={30} />
                </Link>
              </div>
            </div>

            <div className="w-full h-32 flex justify-between items-center  shadow px-6 py-2 rounded-2xl bg-white ">
              <div className="h-full flex justify-center flex-col  items-start">
                <h1 className="text-2xl font-bold mb-3">Week 4</h1>
                <p>1st-7th - Sep 2024</p>
              </div>
              <div className="flex flex-col justify-end items-center ">
                <h1 className="text-xl font-bold mb-3 text-primary">
                  Submitted
                </h1>

                <Link href="/account/reports/submit" className="">
                  <AiOutlinePlusCircle size={30} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WorkSpace>
  );
}

export default Reporting;
