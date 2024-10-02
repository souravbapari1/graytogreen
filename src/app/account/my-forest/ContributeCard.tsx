import Link from "next/link";
import React from "react";
import { PiPlantFill } from "react-icons/pi";

function ContributeCard() {
  return (
    <div className="w-full bg-primary/5 h-auto mt-2 mb-5 rounded-xl flex justify-start flex-col items-start relative p-2">
      <div className="md:flex justify-start w-full items-start relative">
        <div className="md:w-auto w-full">
          <div className="md:w-40 w-full h-40 rounded-xl bg-white  bg-[url('https://t4.ftcdn.net/jpg/05/66/56/23/360_F_566562314_228mCQjZVn6rNWmKDW6OoWHBIoe1aZd0.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="p-4 w-full flex-col h-full justify-between">
          <div className="flex flex-col  h-full w-full">
            <p className="flex justify-start items-center gap-2 text-xs text-primary font-semibold">
              <PiPlantFill size={16} />
              LARGE SCALE RESTORATION
            </p>
            <h1 className="text-lg mt-2 font-semibold">
              Plant-for-the-Planet Ghana
            </h1>
            <p className="text-xs mt-1">
              Ghana • By Plant-for-the-Planet Ghana
            </p>
          </div>
          <div className="flex justify-between pt-8 items-center ">
            <h1 className="font-bold  text-lg">9 trees</h1>
            <Link
              className="donateBtn text-sm py-2 rounded-xl text-white shadow-none"
              href="#"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full grid md:grid-cols-3 gap-3">
        <div className="w-full h-8 rounded-lg bg-white flex justify-between items-center px-4">
          <p className="flex justify-start items-center gap-2 text-xs text-green-900 font-semibold">
            <PiPlantFill size={16} />1 Tree
          </p>
          <p className="text-[9px]">Nov 4, 2022</p>
        </div>
        <div className="w-full h-8 rounded-lg bg-white flex justify-between items-center px-4">
          <p className="flex justify-start items-center gap-2 text-xs text-green-900 font-semibold">
            <PiPlantFill size={16} />1 Tree
          </p>
          <p className="text-[9px]">Nov 7, 2022</p>
        </div>
        <div className="w-full h-8 rounded-lg bg-primary/10 text-xs font-bold text-primary flex justify-center items-center">
          +3 contributions
        </div>
      </div>
    </div>
  );
}

export default ContributeCard;
