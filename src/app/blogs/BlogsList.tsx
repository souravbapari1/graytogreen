"use client";
import { montserrat } from "@/fonts/font";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import BlogCard from "./BloCard";
import { ResearchItem } from "@/interface/researches";

import { Collection } from "@/interface/collection";
import { BlogItem } from "@/interface/blog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import BlogSearch from "./BlogSearch/BlogSearch";
import { BlogCategoryItem } from "@/interface/category";
import { gql, useQuery } from "@apollo/client";
import { getBlogs } from "./functions";

const blogsGQl = gql`
  query Blog_category(
    $locale: I18NLocaleCode
    $pagination: PaginationArg
    $filters: BlogPostFiltersInput
  ) {
    blogPosts(locale: $locale, pagination: $pagination, filters: $filters) {
      blog_category {
        name
      }
      locale
      title
      slug
      previewImage {
        url
      }
      publishedAt
      documentId
      description
    }
  }
`;

function BlogsList({ tabs }: { tabs: BlogCategoryItem["blogCategories"] }) {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState<string | null>(null);
  const [posts, setPosts] = useState<BlogItem["blogPosts"]>([]);
  const [isLast, setIsLast] = useState(false);

  // const loadData = async () => {
  //   try {
  //     setLoading(true);
  //     const blogs = await getBlogs(page, filter);
  //     setData({
  //       ...blogs,
  //       items: [...(data?.items || []), ...blogs.items],
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   loadData();
  // }, [page, filter]);

  const post = async () => {
    try {
      setLoading(true);
      const newBlogs = await getBlogs(page, filter);
      setIsLast(newBlogs.data.blogPosts.length < 9);
      setPosts([...posts, ...newBlogs.data.blogPosts]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    post();
  }, [page, filter]);

  return (
    <div>
      <div className="fixed lg:hidden flex bottom-7 right-0 text-main w-14 h-14 border rounded-s-xl shadow-lg border-main/20 bg-white/80 backdrop-blur-lg  justify-center items-center">
        <BiSearch size={25} />
      </div>
      <div className="flex justify-center items-center md:gap-10 gap-5 md:mt-20 mt-10  bg-white flex-wrap  ">
        <p
          onClick={() => {
            if (filter != null) {
              setPosts([]);
              setPage(0);
              setFilter(null);
            }
          }}
          className={cn(
            `${montserrat.className}  lg:text-base text-sm font-bold   text-nowrap underline-offset-1 under cursor-pointer text-gray-600 `,
            `${filter == null ? "underline text-main" : null}`
          )}
        >
          All
        </p>
        {tabs.map((e, i) => {
          return (
            <p
              key={e.name}
              onClick={() => {
                if (filter != e.name) {
                  setPosts([]);
                  setPage(0);
                  setFilter(e.name);
                }
              }}
              className={cn(
                `${montserrat.className}  lg:text-base text-sm font-bold   text-nowrap underline-offset-1 under cursor-pointer text-gray-600 `,
                `${filter == e.name ? " text-main underline" : null}`
              )}
            >
              {e.name}
            </p>
          );
        })}
        <BlogSearch />
      </div>

      <div className="container grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10">
        {posts?.map((e, i) => {
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
          {!isLast && posts?.length > 0 && (
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
