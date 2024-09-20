import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogCard() {
  return (
    <Link
      href="/blogs/slug"
      className={`${montserrat.className} bg-white  transition-all border hover:shadow-lg overflow-hidden`}
    >
      <Image
        src="https://blog.plant-for-the-planet.org/wp-content/uploads/2024/08/IMG-20240820-WA0052-e1724333949203.jpg"
        width={2000}
        height={2000}
        alt=""
        className="w-full md:h-64 h-60 object-cover"
      />
      <div className="flex flex-col gap-2 p-5">
        <p className="font-semibold md:text-base text-sm text-gray-400">
          August 22, 2024
        </p>
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
      </div>
    </Link>
  );
}

export default BlogCard;
