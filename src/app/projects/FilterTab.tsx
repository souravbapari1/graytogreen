"use client";
import { FilterState } from "@/components/GMapBox/FilterProjects";
import { useFilterState } from "@/components/GMapBox/useFilterState";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGlobalDataContext } from "@/context/useGlobalDataContext";
import { montserrat } from "@/fonts/font";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setPlatformFilter } from "@/redux/slices/platformSlice";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function FilterTab() {
  const selectedFilters = useFilterState();

  const state = useAppSelector((e) => e.platformSlice);
  const dispatch = useAppDispatch();

  const applyFilters = () => {
    let data = state.dataSet?.filter((e) => {
      // Apply filter logic only if the filter array is not empty
      const typeMatch =
        selectedFilters.filters.types.length === 0 ||
        selectedFilters.filters.types.includes(e.expand?.type?.name || "");
      const interventionMatch =
        selectedFilters.filters.mainInterventions.length === 0 ||
        selectedFilters.filters.mainInterventions.some((intervention) =>
          e.main_interventions.includes(intervention)
        );
      const countryMatch =
        selectedFilters.filters.countries.length === 0 ||
        selectedFilters.filters.countries.includes(e.country || "");
      const cityMatch =
        selectedFilters.filters.cities.length === 0 ||
        selectedFilters.filters.cities.includes(e.city || "");
      const unitTypeMatch =
        selectedFilters.filters.unitTypes.length === 0 ||
        selectedFilters.filters.unitTypes.some((unitType) =>
          e.expand?.unit_types?.map((e) => e.name).includes(unitType)
        );
      const sdgMatch =
        selectedFilters.filters.sdgs.length === 0 ||
        selectedFilters.filters.sdgs.some((sdg) =>
          e.expand?.sdgs?.map((e) => e.name).includes(sdg)
        );
      const accStandardMatch =
        selectedFilters.filters.accStandards.length === 0 ||
        selectedFilters.filters.accStandards.includes(
          e.expand?.accredation_standars?.title || ""
        );

      // Return true if the project matches all non-empty filters
      return (
        (selectedFilters.filters.types.length === 0 || typeMatch) &&
        (selectedFilters.filters.mainInterventions.length === 0 ||
          interventionMatch) &&
        (selectedFilters.filters.countries.length === 0 || countryMatch) &&
        (selectedFilters.filters.cities.length === 0 || cityMatch) &&
        (selectedFilters.filters.unitTypes.length === 0 || unitTypeMatch) &&
        (selectedFilters.filters.sdgs.length === 0 || sdgMatch) &&
        (selectedFilters.filters.accStandards.length === 0 || accStandardMatch)
      );
    });

    if (selectedFilters.search) {
      data = data.filter((e) =>
        e.name.toLowerCase().includes(selectedFilters.search.toLowerCase())
      );
    }

    if (selectedFilters.topProjects) {
      dispatch(setPlatformFilter(data.filter((e) => e.top_project)));
    } else {
      dispatch(setPlatformFilter(data));
    }
  };

  const getProjectTypes = () => {
    let types = Array.from(
      new Set(
        state.dataSet
          ?.map((e) => e.expand?.type?.name)
          .filter((type) => type !== undefined)
      )
    );

    const mainInterventions = Array.from(
      new Set(state.dataSet.map((e) => e.main_interventions).flat())
    );

    const countries = Array.from(new Set(state.dataSet.map((e) => e.country)));

    const cities = Array.from(new Set(state.dataSet.map((e) => e.city)));

    const unitTypes = Array.from(
      new Set(
        state.dataSet
          .map(
            (e) => e.expand?.unit_types?.map((unitType) => unitType.name) || []
          )
          .flat()
      )
    );

    const sdgs = Array.from(
      new Set(
        state.dataSet
          .map((e) => e.expand?.sdgs?.map((sdg) => sdg.name) || [])
          .flat()
      )
    );

    const accStandards = Array.from(
      new Set(
        state.dataSet.map((e) => e.expand?.accredation_standars?.title || "")
      )
    );

    return {
      types,
      mainInterventions,
      countries,
      cities,
      unitTypes,
      sdgs,
      accStandards,
    };
  };

  const toggleFilter = (category: keyof FilterState, value: string) => {
    selectedFilters.toggleFilter(category, value);
  };

  const projectTypes = getProjectTypes();

  useEffect(() => {
    applyFilters();
  }, [
    selectedFilters.topProjects,
    selectedFilters.search,
    selectedFilters.filters,
  ]);

  return (
    <div className="md:px-0 px-3">
      <div className="flex justify-between items-center gap-3 px-3 bg-primary/10 rounded-md">
        <div>
          <Search className="text-primary" size={15} />
        </div>
        <Input
          className="shadow-none rounded border-none text-sm placeholder:text-xs placeholder:text-primary/40 focus:ring-0 ring-0 bg-transparent p-0 focus-visible:ring-0"
          placeholder="Search Project.."
          value={selectedFilters.search}
          onChange={(e) => selectedFilters.setSearch(e.target.value)}
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-2 px-1 mt-2">
          <Checkbox
            className="bg-green-600/10 border-none rounded text-xs shadow-none flex justify-center items-center"
            checked={selectedFilters.topProjects}
            onClick={() =>
              selectedFilters.setTopProjects(!selectedFilters.topProjects)
            }
          />
          <p className="text-xs text-primary font-medium">Top Projects</p>
        </div>
        {state.filter.length != state.dataSet.length && (
          <Badge
            className="text-[7px] font-bold mt-2 shadow-none rounded flex justify-center items-center cursor-pointer"
            variant="destructive"
            onClick={() => {
              dispatch(setPlatformFilter(state.dataSet || []));
              selectedFilters.setTopProjects(false);

              selectedFilters.clearAllFilters();
            }}
          >
            Clear Filters
          </Badge>
        )}
      </div>
      <div className="flex justify-start items-start gap-1 mt-2 flex-wrap">
        {Object.keys(selectedFilters.filters).map((category, i) => {
          return selectedFilters?.filters[category as keyof FilterState].map(
            (value, i) => {
              return (
                <p className="flex justify-between items-center gap-1  text-[10px] bg-green-600/20 capitalize rounded px-2 py-1 text-center">
                  <span className="font-bold">
                    {category.replace(/([A-Z])/g, " $1")}
                  </span>{" "}
                  : {value}
                  <IoClose
                    className="text-primary cursor-pointer"
                    size={10}
                    onClick={() => {
                      selectedFilters.toggleFilter(
                        category as keyof FilterState,
                        value
                      );
                    }}
                  />
                </p>
              );
            }
          );
        })}
      </div>
      <div className="mt-3">
        <Accordion
          type="multiple"
          className="bg-gray-50 px-2 py-2 rounded border-b shadow-none"
        >
          {Object.entries(projectTypes).map(([category, values]) => (
            <AccordionItem key={category} value={category}>
              <AccordionTrigger className="px-3 py-2 capitalize text-sm font-semibold  rounded">
                {category.replace(/([A-Z])/g, " $1")} ({values.length})
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-1">
                  {values.map((value, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 mt-0 cursor-pointer hover:bg-gray-200 px-3 py-2 rounded shadow-none"
                      onClick={() =>
                        toggleFilter(
                          category as keyof FilterState,
                          value as string
                        )
                      }
                    >
                      <Checkbox
                        className="bg-white rounded text-xs shadow-none border-none bg-green-600/10"
                        checked={selectedFilters.filters[
                          category as keyof FilterState
                        ].includes(value as string)}
                      />
                      <p className="text-xs">{value}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FilterTab;

export function MobFilterTab() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="bg-main lg:hidden block p-4 text-xl rounded-full text-white z-30 shadow-lg fixed bottom-6 right-6">
          <FaFilter />
        </div>
      </SheetTrigger>
      <SheetContent className={`p-0 pt-12 ${montserrat.className}`}>
        <FilterTab />
      </SheetContent>
    </Sheet>
  );
}
