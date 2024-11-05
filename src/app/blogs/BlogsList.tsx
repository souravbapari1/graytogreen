"use client";
import { montserrat } from "@/fonts/font";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import BlogCard from "./BloCard";
import { ResearchItem } from "@/interface/researches";
import { getBlogs } from "@/request/worker/manageBlog";
import { Collection } from "@/interface/collection";
import { BlogItem } from "@/interface/blog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function BlogsList({ tabs }: { tabs: ResearchItem[] }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Collection<BlogItem> | null>(null);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<string>("(public=true)");

  const loadData = async () => {
    try {
      setLoading(true);
      const blogs = await getBlogs(page, filter);
      setData({
        ...blogs,
        items: [...(data?.items || []), ...blogs.items],
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [page, filter]);

  return (
    <div>
      <div className="fixed lg:hidden flex bottom-7 right-0 text-main w-14 h-14 border rounded-s-xl shadow-lg border-main/20 bg-white/80 backdrop-blur-lg  justify-center items-center">
        <BiSearch size={25} />
      </div>
      <div className="flex justify-center items-center md:gap-10 gap-5 md:mt-20 mt-10  bg-white flex-wrap  ">
        <p
          onClick={() => {
            setData(null);
            setPage(1);
            setFilter("(public=true)");
          }}
          className={cn(
            `${montserrat.className}  lg:text-base text-sm font-bold   text-nowrap underline-offset-1 under cursor-pointer text-gray-600 `,
            `${filter == "(public=true)" ? "underline text-main" : null}`
          )}
        >
          All
        </p>
        {tabs.map((e, i) => {
          return (
            <p
              key={e.id}
              onClick={() => {
                setData(null);
                setPage(1);
                setFilter(`(category='${e.id}' && public=true)`);
              }}
              className={cn(
                `${montserrat.className}  lg:text-base text-sm font-bold   text-nowrap underline-offset-1 under cursor-pointer text-gray-600 `,
                `${
                  filter == `(category='${e.id}' && public=true)`
                    ? " text-main underline"
                    : null
                }`
              )}
            >
              {e.title}
            </p>
          );
        })}
      </div>

      <div className="container grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10">
        {data?.items.map((e, i) => {
          return <BlogCard key={i} blog={e} />;
        })}
      </div>
      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <div
            className="spinner-border animate-spin  inline-block w-8 h-8 border-4 border-t-primary rounded-full"
            role="status"
          ></div>
        </div>
      ) : (
        <div className="mx-auto flex justify-center items-center mt-10">
          {data && data?.totalPages > data?.page && (
            <Button
              className="donateBtn rounded-full p-5"
              onClick={() => setPage(page + 1)}
            >
              Load More
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default BlogsList;
