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
          <div className="  flex flex-col justify-center items-start">
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
            <p className=" text-gray-700 ">
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
          <div className="lg:mt-0 mt-10">
            <div className="relative md:p-10 flex justify-center items-center">
              <div
                className={`${montserrat.className} md:w-32 w-20  shadow-md text-white bg-gradient-to-r from-green-900 to-green-600 md:py-7 py-4 md:text-sm text-xs absolute z-20 top-20 lg:-left-10 -left-2 rounded-full flex justify-center items-center font-bold`}
              >
                Educate
              </div>
              <div
                className={`${montserrat.className} md:w-32 w-20  shadow-md text-white bg-gradient-to-r from-green-900 to-green-600 md:py-7 py-4 md:text-sm text-xs absolute z-20 lg:top-48 -top-10 lg:-right-6  rounded-full flex justify-center items-center font-bold`}
              >
                Engage
              </div>
              <div
                className={`${montserrat.className} md:w-32 w-20  shadow-md text-white bg-gradient-to-r to-green-900 from-green-600 md:py-7 py-4 md:text-sm text-xs absolute z-20 bottom-0 right-0 lg:left-48 rounded-full flex justify-center items-center font-bold`}
              >
                Equip
              </div>
              <div className="w-[90%] h-64 md:h-[320px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
              <Image
                src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?cs=srgb&dl=pexels-akilmazumder-1072824.jpg&fm=jpg"
                width={1200}
                height={1200}
                alt=""
                className="md:w-full w-[90%]  md:h-[320px]  rounded-2xl object-cover h-64  "
              />
            </div>
          </div>
        </div>
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
      </div>
      <div className="relative container  lg:h-72 h-[900px] mt-20 bg-[url('/assets/744.jpg')] bg-fixed bg-no-repeat bg-cover bg-center">
        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
        <div className="absolute top-0 right-0 bg-black/50 w-full h-full">
          <div className="w-full h-full   flex justify-center items-center">
            <div className=" grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-10  text-white">
              <div className=" text-center flex flex-col justify-center items-center gap-5">
                <h1
                  className={`md:text-6xl text-5xl font-bold text-center ${montserrat.className}`}
                >
                  11
                </h1>
                <p
                  className={`${montserrat.className} text-md text-center text-white/75`}
                >
                  BootCamps
                </p>
              </div>
              <div className=" text-center flex flex-col justify-center items-center gap-5">
                <h1
                  className={`md:text-6xl text-5xl font-bold text-center ${montserrat.className}`}
                >
                  23+
                </h1>
                <p
                  className={`${montserrat.className} text-md text-center text-white/75`}
                >
                  Released Researches
                </p>
              </div>
              <div className=" text-center flex flex-col justify-center items-center gap-5">
                <h1
                  className={`md:text-6xl text-5xl font-bold text-center ${montserrat.className}`}
                >
                  100+
                </h1>
                <p
                  className={`${montserrat.className} text-md text-center text-white/75`}
                >
                  Graduated Ambassadors
                </p>
              </div>
              <div className=" text-center flex flex-col justify-center items-center gap-5">
                <h1
                  className={`md:text-6xl text-5xl font-bold text-center ${montserrat.className}`}
                >
                  7+
                </h1>
                <p
                  className={`${montserrat.className} text-md text-center text-white/75`}
                >
                  Workspace
                </p>
              </div>
              <div className=" text-center flex flex-col justify-center items-center gap-5">
                <h1
                  className={`md:text-6xl text-5xl font-bold text-center ${montserrat.className}`}
                >
                  12+
                </h1>
                <p
                  className={`${montserrat.className} text-md text-center text-white/75`}
                >
                  Climate Change Experts
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ======≠≠===========≠≠≠≠≠≠≠≠≠≠≠=========== */}
      </div>

      <div className="container ">
        <div className="w-full mt-28 mx-auto  ">
          <div className={`${montserrat.className} md:text-left text-center`}>
            <p className="lg:text-xl text-lg mb-2 font-bold text-main">
              We are starting from here
            </p>
            <h1 className="lg:text-4xl text-3xl font-bold">
              Current Departments
            </h1>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2  mx-auto items-center  lg:gap-0 gap-5  py-10 ">
            {[
              {
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/1/19/High_school_students%2C_SAS_Pudong.jpg",
                title: "Green Kids Academy",
                link: "/academies/greenkidsacademy ",
              },
              {
                image:
                  "https://caias.in/wp-content/uploads/2020/12/iStock-1210745478-conflicted-scaled-1.jpg",
                title: "Sustainable Youth Academy",
                link: "/academies/sustainable-youth-academy",
              },
              {
                image:
                  "https://www.utility.rentals/wp-content/uploads/2020/01/Spruce-up-your-science-lab.jpg",
                title: "Experiments, Innovation and Researches Labs",
                link: "/research",
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
                  className="w-full lg:h-[320px] h-80 bg-green-200  hover:shadow-lg transition-all overflow-hidden relative"
                >
                  <Image
                    src={e.image}
                    alt=""
                    width={3000}
                    height={3000}
                    className="w-full h-full object-cover absolute top-0 right-0"
                  />
                  <div className="w-full h-full bg-black absolute top-0 right-0 bg-black/30"></div>
                  <div className="absolute bottom-0  p-5">
                    <h1
                      className={`${montserrat.className}  text-lg text-white font-extrabold `}
                    >
                      {e.title}
                    </h1>
                    <Link
                      href={e.link}
                      className="donateBtn rounded-none w-32 p-0 h-10 text-sm shadow-none mt-5 flex justify-center items-center"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademicsInfoLists;
