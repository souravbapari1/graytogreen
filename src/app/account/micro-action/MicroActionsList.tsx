"use client";
import React, { useCallback, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MicroActionItem } from "./md";
import { useMicroActionState } from "./microActioonState";
import { useSearchParams } from "next/navigation";

function MicroActionsList({ data }: { data: MicroActionItem[] }) {
  const params = useSearchParams();
  const maState = useMicroActionState();
  const maList = useCallback(() => {
    return data.filter((e) => e.id !== maState.selected?.id);
  }, [data, maState.selected]);

  useEffect(() => {
    if (params.get("id")) {
      const select = data.find((e) => e.id === params.get("id"));
      if (select) {
        maState.setSelected(select);
      }
    } else {
      const select = data.find((e) => e.isPrimary === true);
      if (select) {
        maState.setSelected(select);
      }
    }
  }, [data]);

  if (maList().length === 0) {
    return null;
  }

  return (
    <Carousel className="lg:w-full w-[90%] mx-auto mt-20">
      <CarouselContent className="">
        {maList().map((e, index) => (
          <CarouselItem
            className="lg:basis-1/3 md:basis-1/2 basis-full"
            key={e.id + index}
          >
            <Card
              className={` border ${
                maState.selected?.id === e.id
                  ? "border-blue-500"
                  : "border-gray-200"
              } overflow-hidden text-center   bg-white duration-300`}
            >
              <CardHeader className="">
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {e.title}
                </CardTitle>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-bold">{e.kgPerUnit}</span> Kg Per Unit
                </p>
              </CardHeader>
              <CardFooter
                onClick={() => maState.setSelected(e)}
                className="donateBtn rounded-none cursor-pointer text-white text-center flex justify-center items-center p-3 text-sm font-medium transition-colors duration-300"
              >
                Apply Your Impact
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-between items-center mt-4">
        <CarouselPrevious className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors duration-200">
          Previous
        </CarouselPrevious>
        <CarouselNext className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors duration-200">
          Next
        </CarouselNext>
      </div>
    </Carousel>
  );
}

export default MicroActionsList;
