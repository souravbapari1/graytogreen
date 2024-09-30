import React from "react";
import WorkSpace from "../components/workspace";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MdFileDownload } from "react-icons/md";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function page() {
  return (
    <WorkSpace>
      <h1 className="text-2xl font-bold">Payment Orders</h1>
      <p>Manage all your donations and payments from one place.</p>
      <br />
      <Tabs defaultValue="All">
        <TabsList>
          <TabsTrigger value="All">All</TabsTrigger>
          <TabsTrigger value="Pending">Pending</TabsTrigger>
          <TabsTrigger value="Failed">Failed</TabsTrigger>
          <TabsTrigger value="Complete">Complete</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid lg:grid-cols-2 gap-10 mt-6 mb-10">
        {Array.from({ length: 10 }).map((e) => {
          return (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div className="">
                    <h3 className="font-semibold">
                      Support Plant-for-the-Planet
                    </h3>
                    <p>September 29, 2024</p>
                  </div>
                  <div className="">
                    <h3 className="font-semibold">€2.00</h3>
                    <p className="text-primary">Successful</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 border-t pt-5">
                  <div className="flex flex-col gap-5">
                    <div className="">
                      <h3 className="font-semibold">Status</h3>
                      <p>Successful</p>
                    </div>
                    <div className="">
                      <h3 className="font-semibold">Paid Amount</h3>
                      <p>€2.00</p>
                    </div>
                    <div className="">
                      <h3 className="font-semibold">Reference</h3>
                      <p>001480069</p>
                    </div>
                    <div className="">
                      <h3 className="font-semibold">Downloads</h3>
                      <p className="font-semibold text-primary flex justify-normal items-center  gap-3">
                        <MdFileDownload />
                        Certificate
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="">
                      <h3 className="font-semibold">Date Created</h3>
                      <p>September 29, 2024</p>
                    </div>
                    <div className="">
                      <h3 className="font-semibold">Payment Method</h3>
                      <p>Credit/Debit Card</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="">
                      <h3 className="font-semibold">Last Updated</h3>
                      <p>September 29, 2024</p>
                    </div>
                    <div className="">
                      <h3 className="font-semibold">Project Name</h3>
                      <p>Support Plant-for-the-Planet</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </WorkSpace>
  );
}

export default page;
