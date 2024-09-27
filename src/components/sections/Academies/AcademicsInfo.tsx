import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

function AcademicsInfo() {
  return (
    <div className="">
      <div className="w-full md:h-[70vh] min-h-[400px] h-[50vh] z-20 relative bg-[url('https://dyvdnmp0itmzz.cloudfront.net/wp-content/uploads/2021/09/08095516/Event-in-Clore-Learning-Space-by-Graham-Lacdao-1500x998.jpg')] bg-cover bg-no-repeat bg-center ">
        <div className="w-full h-full bg-black/50 absolute top-0 right-0"></div>
        <div className="container relative flex justify-end md:pb-36 pb-16 items-center z-10 h-full flex-col text-xl text-white">
          <h1
            className={`md:text-5xl text-3xl  font-bold mb-5 text-center ${montserrat.className}`}
          >
            Become an Climate Change Ambassador
          </h1>
          <p className="max-w-[900px] text-center lg:text-xl text-sm ">
            Make your conference more sustainable by reducing and compensating
            your emissions, & inviting one of our young climate-speakers.
          </p>
        </div>
      </div>
      <div className="bg-green-50/20 py-20">
        <div className="container grid lg:grid-cols-2 gap-10">
          <div className="">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://media.istockphoto.com/id/1180948772/photo/photo-of-cheerful-attractive-handsome-bearded-man-smiling-toothily-showing-you-double-ok-sign.jpg?s=612x612&w=0&k=20&c=6O_STRds8iKOjBSKRQM0UhI4HFpsZPhqJTxtT-uuknY="
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[380px]  rounded-2xl object-cover h-64  "
              />
            </div>
          </div>
          <div className=" lg:mt-10 mt-4">
            <h1
              className={`lg:text-4xl text-3xl text-main lg:mb-10 mb-5 font-bold ${montserrat.className}`}
            >
              Academies
            </h1>
            <p className=" text-gray-700 ">
              During a one-day workshop, you will learn about the climate crisis
              from your peers and train how to give presentations.  You will
              plant trees with your own hands and can do something for our
              future. The highlight of every Academy is the moment when you can
              present to your parents and friends what you have learned on the
              day. Your chance to take the stage and give your first
              presentation.  At the end of the one-day workshop, you will
              receive a certificate and an Ambassador-kit: your own library for
              climate savers. You are now officially a Climate Justice
              Ambassador.
            </p>
            <Link
              href="#"
              className="uppercase font-bold  text-sm text-main mt-5 flex md:justify-start justify-center items-center"
            >
              What is an Academy <RiArrowDropRightLine size={35} />
            </Link>
            <Link
              href="#"
              className="uppercase font-bold text-sm mb-8 text-main flex md:justify-start justify-center items-center"
            >
              Information for participants and parents{" "}
              <RiArrowDropRightLine size={35} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademicsInfo;
