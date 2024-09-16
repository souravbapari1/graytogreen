import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function TransparencyHero() {
  return (
    <div className="bg-green-50/50 lg:py-3  py-5 w-full h-full">
      <div className="lg:h-screen lg:max-h-[550px]  container grid lg:grid-cols-2 gap-10">
        <div className="h-full flex justify-center flex-col gap-6">
          <h1
            className={`${montserrat.className} text-4xl font-bold md:mt-0 mt-10 `}
          >
            Transparency
          </h1>
          <p>
            The annual reports of the national Gray To Green organizations are
            available here, along with our statutes, daily records on our
            Yucatan Restoration work and more. If you have any questions, feel
            free to contact us at{" "}
            <Link className="text-main" href="#">
              info@gray-to-green.org
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center justify-center md:mt-0 mt-10 md:mb-0 mb-8">
          <div className="relative md:p-10  flex  items-center justify-center">
            <div className="w-[90%] h-64 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
            <Image
              src="https://www.rhs.org.uk/getmedia/4e2108e3-9e5c-4996-830d-3c041488f267/broad-bean-seedlings.jpg?width=940&height=624&ext=.jpg"
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[380px]  rounded-2xl object-cover h-64  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransparencyHero;
