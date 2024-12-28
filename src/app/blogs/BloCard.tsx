import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import { formatTimestampCustom } from "@/helper/dateTime";
import { BlogItem } from "@/interface/blog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

function BlogCard({
  blog,
  size,
}: {
  blog?: BlogItem["blogPosts"][number];
  size?: "sm" | "lg";
}) {
  return (
    <Link
      href={"/blogs/" + blog?.slug}
      className={`${montserrat.className} bg-white  transition-all  hover:shadow-lg overflow-hidden`}
    >
      <Image
        src={strApi + blog?.previewImage?.url}
        width={2000}
        height={2000}
        alt=""
        className={cn(
          "w-full  h-60 object-cover",
          `${size == "sm" ? "md:h-40 h-40" : ""}`
        )}
      />
      <div className="flex flex-col gap-2 p-5">
        <p className="font-semibold  text-xs uppercase text-gray-400">
          {formatTimestampCustom(blog?.publishedAt || "")}
        </p>
        <h1 className="md:text-md font-bold line-clamp-2">{blog?.title}</h1>
        <p className="md:text-sm text-xs line-clamp-3 text-gray-500">
          {blog?.description}
        </p>
      </div>
    </Link>
  );
}

export default BlogCard;
