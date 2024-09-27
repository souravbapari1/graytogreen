import Navbar from "@/components/sections/Navbar/Navbar";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="max-w-[800px] mx-auto  lg:border mt-28 lg:border-t-[5px] border-t-primary md:p-10 p-6 mb-20 rounded-xl">
          <div className="">
            <h1 className="text-3xl font-bold">Register As Sponsor</h1>
            <p className="text-gray-500 mt-3 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, eaque perferendis! Maxime laboriosam hic nesciunt
              quo alias saepe sed incidunt tempora, neque, minus amet
              asperiores. Debitis autem ullam omnis fugiat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
