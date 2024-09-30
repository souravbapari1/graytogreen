import React from "react";
import WorkSpace from "../components/workspace";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function page() {
  return (
    <WorkSpace>
      <div className="flex justify-center flex-col items-center w-full max-w-[800px] h-full mx-auto">
        <div className="mx-auto ">
          <Avatar className="w-36 h-36">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className="grid lg:grid-cols-2 mt-16 md:gap-8 gap-4 w-full">
          <div className="w-full">
            <Label>First Name</Label>
            <Input className="w-full p-6 mt-2 shadow-none" />
          </div>
          <div className="w-full">
            <Label>Last Name</Label>
            <Input className="w-full p-6 mt-2 shadow-none" />
          </div>

          <div className="w-full">
            <Label>Email ID</Label>
            <Input className="w-full p-6 mt-2 shadow-none" />
          </div>

          <div className="w-full">
            <Label>Mobile No.</Label>
            <Input className="w-full p-6 mt-2 shadow-none" />
          </div>

          <div className="w-full">
            <Label>Country</Label>
            <Input className="w-full p-6 mt-2 shadow-none" />
          </div>

          <div className="w-full">
            <Label>City</Label>
            <Input className="w-full p-6 mt-2 shadow-none" />
          </div>

          <div className="w-full">
            <Label>Gender</Label>
            <Input className="w-full p-6 mt-2 shadow-none" />
          </div>

          <div className="w-full">
            <Label>DOB</Label>
            <Input className="w-full p-6 mt-2 shadow-none" />
          </div>

          <div className="w-full lg:col-span-2">
            <Label>Social Stat:</Label>
            <Input className="w-full p-6 mt-2 shadow-none" />
          </div>

          <div className="w-full lg:col-span-2">
            <Label>Brief</Label>
            <Input className="w-full p-6 mt-2 shadow-none" />
          </div>

          <div className="w-full lg:col-span-2 grid lg:grid-cols-4 grid-cols-2 md:gap-5 gap-4">
            <div className="">
              <Label>Linkedin</Label>
              <Input className="w-full p-6 mt-2 shadow-none" />
            </div>
            <div className="">
              <Label>Twitter</Label>
              <Input className="w-full p-6 mt-2 shadow-none" />
            </div>
            <div className="">
              <Label>Instagram</Label>
              <Input className="w-full p-6 mt-2 shadow-none" />
            </div>
            <div className="">
              <Label>Youtube</Label>
              <Input className="w-full p-6 mt-2 shadow-none" />
            </div>
          </div>

          <div className="w-full">
            <Label>Target Trees</Label>
            <Input className="w-full p-6 mt-2 shadow-none" />
          </div>

          <div className="w-full">
            <Label>Target Plastic To be remove</Label>
            <Input className="w-full p-6 mt-2 shadow-none" />
          </div>
        </div>
        <Button className="mt-10 w-full p-6 shadow-none mb-20">
          Save Profile
        </Button>
      </div>
    </WorkSpace>
  );
}

export default page;
