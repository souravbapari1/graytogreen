"use client";

import ResearchCard from "@/components/sections/Research/ResearchCard";
import { Button } from "@/components/ui/button";
import { montserrat } from "@/fonts/font";
import { ResearchItem } from "@/interface/researches";
import { useCallback, useEffect, useState } from "react";
import { getResearchCategory, getResearchesLabs } from "./function";
import Link from "next/link";

function OngoingResearch({ viewAll = false }: { viewAll?: boolean }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ResearchItem["researchPosts"] | null>(null);
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState<string>("All");
  const [isLast, setIsLast] = useState(false);
  const [category, setCategory] = useState<string[]>(["Loading..."]);

  const getResearchCategoryList = useCallback(async () => {
    const data = await getResearchCategory();
    const list = data?.data.researchCategories.map((e) => e.name) || [];
    const setData = new Set(list);
    setCategory(Array.from(setData));
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const posts = await getResearchesLabs(filter, page);
      setData([...(data || []), ...posts.data.researchPosts]);
      setIsLast(posts.data.researchPosts.length < 9);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    getResearchCategoryList();
  }, [page, filter]);

  return (
    <div className="bg-green-50/50 w-full   py-20 ">
      <div className="container gap-10 ">
        <h1
          className={`${montserrat.className} md:text-4xl text-3xl text-center font-bold `}
        >
          <span className="text-main">Ongoing</span> Research
        </h1>
        <div
          className={`flex justify-center items-center md:gap-6 gap-3 ${montserrat.className} mt-10 md:text-base text-sm font-bold`}
        >
          {["All", ...category].map((e) => (
            <p
              key={e}
              onClick={() => {
                if (filter != e) {
                  setData(null);
                  setFilter(e);
                }
              }}
              className={`capitalize cursor-pointer select-none ${
                e == filter ? "underline text-main" : null
              }`}
            >
              {e}
            </p>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 gap-y-5 mt-10">
          {data?.map((e) => {
            return <ResearchCard data={e} key={e.documentId} />;
          })}
        </div>
        {data?.length == 0 && (
          <div className="text-center mt-10">No Researches Found</div>
        )}
        {loading ? (
          <div className="flex justify-center items-center mt-10">
            <div
              className="spinner-border animate-spin  inline-block w-8 h-8 border-4 border-t-primary rounded-full"
              role="status"
            ></div>
          </div>
        ) : viewAll ? (
          <div className="w-full mx-auto flex justify-center items-center mt-10">
            <Link href="/research">
              <Button className="donateBtn rounded-full p-5">
                View All Researches
              </Button>
            </Link>
          </div>
        ) : (
          <div className="mx-auto flex justify-center items-center mt-10">
            {data && !isLast && (
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
    </div>
  );
}

export default OngoingResearch;
