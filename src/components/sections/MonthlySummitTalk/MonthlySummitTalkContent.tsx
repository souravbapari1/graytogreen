import ExperienceSlider from "@/app/academies/sustainable-youth-academy/ExperienceSlider";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuCalendarDays } from "react-icons/lu";
import { PiPlantFill } from "react-icons/pi";

function MonthlySummitTalkContent() {
  return (
    <div className={`container ${montserrat.className} pt-20`}>
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex items-center justify-center md:mt-0 mt-10 md:mb-0 mb-8">
          <div className="relative md:p-10  flex  items-center justify-center">
            <div className="w-[90%] h-60 md:h-[360px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
            <Image
              src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/01/Youth-Summit-2021.png"
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[360px]  rounded-2xl object-cover h-60  "
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <h3 className="font-semibold text-main">Youth Summit Talks</h3>
          <h1 className="text-3xl font-bold">Empowering a Global Movement</h1>
          <p>
            We believe in empowering the next generation, fostering community
            building, and making knowledge accessible to all, regardless of
            geographic location. Our Youth Summit Talks serve as a virtual
            platform for climate justice education, collaboration, and
            collective action, connecting young people from around the globe.
          </p>
          <Link
            href="/"
            className="bg-main text-white font-bold p-3 px-6 text-center max-w-[180px] rounded-full"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className=" mt-20 mb-10">
        <div className="flex text-main items-center gap-3 mb-4">
          <PiPlantFill />
          <p className={`${montserrat.className} text-sm font-semibold`}>
            Learn Something New
          </p>
        </div>
        <h1
          className={`lg:text-3xl max-w-[600px] text-xl text-gray-900 lg:mb-10 mb-5 font-bold ${montserrat.className}`}
        >
          What will Experience
        </h1>
        <ExperienceSlider />
        {/* <div className="flex justify-center items-center">
          <div className="w-full max-w-[700px] mt-20">
            <div className="flex flex-col ">
              <Image
                src="/assets/student.png"
                width={1200}
                height={1200}
                alt=""
                className="w-16 h-16 mb-2   object-contain  "
              />
              <h1 className="font-bold text-lg mb-2">Engaging Sessions</h1>
              <p>
                Each session features expert speakers, interactive discussions,
                and opportunities to connect with like-minded individuals from
                around the globe.
              </p>
            </div>
            <div className="flex flex-col items-end mt-10">
              <Image
                src="/assets/post-it.png"
                width={1200}
                height={1200}
                alt=""
                className="w-14 h-14 mb-2  object-contain  "
              />
              <h1 className="font-bold text-lg mb-2">Key Climate Topics</h1>
              <p className="text-right">
                Learn and explore critical advocacy areas and emerging issues in
                actions on climate justice and Ecosystems Restoration.
              </p>
            </div>
            <div className="flex flex-col  mt-10">
              <Image
                src="/assets/earth.png"
                width={1200}
                height={1200}
                alt=""
                className="w-12 h-12 mb-2  rounded-2xl object-contain  "
              />
              <h1 className="font-bold text-lg mb-2">Global Impact</h1>
              <p className="">
                Prepare and contribute to global momentum towards key climate
                events and initiatives such as UN Conferences, Future Summit and
                beyond.
              </p>
            </div>
            <div className="flex flex-col items-end mt-10">
              <Image
                src="/assets/knowledge.png"
                width={1200}
                height={1200}
                alt=""
                className="w-14 h-14 mb-2  object-contain  "
              />
              <h1 className="font-bold text-lg mb-2">Capacity Building</h1>
              <p className="text-right">
                Expand your knowledge and skills through climate education and
                knowledge-sharing events and gain insights for efficient climate
                advocacy.
              </p>
            </div>
            <div className="flex flex-col  mt-10">
              <Image
                src="/assets/solidarity.png"
                width={1200}
                height={1200}
                alt=""
                className="w-12 h-12 mb-2   object-contain  "
              />
              <h1 className="font-bold text-lg mb-2">Community Building</h1>
              <p className="">
                Connect with a diverse network of young climate activists and
                foster collaborations for greater impact.
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <div className="bg-green-600/5  w-full flex md:p-10 p-5 py-10 mt-10 justify-center items-center flex-col">
        <h1 className="text-2xl font-bold mb-4">Monthly Sessions</h1>
        <p className="text-center md:text-base text-sm">
          With monthly recurring sessions, our goal is to inform, train, and
          empower climate justice ambassadors and everyone interested in
          participating, fostering a global community dedicated to tackling the
          climate crisis together.
        </p>
        <div className="flex justify-center items-center gap-5">
          <Link
            href="https://us06web.zoom.us/meeting/register/tZAvc-mqpzgsHdepCVceOUjuRTLY89tiqJwX#/registration"
            target="_blank"
            className="donateBtn py-3 shadow-none mt-6 capitalize text-center  text-xs"
          >
            Registering in Climate Justice Session{" "}
          </Link>
          <Link
            href="https://us06web.zoom.us/meeting/register/tZAvc-mqpzgsHdepCVceOUjuRTLY89tiqJwX#/registration"
            target="_blank"
            className="donateBtn py-3 shadow-none mt-6 capitalize text-center  text-xs"
          >
            Register Individuals
          </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 mt-20">
        <div className="flex items-center justify-center md:mt-0 mt-10 md:mb-0 mb-8">
          <div className="">
            <div className="relative md:p-10 flex justify-center items-center">
              {/* <div className="w-[90%] h-48 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:-mr-12 -mr-10 rounded-2xl mb-10"></div> */}
              <Image
                src="https://www.christenseninstitute.org/wp-content/uploads/2024/04/AdobeStock_200668071_resized.jpg"
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[380px]   object-cover h-48  "
              />
              <Image
                src="https://img.freepik.com/premium-photo/tree-that-grows-pile-money_104677-1067.jpg?w=360"
                width={1200}
                height={1200}
                alt=""
                className="md:w-52 w-28 absolute  md:h-[140px] right-0 top-0  md:p-2 p-1  bg-white  object-cover h-20  "
              />
              <Image
                src="https://media.istockphoto.com/id/1039079320/photo/tree-sapling-baby-hand-on-the-dark-ground-the-concept-implanted-childrens-consciousness-into.jpg?s=612x612&w=0&k=20&c=t3d4xpcSyoNlYDJ1MC2chYDeT1w_a-2140t40cBFVOY="
                width={1200}
                height={1200}
                alt=""
                className="md:w-52 w-28 absolute  md:h-[140px] left-0 bottom-0 border-2 border-white bg-white md:p-2 p-1   object-cover h-20  "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center ">
          <h1 className="text-3xl font-bold">
            Upcoming Climate Justice Session
          </h1>
          <Link href="/soon" className="font-semibold text-main">
            Ready to join the conversation?
          </Link>
          <p>
            Register now to secure your spot at our next Youth Summit Talk and
            be part of this global community.
          </p>

          <div className="flex md:gap-0 gap-4 bg-main/10 p-5 rounded-md">
            <div className="w-20">
              <LuCalendarDays size={30} />
            </div>
            <p className="text-xs">
              September 14, 2024 - 14:00 CEST <br /> Youth Summit Talks - Sept
              2024 - Climate Justice Sessions: The Kids Aren’t Alright:
              Intergenerational Justice in Climate Action
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonthlySummitTalkContent;
