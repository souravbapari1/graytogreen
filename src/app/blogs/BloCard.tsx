import { montserrat } from "@/fonts/font";
import { formatTimestampCustom } from "@/helper/dateTime";
import { BlogItem } from "@/interface/blog";
import { genPbFiles } from "@/request/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogCard({ blog }: { blog?: BlogItem }) {
  return (
    <Link
      href={"/blogs/" + blog?.slug}
      className={`${montserrat.className} bg-white  transition-all border hover:shadow-lg overflow-hidden`}
    >
      <Image
        src={genPbFiles(blog, blog?.image)}
        width={2000}
        height={2000}
        alt=""
        className="w-full md:h-64 h-60 object-cover"
      />
      <div className="flex flex-col gap-2 p-5">
        <p className="font-semibold md:text-base text-sm text-gray-400">
          {formatTimestampCustom(blog?.created || "")}
        </p>
        <h1 className="md:text-xl font-bold line-clamp-2">{blog?.title}</h1>
        <p className="md:text-sm text-xs line-clamp-3 text-gray-500">
          {blog?.description}
        </p>
      </div>
    </Link>
  );
}

export default BlogCard;
