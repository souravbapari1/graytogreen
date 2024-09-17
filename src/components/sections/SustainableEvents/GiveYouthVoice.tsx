import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function GiveYouthVoice() {
  return (
    <div className="relative w-full overflow-hidden py-10 pb-0">
      <Image
        src="/assets/Lingkaran.svg"
        alt="roubd"
        height={2000}
        width={2000}
        className="w-64 h-64 absolute left-0 -ml-24 mt-40"
      />

      <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 container mt-10 mb-8">
        <div className="mt-5">
          <h1
            className={
              montserrat.className + " lg:text-4xl text-3xl font-bold text-main"
            }
          >
            Give youth a voice!
          </h1>

          <p className={montserrat.className + "  mt-8 mb-8"}>
            Would you like to invite Climate Justice Ambassadors to give a
            motivating speech at your event? We are happy to support you! <br />
            <br />
            Our Climate Justice Ambassadors are children and young people who
            want to save their future. In their speeches, they call for more
            climate justice, for more commitment from private individuals and
            companies to reduce their emissions and, above all, to restore a
            trillion trees. Because the climate crisis is the biggest threat to
            our future.
            <br />
            <br />
            To help us find ambassadors from your region, we would ask you to
            fill out the following questionnaire and send it to
            event@graytogreen.com
          </p>
          <div className="flex md:flex-row flex-col text-center lg:mb-0 mb-10 gap-6">
            <Link href="#" className={`${montserrat.className} donateBtn py-3`}>
              Request Offline Speech
            </Link>
            <Link href="#" className={`${montserrat.className} donateBtn py-3`}>
              Request Online Speech
            </Link>
          </div>
        </div>
        <div className="">
          <div className="relative md:p-10 flex justify-center items-center">
            <div className="w-[90%] h-48 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:-mr-12 -mr-10 rounded-2xl mb-10"></div>
            <Image
              src="https://harmonyinthegarden.com/wp-content/uploads/2019/10/IMG_4018.jpeg"
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[380px]  rounded-2xl object-cover h-48 border  "
            />
          </div>
        </div>
      </div>
      <div
        className=" mt-10 w-full bg-gradient-to-r from-green-500 to-emerald-700 relative mb-10
  "
      >
        <div className="  order-last  container py-20">
          <h1 className="text-center lg:text-5xl text-xl text-white mb-20 font-bold">
            What might such a speech sound like?
          </h1>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zFmeeMZioio?si=VCJ45jaB0xb5Y9h5"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full lg:h-[620px] h-52 rounded-3xl object-cover"
          ></iframe>
        </div>
        <Image
          src="/assets/yucatan_bush.svg"
          className="absolute w-36 ml-28 -mt-10"
          width={1200}
          height={1200}
          alt=""
        />
      </div>
    </div>
  );
}

export default GiveYouthVoice;
