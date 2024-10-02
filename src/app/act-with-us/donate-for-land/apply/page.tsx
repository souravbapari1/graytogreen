import Navbar from "@/components/sections/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="max-w-[800px] mx-auto  lg:border mt-28 lg:border-t-[5px] border-t-primary md:p-10 p-6 mb-20 rounded-xl">
          <div className="">
            <h1 className="text-3xl font-bold">Donate Land</h1>
            <p className="text-gray-500 mt-3 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, eaque perferendis! Maxime laboriosam hic nesciunt
              quo alias saepe sed incidunt tempora, neque, minus amet
              asperiores. Debitis autem ullam omnis fugiat.
            </p>
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
                  Company Name
                  <span className="text-red-600 text-xl font-bold ">*</span>
                </p>
                <Input className="p-6 shadow-none" />
              </div>
              <div className="">
                <p className="font-medium mb-2 text-gray-600">
                  Position
                  <span className="text-red-600 text-xl font-bold ">*</span>
                </p>
                <Input className="p-6 shadow-none" />
              </div>
            </div>
            <br />
            <Button className="p-6 shadow-none border-none">
              Submit Your Request
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
