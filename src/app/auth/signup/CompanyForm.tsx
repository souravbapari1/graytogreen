"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

function CompanyApplicationForm({
  onChange,
  type,
}: {
  type: "Individual" | "Ambassador" | "Company" | null;
  onChange: Function;
}) {
  const [formData, setFormData] = useState({
    title: "Mr.",
    name: "",
    position: "",
    phone: "",
    email: "",
    companyName: "",
    website: "",
    industry: "",
    companySize: "",
    countryCity: "",
    reasons: [],
    heardFrom: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: any) => {
    const { value, checked } = e.target;
    setFormData((prevState: any) => {
      if (checked) {
        return {
          ...prevState,
          reasons: [...prevState.reasons, value],
        };
      } else {
        return {
          ...prevState,
          reasons: prevState.reasons.filter((reason: any) => reason !== value),
        };
      }
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="container py-10">
      <FaArrowLeft
        size={20}
        className="bg-primary/10 w-14 h-14 md:mx-0 mx-auto mb-8 flex justify-center items-center p-4 cursor-pointer rounded-full text-primary"
        onClick={() => onChange(null)}
      />
      <h1 className={` md:text-4xl text-lg font-bold mb-3`}>
        Create {type} Account
      </h1>
      <p className="md:text-base text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        molestiae, nam id, architecto officiis omnis minus deserunt assumenda
        fugiat voluptates saepe numquam? Sapiente fuga fugit tenetur pariatur
        alias at perferendis?
      </p>
      <div className="flex justify-start items-start text-left gap-2 text-sm mt-4 font-semibold text-gray-800">
        <p>Already Have An Account?</p>
        <Link href="/auth/signin" replace className="text-main ">
          Login
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div>
          <label className="font-medium">Mr. / Mis. *</label>
          <Select
            name="title"
            onValueChange={(value) =>
              setFormData({ ...formData, title: value })
            }
          >
            <SelectTrigger className="w-full p-6 rounded-none shadow-none mt-2">
              <SelectValue placeholder="Select Title" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mr.">Mr.</SelectItem>
              <SelectItem value="Mis.">Mis.</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="font-medium">Applicant Name *</label>
          <Input
            className="p-6 rounded-none shadow-none mt-2"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="font-medium">Position *</label>
          <Input
            className="p-6 rounded-none shadow-none mt-2"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="font-medium">Phone Number *</label>
          <Input
            className="p-6 rounded-none shadow-none mt-2"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="font-medium">Email Address (Company Email) *</label>
          <Input
            className="p-6 rounded-none shadow-none mt-2"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="font-medium">Company/ Organization Name *</label>
          <Input
            className="p-6 rounded-none shadow-none mt-2"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="font-medium">Company/ Organization Website *</label>
          <Input
            className="p-6 rounded-none shadow-none mt-2"
            name="website"
            value={formData.website}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="font-medium">Industry *</label>
          <Select
            name="industry"
            onValueChange={(value) =>
              setFormData({ ...formData, industry: value })
            }
          >
            <SelectTrigger className="w-full p-6 rounded-none shadow-none mt-2">
              <SelectValue placeholder="Select Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="food_and_drink">Food and Drink</SelectItem>
              <SelectItem value="energy_and_mining">
                Energy and Mining
              </SelectItem>
              <SelectItem value="oil_and_gas_services">
                Oil and Gas Services
              </SelectItem>
              <SelectItem value="healthcare_and_pharmaceutical_services">
                Healthcare and Pharmaceutical Services
              </SelectItem>
              <SelectItem value="education_and_training">
                Education and Training
              </SelectItem>
              <SelectItem value="real_estate_construction_and_contracting">
                Real Estate, Construction and Contracting
              </SelectItem>
              <SelectItem value="financial_services_investment_and_insurance">
                Financial Services, Investment and Insurance
              </SelectItem>
              <SelectItem value="transportation_and_logistics_services">
                Transportation and Logistics Services
              </SelectItem>
              <SelectItem value="communications_and_information_technology">
                Communications and Information Technology
              </SelectItem>
              <SelectItem value="environment_and_agriculture">
                Environment and Agriculture
              </SelectItem>
              <SelectItem value="retail_trade">Retail Trade</SelectItem>
              <SelectItem value="management_consulting_and_marketing">
                Management Consulting and Marketing
              </SelectItem>
              <SelectItem value="sports_and_entertainment">
                Sports and Entertainment
              </SelectItem>
              <SelectItem value="tourism_and_hospitality">
                Tourism and Hospitality
              </SelectItem>
              <SelectItem value="fashion">Fashion</SelectItem>
              <SelectItem value="media_and_news">Media and News</SelectItem>
              <SelectItem value="social_work">Social Work</SelectItem>
              <SelectItem value="entertainment">Entertainment</SelectItem>
              <SelectItem value="others">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="font-medium">Company/ Organization Size *</label>
          <Select
            name="companySize"
            onValueChange={(value) =>
              setFormData({ ...formData, companySize: value })
            }
          >
            <SelectTrigger className="w-full p-6 rounded-none shadow-none mt-2">
              <SelectValue placeholder="Select Company Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Start up Company">Start up Company</SelectItem>
              <SelectItem value="Small Facility (1-49 Employees)">
                Small Facility (1-49 Employees)
              </SelectItem>
              <SelectItem value="Medium Facility (50-249 Employees)">
                Medium Facility (50-249 Employees)
              </SelectItem>
              <SelectItem value="Large Facility (250 Employees and More)">
                Large Facility (250 Employees and More)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="font-medium">Country and City *</label>
          <Input
            className="p-6 rounded-none shadow-none mt-2"
            name="countryCity"
            value={formData.countryCity}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="font-medium">
          Reasons to be our Partner (Select multiple) *
        </label>
        <div className="flex flex-wrap gap-2">
          <label className="font-medium">
            <Checkbox value="Reason 1" onChange={handleCheckboxChange} /> Reason
            1
          </label>
          <label className="font-medium">
            <Checkbox value="Reason 2" onChange={handleCheckboxChange} /> Reason
            2
          </label>
          {/* Add other checkbox reasons */}
        </div>
      </div>
      <div className="mt-4">
        <label className="font-medium">From where you heard about us *</label>
        <Textarea
          className="p-6 rounded-none shadow-none mt-2"
          name="heardFrom"
          value={formData.heardFrom}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mt-7">
        <div className="flex justify-start items-center gap-2  cursor-pointer select-none">
          <label htmlFor="checked" className="flex items-center gap-2">
            <Checkbox
              className="rounded shadow-none border-gray-300 data-[state=checked]:border-primary"
              id="checked"
              checked
            />
            <span className="text-xs">
              Accept our{" "}
              <Link href="#" className="text-main">
                Privacy Policy
              </Link>{" "}
              &{" "}
              <Link className="text-main" href="#">
                Terms And Conditions
              </Link>
            </span>
          </label>
        </div>
      </div>
      <Button className="md:w-96 w-full rounded-none donateBtn py-6 font-bold mt-8 mb-10">
        Register Now
      </Button>
    </form>
  );
}

export default CompanyApplicationForm;
