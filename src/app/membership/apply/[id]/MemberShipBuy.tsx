"use client";
import React, { useState } from "react";
import Qna from "./Qna";
import { MembershipItem } from "@/interface/membership";
import Image from "next/image";
import { genPbFiles } from "@/request/actions";
import { montserrat } from "@/fonts/font";
import { cn } from "@/lib/utils";
import Icon from "@/icons/Icon";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

function MemberShipBuy({ data, id }: { data: MembershipItem; id: string }) {
  const [qun, setQun] = useState(1);

  const handleQun = (type: "inc" | "dec") => {
    if (type === "inc") {
      if (qun < data.stocks) {
        setQun(qun + 1);
      } else {
        toast.dismiss();
        toast.error("Out of stock");
      }
    } else {
      if (qun > 1) {
        setQun(qun - 1);
      }
    }
  };

  return (
    <div className="container">
      <div className="min-h-[70vh] mt-10">
        <h1 className="text-center font-bold text-2xl underline">
          {data.name}
        </h1>
        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <div className="flex justify-center flex-col  items-center">
            <div className="w-full max-w-80   bg-main/10 rounded-3xl overflow-hidden  ">
              <div className="w-full h-48 bg-main/20 border-b-[8px] border-white flex justify-center items-center">
                <Image
                  src={genPbFiles(data, data.image)}
                  alt=""
                  width={1200}
                  height={1200}
                  className="h-20 w-auto"
                />
              </div>
              <div
                className={`${montserrat.className} text-center  p-3 pt-10 pb-3 flex justify-between flex-col items-center`}
              >
                <div className="">
                  <h1 className="font-bold text-xl mb-6">{data.name}</h1>
                  <p className="line-through text-gray-500">
                    {data.compare_amount.toFixed(2)} OMR
                  </p>
                  <p className="font-semibold">{data.amount} OMR</p>
                  <p className="capitalize mb-5">Lifetime</p>
                  <div className="flex justify-center items-center gap-5">
                    <Button
                      onClick={() => handleQun("inc")}
                      className="h-5 text-lg w-3 rounded-full shadow-none "
                      size="sm"
                    >
                      +
                    </Button>
                    <p>{qun}</p>
                    <Button
                      onClick={() => handleQun("dec")}
                      className="h-5 text-lg w-3 rounded-full shadow-none "
                      size="sm"
                    >
                      -
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={cn(
                "w-full flex text-left justify-start  items-start mb-4 gap-4 flex-col mt-10",
                montserrat.className
              )}
            >
              {data.info?.map((info, i) => {
                return (
                  <div
                    key={i}
                    className="flex justify-start items-start gap-4 text-xs"
                  >
                    <div className="w-5 mt-1 ">
                      <Icon
                        name={info.icon}
                        className="text-primary"
                        size={12}
                      />
                    </div>
                    <p>{info.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <h3 className="text-xl">Answer these basic questions.</h3>
            <Qna data={data} id={id} qun={qun} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberShipBuy;
