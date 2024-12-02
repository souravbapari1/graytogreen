import React from "react";
import WorkSpace from "../components/workspace";
import { getUser, getUserMemberShips } from "@/request/worker/auth";
import { auth } from "@/auth";
import Image from "next/image";
import { genPbFiles } from "@/request/actions";
import { montserrat } from "@/fonts/font";
import Link from "next/link";
import SparklesText from "@/components/ui/sparkles-text";

export const revalidate = 60;
async function page() {
  const user = await auth();
  const userData = await getUserMemberShips(user?.user.id!);
  return (
    <WorkSpace>
      <div className="container">
        <h1 className="md:text-3xl text-xl md:text-left text-center font-bold mb-6 ">
          Memberships
        </h1>
        <div className="grid lg:grid-cols-3 gap-10">
          {!userData.expand?.mamberships?.length && (
            <div className="w-full lg:col-span-3 h-36 border rounded-2xl bg-primary/5 flex flex-col text-center justify-center items-center border-white shadow p-5">
              <p className=" font-medium text-gray-600 mb-3">
                You have no memberships yet
              </p>
            </div>
          )}
          {userData.expand?.mamberships?.map((e, i) => {
            return (
              <div
                key={i + e.id}
                className="w-full   bg-main/10 rounded-3xl overflow-hidden "
              >
                <div className="w-full h-48 bg-main/20 border-b-[8px] border-white flex justify-center items-center">
                  <Image
                    src={genPbFiles(e, e.image)}
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
                    <SparklesText
                      text={e.name}
                      className="text-5xl font-bold mb-3"
                    />
                    <p className="font-semibold">{e.amount.toFixed(2)} OMR</p>
                    <p className="capitalize">Life Time</p>
                    <br />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </WorkSpace>
  );
}

export default page;
