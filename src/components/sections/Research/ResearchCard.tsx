import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ResearchCard() {
  return (
    <Link
      href="/blogs/slug"
      className={`${montserrat.className}  relative  transition-all   overflow-hidden`}
    >
      <div className="donateBtn p-0 w-10 h-10 flex justify-center items-center absolute top-5 left-5 ">
        R
      </div>
      <Image
        src="https://cid-inc.com/app/uploads/2023/04/Plamnt-research.jpg"
        width={2000}
        height={2000}
        alt=""
        className="w-full md:h-64 h-60 object-cover rounded-3xl"
      />
      <div className="flex flex-col gap-2 py-5">
        <h1 className="md:text-xl font-bold line-clamp-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt,
          dolor?
        </h1>
        <p className="md:text-sm text-xs line-clamp-3 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          error dicta esse impedit repudiandae autem, distinctio necessitatibus
          deserunt voluptates culpa aliquid quod est nesciunt exercitationem
          ducimus labore dolorum recusandae! Perspiciatis.
        </p>
        <p className="font-semibold md:text-base text-sm text-gray-400">
          August 22, 2024
        </p>
      </div>
    </Link>
  );
}

export default ResearchCard;
