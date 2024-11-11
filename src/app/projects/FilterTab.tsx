"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGlobalDataContext } from "@/context/useGlobalDataContext";
import { montserrat } from "@/fonts/font";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";

type FilterState = {
  country: string;
  city: string;
  processingType: string[];
  plasticType: string[];
  projectState: string[];
};

const PROCESSING_TYPES = [
  "Collection",
  "Recycling",
  "Planting",
  "Restoration",
  "Soil Improvement",
];
const PLASTIC_TYPES = [
  "Polyethylene",
  "Polypropylene",
  "Polyvinyl Chloride",
  "Polystyrene",
  "Polyethylene Terephthalate",
  "Acrylic",
  "Nylon",
];
const PROJECT_STATES = ["Active", "Complete", "Pending"];

function FilterTab() {
  const { countryCity = [] } = useGlobalDataContext();
  const [filters, setFilters] = useState<FilterState>({
    country: "",
    city: "",
    processingType: [],
    plasticType: [],
    projectState: [],
  });

  console.log(filters);

  const handleFilterChange = (
    filterCategory: keyof FilterState,
    value: string
  ) => {
    setFilters((prevFilters) => {
      // Check if the filterCategory is one of the array-based categories
      if (
        filterCategory === "processingType" ||
        filterCategory === "plasticType" ||
        filterCategory === "projectState"
      ) {
        const updatedCategory = (
          prevFilters[filterCategory] as string[]
        ).includes(value)
          ? (prevFilters[filterCategory] as string[]).filter(
              (item) => item !== value
            )
          : [...(prevFilters[filterCategory] as string[]), value];

        return {
          ...prevFilters,
          [filterCategory]: updatedCategory,
        };
      }

      // For single-selection categories like 'country' and 'city'
      return {
        ...prevFilters,
        [filterCategory]: value,
      };
    });
  };

  return (
    <div className="lg:sticky lg:top-28">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-full bg-main/10">
          <TabsTrigger value="account" className="w-full shadow-none">
            All
          </TabsTrigger>
          <TabsTrigger value="trees" className="w-full shadow-none">
            Trees Project
          </TabsTrigger>
          <TabsTrigger value="others" className="w-full shadow-none">
            Others Project
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex flex-col gap-4 mt-5">
        <Accordion
          type="single"
          collapsible
          className="bg-gray-200/40 py-0 rounded-lg"
        >
          <AccordionItem value="country" className="py-0">
            <AccordionTrigger className="py-2 px-3 text-xs">
              Country
            </AccordionTrigger>
            <AccordionContent className="p-3 flex flex-col gap-3 max-h-40 overflow-auto">
              {countryCity.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-start items-center gap-4"
                  onClick={() =>
                    setFilters((prev) => ({ ...prev, country: item.country }))
                  }
                >
                  <Checkbox checked={filters.country === item.country} />
                  <p>{item.country}</p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          disabled={!filters.country}
          className="bg-gray-200/40 py-0 rounded-lg"
        >
          <AccordionItem value="city" className="py-0">
            <AccordionTrigger className="py-2 px-3 text-xs">
              City
            </AccordionTrigger>
            <AccordionContent className="p-3 flex flex-col gap-3 max-h-40 overflow-auto">
              {countryCity
                .find((item) => item.country === filters.country)
                ?.cities.map((city, index) => (
                  <div
                    key={index}
                    className="flex justify-start items-center gap-4"
                    onClick={() => setFilters((prev) => ({ ...prev, city }))}
                  >
                    <Checkbox checked={filters.city === city} />
                    <p>{city}</p>
                  </div>
                ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="bg-gray-200/40 py-0 rounded-lg"
        >
          <AccordionItem value="processingType" className="py-0">
            <AccordionTrigger className="py-2 px-3 text-xs">
              Processing Type
            </AccordionTrigger>
            <AccordionContent className="p-3 flex flex-col gap-3 max-h-44 overflow-auto">
              {PROCESSING_TYPES.map((type) => (
                <div
                  key={type}
                  className="flex justify-start items-center gap-4"
                  onClick={() => handleFilterChange("processingType", type)}
                >
                  <Checkbox checked={filters.processingType.includes(type)} />
                  <p>{type}</p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="bg-gray-200/40 py-0 rounded-lg"
        >
          <AccordionItem value="plasticType" className="py-0">
            <AccordionTrigger className="py-2 px-3 text-xs">
              Plastic Type
            </AccordionTrigger>
            <AccordionContent className="p-3 flex flex-col gap-3 max-h-40 overflow-auto">
              {PLASTIC_TYPES.map((type) => (
                <div
                  key={type}
                  className="flex justify-start items-center gap-4"
                  onClick={() => handleFilterChange("plasticType", type)}
                >
                  <Checkbox checked={filters.plasticType.includes(type)} />
                  <p>{type}</p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="bg-gray-200/40 py-0 rounded-lg"
        >
          <AccordionItem value="projectState" className="py-0">
            <AccordionTrigger className="py-2 px-3 text-xs">
              Project State
            </AccordionTrigger>
            <AccordionContent className="p-3 flex flex-col gap-3 max-h-40 overflow-auto">
              {PROJECT_STATES.map((state) => (
                <div
                  key={state}
                  className="flex justify-start items-center gap-4"
                  onClick={() => handleFilterChange("projectState", state)}
                >
                  <Checkbox checked={filters.projectState.includes(state)} />
                  <p>{state}</p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
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
      <SheetContent className={`px-3 pt-12 ${montserrat.className}`}>
        <FilterTab />
      </SheetContent>
    </Sheet>
  );
}
