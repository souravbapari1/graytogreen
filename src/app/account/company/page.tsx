import React from "react";
import WorkSpace from "../components/workspace";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Label } from "@/components/ui/label";
import { ChartViewComponent } from "../components/DataChart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Company() {
  return (
    <WorkSpace>
      <Tabs defaultValue="All" className="w-full">
        <TabsList>
          <TabsTrigger value="All">All</TabsTrigger>
          <TabsTrigger value="Carbon Offset">Carbon Offset</TabsTrigger>
          <TabsTrigger value="Plastic Offset">Plastic Offset</TabsTrigger>
          <TabsTrigger value="Others">Others</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="grid grid-cols-2 mt-6 gap-10">
        <div className="">
          <div className="grid grid-cols-2 gap-5 ">
            <Card x-chunk="dashboard-01-chunk-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium flex justify-between items-center w-full">
                  <p>My Balance (OMR)</p>
                  <p className="text-2xl text-gray-500">$</p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2350.00</div>
                <p className="text-xs text-muted-foreground">
                  Current your balance
                </p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium flex justify-between items-center w-full">
                  <p>Total Cost (OMR)</p>
                  <p className="text-2xl text-gray-500">$</p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2350.00</div>
                <p className="text-xs text-muted-foreground">
                  your cost balance
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10  flex items-end justify-end">
            <div className="w-full">
              <Label className="text-xs">Date From</Label>
              <Input
                type="date"
                className="block rounded-none border-r-0 border-b-0 "
              />
            </div>
            <div className="w-full">
              <Label className="text-xs">Date To</Label>
              <Input type="date" className="block rounded-none border-b-0" />
            </div>
            <div className="flex justify-end items-end flex-col">
              <Label className="text-xs "> </Label>
              <Button className="rounded-none">Apply</Button>
            </div>
          </div>
          <Table className="border">
            <TableCaption>A list of your recent Transaction.</TableCaption>
            <TableHeader className="bg-gray-100 ">
              <TableRow>
                <TableHead className="py-3 w-[160px] text-center">
                  Transaction ID
                </TableHead>
                <TableHead className="py-3 border-r border-l text-center">
                  Transaction Reasons
                </TableHead>
                <TableHead className="py-3 text-center border-r">
                  Date - Time
                </TableHead>
                <TableHead className="py-3 text-center">Amount (OMR)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 6 }).map((e, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell className="py-3 text-center border-r">
                      INV001
                    </TableCell>
                    <TableCell className="py-3 text-center border-r">
                      Carbon Offset
                    </TableCell>
                    <TableCell className="py-3 text-center border-r">
                      12/08/2022 - 12;23 PM
                    </TableCell>
                    <TableCell className="py-3 text-center">$250.00</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
        <div className="">
          <Card>
            <CardHeader className="flex justify-center items-end">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="2024" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">2024</SelectItem>
                  <SelectItem value="dark">2023</SelectItem>
                  <SelectItem value="system">2022</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <ChartViewComponent />
            </CardContent>
          </Card>
        </div>
      </div>
    </WorkSpace>
  );
}

export default Company;
