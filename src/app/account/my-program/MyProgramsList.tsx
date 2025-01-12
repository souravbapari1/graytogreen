"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collection } from "@/interface/collection";
import { FSLPItem } from "./fslp";
import { useState } from "react";
import { formatTimestampCustom } from "@/helper/dateTime";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { genPbFiles } from "@/request/actions";
import { Badge } from "@/components/ui/badge";
import { montserrat } from "@/fonts/font";

export const MyProgramsList = ({ data }: { data: Collection<FSLPItem> }) => {
  const cancel = data.items.filter((e) => e.status == "cancel");
  const pending = data.items.filter((e) => e.status == "pending");
  const approved = data.items.filter((e) => e.status == "approved");
  // const complete = data.items.filter((e) => e.status == "complete");

  const [selected, setSelected] = useState<FSLPItem[]>(data.items);
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="grid md:grid-cols-3 gap-5">
      {/* <div className="">
      <div className="w-full h-auto max-h-[calc(100vh-130px)] bg-primary/5 md:sticky top-24 overflow-auto p-6  rounded-2xl ">
        <div className="flex flex-col gap-4">
          {["The Future Sustainability Leaders Program (FSLP)"].map(
            (e, i) => {
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
            }
          )}
        </div>
      </div>
    </div> */}
      <div className="md:col-span-3">
        <Tabs
          defaultValue="all"
          onValueChange={(e) => {
            setActiveTab(e);
            if (e == "pending") {
              setSelected(pending);
            } else if (e == "approved") {
              setSelected(approved);
            } else if (e == "all") {
              setSelected(data.items);
            } else if (e == "cancel") {
              setSelected(cancel);
            }
          }}
          value={activeTab}
        >
          <TabsList>
            <TabsTrigger value="all">All ({data.items.length})</TabsTrigger>
            <TabsTrigger value="pending">
              Pending ({pending.length})
            </TabsTrigger>
            <TabsTrigger value="approved">
              Approved ({approved.length})
            </TabsTrigger>
            {/* <TabsTrigger value="complete">
              Complete ({complete.length})
            </TabsTrigger> */}
            <TabsTrigger value="cancel">Rejected ({cancel.length})</TabsTrigger>
          </TabsList>
        </Tabs>
        <br />
        <hr />
        <br />
        {selected.length == 0 && <p>No Data Found</p>}
        <div className="grid md:grid-cols-2 gap-5">
          {selected.map((e, i) => {
            return (
              <Card className=" border-none">
                <CardHeader>
                  <CardTitle>You’re a Participant</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-2">
                    Program: The Future Sustainability Leaders Program
                  </p>
                  <Badge className="shadow-none capitalize" variant="secondary">
                    Status: {e.status}
                  </Badge>
                  <br />
                  <br />

                  <ul>
                    <li>
                      Name:{" "}
                      {e.application.firstName + " " + e.application.lastName}
                    </li>
                    <li>Email: {e.application.emailID}</li>
                    <li>Mobile: {e.application.mobileNo}</li>
                  </ul>
                  <p className="text-sm font-semibold mt-4">
                    Date: {formatTimestampCustom(e.created)}
                  </p>

                  <Link
                    href={`/account/my-program/view/${e.id}`}
                    className="mt-4"
                  >
                    <Button className="shadow-none mt-4">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
