import React from "react";
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

function PlatformMenu() {
  return (
    <div className="lg:w-96 w-full h-full z-10 left-0 md:top-0  bg-transparent absolute lg:px-3 py-3  overflow-hidden">
      <div className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden pt-3 mb-3">
        <div className={`md:px-6 px-2 pb-2 ${montserrat.className}`}>
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
          <div className="flex justify-normal items-center gap-3 mt-3">
            <Checkbox />
            <p className="text-sm font-medium">Top Projects</p>
          </div>
          <Input
            className="shadow-none mt-2  text-xs"
            placeholder="Search Project.. "
          />
        </div>
        <div
          className={`${montserrat.className} w-full h-full text-xs md:px-5 px-2  overflow-auto pt-0 pb-20`}
        >
          {Array.from({ length: 30 }).map((_, i) => {
            return (
              <PopupContent className="w-full mt-3" key={"project_" + i} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PlatformMenu;

export function MobPlatformMenu() {
  return (
    <Sheet>
      <SheetTrigger className="absolute top-20 lg:hidden block right-0  z-30">
        <div className="w-14 h-14 bg-main flex justify-center items-center text-white text-2xl rounded-3xl rounded-r-none shadow-xl border-2 border-green-400/10  ">
          <LuListTodo />
        </div>
      </SheetTrigger>
      <SheetContent side="left">
        <PlatformMenu />
      </SheetContent>
    </Sheet>
  );
}
