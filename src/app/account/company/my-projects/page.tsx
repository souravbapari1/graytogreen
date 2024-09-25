import React from "react";
import WorkSpace from "../../components/workspace";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function MyProjects() {
  return (
    <WorkSpace>
      <Tabs defaultValue="All" className="w-full">
        <TabsList>
          <TabsTrigger value="All">All</TabsTrigger>
          <TabsTrigger value="Carbon Offset">Carbon Offset</TabsTrigger>
          <TabsTrigger value="Plastic Offset">Plastic Offset</TabsTrigger>
        </TabsList>
      </Tabs>
      <br />
      <Table className="border">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className="bg-gray-200">
          <TableRow>
            <TableHead className="border-r text-center text-nowrap p-4 ">
              ID
            </TableHead>
            <TableHead className="border-r text-center text-nowrap p-4 ">
              Project Name
            </TableHead>
            <TableHead className="border-r text-center text-nowrap p-4 ">
              Project Type
            </TableHead>
            <TableHead className="border-r text-center text-nowrap p-4 ">
              Interventions
            </TableHead>
            <TableHead className="border-r text-center text-nowrap p-4 ">
              Country/City
            </TableHead>
            <TableHead className="border-r text-center text-nowrap p-4 ">
              Start Date
            </TableHead>
            <TableHead className="border-r text-center text-nowrap p-4 ">
              Status
            </TableHead>
            <TableHead className="border-r text-center text-nowrap p-4 ">
              Amount
            </TableHead>
            <TableHead className="border-r text-center text-nowrap p-4 ">
              Unit Type
            </TableHead>
            <TableHead className="border-r text-center text-nowrap p-4 ">
              Registration Doc
            </TableHead>
            <TableHead className="text-center">Financial Reports</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 100 }).map((e, i) => {
            return (
              <TableRow>
                <TableCell className="border-r text-center text-nowrap p-4 ">
                  INV001
                </TableCell>
                <TableCell className="border-r text-center text-nowrap p-4 ">
                  Paid
                </TableCell>
                <TableCell className="border-r text-center text-nowrap p-4 ">
                  Credit Card
                </TableCell>
                <TableCell className="border-r text-center text-nowrap p-4 ">
                  Credit Card
                </TableCell>
                <TableCell className="border-r text-center text-nowrap p-4 ">
                  Credit Card
                </TableCell>
                <TableCell className="border-r text-center text-nowrap p-4 ">
                  Credit Card
                </TableCell>
                <TableCell className="border-r text-center text-nowrap p-4 ">
                  Credit Card
                </TableCell>
                <TableCell className="border-r text-center text-nowrap p-4 ">
                  Credit Card
                </TableCell>
                <TableCell className="border-r text-center text-nowrap p-4 ">
                  Credit Card
                </TableCell>
                <TableCell className="border-r text-center text-nowrap p-4 ">
                  Credit Card
                </TableCell>

                <TableCell className="text-center">$250.00</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <br />
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </WorkSpace>
  );
}

export default MyProjects;
