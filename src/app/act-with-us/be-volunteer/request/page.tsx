import Navbar from "@/components/sections/Navbar/Navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { montserrat } from "@/fonts/font";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

function RequestBeVolunteer() {
  return (
    <div>
      <Navbar />
      <div className="container py-20">
        <h1
          className={`md:text-5xl text-2xl  font-bold mb-5 text-center ${montserrat.className}`}
        >
          <span className="text-primary">Apply</span> Be Volunteer
        </h1>
        <p className="max-w-[880px] text-gray-500 text-center mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          vero eveniet ullam assumenda dicta! Provident at nihil doloremque
          veniam iste! Alias excepturi sed aut expedita mollitia possimus
          molestiae eaque magnam.
        </p>
        <br />
        <br />
        <div className={`max-w-[800px] mx-auto ${montserrat.className}`}>
          <div className="grid md:grid-cols-2 gap-3 md:gap-8">
            <div className="">
              <Label className="text-gray-700 text-base ">First Name</Label>
              <Input className="p-6 shadow-none mt-2" />
            </div>
            <div className="">
              <Label className="text-gray-700 text-base ">Last Name</Label>
              <Input className="p-6 shadow-none mt-2" />
            </div>
          </div>
          <br />
          <div className="">
            <Label className="text-gray-700 text-base ">Gender</Label>
            <Select>
              <SelectTrigger className="w-full p-6 shadow-none mt-2">
                <SelectValue placeholder="Male" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Male</SelectItem>
                <SelectItem value="dark">Female</SelectItem>
                <SelectItem value="system">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <br />
          <div className="grid md:grid-cols-2 gap-3 md:gap-8">
            <div className="">
              <Label className="text-gray-700 text-base ">Birthday Date</Label>
              <Input className="p-6 shadow-none mt-2 block" type="date" />
            </div>
            <div className="">
              <Label className="text-gray-700 text-base ">
                Place of Birthday
              </Label>
              <Input className="p-6 shadow-none mt-2" />
            </div>
          </div>
          <br />
          <div className="">
            <Label className="text-gray-700 text-base ">Nationality</Label>
            <Input className="p-6 shadow-none mt-2" />
          </div>
          <br />
          <Label className="text-gray-800 text-xl font-semibold mb-3 block ">
            Address
          </Label>
          <div className="grid md:grid-cols-2 gap-3 md:gap-8">
            <div className="">
              <Label className="text-gray-700 text-base ">Your Address</Label>
              <Input className="p-6 shadow-none mt-2" />
            </div>
            <div className="">
              <Label className="text-gray-700 text-base ">Country</Label>
              <Input className="p-6 shadow-none mt-2" />
            </div>
          </div>
          <br />
          <div className="grid md:grid-cols-2 gap-3 md:gap-8">
            <div className="">
              <Label className="text-gray-700 text-base ">City</Label>
              <Input className="p-6 shadow-none mt-2" />
            </div>
            <div className="">
              <Label className="text-gray-700 text-base ">Postcode</Label>
              <Input className="p-6 shadow-none mt-2" />
            </div>
          </div>
          <br />
          <br />
          <div className="grid md:grid-cols-2 gap-3 md:gap-8">
            <div className="">
              <Label className="text-gray-700 text-base ">
                Educational State
              </Label>
              <Select>
                <SelectTrigger className="w-full p-6 shadow-none mt-2">
                  <SelectValue placeholder="School Student" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">School Student</SelectItem>
                  <SelectItem value="dark">Acadimic Student</SelectItem>
                  <SelectItem value="system">Job Seeker</SelectItem>
                  <SelectItem value="dsdf">Employeee</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="">
              <Label className="text-gray-700 text-base ">Country</Label>
              <Input className="p-6 shadow-none mt-2" />
            </div>
          </div>
          <br />
          <br />
          <div className="grid md:grid-cols-2 gap-3 md:gap-8">
            <div className="">
              <Label className="text-gray-700 text-base ">Phone NO</Label>
              <Input className="p-6 shadow-none mt-2 block" />
            </div>
            <div className="">
              <Label className="text-gray-700 text-base ">Email ID</Label>
              <Input className="p-6 shadow-none mt-2" />
            </div>
          </div>
          <br />
          <div className="">
            <Label className="text-gray-700 text-base capitalize ">
              Cv or other document in Pdf{" "}
            </Label>
            <Input className="h-12 pt-3 shadow-none mt-2" type="file" />
          </div>
          <br />

          <Button className="p-6 w-full donateBtn font-bold  mx-auto mt-3 shadow-none">
            Submit Request
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RequestBeVolunteer;
