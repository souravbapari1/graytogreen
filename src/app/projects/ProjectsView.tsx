"use client";
import React, { useState } from "react";
import FilterTab, { MobFilterTab } from "./FilterTab";
import { montserrat } from "@/fonts/font";
import { PopupContent } from "@/components/GMapBox/Parts/PopupContent";
import { client } from "@/request/actions";
import { Collection } from "@/interface/collection";
import { ProjectItem } from "@/interface/project";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setPlatformData } from "@/redux/slices/platformSlice";

function ProjectsView() {
  const [loading, setLoading] = useState<boolean>(true);
  const state = useAppSelector((e) => e.platformSlice);
  const dispatch = useAppDispatch();
  const [totalItems, setTotalItems] = useState<number>(0);

  const [page, setPage] = useState(1);
  const loadProjects = async () => {
    const projects = await client
      .get("/api/collections/projects/records/", {
        expand: "operated_by,reports,sdgs,sdgs.sdg,unit_types,type",
        perPage: 500,
        hideFields: "about_project,challenges_and_impact_details",
        page: 1,
      })
      .send<Collection<ProjectItem>>();
    setTotalItems(projects.totalItems);
    dispatch(setPlatformData(projects.items));

    setLoading(false);
  };

  React.useEffect(() => {
    loadProjects();
  }, [page]);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-10  h-[80vh]">
        <div
          className="spinner-border animate-spin  inline-block w-8 h-8 border-4 border-t-primary rounded-full"
          role="status"
        ></div>
      </div>
    );
  }

  return (
    <div>
      <MobFilterTab />
      <div className={`${montserrat.className} container`}>
        <div className=" grid lg:grid-cols-12  gap-10  py-5 relative">
          <div className="xl:col-span-3 lg:col-span-4 mt-10 lg:block hidden">
            <div className="sticky top-40">
              <FilterTab />
            </div>
          </div>
          <div className="xl:col-span-9 lg:col-span-8">
            <div className="flex justify-end items-end">
              <h1 className="font-bold text-xl">Project : {totalItems}</h1>
            </div>
            <div className=" grid xl:grid-cols-3   md:grid-cols-2  gap-6">
              {state?.filter?.map((e, i) => {
                return (
                  <PopupContent
                    className="w-full mt-3 text-sm"
                    key={"project_" + i}
                    data={e}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsView;
