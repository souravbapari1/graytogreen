"use client";

import { Input } from "@/components/ui/input";
import PhoneInput from "react-phone-number-input";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

function PartnerForm() {
  return (
    <div>
      <div className="container">
        <h1 className="text-left font-bold text-2xl ">
          Create Partner Account
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="">
            <label className="font-medium">Applicante Name</label>
            <Input className="p-5  shadow-none mt-2" />
          </div>
          <div className="">
            <label className="font-medium">Position</label>
            <Input className="p-5  shadow-none mt-2" />
          </div>
          <div>
            <label className="font-medium">Phone Number *</label>
            <PhoneInput
              onChange={(value) => {}}
              name="phone"
              // value={formData.phone}
              // onChange={(value) =>
              //   setFormData({ ...formData, phone: value || "" })
              // }
              required
            />
          </div>
          <div className="">
            <label className="font-medium">Gender</label>
            <Select>
              <SelectTrigger className="w-full p-5  shadow-none mt-2">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="">
            <label className="font-medium">Email Address</label>
            <Input className="p-5 shadow-none mt-2" />
          </div>
        </div>
        <br />
        <Button className="shadow-none">Next</Button>
      </div>
    </div>
  );
}

export default PartnerForm;
