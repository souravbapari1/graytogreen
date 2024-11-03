"use client";
import { PopupContent } from "./Parts/PopupContent";
import { FiSearch } from "react-icons/fi";
import { montserrat } from "@/fonts/font";
import { LuListTodo } from "react-icons/lu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setPlatformFilter,
  setSelectedProject,
} from "@/redux/slices/platformSlice";
import { ProjectItem } from "@/interface/project";
import { useEffect, useState } from "react";
import ProjectView from "./ProjectView";

function PlatformMenu({ data }: { data?: ProjectItem[] }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [topChecked, setTopChecked] = useState(false);
  const state = useAppSelector((e) => e.platformSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (search) {
      setSearch("");
    }
    if (filter === "all") {
      dispatch(setPlatformFilter(state.dataSet || []));
    } else {
      dispatch(
        setPlatformFilter(
          state.dataSet?.filter(
            (e) => e.expand?.type?.name.toLowerCase() === filter
          ) || []
        )
      );
    }
  }, [filter]);

  useEffect(() => {
    if (search) {
      dispatch(
        setPlatformFilter(
          state.dataSet?.filter((e) =>
            e.name.toLowerCase().includes(search.toLowerCase())
          ) || []
        )
      );
    } else {
      dispatch(setPlatformFilter(state.dataSet || []));
    }
  }, [search]);

  useEffect(() => {
    if (topChecked) {
      dispatch(
        setPlatformFilter(state.dataSet?.filter((e) => e.top_project) || [])
      );
    } else {
      dispatch(setPlatformFilter(state.dataSet || []));
    }
  }, [topChecked]);

  return (
    <div className="lg:w-96 w-full h-full z-10 left-0 md:top-0  bg-transparent absolute lg:px-3 py-3  overflow-hidden">
      <div className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden pt-3 mb-3">
        <div className={`md:px-6 px-2 pb-2 ${montserrat.className}`}>
          <Tabs defaultValue="all" className="w-full ">
            <TabsList className="w-full bg-main/10 ">
              <TabsTrigger
                value="all"
                className="w-full shadow-none "
                onClick={() => setFilter("all")}
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="carbon offset"
                className="w-full shadow-none"
                onClick={() => setFilter("carbon offset")}
              >
                Carbon Offset
              </TabsTrigger>
              <TabsTrigger
                onClick={() => setFilter("plastic offset")}
                value="plastic offset"
                className="w-full shadow-none"
              >
                Plastic Offset
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex justify-normal items-center gap-3 mt-3">
            <Checkbox
              checked={topChecked}
              onClick={() => setTopChecked(!topChecked)}
            />
            <p className="text-sm font-medium">Top Projects</p>
          </div>
          <Input
            className="shadow-none mt-2  text-xs"
            placeholder="Search Project.. "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div
          className={`${montserrat.className} w-full h-full text-xs md:px-5 px-2  overflow-auto pt-0 pb-20`}
        >
          {data?.map((map, i) => {
            return (
              <PopupContent
                data={map}
                key={"project_" + i}
                className="w-full mt-3"
                onClick={() => {
                  dispatch(
                    setSelectedProject({
                      project: map,
                      type: map.type,
                    })
                  );
                }}
              />
            );
          })}
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default PlatformMenu;

export function MobPlatformMenu({ data }: { data?: ProjectItem[] }) {
  const state = useAppSelector((e) => e.platformSlice);
  return (
    <Sheet>
      <SheetTrigger className="absolute top-20 lg:hidden block right-0  z-30">
        <div className="w-14 h-14 bg-main flex justify-center items-center text-white text-2xl rounded-3xl rounded-r-none shadow-xl border-2 border-green-400/10  ">
          <LuListTodo />
        </div>
      </SheetTrigger>
      <SheetContent side="left">
        {state.selectedProject ? <ProjectView /> : <PlatformMenu data={data} />}
      </SheetContent>
    </Sheet>
  );
}
