import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

function RegisterForm() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6">
        <div className="">
          <Label className="text-lg text-gray-600">Gender</Label>
          <Select>
            <SelectTrigger className="w-full p-6 mt-2 shadow-none">
              <SelectValue placeholder="Male" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Male</SelectItem>
              <SelectItem value="dark">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="">
          <p className="font-medium mb-2 text-gray-600">
            First Name
            <span className="text-red-600 text-xl font-bold ">*</span>
          </p>
          <Input className="p-6 shadow-none" />
        </div>
        <div className="">
          <p className="font-medium mb-2 text-gray-600">
            Last Name
            <span className="text-red-600 text-xl font-bold ">*</span>
          </p>
          <Input className="p-6 shadow-none" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="">
          <p className="font-medium mb-2 text-gray-600">
            Mobile No
            <span className="text-red-600 text-xl font-bold ">*</span>
          </p>
          <Input className="p-6 shadow-none" />
        </div>
        <div className="">
          <p className="font-medium mb-2 text-gray-600">
            Email ID
            <span className="text-red-600 text-xl font-bold ">*</span>
          </p>
          <Input className="p-6 shadow-none" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="">
          <p className="font-medium mb-2 text-gray-600">
            Address
            <span className="text-red-600 text-xl font-bold ">*</span>
          </p>
          <Input className="p-6 shadow-none" />
        </div>
        <div className="">
          <p className="font-medium mb-2 text-gray-600">
            City
            <span className="text-red-600 text-xl font-bold ">*</span>
          </p>
          <Input className="p-6 shadow-none" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="">
          <p className="font-medium mb-2 text-gray-600">
            Country
            <span className="text-red-600 text-xl font-bold ">*</span>
          </p>
          <Input className="p-6 shadow-none" />
        </div>
        <div className="">
          <p className="font-medium mb-2 text-gray-600">
            PostCode
            <span className="text-red-600 text-xl font-bold ">*</span>
          </p>
          <Input className="p-6 shadow-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-6">
        <div className="">
          <Label className="text-lg text-gray-600">Eduicational State</Label>
          <Select>
            <SelectTrigger className="w-full p-6 mt-2 shadow-none">
              <SelectValue placeholder="School Student" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">School Student</SelectItem>
              <SelectItem value="dark">Acadimic Student</SelectItem>
              <SelectItem value="job">Job Seeker</SelectItem>
              <SelectItem value="Employeee">Employeee</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-6">
        <p className="font-medium mb-2 text-gray-600">
          University or school Name
          <span className="text-red-600 text-xl font-bold ">*</span>
        </p>
        <Input className="p-6 shadow-none" />
      </div>

      <div className="mt-6">
        <p className="font-medium mb-2 text-gray-600">
          Cv or other document in Pdf
          <span className="text-red-600 text-xl font-bold ">*</span>
        </p>
        <Input className="h-12 pt-3 shadow-none" type="file" />
      </div>

      <div className="mt-6">
        <p className="font-medium mb-2 text-gray-600">
          Pic
          <span className="text-red-600 text-xl font-bold ">*</span>
        </p>
        <Input className="h-12 pt-3 shadow-none" type="file" />
      </div>
      <br />
      <Button className="p-6 shadow-none mt-5">Submit Your Registration</Button>
    </div>
  );
}

export default RegisterForm;
