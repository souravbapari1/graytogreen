"use client";
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
import React, { useCallback, useState } from "react";
import countryData from "@/data/citycountry.json";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { submitFslpRegistration } from "./handelActions";
import { useSession } from "next-auth/react";
import { set } from "date-fns";
import toast from "react-hot-toast";
import { CheckCheck } from "lucide-react";
import Link from "next/link";
import { UserItem } from "@/interface/user";

export interface FormState {
  firstName: string;
  lastName: string;
  mobileNo: string;
  emailID: string;
  address: string;
  city: string;
  country: string;
  postCode: string;
  eduState: string;
  universityName: string;
  document: File | null;
  pic: File | null;
  gender: string;
  dob: string;
  nationality: string;
  sortBreif: string;
}

interface FormErrors {
  firstName: string;
  lastName: string;
  mobileNo: string;
  emailID: string;
  dob: string;
  address: string;
  city: string;
  country: string;
  postCode: string;
  eduState: string;
  universityName: string;
  document: string;
  pic: string;
  gender: string;
  nationality: string;
  sortBreif: string;
}

const RegisterForm = ({ user }: { user: UserItem }) => {
  const [state, setState] = React.useState<FormState>({
    gender: user.gender || "",
    firstName: user.first_name || "",
    lastName: user.last_name || "",
    mobileNo: user.mobile_no || "",
    emailID: user.email || "",
    address: user.country || "",
    city: user.city || "",
    country: user.country || "",
    postCode: "N/A",
    eduState: "",
    universityName: "",
    document: null,
    pic: null,
    dob: user.dob || "",
    nationality: "",
    sortBreif: "",
  });

  const [errors, setErrors] = React.useState<FormErrors>({
    gender: "",
    firstName: "",
    lastName: "",
    mobileNo: "",
    emailID: "",
    address: "",
    city: "",
    country: "",
    postCode: "",
    eduState: "",
    universityName: "",
    document: "",
    pic: "",
    dob: "",
    nationality: "",
    sortBreif: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setState((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    }
  };

  const validate = (): boolean => {
    const errors: FormErrors = {
      dob: "",
      gender: "",
      firstName: "",
      lastName: "",
      mobileNo: "",
      emailID: "",
      address: "",
      city: "",
      country: "",
      postCode: "",
      eduState: "",
      universityName: "",
      document: "",
      pic: "",
      nationality: "",
      sortBreif: "",
    };

    // if (state.gender.trim() === "") {
    //   errors.gender = "Gender is required";
    // }

    if (state.firstName.trim() === "") {
      errors.firstName = "First Name is required";
    }
    if (state.lastName.trim() === "") {
      errors.lastName = "Last Name is required";
    }
    // if (state.mobileNo.trim() === "") {
    //   errors.mobileNo = "Mobile No is required";
    // }
    if (state.emailID.trim() === "") {
      errors.emailID = "Email ID is required";
    }
    // if (state.address.trim() === "") {
    //   errors.address = "Address is required";
    // }
    // if (state.city.trim() === "") {
    //   errors.city = "City is required";
    // }
    // if (state.country.trim() === "") {
    //   errors.country = "Country is required";
    // }
    // if (state.postCode.trim() === "") {
    //   errors.postCode = "PostCode is required";
    // }
    if (state.eduState.trim() === "") {
      errors.eduState = "Educational State is required";
    }
    if (state.universityName.trim() === "") {
      errors.universityName = "University or School Name is required";
    }
    if (!state.document) {
      errors.document = "CV or other document in PDF is required";
    }
    // if (!state.pic) {
    //   errors.pic = "Picture is required";
    // }

    // if (state.dob.trim() === "") {
    //   errors.dob = "Date of Birth is required";
    // }

    if (state.nationality.trim() === "") {
      errors.nationality = "Nationality is required";
    }

    if (state.sortBreif.trim() === "") {
      errors.sortBreif = "Sort Breif is required";
    }

    setErrors(errors);
    console.log(errors);

    return Object.keys(errors).every((key) => !errors[key as keyof FormErrors]);
  };

  const handleSubmit = () => {
    console.log(state);
    console.log(validate());

    if (validate()) {
      addNewRequest();
    }
  };

  const getCountryCities = useCallback(() => {
    const cData = countryData.data.find(
      (item) => item.country === state.country
    );
    return cData ? cData.cities : [];
  }, [state.country]);

  const session = useSession();
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const addNewRequest = () => {
    try {
      toast.loading("Registering...");
      setLoading(true);
      const res = submitFslpRegistration(state, session?.data?.user.id || "");
      setLoading(false);
      setIsSubmit(true);
      toast.dismiss();
      toast.success("Application submitted successfully");
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.dismiss();
      toast.error("Application submission failed");
    }
  };

  if (isSubmit) {
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
    <div>
      <div className="grid grid-cols-1 gap-6">
        {/* <div>
          <Label className="text-lg text-gray-600">Gender</Label>
          <Select
            value={state.gender}
            onValueChange={(e) => {
              setState((prevState) => ({
                ...prevState,
                gender: e,
              }));
              setErrors((prevState) => ({
                ...prevState,
                gender: "",
              }));
            }}
          >
            <SelectTrigger className="w-full p-6 mt-2 shadow-none">
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
          {errors.gender && (
            <p className="text-red-600 text-xs mt-1">{errors.gender}</p>
          )}
        </div> */}
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div>
          <Label className="font-medium mb-2 text-gray-600">
            First Name<span className="text-red-600">*</span>
          </Label>
          <Input
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
            className="py-6 mt-2"
          />
          {errors.firstName && (
            <p className="text-red-600 text-xs mt-1">{errors.firstName}</p>
          )}
        </div>
        <div>
          <Label className="font-medium mb-2 text-gray-600">
            Last Name<span className="text-red-600">*</span>
          </Label>
          <Input
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
            className="py-6 mt-2"
          />
          {errors.lastName && (
            <p className="text-red-600 text-xs mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div>
          <Label className="font-medium mb-2 text-gray-600">
            Mobile No<span className="text-red-600">*</span>
          </Label>
          <Input
            name="mobileNo"
            value={state.mobileNo}
            onChange={handleChange}
            className="py-6 mt-2"
          />
          {errors.mobileNo && (
            <p className="text-red-600 text-xs mt-1">{errors.mobileNo}</p>
          )}
        </div>
        <div>
          <Label className="font-medium mb-2 text-gray-600">
            Email ID<span className="text-red-600">*</span>
          </Label>
          <Input
            name="emailID"
            value={state.emailID}
            onChange={handleChange}
            className="py-6 mt-2"
          />
          {errors.emailID && (
            <p className="text-red-600 text-xs mt-1">{errors.emailID}</p>
          )}
        </div>
      </div>
      {/* <div className="mt-4">
        <Label className="font-medium mb-2  text-gray-600">
          DOB<span className="text-red-600">*</span>
        </Label>
        <Input
          name="dob"
          type="date"
          value={state.dob}
          onChange={handleChange}
          className="py-6 mt-2 block"
        />
        {errors.dob && (
          <p className="text-red-600 text-xs mt-1">{errors.dob}</p>
        )}
      </div> */}

      <div className="mt-6">
        <Label className="font-medium mb-2 text-gray-600">
          Nationality<span className="text-red-600">*</span>
        </Label>
        <Input
          name="nationality"
          value={state.nationality}
          onChange={handleChange}
          className="py-6 mt-2"
        />
        {errors.nationality && (
          <p className="text-red-600 text-xs mt-1">{errors.nationality}</p>
        )}
      </div>

      <div className="mt-4">
        <Label className="font-medium mb-2  text-gray-600">
          Are You Currently ?<span className="text-red-600">*</span>
        </Label>

        <Select
          name="eduState"
          value={state.eduState}
          onValueChange={(e) => {
            setState((prevState) => ({
              ...prevState,
              eduState: e,
            }));
            setErrors((prevState) => ({
              ...prevState,
              eduState: "",
            }));
          }}
        >
          <SelectTrigger className="py-6 mt-2">
            <SelectValue placeholder="Select Country" />
          </SelectTrigger>
          <SelectContent>
            {[
              "School Student",
              "Academic Student (University or College)",
              "Academic or Individual Researcher",
              "Job Seeker",
              "Employee",
              "Other",
            ].map((value, index) => (
              <SelectItem key={index} value={value}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {errors.eduState && (
          <p className="text-red-600 text-xs mt-1">{errors.eduState}</p>
        )}
      </div>
      {/* <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div>
          <Label className="font-medium mb-2 text-gray-600">
            Address<span className="text-red-600">*</span>
          </Label>
          <Input
            name="address"
            value={state.address}
            onChange={handleChange}
            className="py-6 mt-2"
          />
          {errors.address && (
            <p className="text-red-600 text-xs mt-1">{errors.address}</p>
          )}
        </div>
        <div>
          <Label className="font-medium mb-2 text-gray-600">
            Country<span className="text-red-600">*</span>
          </Label>

          <Select
            name="country"
            value={state.country}
            onValueChange={(e) => {
              setState((prevState) => ({
                ...prevState,
                country: e,
              }));
              setErrors((prevState) => ({
                ...prevState,
                country: "",
              }));
            }}
          >
            <SelectTrigger className="py-6 mt-2">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              {countryData.data.map((country) => (
                <SelectItem key={country.country} value={country.country}>
                  {country.country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {errors.country && (
            <p className="text-red-600 text-xs mt-1">{errors.country}</p>
          )}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div>
          <Label className="font-medium mb-2 text-gray-600">
            City<span className="text-red-600">*</span>
          </Label>
          <Select
            name="city"
            value={state.city}
            onValueChange={(e) => {
              setState((prevState) => ({
                ...prevState,
                city: e,
              }));
              setErrors((prevState) => ({
                ...prevState,
                city: "",
              }));
            }}
          >
            <SelectTrigger className="py-6 mt-2">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              {getCountryCities().map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.city && (
            <p className="text-red-600 text-xs mt-1">{errors.city}</p>
          )}
        </div>
        <div>
          <Label className="font-medium mb-2 text-gray-600">
            PostCode<span className="text-red-600">*</span>
          </Label>
          <Input
            name="postCode"
            value={state.postCode}
            onChange={handleChange}
            className="py-6 mt-2"
          />
          {errors.postCode && (
            <p className="text-red-600 text-xs mt-1">{errors.postCode}</p>
          )}
        </div>
      </div> */}

      <div className="mt-6">
        <Label className="font-medium mb-2 text-gray-600">
          School/ Uiversity/ College / Institute / Company / Other Name
        </Label>
        <Input
          name="universityName"
          value={state.universityName}
          onChange={handleChange}
          className="py-6 mt-2"
        />
        {errors.universityName && (
          <p className="text-red-600 text-xs mt-1">{errors.universityName}</p>
        )}
      </div>

      <div className="mt-6">
        <Label className="font-medium mb-2 text-gray-600">
          Describe Briefly your experience during your volunteering period{" "}
          <span className="text-red-600">*</span>
        </Label>
        <Textarea
          name="sortBreif"
          value={state.sortBreif}
          onChange={handleChange}
          className="py-6 mt-2"
        />
        {errors.sortBreif && (
          <p className="text-red-600 text-xs mt-1">{errors.sortBreif}</p>
        )}
      </div>

      <div className="mt-6">
        <Label className="font-medium mb-2 text-gray-600">
          CV or Document (PDF)<span className="text-red-600">*</span>
        </Label>
        <Input
          type="file"
          name="document"
          className="h-12 flex justify-center items-center"
          onChange={handleFileChange}
        />
        {errors.document && (
          <p className="text-red-600 text-xs mt-1">{errors.document}</p>
        )}
      </div>
      {/* <div className="mt-6">
        <Label className="font-medium mb-2 text-gray-600">
          Upload Your Picture<span className="text-red-600">*</span>
        </Label>
        <Input
          type="file"
          className="h-12 flex justify-center items-center"
          name="pic"
          onChange={handleFileChange}
        />
        {errors.pic && (
          <p className="text-red-600 text-xs mt-1">{errors.pic}</p>
        )}
      </div> */}
      <Button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-6 py-6 px-10"
      >
        Submit Your Registration
      </Button>
    </div>
  );
};

export default RegisterForm;
