import { montserrat } from "@/fonts/font";
import Link from "next/link";
import React from "react";

function MembershipView() {
  return (
    <div className="relative w-full  bg-fixed bg-[url('https://www.vaniperen.com/wp-content/uploads/2021/12/Plants-for-Plants-header-young-plant-fruit-growing-1440x710.jpg')] bg-no-repeat bg-cover bg-center mt-32">
      <div className="w-full h-full bg-black/60  text-white py-16">
        <div
          className={`container ${montserrat.className} flex flex-col justify-center h-full gap-6`}
        >
          <h1 className="text-5xl font-bold uppercase">Membership</h1>
          <p className="max-w-[600px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
            fugiat tenetur animi doloremque iste odio inventore. Quidem dicta,
            pariatur obcaecati maxime cum placeat exercitationem temporibus
            tempore, fuga eos iste facilis?
          </p>
          <Link
            href="/membership"
            className="donateBtn w-64 shadow-none h-12 flex justify-center items-center text-center"
          >
            Become A Member
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MembershipView;
