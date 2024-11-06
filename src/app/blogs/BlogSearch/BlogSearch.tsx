"use client";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search } from "lucide-react";
import BlogCard from "../BloCard";
import { useState } from "react";
import { Collection } from "@/interface/collection";
import { BlogItem } from "@/interface/blog";
import { getBlogs } from "@/request/worker/manageBlog";

function BlogSearch() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Collection<BlogItem> | null>(null);
  const [search, setSearch] = useState("");
  const searchBlogs = async () => {
    try {
      setLoading(true);
      const blogs = await getBlogs(1, `(public=true && title~'${search}')`);
      setData(blogs);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Sheet>
      <SheetTrigger>
        <div className="cursor-pointer">
          <Search size={18} />
        </div>
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <Input
          className="w-full mt-5 shadow-none rounded-none p-5"
          placeholder="Search Blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchBlogs();
            }
          }}
        />
        <div className="text-xs flex flex-col gap-5 mt-5">
          {data?.items?.map((item) => (
            <BlogCard blog={item} key={item.id} />
          ))}
          {loading && (
            <div className="w-full flex justify-center items-center ">
              <div className="flex justify-center items-center mt-10">
                <div
                  className="spinner-border animate-spin  inline-block w-8 h-8 border-4 border-t-primary rounded-full"
                  role="status"
                ></div>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default BlogSearch;
