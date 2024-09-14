import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

function RestorationAdviceTeam() {
  return (
    <div className="bg-green-50/50 md:py-20 py-5 mt-10">
      <div className="container grid lg:grid-cols-2 gap-8">
        <div className="mt-16">
          <h1
            className={`md:text-4xl text-2xl font-bold ${montserrat.className}`}
          >
            <span className={` text-main`}>Restoration</span> Advice Team
          </h1>
          <p className="md:text-xl mt-5">
            Nested within the Empowerment & Restoration Research Park is our
            Restoration Advice Team. We are building this team of experienced
            restoration ecologists to provide actionable restoration advice for
            projects around the world. The advice directly builds on the
            insights discovered by the research team. Plant-for-the-Planet
            already collaborates with more than 200 forest restoration projects
            in over 50 countries. Many of them will benefit from the support of
            this team.
          </p>
          <Link
            href="#"
            className="uppercase font-bold  md:text-lg text-sm text-main mt-11 flex md:justify-start justify-center items-center"
          >
            What is an Academy <RiArrowDropRightLine size={35} />
          </Link>
        </div>
        <div className="">
          <div className="relative md:p-10 flex justify-center items-center">
            <div className="w-[90%] h-48 md:h-[480px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
            <Image
              src="https://www.plant-for-the-planet.org/wp-content/uploads/2021/02/Yucatan-Map-Aerial-View.jpg"
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[480px]  rounded-2xl object-cover h-48  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestorationAdviceTeam;
