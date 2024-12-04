"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { UpcomingAcademyData } from "../../view/[id]/academy";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import countryData from "@/data/citycountry.json";
import { useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { submitAcademicRegistration } from "./actions";
import toast from "react-hot-toast";
import { useState } from "react";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

function ApplyForm({
  data,
}: {
  data: UpcomingAcademyData["upcomingAcademie"];
}) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [size, setSize] = React.useState("");

  const [country, setCountry] = React.useState("");
  const [city, setCity] = React.useState("");

  const [note, setNote] = React.useState("");
  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    size: "",
    note: "",
    country: "",
    city: "",
  });

  const handleSubmit = () => {
    const errors: any = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }
    if (!phone) {
      errors.phone = "Phone is required";
    }
    if (!age) {
      errors.age = "Age is required";
    }
    if (!gender) {
      errors.gender = "Gender is required";
    }
    if (!size) {
      errors.size = "Size is required";
    }
    if (!country) {
      errors.country = "Country is required";
    }
    if (!city) {
      errors.city = "City is required";
    }

    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      mutate.mutate();
    }
  };

  const getCountryCities = useCallback(() => {
    const cData = countryData.data.find((item) => item.country === country);
    return cData ? cData.cities : [];
  }, [country]);

  const mutate = useMutation({
    mutationKey: ["apply"],
    mutationFn: async () => {
      return await submitAcademicRegistration({
        academic: JSON.stringify(data),
        applicationData: JSON.stringify({
          name,
          email,
          phone,
          age,
          gender,
          size,
          country,
          city,
          note,
        }),
      });
    },
    onSuccess: () => {
      toast.success("Application submitted successfully");
      setSubmitted(true);
    },
    onError: () => {
      toast.error("Application submission failed");
    },
  });

  if (submitted) {
    return (
      <div className="flex flex-col gap-10 mt-10 justify-center items-center ">
        <div className="text-primary bg-primary/5 w-32 h-32 rounded-full flex justify-center items-center">
          <CheckCheck size={60} />
        </div>
        <h1 className="text-xl font-normal text-center">
          Application submitted successfully
        </h1>
        <Link href="/">
          <Button className="shadow-none mb-10">Back To Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="py-5 mt-1 shadow-none"
        />
        {errors.name && (
          <p className="text-red-600 text-xs mt-1 ml-2">{errors.name}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="py-5 mt-1 shadow-none"
        />
        {errors.email && (
          <p className="text-red-600 text-xs mt-1 ml-2">{errors.email}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Your Phone"
          className="py-5 mt-1 shadow-none"
        />
        {errors.phone && (
          <p className="text-red-600 text-xs mt-1 ml-2">{errors.phone}</p>
        )}
      </div>

      <div>
        <Label htmlFor="age">Age</Label>
        <Input
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Your Age"
          className="py-5 mt-1 shadow-none"
        />
        {errors.age && (
          <p className="text-red-600 text-xs mt-1 ml-2">{errors.age}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="gender">Gender</Label>
          <Select value={gender} onValueChange={(e) => setGender(e)}>
            <SelectTrigger className="w-full p-5 shadow-none font-semibold">
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
          {errors.gender && (
            <p className="text-red-600 text-xs mt-1 ml-2">{errors.gender}</p>
          )}
        </div>

        <div>
          <Label htmlFor="size">T-shirt Size</Label>
          <Select value={size} onValueChange={(e) => setSize(e)}>
            <SelectTrigger className="w-full p-5 shadow-none font-semibold">
              <SelectValue placeholder="Select Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="xs">XS</SelectItem>
              <SelectItem value="sm">SM</SelectItem>
              <SelectItem value="md">MD</SelectItem>
              <SelectItem value="lg">LG</SelectItem>
              <SelectItem value="xl">XL</SelectItem>
              <SelectItem value="xxl">XXL</SelectItem>
              <SelectItem value="xxxl">XXXL</SelectItem>
            </SelectContent>
          </Select>
          {errors.size && (
            <p className="text-red-600 text-xs mt-1 ml-2">{errors.size}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="country">Country</Label>
          <Select value={country} onValueChange={(e) => setCountry(e)}>
            <SelectTrigger className="w-full p-5 shadow-none font-semibold">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              {countryData.data.map((item) => (
                <SelectItem key={item.country} value={item.country}>
                  {item.country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.country && (
            <p className="text-red-600 text-xs mt-1 ml-2">{errors.country}</p>
          )}
        </div>

        <div>
          <Label htmlFor="city">City</Label>
          <Select value={city} onValueChange={(e) => setCity(e)}>
            <SelectTrigger className="w-full p-5 shadow-none font-semibold">
              <SelectValue placeholder="Select City" />
            </SelectTrigger>
            <SelectContent>
              {getCountryCities().map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.city && (
            <p className="text-red-600 text-xs mt-1 ml-2">{errors.city}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="note">Note</Label>
        <Textarea
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add a note (optional)"
          className="shadow-none"
        />
      </div>

      <Button
        className="p-6 mt-6 shadow-none"
        onClick={handleSubmit}
        disabled={mutate.isPending}
      >
        Submit Application
      </Button>
    </div>
  );
}

export default ApplyForm;
