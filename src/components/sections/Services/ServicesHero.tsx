import { montserrat } from "@/fonts/font";
import Link from "next/link";
import React from "react";

function ServicesHero() {
  return (
    <div className="w-full md:h-[70vh] min-h-[400px] h-[50vh] z-20 relative bg-[url('https://res.cloudinary.com/liaison-inc/image/upload/c_fit,f_auto,q_auto,w_1200/services/homeguide/backgrounds/tree-planting.jpg')] bg-cover bg-no-repeat bg-center ">
      <div className="w-full h-full bg-black/50 absolute top-0 right-0"></div>
      <div className="container relative flex justify-end md:pb-36 pb-16 items-center z-10 h-full flex-col text-xl text-white">
        <h1
          className={`md:text-5xl text-3xl  font-bold mb-5 text-center ${montserrat.className}`}
        >
          Let's make a difference together
        </h1>
        <p className="max-w-[900px] text-center lg:text-xl text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          quam, corporis provident magni, facilis praesentium, exercitationem
          illo recusandae et hic assumenda eius. Omnis id temporibus ratione sed
          nobis dolorum voluptatem.
        </p>
        <Link
          href="#"
          className={`${montserrat.className} donateBtn py-3 shadow-none mt-10 text-sm`}
        >
          Register as sponsor
        </Link>
      </div>
    </div>
  );
}

export default ServicesHero;
