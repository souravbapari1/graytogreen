import { Button } from "@/components/ui/button";
import { lora, montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

function NitrogenFixingSpecies() {
  return (
    <div className="relative w-full overflow-hidden py-20">
      <Image
        src="/assets/Lingkaran.svg"
        alt="roubd"
        height={2000}
        width={2000}
        className="w-64 h-64 absolute left-0 -ml-24 mt-40"
      />

      <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 container mt-10">
        <div className="mt-5">
          <h1
            className={
              montserrat.className + " lg:text-4xl text-3xl font-bold text-main"
            }
          >
            Nitrogen-Fixing Species
          </h1>

          <p className={montserrat.className + "  mt-8 mb-8"}>
            Nitrogen is one of the key nutrients plants need to grow. To do so,
            they extract inorganic nitrogen from the forest soil. A lot of
            tropical dry forests are Nitrogen limited. That means that the low
            levels of nitrogen is the primary reason plants in that ecosystem
            are not growing faster. So what can be done? Well, there is one
            family of plants with a unique ability. Species in the Fabaceae
            family (also called Legumes) grow small nodules on their roots and
            in those nodules they host special bacteria. These bacteria can fix
            nitrogen from the atmosphere and convert it into the type of
            nitrogen that plants can use. So while all other plants are
            competing for the limited inorganic nitrogen in the forest soil, the
            Fabaceae species just create their own through this symbiosis. 
          </p>
        </div>
        <div className="">
          <div className="relative md:p-10 flex justify-center items-center">
            <div className="w-[90%] h-48 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:-mr-12 -mr-10 rounded-2xl mb-10"></div>
            <Image
              src="https://www.plant-for-the-planet.org/wp-content/uploads/2021/02/Yucatan-Map-Aerial-View.jpg"
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[380px]  rounded-2xl object-cover h-48 border  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NitrogenFixingSpecies;
