import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuCalendarDays } from "react-icons/lu";

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
        <h1 className="font-bold text-2xl text-center">
          What you’ll experience:
        </h1>
        <div className="flex justify-center items-center">
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
        </div>
      </div>
      <div className="bg-green-600/5  w-full flex md:p-10 p-5 py-10 mt-10 justify-center items-center flex-col">
        <h1 className="text-2xl font-bold mb-4">Monthly Sessions</h1>
        <p className="text-center md:text-base text-sm">
          With monthly recurring sessions, our goal is to inform, train, and
          empower climate justice ambassadors and everyone interested in
          participating, fostering a global community dedicated to tackling the
          climate crisis together.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 mt-20">
        <div className="flex items-center justify-center md:mt-0 mt-10 md:mb-0 mb-8">
          <div className="relative md:p-10  flex  items-center justify-center">
            <div className="w-[90%] h-60 md:h-[360px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
            <Image
              src="https://img.freepik.com/premium-photo/blurred-businessman-hand-holding-microphone-speech-presentation-conference-hall-seminar-speaker-concept-vintage-tone_152904-45011.jpg"
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[360px]  rounded-2xl object-cover h-60  "
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center ">
          <h1 className="text-3xl font-bold">
            Upcoming Climate Justice Session
          </h1>
          <h3 className="font-semibold text-main">
            Ready to join the conversation?
          </h3>
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
