import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
function SubmitForm() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        Week 1 ( 1st -7th of Sep, 2024) Reporting
      </h1>
      <div className="">
        <div className="mt-20">
          <Label className="text-lg font-semibold">Summary Of This Week</Label>
          <Textarea className="shadow-none rounded-none mt-2 h-48" />
        </div>
        <div className="mt-20">
          <div className="flex justify-between items-center">
            <Label className="text-lg font-semibold">Events List</Label>
            <div className="flex justify-end cursor-pointer text-primary items-center gap-3 font-semibold">
              <p>Add</p>
              <FiPlusCircle size={24} />
            </div>
          </div>
          <div className="mt-5">
            <Table className="border ">
              <TableHeader className="bg-green-900/10 ">
                <TableRow>
                  <TableHead className="py-3 md:w-[30px] text-center">
                    SN
                  </TableHead>
                  <TableHead className="py-3 border-r border-l text-center">
                    Event Title
                  </TableHead>
                  <TableHead className="py-3 text-center border-r">
                    Activates
                  </TableHead>
                  <TableHead className="py-3 text-center border-r">
                    Outcomes
                  </TableHead>
                  <TableHead className="py-3 text-center w-[250px] ">
                    Media (Image, Vid , Doc)
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 6 }).map((e, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell className="py-3 text-center border-r">
                        {i + 1}
                      </TableCell>
                      <TableCell className=" text-center border-r">
                        <Input className="shadow-none rounded-none border-none" />
                      </TableCell>
                      <TableCell className="text-center border-r">
                        <Input className="shadow-none rounded-none border-none" />
                      </TableCell>
                      <TableCell className=" text-center border-r">
                        <Input className="shadow-none rounded-none border-none" />
                      </TableCell>
                      <TableCell className=" text-center flex justify-center items-center">
                        <input
                          type="file"
                          className="shadow-none rounded-none w-full pt-2 max-w-[300px] "
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex justify-between items-center">
            <Label className="text-lg font-semibold">
              Challenges you Faced How How You solved it
            </Label>
            <div className="flex justify-end cursor-pointer text-primary items-center gap-3 font-semibold">
              <p>Add</p>
              <FiPlusCircle size={24} />
            </div>
          </div>
          <div className="mt-5">
            <Table className="border ">
              <TableHeader className="bg-gray-900/10 ">
                <TableRow>
                  <TableHead className="py-3 md:w-[30px] text-center">
                    SN
                  </TableHead>
                  <TableHead className="py-3 border-r border-l text-center">
                    Challenges
                  </TableHead>
                  <TableHead className="py-3 text-center border-r">
                    What You Did?
                  </TableHead>

                  <TableHead className="py-3 text-center w-[250px] ">
                    Media (Image, Vid , Doc)
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 6 }).map((e, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell className="py-3 text-center border-r">
                        {i + 1}
                      </TableCell>
                      <TableCell className=" text-center border-r">
                        <Input className="shadow-none rounded-none border-none" />
                      </TableCell>
                      <TableCell className="text-center border-r">
                        <Input className="shadow-none rounded-none border-none" />
                      </TableCell>

                      <TableCell className=" text-center flex justify-center items-center">
                        <input
                          type="file"
                          className="shadow-none rounded-none w-full pt-2 max-w-[300px] "
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="mt-20">
          <Label className="text-lg font-semibold">Plan For Next Week</Label>
          <Textarea className="shadow-none rounded-none mt-2 h-48" />
        </div>
        <br />
        <br />
        <Button className="mb-20 p-6 border-none shadow-none">
          Submit Your Report
        </Button>
      </div>
    </div>
  );
}

export default SubmitForm;
