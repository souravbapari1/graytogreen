"use client";
import Navbar from "@/components/sections/Navbar/Navbar";
import Calendar from "react-calendar";
import { montserrat } from "@/fonts/font";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import ConsultationHero from "./ConsultationHero";
import Link from "next/link";

type Value = ValuePiece | [ValuePiece, ValuePiece];

function consultation() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Navbar />
      <ConsultationHero />
      <div className={`container ${montserrat.className} py-20`}>
        <div className="max-w-[1200px] mx-auto ">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 mt-10">
            <div className="md:col-span-2 grid md:grid-cols-2 gap-0">
              <div className="w-full pt-5 ">
                <h1 className="font-bold text-xl mb-8">
                  Select a Date and Time
                </h1>
                <div className="mx-auto flex justify-start  items-center">
                  <Calendar
                    onChange={onChange}
                    value={value}
                    className="border-none bg-primary"
                  />
                </div>
              </div>
              <div className="bg-gray-50 p-5">
                <p className="md:hidden mt-10 mb-5 block">
                  India Standard Time (GMT+5:30)
                </p>
                <p className="md:block hidden font-bold text-center mb-8 text-xl">
                  India Standard Time (GMT+5:30)
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    "10:00 AM",
                    "11:00 AM",
                    "01:00 PM",
                    "02:00 PM",
                    "03:00 PM",
                    "04:00 PM",
                    "05:00 PM",
                    "06:00 PM",
                    "07:00 PM",
                    "08:00 PM",
                    "09:00 PM",
                    "10:00 PM",
                    "11:00 PM",
                  ].map((e, i) => {
                    return (
                      <div className="w-full h-10 border hover:bg-main hover:text-white transition-all select-none cursor-pointer flex justify-center text-sm items-center">
                        <p>{e}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="">
              <h2 className="font-bold text-lg">Service Details</h2>
              <div className="mt-4">
                <p className="font-semibold">Contact Us </p>
                <p>September 26, 2024 at 4:00 pm</p>
                <p>Navi Mumbai</p>
                <p>15 min</p>
              </div>
              <br />
              <hr />
              <br />
              <div className="">
                <p className="mb-2">Consultation Type</p>
                <Select>
                  <SelectTrigger className="w-full rounded-none shadow-none">
                    <SelectValue placeholder="Type 1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Type 1</SelectItem>
                    <SelectItem value="dark">Type 2</SelectItem>
                    <SelectItem value="system">Type 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <br />
              <div className="">
                <p className="mb-2">Your Industry</p>
                <Select>
                  <SelectTrigger className="w-full rounded-none shadow-none ">
                    <SelectValue placeholder="Industry 1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Industry 1</SelectItem>
                    <SelectItem value="dark">Industry 2</SelectItem>
                    <SelectItem value="system">Industry 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <br />
              <Link href="/book/consultation/next">
                <Button className="w-full p-6 shadow-none uppercase rounded-none">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default consultation;
