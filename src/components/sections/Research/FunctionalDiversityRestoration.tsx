import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function FunctionalDiversityRestoration() {
  return (
    <div className="container">
      <h1
        className={`md:text-4xl text-2xl font-bold text-center ${montserrat.className}`}
      >
        Functional Diversity <span className="text-main">Restoration</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <div className="">
          <div className="relative md:p-10 flex justify-center items-center">
            <div className="w-[90%] h-48 md:h-[380px] bg-green-700/20 absolute -z-[1] lg:mr-12 mr-10 rounded-2xl mb-10"></div>
            <Image
              src="https://www.plant-for-the-planet.org/wp-content/uploads/2021/02/Yucatan-Map-Aerial-View.jpg"
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[380px]  rounded-2xl object-cover h-48  "
            />
          </div>
        </div>
        <p className={` mt-10 ${montserrat.className}`}>
          How can we build optimal species mixes that catalyze the recovery of
          resilient forests and help ensure that the right trees are planted in
          the right places? <br />
          <br /> In collaboration with the
          <Link href="#" className="underline">
            Global Experiments Network
          </Link>
          . <br />
          <br /> The aim of the study is to test and develop a method for
          selecting species mixes that not only better resemble those found in
          natural forests, but also are more likely to be resilient to future
          environmental conditions while contributing to the multiple
          socio-environmental benefits of forest restoration. <br />
          <br /> We look at how specific values of functional traits as well as
          complex mixes of traits influence growth, survival, recovery of native
          biodiversity, provisioning of ecosystem services, and in the
        </p>
      </div>
      <p className={`  mb-5 mt-5 ${montserrat.className} lg:p-8`}>
        long-term, stand-level resilience to climate change. This will provide
        insights into patterns of ecosystem recovery under different
        compositions and combinations of planted tree species. By grouping
        species by their functional traits, we can start to predict how the
        extraordinary diversity of tree species across the tropics are likely to
        respond when planted across the range of environmental conditions
        present at specific restoration sites.  The study consists of 36
        experimental plots that measure 15 × 15m each and are spaced 10 m apart.
        Each plot is given one of six different planting treatments – replicated
        six times.
      </p>
      <div className="grid md:grid-cols-2 gap-10 mt-20">
        <div className="">
          <div className="relative  flex justify-center items-center">
            <Image
              src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/07/Neutrak-vs-Niche.png"
              width={1200}
              height={1200}
              alt=""
              className="md:w-full w-[90%]  md:h-[380px]  rounded-2xl object-contain h-48  "
            />
          </div>
        </div>

        <div className="">
          <h1
            className={` text-2xl font-bold uppercase ${montserrat.className}`}
          >
            Neutral vs Niche Theory: What drives tree diversity in secondary
            forests?
          </h1>
          <p className={` mt-10 ${montserrat.className}`}>
            What are the underlying processes that generate tree diversity in
            tropical dry forests that have been impacted by human land use? Anna
            Gee, a Ph.D. student from Imperial College, London aims to answer
            that question.  Her work explores theories of community assembly
            that have mainly been developed in undisturbed forests and apply
            them to disturbed systems to look for changes to the fundamental
            ecological processes driving forest composition. This work involves
            large-scale surveys of the seed, seedling, and sapling communities
            in sites across Las Americas 7. <br /> Looking at these early stages
            in the life cycle of the trees can help to build up a picture of
            what naturally regenerating forests at this site might look like in
            the future. A range of other projects look at germination
            procedures, seed rain, assisted vs natural regeneration, and
            post-disturbance community assembly. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default FunctionalDiversityRestoration;
