import { Button } from "@/components/ui/button";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

function FoundationSecretariatBanner() {
  return (
    <div className="">
      <div className="w-full relative mt-20 lg:h-[650px] h-auto">
        <Image
          src="/assets/wave.svg"
          className="w-full absolute bottom-0 right-0 z-10 block  object-fill float-end "
          width={3000}
          height={3000}
          alt=""
        />

        <Image
          src="/assets/tree_bg.png"
          className="w-[60%] lg:block hidden h-[650px] object-cover float-end img-hor"
          width={3000}
          height={3000}
          alt=""
        />
        <div
          className={`${montserrat.className} w-full lg:h-[650px]  grid lg:grid-cols-5 lg:absolute relative top-0 right-0`}
        >
          <div className="lg:col-span-3 bg-gradient-to-r lg:pb-36 flex justify-center items-start flex-col text-left  from-green-600 to-green-900 relative lg:arrow_path container py-20 ">
            <h1 className="lg:text-3xl text-xl font-bold text-white uppercase">
              Mission and vission
            </h1>
            <p className="lg:pr-20 lg:text-xl  mt-10 text-white/75 ">
              As the secretariat of the Foundation, we support young people in
              achieving their ambitious goals. Our main activities are:
              partnerships and donor support, events, academies, our app, the
              sale of the Change Chocolate, communication and administration.
              Our passion comes from our people. We embrace diversity and
              believe that different backgrounds, ideas and perspectives make us
              a stronger and more capable team. We put our heart and soul into
              Plant-for-the-Planet. We are passionate activists for climate
              justice.
            </p>
            <br />
            <Button className="shadow-none bg-white text-primary px-6 py-5 font-bold">
              View More
            </Button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="grid lg:grid-cols-2  lg:gap-16 gap-8 container mt-10">
          <div className=" lg:order-first order-last">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-48 md:h-[350px] bg-green-700/20 absolute -z-[1] lg:-mr-12 -mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://www.plant-for-the-planet.org/wp-content/uploads/2024/07/Plant-for-the-Planet-Global-Board-2024-25.png"
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[350px]  rounded-2xl object-cover h-48  "
              />
            </div>
          </div>
          <div className="">
            <h1
              className={
                montserrat.className +
                " lg:text-4xl lg:mt-10 text-3xl font-bold"
              }
            >
              <span className="text-main">ESG objects</span>
            </h1>
            <p className={montserrat.className + "  mt-10 "}>
              thrives on the most outstanding children and young people. To
              spread the word, we have a Global Board with young leaders around
              the world. They are committed to climate justice and tree planting
              on a voluntary basis. The Global Board is elected every year.
            </p>
            <Link
              href="#"
              className="uppercase font-bold mb-8 text-main mt-11 flex md:justify-start justify-center items-center"
            >
              Learn More About Our Vision <RiArrowDropRightLine size={35} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FoundationSecretariatBanner;
