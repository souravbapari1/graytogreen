import { montserrat } from "@/fonts/font";
import Image from "next/image";
import React from "react";

function InfrastructureAndTeam() {
  return (
    <div className=" py-32">
      <h1
        className={`md:text-5xl text-3xl font-bold ${montserrat.className} text-center`}
      >
        Infrastructure & Team
      </h1>
      {/* Research Team */}
      <div className="container mt-16 md:mt-20">
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[480px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/07/Americas_5_research_team.jpg"
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[480px]  rounded-2xl object-cover h-64  "
              />
            </div>
          </div>
          <div className=" lg:mt-10 mt-4 flex flex-col justify-center items-start">
            <h1
              className={`lg:text-3xl text-2xl  lg:mb-10 mb-5 font-bold uppercase ${montserrat.className}`}
            >
              Research Team
            </h1>
            <p className="lg:text-xl text-gray-700 ">
              In a collaborative research setup, a botanist, research
              coordinator, and field assistants each play crucial roles in
              executing experiments. The botanist designs and oversees the
              scientific aspects of the research, developing hypotheses and
              analyzing data related to plant biology. The research coordinator
              manages project logistics, schedules, budgets, and ensures
              regulatory compliance while facilitating communication among team
              members. Field assistants execute hands-on tasks, such as
              collecting plant samples, recording environmental data, and
              operating field equipment. Together, this team efficiently
              conducts experiments, from initial design and data collection to
              analysis and publication, driving forward advancements in
              botanical research.
            </p>
          </div>
        </div>
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
      </div>

      {/* 129 ha Experimental Sites */}
      <div className="container mt-16 md:mt-0">
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className=" lg:mt-10 mt-4 flex flex-col justify-center items-start">
            <h1
              className={`lg:text-3xl text-2xl  lg:mb-10 mb-5 font-bold uppercase ${montserrat.className}`}
            >
              129 ha Experimental Sites
            </h1>
            <p className="lg:text-xl text-gray-700 ">
              Two mostly-deforested research sites, a totally of 129 ha allow
              for a range of large restoration field experiments. Additionally,
              Plant-for-the-Planet’s 20,000 ha of restoration and conservation
              sites, as well as the 500,000 ha of the Balam-Kú and Balam-Kin
              reserves, can be used for further (non-destructive) research.
            </p>
          </div>

          <div className="mt-5">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[480px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/06/RESTORATION-CONSERVATION-SITES-AMERICAS-v4.jpg"
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[480px]  rounded-2xl object-cover h-64  "
              />
            </div>
          </div>
        </div>
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
      </div>

      {/* Experimental Nursery */}
      <div className="container mt-16 md:mt-0">
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[480px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/06/Yucatan-Nursery.jpg"
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[480px]  rounded-2xl object-cover h-64  "
              />
            </div>
          </div>
          <div className=" lg:mt-10 mt-4 flex flex-col justify-center items-start">
            <h1
              className={`lg:text-3xl text-2xl  lg:mb-10 mb-5 font-bold uppercase ${montserrat.className}`}
            >
              Experimental Nursery
            </h1>
            <p className="lg:text-xl text-gray-700 ">
              Our on-site nursery, equipped with the capacity to cultivate up to
              200,000 seedlings, is a pivotal asset for experimental research.
              This extensive facility enables us to grow specific plant species
              under controlled conditions tailored to our experimental needs,
              ensuring the availability of a large and diverse population of
              seedlings.
            </p>
          </div>
        </div>
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
      </div>

      {/* Shadehouse */}
      <div className="container mt-16 md:mt-0">
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className=" lg:mt-10 mt-4 flex flex-col justify-center items-start">
            <h1
              className={`lg:text-3xl text-2xl  lg:mb-10 mb-5 font-bold uppercase ${montserrat.className}`}
            >
              Shadehouse
            </h1>
            <p className="lg:text-xl text-gray-700 ">
              For experiments where we need to control water levels, we have a
              100 m² shade house.
            </p>
          </div>

          <div className="mt-5">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[480px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/06/Shadehouse-Planet-Research.jpg"
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[480px]  rounded-2xl object-cover h-64  "
              />
            </div>
          </div>
        </div>
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
      </div>

      {/* Drying Room */}
      <div className="container mt-16 md:mt-0">
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[480px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/06/planet_web_slider_2560x1080p__0007_baumschule_setzlinge_team_%C2%A9alexis_garcia_fuer_pftp_mg_5734.jpg"
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[480px]  rounded-2xl object-cover h-64  "
              />
            </div>
          </div>
          <div className=" lg:mt-10 mt-4 flex flex-col justify-center items-start">
            <h1
              className={`lg:text-3xl text-2xl  lg:mb-10 mb-5 font-bold uppercase ${montserrat.className}`}
            >
              Drying Room
            </h1>
            <p className="lg:text-xl text-gray-700 ">
              With our drying room, we can dry hundreds of soil and plant
              samples at once before sending them to a lab.
            </p>
          </div>
        </div>
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
      </div>

      {/* Office & Accommodation */}
      <div className="container mt-16 md:mt-0">
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className=" lg:mt-10 mt-4 flex flex-col justify-center items-start">
            <h1
              className={`lg:text-3xl text-2xl  lg:mb-10 mb-5 font-bold uppercase ${montserrat.className}`}
            >
              Office & Accommodation
            </h1>
            <p className="lg:text-xl text-gray-700 ">
              Our office is a shared space for the restoration, advisory,
              quality control and research teams.
            </p>
          </div>

          <div className="mt-5">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[480px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/06/Office-Planet-Research.jpg"
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[480px]  rounded-2xl object-cover h-64  "
              />
            </div>
          </div>
        </div>
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
      </div>
    </div>
  );
}

export default InfrastructureAndTeam;
