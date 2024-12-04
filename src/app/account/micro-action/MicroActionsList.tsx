"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

function MicroActionsList() {
  return (
    <Carousel className="lg:w-full w-[82%] mx-auto mt-10">
      <CarouselContent>
        {[...Array(10)].map((_, index) => (
          <CarouselItem className="lg:basis-1/3 md:basis-1/2 basis-full">
            <Card className="shadow-none overflow-hidden border text-center bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl">Micro Actions</CardTitle>
                <p>
                  <span className="font-bold">4 </span> Kg Per Unit
                </p>
              </CardHeader>
              <CardFooter className="bg-primary select-none cursor-pointer text-center flex justify-center items-center p-0 h-10 text-white text-xs">
                <p>Apply</p>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default MicroActionsList;
