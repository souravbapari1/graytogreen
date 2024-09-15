import { Button } from "@/components/ui/button";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

function AcademicsInfoLists() {
  return (
    <div className="">
      <div className="container mt-32">
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className=" lg:mt-10 mt-4 flex flex-col justify-center items-start">
            <h1
              className={`lg:text-3xl text-2xl  lg:mb-10 mb-5 font-bold uppercase ${montserrat.className}`}
            >
              Merging{" "}
              <span className="text-main">
                {" "}
                Minds, Methods <br />{" "}
              </span>{" "}
              and <span className="text-main">Mother Earth</span>
            </h1>
            <p className="lg:text-xl text-gray-700 ">
              We offer skill-based training programs, workshops, bootcamps,
              practical resources and expert sessions designed to empower
              participants to join the sustainability workforce and become
              climate change ambassadors.
            </p>
            <Link
              href="#"
              className="uppercase  font-bold  md:text-lg text-sm text-main mt-11 flex md:justify-start justify-center items-center"
            >
              Explore More <RiArrowDropRightLine size={35} />
            </Link>
          </div>
          <div className="">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[480px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?cs=srgb&dl=pexels-akilmazumder-1072824.jpg&fm=jpg"
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
      <div className="relative lg:h-72 mt-20 bg-[url('https://www.plant-for-the-planet.org/wp-content/uploads/2022/07/background_image_nursery_1920x1080p_01-1.jpg')] bg-fixed bg-no-repeat bg-cover bg-center">
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
        <div className="w-full h-full bg-black/50 flex justify-center items-center">
          <div className="container grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-10 py-20 text-white">
            <div className=" text-center flex flex-col justify-center items-center gap-5">
              <h1 className="md:text-8xl text-5xl font-bold text-center">
                11+
              </h1>
              <p
                className={`${montserrat.className} text-xl text-center text-white/75`}
              >
                BootCamps
              </p>
            </div>
            <div className=" text-center flex flex-col justify-center items-center gap-5">
              <h1 className="md:text-8xl text-5xl font-bold text-center">
                23+
              </h1>
              <p
                className={`${montserrat.className} text-xl text-center text-white/75`}
              >
                Released Researches
              </p>
            </div>
            <div className=" text-center flex flex-col justify-center items-center gap-5">
              <h1 className="md:text-8xl text-5xl font-bold text-center">
                100+
              </h1>
              <p
                className={`${montserrat.className} text-xl text-center text-white/75`}
              >
                Graduated Ambassadors
              </p>
            </div>
            <div className=" text-center flex flex-col justify-center items-center gap-5">
              <h1 className="md:text-8xl text-5xl font-bold text-center">7+</h1>
              <p
                className={`${montserrat.className} text-xl text-center text-white/75`}
              >
                Workspace
              </p>
            </div>
            <div className=" text-center flex flex-col justify-center items-center gap-5">
              <h1 className="md:text-8xl text-5xl font-bold text-center">
                12+
              </h1>
              <p
                className={`${montserrat.className} text-xl text-center text-white/75`}
              >
                Climate Change Experts
              </p>
            </div>
          </div>
        </div>
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 lg:gap-16 gap-10 md:my-36 py-10 ">
          {[
            {
              image:
                "https://upload.wikimedia.org/wikipedia/commons/1/19/High_school_students%2C_SAS_Pudong.jpg",
              title: "Green Kids Academy",
              link: "#",
            },
            {
              image:
                "https://caias.in/wp-content/uploads/2020/12/iStock-1210745478-conflicted-scaled-1.jpg",
              title: "Sustainable Youth Academy",
              link: "#",
            },
            {
              image:
                "https://www.utility.rentals/wp-content/uploads/2020/01/Spruce-up-your-science-lab.jpg",
              title: "Experiments, Innovation and Researches Labs",
              link: "#",
            },
            {
              image:
                "https://www.ulektznews.com/wp-content/uploads/2021/09/DU-Makes-It-Compulsory-For-All-Students-To-Plant-Trees-From-This-Session.png",
              title: "Training and Qualification Academy",
              link: "#",
            },
          ].map((e, i) => {
            return (
              <div
                key={"type:_" + i}
                className="w-full lg:h-[500px] h-64 bg-green-200 rounded-3xl hover:shadow-lg transition-all overflow-hidden relative"
              >
                <Image
                  src={e.image}
                  alt=""
                  width={3000}
                  height={3000}
                  className="w-full h-full object-cover absolute top-0 right-0"
                />
                <div className="w-full h-full bg-black absolute top-0 right-0 bg-black/30"></div>
                <div className="absolute bottom-0 md:p-10 p-5">
                  <h1
                    className={`${montserrat.className} md:text-3xl text-2xl text-white font-extrabold `}
                  >
                    {e.title}
                  </h1>
                  <Link
                    href={e.link}
                    className="donateBtn w-40 h-12 shadow-none mt-5 flex justify-center items-center"
                  >
                    View More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mt-32 mb-20">
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[480px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://www.rhs.org.uk/getmedia/4e2108e3-9e5c-4996-830d-3c041488f267/broad-bean-seedlings.jpg?width=940&height=624&ext=.jpg"
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
              <p className="text-main">Support us at academy</p>
            </h1>
            <p className="lg:text-xl text-gray-700 ">
              Over 100,273 children and youth have already been trained at 1,866
              academies in 76 countries, where we teach each other about the
              climate crisis. As Climate Justice Ambassadors we fight for our
              future by planting trees, giving speeches, protesting, and much
              more.
            </p>
            <Link
              href="#"
              className="uppercase font-bold  md:text-lg text-sm text-main mt-11 flex md:justify-start justify-center items-center"
            >
              Presentation <RiArrowDropRightLine size={35} />
            </Link>
          </div>
        </div>
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
      </div>

      <div className="container px-5 bg-green-50/50">
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className=" lg:mt-10 mt-4 flex flex-col justify-center items-start">
            <p className="lg:text-xl text-gray-700 ">
              On the Yucatán Peninsula and the state of Mexico, we are restoring
              forests to fight the climate crisis. Forest restoration generates
              jobs, protects biodiversity, and absorbs the greenhouse gas CO2.
            </p>
            <Link
              href="#"
              className="uppercase font-bold  md:text-lg text-sm text-main mt-11 flex md:justify-start justify-center items-center"
            >
              Become an Academy Organiser <RiArrowDropRightLine size={35} />
            </Link>
          </div>

          <div className="md:mt-0 mt-10">
            <div className="relative md:p-10 flex justify-center items-center">
              <div className="w-[90%] h-64 md:h-[480px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://www.housedigest.com/img/gallery/the-best-time-of-day-to-water-your-houseplants/intro-1686927655.jpg"
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

export default AcademicsInfoLists;
