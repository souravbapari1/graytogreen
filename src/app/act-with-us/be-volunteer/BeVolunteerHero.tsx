import { montserrat } from "@/fonts/font";
import React from "react";

function BeVolunteerHero() {
  return (
    <div className="w-full md:h-[70vh] min-h-[400px] h-[50vh] z-20 relative bg-[url('https://wellfedgarden.org/wp-content/uploads/2018/05/Copy-of-community.-2-1024x833.jpg')] bg-cover bg-no-repeat bg-center ">
      <div className="w-full h-full bg-black/50 absolute top-0 right-0"></div>
      <div className="container relative flex justify-end md:pb-36 pb-16 items-center z-10 h-full flex-col text-xl text-white">
        <h1
          className={`md:text-5xl text-2xl  font-bold mb-5 text-center ${montserrat.className}`}
        >
          Be Volunteer
        </h1>
        <p className="md:text-3xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}

export default BeVolunteerHero;