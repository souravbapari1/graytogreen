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
import Image from "next/image";

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
              } overflow-hidden text-center select-none relative rounded-none py-6 px-5 border-2  shadow-none  border-primary/10 bg-white duration-300`}
            >
              <Image
                src="/assets/arrow.png"
                width={40}
                height={40}
                alt=""
                style={{ transform: "rotate(90deg)" }}
                className="object-contain  absolute right-8 bottom-5   h-36 "
              />
              <Image
                src="/assets/testi-shape-3.png"
                width={40}
                height={40}
                alt=""
                className="object-contain  absolute left-0 -top-3  -rotate-[20deg]  w-14 "
              />
              <CardHeader className="">
                <CardTitle className="text-md font-semibold text-gray-800">
                  {e.title}
                </CardTitle>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-bold">{e.kgPerUnit}</span> Kg Per Unit
                </p>
              </CardHeader>
              <CardFooter
                onClick={() => maState.setSelected(e)}
                className="donateBtn shadow-none rounded-md cursor-pointer text-white text-center flex justify-center items-center p-3 text-sm font-medium transition-colors duration-300"
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
