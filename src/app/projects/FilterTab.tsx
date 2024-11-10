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
import { FaFilter } from "react-icons/fa";

function FilterTab() {
  const { countryCity } = useGlobalDataContext();

  return (
    <div className=" lg:sticky lg:top-28">
      <Tabs defaultValue="account" className="w-full ">
        <TabsList className="w-full bg-main/10 ">
          <TabsTrigger value="account" className="w-full shadow-none ">
            All
          </TabsTrigger>
          <TabsTrigger value="password" className="w-full shadow-none">
            Carbon Offset
          </TabsTrigger>
          <TabsTrigger value="passwdord" className="w-full shadow-none">
            Plastic Offset
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex flex-col gap-4 mt-5">
        <Accordion
          type="single"
          collapsible
          className="bg-gray-200/40 py-0 rounded-lg"
        >
          <AccordionItem value="item-1" className="py-0">
            <AccordionTrigger className="py-2 px-3 text-xs">
              Country
            </AccordionTrigger>
            <AccordionContent className="p-3 flex flex-col gap-3 max-h-40 overflow-auto">
              {countryCity.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-start items-center gap-4"
                  >
                    <Checkbox />
                    <p>{item.country}</p>
                  </div>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="bg-gray-200/40 py-0 rounded-lg"
        >
          <AccordionItem value="item-1" className="py-0">
            <AccordionTrigger className="py-2 px-3 text-xs">
              City
            </AccordionTrigger>
            <AccordionContent className="p-3 flex flex-col gap-3 max-h-40 overflow-auto">
              <div className="flex justify-start items-center gap-4">
                <Checkbox />
                <p>Delhi</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <Checkbox />
                <p>Mumbai</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <Checkbox />
                <p>Bangalore</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="bg-gray-200/40 py-0 rounded-lg"
        >
          <AccordionItem value="item-1" className="py-0">
            <AccordionTrigger className="py-2 px-3 text-xs">
              Processing Type
            </AccordionTrigger>
            <AccordionContent className="p-3 flex flex-col gap-3 max-h-44 overflow-auto">
              <div className="flex justify-start items-center gap-4">
                <Checkbox />
                <p>Collection</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <Checkbox />
                <p>Recycling</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <Checkbox />
                <p>Planting</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <Checkbox />
                <p>Restoration</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <Checkbox />
                <p>Soil Improvement</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="bg-gray-200/40 py-0 rounded-lg"
        >
          <AccordionItem value="item-1" className="py-0 ">
            <AccordionTrigger className="py-2 px-3 text-xs">
              Plastic Type
            </AccordionTrigger>
            <AccordionContent className="p-3 flex flex-col gap-3 max-h-40 overflow-auto">
              <div className="flex justify-start items-center gap-4">
                <Checkbox />
                <p>Polyethylene</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <Checkbox />
                <p>Polypropylene</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <Checkbox />
                <p>Polyvinyl Chloride</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <Checkbox />
                <p>Polystyrene</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <Checkbox />
                <p>Polyethylene Terephthalate</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <Checkbox />
                <p>Acrylic</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <Checkbox />
                <p>Nylon</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="bg-gray-200/40 py-0 rounded-lg"
        >
          <AccordionItem value="item-1" className="py-0 ">
            <AccordionTrigger className="py-2 px-3 text-xs">
              Project State
            </AccordionTrigger>
            <AccordionContent className="p-3 flex flex-col gap-3 max-h-40 overflow-auto">
              <div className="flex justify-start items-center gap-4">
                <Checkbox />
                <p>Active</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <Checkbox />
                <p>Complete</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <Checkbox />
                <p>Pending</p>
              </div>
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
        <div className="bg-main  lg:hidden block p-4 text-xl rounded-full text-white z-30 shadow-lg fixed bottom-6 right-6">
          <FaFilter />
        </div>
      </SheetTrigger>
      <SheetContent className={`px-3 pt-12 ${montserrat.className}`}>
        <FilterTab />
      </SheetContent>
    </Sheet>
  );
}
