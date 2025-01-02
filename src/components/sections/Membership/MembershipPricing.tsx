import SparklesText from "@/components/ui/sparkles-text";
import { montserrat } from "@/fonts/font";
import Icon from "@/icons/Icon";
import { MembershipItem } from "@/interface/membership";
import { genPbFiles } from "@/request/actions";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function MembershipPricing({ data }: { data: MembershipItem[] }) {
  return (
    <div className="flex justify-center py-20 items-center w-full bg-gray-50">
      <div className="max-w-[1200px] w-full px-4">
        <h2
          className={`${montserrat.className} text-center text-3xl font-bold mb-20`}
        >
          Green Movement Plans
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((e, i) => {
            return (
              <Link
                href={e.stocks == 0 ? "#" : "/membership/apply/" + e.id}
                key={i + e.id}
                style={{ opacity: e.stocks == 0 ? 0.5 : 1 }}
                className="block bg-white shadow-lg shadow-slate-200 rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-100 hover:shadow-xl"
              >
                <div
                  style={{
                    backgroundImage: `url(${genPbFiles(e, e.image)})`,
                  }}
                  className="w-full h-48 relative donateBtn shadow-none rounded-none flex justify-center items-center border-b-4 border-gray-200"
                >
                  {/* <div className="w-full h-full bg-black/75 absolute top-0 right-0 "></div>
                  <Image
                    src={genPbFiles(e, e.image)}
                    alt={`${e.name} Image`}
                    width={1200}
                    height={1200}
                    className="h-20 w-auto relative"
                  /> */}
                  {e.popular && (
                    <div className="absolute donateBtn rounded-none rounded-br-3xl  shadow-none top-0 left-0  px-6 py-2">
                      <SparklesText
                        text="Feature"
                        className="text-sm font-semibold text-white"
                      />
                    </div>
                  )}
                  {e.stocks < 10 && (
                    <div className="w-auto text-xs text-white  rounded-full absolute top-3 right-3 shadow-sm opacity-75 px-3 py-1 bg-red-500">
                      {e.stocks == 0 ? "Out Of Stock" : `Only ${e.stocks} left`}
                    </div>
                  )}
                </div>

                <div
                  className={`${montserrat.className} text-center p-6 flex flex-col justify-between h-full`}
                >
                  <div className="">
                    <div>
                      <h1 className="font-bold text-xl mb-4 text-gray-800">
                        {e.name}
                      </h1>
                      <p className="line-through text-gray-400">
                        {e.compare_amount.toFixed(2)} OMR
                      </p>
                      <p className="text-lg font-semibold text-gray-600 mb-5">
                        {e.amount.toFixed(2)} OMR
                      </p>
                      {/* <p className="text-sm font-medium text-gray-500 capitalize">
                        Life Time
                      </p> */}
                    </div>
                    <div className="mt-3 text-left">
                      {e.info?.map((info, i) => (
                        <div
                          className="flex items-start text-sm text-gray-600 mb-2"
                          key={i}
                        >
                          <div className="w-5 flex-shrink-0 text-main mt-1">
                            <Icon name={info.icon} size={14} />
                          </div>
                          <p className="ml-2 text-xs">{info.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="h-10"></div>
                  <button className="mt-0 donateBtn absolute bottom-0 left-0  w-full bg-main text-white text-sm font-semibold py-3 px-4 rounded-lg rounded-t-none hover:bg-main-dark transition-all duration-300">
                    Act Now
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MembershipPricing;
