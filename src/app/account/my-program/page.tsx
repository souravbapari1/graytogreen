import React from "react";
import WorkSpace from "../components/workspace";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaMicrophoneAlt } from "react-icons/fa";
import { cn } from "@/lib/utils";

function page() {
  return (
    <WorkSpace>
      <h1 className="mb-10">Track and manage your Programs here.</h1>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="">
          <div className="w-full h-auto max-h-[calc(100vh-130px)] bg-primary/5 md:sticky top-24 overflow-auto p-6  rounded-2xl ">
            <div className="flex flex-col gap-4">
              {[
                "Academy Skills Up ( Climate Cange Ambassador)",
                "The Future Sustainability Leaders Program (FSLP)",
              ].map((e, i) => {
                return (
                  <Card className="shadow-none border-none overflow-hidden ">
                    <CardHeader
                      className={cn(
                        "py-3 font-semibold text-xs  px-4",
                        i == 0 && "bg-primary  text-white"
                      )}
                    >
                      <div className="flex items-center ">
                        <div className="w-12">
                          <FaMicrophoneAlt size={25} />
                        </div>
                        <h1>{e}</h1>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Active (2)</TabsTrigger>
              <TabsTrigger value="password">Past (0)</TabsTrigger>
            </TabsList>
          </Tabs>
          <br />
          <hr />
          <br />
          <div className="grid md:grid-cols-2 gap-5">
            {Array.from({ length: 10 }).map((e, i) => {
              return (
                <Card className=" border-none">
                  <CardHeader>
                    <CardTitle>You’re a Participant</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem, magni?  
                    </p>
                    <p className="text-sm font-semibold mt-4">
                      Date: 20/09/2024
                    </p>
                    <Button className="shadow-none mt-4">View Details</Button>
                  </CardContent>
                </Card>
              );
            })}
            <br />
            <br />
          </div>
        </div>
      </div>
    </WorkSpace>
  );
}

export default page;
