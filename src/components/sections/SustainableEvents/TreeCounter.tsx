import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function TreeCounter() {
  return (
    <div className="mb-10 relative w-full grid xl:grid-cols-5 container gap-5">
      <div className=" h-full xl:col-span-2  w-full">
        <div className=" mt-4 flex flex-col justify-center items-start h-full">
          <h1
            className={`lg:text-3xl text-2xl  lg:mb-10 mb-5 font-bold uppercase ${montserrat.className}`}
          >
            <p className="">Tree Counter</p>
          </h1>
          <p className="lg:text-lg text-gray-700 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quidem voluptatem doloribus praesentium a! Inventore laborum quam
            alias, accusantium suscipit possimus odit accusamus quidem officiis
            facilis vitae aliquam reiciendis odio!
          </p>
        </div>
      </div>
      <div
        className={` w-full  lg:col-span-3 grid lg:grid-cols-3 ${montserrat.className}`}
      >
        <div className="lg:col-span-1 h-full   xl:py-3 py-8 w-full flex justify-center items-center flex-col gap-6">
          <div className="relative w-56 h-56   border-[5px] rounded-full border-main overflow-hidden flex justify-center items-center">
            <Image
              src="/assets/trees.svg"
              alt=""
              className="w-56 h-56 absolute object-cover right-0"
              width={300}
              height={300}
            />
            <div className="relative flex justify-center items-center flex-col gap-4">
              <div className=" text-center">
                <p className="text-3xl font-extrabold text-white">450</p>
                <p className="text-xs text-white font-bold">Tree Planted</p>
              </div>
              <div className="w-20 h-[2px] bg-white"></div>
              <div className=" text-center">
                <p className="text-3xl font-extrabold text-white">1000</p>
                <p className="text-xs text-white font-bold">Target</p>
              </div>
            </div>
          </div>
          <Link className="donateBtn py-3 shadow-none" href="#">
            Plant Trees
          </Link>
        </div>
        <div className="lg:col-span-2 w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9825444.23931849!2d50.86090492408859!3d21.419194785564677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd69f66a9d59bbf%3A0x3a064c7665b1a817!2sOman!5e1!3m2!1sen!2sin!4v1726579339542!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full md:h-full h-56 rounded-3xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default TreeCounter;
