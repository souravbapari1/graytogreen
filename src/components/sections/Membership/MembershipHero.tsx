import { montserrat } from "@/fonts/font";
import Link from "next/link";
import React from "react";

function MembershipHero() {
  return (
    <div className="w-full md:h-[70vh] min-h-[400px] h-[50vh] z-20 relative bg-[url('https://onesteptowardspeace.com/wp-content/uploads/2015/12/4.jpg')] bg-cover bg-no-repeat bg-center ">
      <div className="w-full h-full bg-black/50 absolute top-0 right-0"></div>
      <div className="container relative flex justify-end md:pb-36 pb-16 items-center z-10 h-full flex-col text-xl text-white">
        <h1
          className={`md:text-5xl text-2xl  font-bold mb-5 text-center ${montserrat.className}`}
        >
          Become a member of our donor-circle and be part of a worldwide
          movement
        </h1>
      </div>
    </div>
  );
}

export default MembershipHero;
