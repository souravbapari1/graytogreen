import Image from "next/image";
import React from "react";
import { TbEditCircle } from "react-icons/tb";
import { AiOutlineShareAlt } from "react-icons/ai";
import GGMapBox from "@/components/GMapBox/GGMapBox";
import UserMap from "../components/UserMap/UserMap";
import { MdOutlineFlag } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
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
    </div>
  );
}

export default MyForest;
