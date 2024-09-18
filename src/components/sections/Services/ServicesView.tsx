import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ServicesView() {
  return (
    <div
      className={`${montserrat.className} container grid xl:grid-cols-3  my-20 gap-10`}
    >
      <div className="w-full  bg-main/10 rounded-3xl p-8">
        <h1 className="text-3xl font-bold mb-3">
          Transform your ideas into <span className="text-main">Action</span>!
        </h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          maiores rem dolorem a expedita itaque impedit esse, voluptates
          commodi. Dignissimos exercitationem minima sapiente blanditiis
          consectetur error dolorum animi atque dicta.
        </p>
        <h1 className="text-xl font-bold mb-3 mt-4">
          <span className="text-main">Industries</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-4">
          {Array.from({ length: 18 }).map((_, i) => {
            return (
              <div className=" h-20 relative rounded-2xl w-full overflow-hidden">
                <Image
                  src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/04/20105541/remote-work-environment-earth-day-1024x512.png"
                  width={1200}
                  height={1200}
                  alt=""
                  className="w-full h-full object-cover absolute top-0 right-0 bg-gray-600/30 "
                />
                <div className="w-full h-full bg-black/50 relative flex justify-center items-center text-center">
                  <p className="text-2xl font-bold text-white">Title</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col gap-8 ">
        <div className="w-full  bg-main/10 rounded-3xl p-10 flex flex-col gap-3">
          <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center">
            🤝
          </div>
          <p className="text-2xl font-bold ">Partner With Us</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam
            expedita vero aspernatur, placeat alias ipsam saepe dolore excepturi
            consequuntur nisi facere consequatur earum libero perferendis! Ipsa
            reprehenderit inventore numquam!
          </p>
          <Link
            className="donateBtn py-3 text-center w-32 shadow-none mt-2"
            href="/partners"
          >
            View
          </Link>
        </div>
        <div className="w-full  bg-main/10 rounded-3xl p-10 flex flex-col gap-3">
          <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center">
            🎤
          </div>
          <p className="text-2xl font-bold ">Sustainable Event</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam
            expedita vero aspernatur, placeat alias ipsam saepe dolore excepturi
            consequuntur nisi facere consequatur earum libero perferendis! Ipsa
            reprehenderit inventore numquam!
          </p>
          <Link
            className="donateBtn py-3 text-center w-32 shadow-none mt-2"
            href="/sustainable-events"
          >
            View
          </Link>
        </div>
        <div className="w-full  bg-main/10 rounded-3xl p-10 flex flex-col gap-3">
          <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center">
            🧩
          </div>
          <p className="text-2xl font-bold ">MemberShip</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam
            expedita vero aspernatur, placeat alias ipsam saepe dolore excepturi
            consequuntur nisi facere consequatur earum libero perferendis! Ipsa
            reprehenderit inventore numquam!
          </p>
          <Link
            className="donateBtn py-3 text-center w-32 shadow-none mt-2"
            href="/membership"
          >
            View
          </Link>
        </div>
      </div>
      <div className="w-full h-[600px] flex flex-col gap-8 ">
        <div className="w-full  bg-main/10 rounded-3xl p-10 flex flex-col gap-3">
          <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center">
            💡
          </div>
          <p className="text-2xl font-bold ">Consultation</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam
            expedita vero aspernatur, placeat alias ipsam saepe dolore excepturi
            consequuntur nisi facere consequatur earum libero perferendis! Ipsa
            reprehenderit inventore numquam!
          </p>
          <Link
            className="donateBtn py-3 text-center w-32 shadow-none mt-2"
            href="/consultation"
          >
            View
          </Link>
        </div>
        <div className="w-full  bg-main/10 rounded-3xl p-10 flex flex-col gap-3">
          <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center">
            💙
          </div>
          <p className="text-2xl font-bold ">Training Programes</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam
            expedita vero aspernatur, placeat alias ipsam saepe dolore excepturi
            consequuntur nisi facere consequatur earum libero perferendis! Ipsa
            reprehenderit inventore numquam!
          </p>
          <Link
            className="donateBtn py-3 text-center w-32 shadow-none mt-2"
            href="/academies"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServicesView;
