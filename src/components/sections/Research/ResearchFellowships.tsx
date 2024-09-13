import { Button } from "@/components/ui/button";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ResearchFellowships() {
  return (
    <div className="container">
      <h1 className={`${montserrat.className} text-center text-4xl font-bold`}>
        Infrastructure & Team
      </h1>
      <h1
        className={`${montserrat.className} text-2xl text-center mt-4 capitalize font-light `}
      >
        {" "}
        A fieldsite for scientists from all over the world
      </h1>
      {/* Research Team */}
      <div className="container mt-16 md:mt-20">
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[480px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/06/Felix-Finkbeiner-in-Yucatan.jpg"
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[480px]  rounded-2xl object-cover h-64  "
              />
            </div>
          </div>
          <div className=" lg:mt-10  flex flex-col justify-center items-start">
            <p className="lg:text-xl text-gray-700 ">
              Universities and research institutes often lack the facilities to
              offer researchers the necessary framework conditions to test
              forest restoration methods in the open field. Especially when it
              comes to large-scale experiments that require a lot of space.
              Interested in setting up a restoration field trial with us? Our
              team is excited to help with setup and data collection for your
              experiment. And you are welcome to live with us on-site for the
              duration of your experiment.
              <br />
              <br />
              Interested in becoming a research fellow? Send your application to{" "}
              <Link className="text-main" href="#">
                felix.finkbeiner@gray-to-green.com{" "}
              </Link>
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
              className={`lg:text-3xl text-2xl  lg:mb-7 mb-3 font-bold uppercase ${montserrat.className}`}
            >
              Support Us!
            </h1>
            <p className="lg:text-xl text-gray-700 ">
              We need help to set up a range of further, crucial experiments and
              to build our restoration advice team so that struggling forest
              restoration projects around the world can benefit from expert
              advice.
              <br />
              <br />
              Interested in supporting us? We’d love to hear from you!{" "}
              <Link className="text-main" href="#">
                felix.finkbeiner@gray-to-green.com{" "}
              </Link>
              <br />
              <br />
              Or donate directly!
            </p>
            <Button className="donateBtn p-6 rounded-full shadow-none mt-8">
              Donate for the Research Park
            </Button>
          </div>

          <div className="mt-5">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[480px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/03/Team-picture-at-laying-of-the-cornerstone.jpg"
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

      <div className="container mt-16 md:mt-20">
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[480px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/03/Empowerment-Restoration-Research-Park-Plant-for-the-Planet-Laying-of-the-cornerstone.jpg"
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[480px]  rounded-2xl object-cover h-64  "
              />
            </div>
          </div>
          <div className="   flex flex-col justify-center items-start">
            <h1
              className={`lg:text-3xl text-2xl  lg:mb-7 mb-3 font-bold uppercase ${montserrat.className}`}
            >
              Laying the Cornerstone
            </h1>
            <p className="lg:text-xl text-gray-700 ">
              The research site was inaugurated by Mayor Miguel Arcos,
              Environment Minister Dr. Sandra Laffon, CONAFOR Director Dr.
              Carlos Tucuch, Plant-for-the-Planet Chair Felix Finkbeiner, UT
              Calakmul Rector Andrés Zamudio, INIFAP Scientist Fernando Arellano
              & Plant-for-the-Planet Mexico President Raúl Negrete Cetina
            </p>
          </div>
        </div>
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
      </div>
    </div>
  );
}

export default ResearchFellowships;
