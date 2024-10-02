import React from "react";
import WorkSpace from "../components/workspace";
import { TbCopyCheckFilled, TbScreenShare } from "react-icons/tb";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LuCopyCheck } from "react-icons/lu";

function page() {
  return (
    <WorkSpace>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="">
          <h1 className="text-3xl font-bold">Impact</h1>
          <div className="grid md:grid-cols-2 gap-6 mt-5">
            <div className="w-full h-36 border rounded-2xl bg-primary/5 flex flex-col text-center justify-center items-center border-white shadow p-5">
              <p className=" font-medium text-gray-600 mb-3">Impacters from</p>
              <h4 className="text-2xl font-bold text-primary">23 locations</h4>
            </div>
            <div className="w-full h-36 border rounded-2xl bg-primary/5  text-center flex flex-col justify-center items-center border-white shadow p-5">
              <p className=" font-medium text-gray-600 mb-1">
                Impact (ongoing micro-action)
              </p>
              <h4 className="text-xl font-bold text-primary">
                498.6 Kgs CO2e
                <small className="text-xs"> (saved/year)</small>
              </h4>
            </div>
            <div className="w-full h-36 border rounded-2xl text-center bg-primary/5 flex flex-col justify-center items-center border-white shadow p-5">
              <p className="text-lg font-medium text-gray-600 mb-3">
                Sustainabilty Warriors
              </p>
              <h4 className="text-2xl font-bold text-primary">60</h4>
            </div>
            <div className="w-full h-36 border rounded-2xl bg-primary/5 text-center flex flex-col justify-center items-center border-white shadow p-5">
              <p className="text-lg font-medium text-gray-600 mb-3">
                Total impact of ReThink
              </p>
              <h4 className="text-xl font-bold text-primary">
                498.6 Kgs CO2e
                <small className="text-xs"> (saved/year)</small>
              </h4>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold text-2xl text-center">Take Micro-action</h1>
          <div className="md:p-7 md:mt-0 mt-8">
            <div className="bg-yellow-400/30 rounded-2xl  p-8">
              <div className="flex gap-5">
                <div className="w-40">
                  <TbScreenShare size={40} className="text-orange-700" />
                </div>
                <p className="text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorum corrupti quasi culpa magnam est nemo minus assumenda
                  incidunt hic doloremque laboriosam ullam quos expedita earum
                  fugiat optio, natus nihil aut.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Input className="shadow-none bg-white border-none p-6 mt-9" />
                <Button className="shadow-none mt-3 mx-auto p-5 gap-3">
                  <TbCopyCheckFilled />
                  Copy Link
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="max-w-[800px] mx-auto">
          <div className="md:p-20 md:mt-0 mt-8 ">
            <div className="bg-gray-400/30 rounded-2xl flex justify-center items-center flex-col  p-10 h-96">
              <div className="flex gap-5">
                <div className="w-40">
                  <TbScreenShare size={40} className="text-orange-700" />
                </div>
                <p className="text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorum corrupti quasi culpa magnam est nemo minus assumenda
                  incidunt hic doloremque laboriosam ullam quos expedita earum
                  fugiat optio, natus nihil aut.
                </p>
              </div>
              <div className="flex flex-col w-full justify-center items-center">
                <Input className="shadow-none bg-white border-none w-full p-6 mt-9" />
                <Button className="shadow-none mt-3 mx-auto p-5 gap-3">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mb-20 mt-10 bg-red-50 md:p-20 p-5 rounded-3xl">
        <h1 className="md:text-4xl text-2xl font-bold">About US</h1>
        <br />
        <p className="md:text-base text-sm">
          In our journey of sustainable living, we met two types of people...
          those who wanted to be sustainable but didn’t know how to start, and
          those who were hesitant, and worried about the time, energy, and cost
          involved.
        </p>
        <br />
        <p className="md:text-base text-sm">
          ReThink was designed with both of these groups in mind. It’s a program
          that focuses on micro-actions to create a positive impact on the
          environment. These micro-actions are small, manageable tasks that take
          just 15 minutes each month, but when combined, they build a powerful
          force for good and demonstrate that you don’t need to overhaul your
          entire routine to make a difference.
        </p>
        <br />
        <p className="md:text-base text-sm">
          By joining ReThink, you become part of what could be the largest
          movement of our time. Together, we can reshape our world and leave a
          legacy that future generations will remember and celebrate, one
          micro-action at a time.
        </p>
      </div>
    </WorkSpace>
  );
}

export default page;
