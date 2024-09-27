import Navbar from "@/components/sections/Navbar/Navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function page() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="max-w-[800px] mx-auto  lg:border mt-28 lg:border-t-[5px] border-t-primary md:p-10 p-6 mb-20 rounded-xl">
          <div className="">
            <h1 className="text-3xl font-bold">Fullstack Developer</h1>
            <Link href="/" className="mt-6 block mb-6">
              <Image
                src="/logo/main-logo.png"
                width={200}
                height={200}
                alt="logo"
                className="w-auto object-contain md:h-[65px] lg:-mt-3 h-16 py-3 mb:pb-5"
              />
            </Link>
            <br />

            <h3 className="text-xl text-gray-700 border-b pb-2 font-semibold mb-2">
              Personal Information
            </h3>
            <br />
            <div className="grid grid-cols-1 gap-6">
              <div className="">
                <Label className="text-lg text-gray-600">Salutation</Label>
                <Select>
                  <SelectTrigger className="w-full p-6 mt-2 shadow-none">
                    <SelectValue placeholder="Mr." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Mr.</SelectItem>
                    <SelectItem value="dark">Ms.</SelectItem>
                    <SelectItem value="system">Mx.</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="">
                <p className="font-medium mb-2 text-gray-600">
                  First Name
                  <span className="text-red-600 text-xl font-bold ">*</span>
                </p>
                <Input className="p-6 shadow-none" />
              </div>
              <div className="">
                <p className="font-medium mb-2 text-gray-600">
                  Last Name
                  <span className="text-red-600 text-xl font-bold ">*</span>
                </p>
                <Input className="p-6 shadow-none" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="">
                <p className="font-medium mb-2 text-gray-600">
                  Mobile No
                  <span className="text-red-600 text-xl font-bold ">*</span>
                </p>
                <Input className="p-6 shadow-none" />
              </div>
              <div className="">
                <p className="font-medium mb-2 text-gray-600">
                  Email ID
                  <span className="text-red-600 text-xl font-bold ">*</span>
                </p>
                <Input className="p-6 shadow-none" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="">
                <p className="font-medium mb-2 text-gray-600">
                  Country
                  <span className="text-red-600 text-xl font-bold ">*</span>
                </p>
                <Input className="p-6 shadow-none" />
              </div>
              <div className="">
                <p className="font-medium mb-2 text-gray-600">
                  City
                  <span className="text-red-600 text-xl font-bold ">*</span>
                </p>
                <Input className="p-6 shadow-none" />
              </div>
            </div>

            <br />
            <h3 className="text-xl text-gray-700 border-b pb-2 font-semibold mb-2">
              Your Document
            </h3>
            <br />
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="">
                <p className="font-medium mb-2 text-gray-600">
                  Upload your Resume
                  <span className="text-red-600 text-xl font-bold ">*</span>
                </p>
                <Input className="h-12 pt-3 shadow-none" type="file" />
              </div>
              <div className="">
                <p className="font-medium mb-3 text-gray-600">
                  Upload Other Doc
                </p>
                <Input className=" h-12 pt-3 shadow-none" type="file" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="">
                <p className="font-medium mb-2 text-gray-600">
                  Current Role
                  <span className="text-red-600 text-xl font-bold ">*</span>
                </p>
                <Input className="p-6 shadow-none" />
              </div>
              <div className="">
                <p className="font-medium mb-2 text-gray-600">
                  Current Company
                  <span className="text-red-600 text-xl font-bold ">*</span>
                </p>
                <Input className="p-6 shadow-none" />
              </div>
            </div>
            <br />
            <div className="grid grid-cols-1 gap-6">
              <div className="">
                <Label className="text-lg text-gray-600">Salutation</Label>
                <div className="mt-3">
                  <Slider defaultValue={[33]} max={100} step={1} />
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="">
              <div className="">
                <p className="font-medium mb-2 text-gray-600">
                  Share about a Situation you've Faced on that demonstrates your
                  skills and experience.
                </p>
                <Textarea className="p-6 shadow-none" />
              </div>
            </div>

            <br />

            <h3 className="text-xl text-gray-700 border-b pb-2 font-semibold mb-2">
              Additional Information
            </h3>
            <br />
            <div className="grid grid-cols-1 gap-6">
              <div className="">
                <Label className="text-lg text-gray-600">
                  Potential Starting Date
                </Label>
                <Input type="date" className="block p-6 shadow-none mt-2" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="">
                <p className="font-medium mb-2 text-gray-600">
                  Availability
                  <span className="text-red-600 text-xl font-bold ">*</span>
                </p>

                <Select>
                  <SelectTrigger className="p-6 shadow-none">
                    <SelectValue placeholder="Full Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Full Time</SelectItem>
                    <SelectItem value="dark">Part Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="">
                <p className="font-medium mb-2 text-gray-600">
                  Expected Monthly Salary in OMR
                  <span className="text-red-600 text-xl font-bold ">*</span>
                </p>
                <Input className="p-6 shadow-none" />
              </div>
            </div>

            <br />
            <div className="">
              <div className="">
                <p className="font-medium mb-2 text-gray-600">
                  Which languages do you speak?{" "}
                  <span className="text-xs ml-2">
                    Please rate your language skills from 1 (basic) to 4 (mother
                    tongue / perfect)
                  </span>
                </p>
                <Textarea className="p-6 shadow-none" />
              </div>
            </div>

            <br />
            <div className="">
              <div className="">
                <p className="font-medium mb-2 text-gray-600">
                  Additional Information
                </p>
                <Textarea className="p-6 shadow-none" />
              </div>
            </div>
            <br />
            <Button className="donateBtn p-6 shadow-none border-none">
              Apply Your Proposal
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
