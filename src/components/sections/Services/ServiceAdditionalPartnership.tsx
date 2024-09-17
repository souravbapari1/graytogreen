import { montserrat } from "@/fonts/font";
import Image from "next/image";
import React from "react";

function ServiceAdditionalPartnership() {
  return (
    <div
      className={`${montserrat.className} donateBtn font-medium rounded-none shadow-none text-base w-full py-10 mt-10 flex justify-center flex-col items-center`}
    >
      <h1 className="md:text-4xl text-2xl font-bold mb-20 mt-10 text-white container text-center ">
        Additional advantages in your partnership
      </h1>
      <div className="container grid lg:grid-cols-3 h-full xl:gap-16 gap-5 text-white">
        <div className="w-full h-full bg-green-900/30 rounded-3xl xl:p-8 p-5 ">
          <Image
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2020/11/20190920_ac_in_naguathagu50.jpg"
            width={1000}
            height={1000}
            alt=""
            className="w-full h-60 rounded-3xl object-cover "
          />
          <br />
          <h1 className="md:text-4xl text-2xl font-bold">Brand</h1>
          <br />
          <p className="text-sm opacity-85 line-clamp-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est beatae
            nemo eaque natus fugit architecto laudantium adipisci, debitis iste
            nostrum quisquam, ex aspernatur esse rerum aliquam sed repellat
            minima? Cum?
          </p>
        </div>

        <div className="w-full h-full bg-green-900/30 rounded-3xl xl:p-8 p-5 ">
          <Image
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2020/11/20190920_ac_in_naguathagu50.jpg"
            width={1000}
            height={1000}
            alt=""
            className="w-full h-60 rounded-3xl object-cover "
          />
          <br />
          <h1 className="md:text-4xl text-2xl font-bold">Support</h1>
          <br />
          <p className=" text-sm opacity-85 line-clamp-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est beatae
            nemo eaque natus fugit architecto laudantium adipisci, debitis iste
            nostrum quisquam, ex aspernatur esse rerum aliquam sed repellat
            minima? Cum?
          </p>
        </div>
        <div className="w-full h-full bg-green-900/30 rounded-3xl xl:p-8 p-5 ">
          <Image
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2020/11/20190920_ac_in_naguathagu50.jpg"
            width={1000}
            height={1000}
            alt=""
            className="w-full h-60 rounded-3xl object-cover "
          />
          <br />
          <h1 className="md:text-4xl text-2xl font-bold">Comunication</h1>
          <br />
          <p className=" text-sm opacity-85 line-clamp-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est beatae
            nemo eaque natus fugit architecto laudantium adipisci, debitis iste
            nostrum quisquam, ex aspernatur esse rerum aliquam sed repellat
            minima? Cum?
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceAdditionalPartnership;
