import Image from "next/image";
import React from "react";
import { TbEditCircle } from "react-icons/tb";
import { AiOutlineShareAlt } from "react-icons/ai";
import GGMapBox from "@/components/GMapBox/GGMapBox";
import UserMap from "../components/UserMap/UserMap";
import { MdOutlineCo2, MdOutlineFlag } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { PiPlant, PiPlantFill } from "react-icons/pi";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ContributeCard from "./ContributeCard";
function MyForest() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="bg-green-50 rounded-2xl border-2 relative shadow-sm border-white h-96 overflow-hidden">
          <Image
            src="/assets/auth-bg.jpg"
            width={1000}
            height={800}
            alt=""
            className="h-52 object-cover "
          />
          <div className="">
            <Image
              src="/icons/unknown.webp"
              width={1000}
              height={800}
              alt=""
              className="h-20 w-20 bg-white p-2 rounded-full object-contain absolute m-auto left-0 right-0 -mt-10 shadow border-[3px] border-white"
            />
          </div>
          <h1 className="text-center mt-14 font-bold text-2xl text-gray-800">
            Adarsh Arya
          </h1>
          <div className="flex justify-center items-center gap-6 mt-5">
            <div className="flex justify-center items-center gap-2 bg-white border-2 border-primary/20 text-primary p-2 w-32 font-semibold rounded-3xl ">
              <TbEditCircle />
              <p className="text-xs">Edit Profile</p>
            </div>
            <div className="flex justify-center items-center gap-2 bg-white text-primary border-2 border-primary/20 p-2 w-32 font-semibold rounded-3xl ">
              <AiOutlineShareAlt />
              <p className="text-xs">Share</p>
            </div>
          </div>
        </div>
        <div className="h-96 rounded-2xl overflow-hidden shadow-sm object-cover w-full bg-white">
          <div className="h-80 relative">
            <UserMap />
          </div>
          <div className="h-16 text-start text-green-950 text-sm flex justify-center items-center gap-8 w-full bg-primary/5">
            <div className="flex justify-center items-center gap-3">
              <div className="w-5 h-5 flex justify-center items-center text-white rounded-3xl bg-primary">
                <MdOutlineFlag />
              </div>
              <p>0 Countries</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="w-5 h-5 flex justify-center items-center text-white rounded-3xl bg-primary">
                <FaUsers />
              </div>

              <p>0 Projects</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  bg-white shadow-md p-3 rounded-3xl mt-10">
        <div className="w-full h-full py-4 -10 bg-primary/5 rounded-3xl flex gap-5 justify-start items-center px-5">
          <div className="w-10 h-10 ">
            <div className="bg-primary w-10 h-10 text-xl flex justify-center items-center text-white rounded-xl">
              <PiPlant />
            </div>
          </div>
          <div className="flex w-full justify-center text-xs font-semibold items-start gap-1 flex-col">
            <h1>865.8 of 1,000 trees planted</h1>
            <div className="flex justify-between w-full gap-6 items-center">
              <div className="w-full relative">
                <Progress className="w-[100%]" value={60} />
              </div>
              <p>60.0%</p>
            </div>
            <p className="text-[10px] font-normal">765.8 from your community</p>
          </div>
        </div>
        <br />
        <div className="w-full h-full py-4 -10 bg-gray-400/5 rounded-3xl flex gap-5 justify-start items-center px-5">
          <div className="w-10 h-10 ">
            <div className="bg-gray-700 w-10 h-10 text-xl flex justify-center items-center text-white rounded-xl">
              <MdOutlineCo2 />
            </div>
          </div>
          <div className="flex w-full justify-center text-xs font-semibold items-start gap-1 flex-col">
            <h1>265.8 of 1,000 tons of Plastic</h1>
            <div className="flex justify-between w-full gap-6 items-center">
              <div className="w-full relative">
                <Progress
                  className="w-[100%] bg-gray-200"
                  color="gray"
                  value={30}
                />
              </div>
              <p>30.0%</p>
            </div>
            <p className="text-[10px] font-normal">765.8 from your community</p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 mt-10 pb-20">
        <div className="w-full h-[700px] bg-white overflow-hidden relative shadow-lg p-2 rounded-3xl ">
          <div className="w-full h-[130px] bg-primary/10 overflow-hidden rounded-t-3xl flex justify-between items-center">
            <h1 className="text-xl font-bold md:pl-10 pl-5 text-primary">
              Your`s Contributions
            </h1>
            <Image
              src="/icons/plant.svg"
              width={200}
              height={200}
              alt=""
              className="object-contain bottom-0 h-28 mt-5"
            />
          </div>
          <div className="w-full h-[552px] overflow-auto p-2  rounded-b-3xl  bg-white">
            <ContributeCard />
            <ContributeCard />
            <ContributeCard />
            <ContributeCard />
          </div>
        </div>
        <div className="w-full h-[700px] bg-white overflow-hidden relative shadow-lg p-2 rounded-3xl ">
          <div className="w-full h-[130px] bg-orange-100 overflow-hidden rounded-t-3xl flex justify-between items-center">
            <div className="">
              <h1 className="text-xl font-bold md:pl-10 pl-5 text-primary">
                Community Contributions
              </h1>
              <Tabs defaultValue="account" className=" md:pl-10 pl-5 mt-4">
                <TabsList className="bg-white rounded-sm">
                  <TabsTrigger
                    className="rounded-sm shadow-none"
                    value="account"
                  >
                    Most recent
                  </TabsTrigger>
                  <TabsTrigger
                    className="rounded-sm shadow-none"
                    value="password"
                  >
                    Most trees
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <Image
              src="/icons/rank.svg"
              width={200}
              height={200}
              alt=""
              className="object-contain bottom-0 h-28 mt-5"
            />
          </div>
          <div className="w-full h-[552px] overflow-auto   rounded-b-3xl text-sm font-semibold p-5  bg-white">
            {Array.from({ length: 100 }).map((_, i) => {
              return (
                <div className="flex justify-between items-center py-4 border-b">
                  <p>Tripplanner TP e.U.</p>
                  <p> {7 + i} trees</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyForest;
