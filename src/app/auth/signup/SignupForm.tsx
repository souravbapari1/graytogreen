import { CityDropdown } from "@/components/complete/city-dropdown";
import { CountryDropdown } from "@/components/complete/country-dropdown";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { client, extractErrors } from "@/request/actions";
import { createUser } from "@/request/worker/users";
import { LoaderCircle } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

function SignupForm({
  onChange,
  type,
}: {
  type: "Individual" | "Ambassador" | "Company" | null;
  onChange: Function;
}) {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  // State for each form field
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    country: "",
    city: "",
    gender: "",
    socialState: "",
    dob: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
    othersState: "",
    breef: "",
    whyYouHere: "",
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateState = () => {
    if (formData.firstName === "") {
      toast.toast({
        title: "Please Enter First Name",
        description: "Please enter your first name.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.lastName === "") {
      toast.toast({
        title: "Please Enter Last Name",
        description: "Please enter your last name.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.email === "") {
      toast.toast({
        title: "Please Enter Email",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.mobileNo === "") {
      toast.toast({
        title: "Please Enter Mobile Number",
        description: "Please enter your mobile number.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.country === "") {
      toast.toast({
        title: "Please Enter Country or City",
        description: "Please enter your country or city.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.gender === "") {
      toast.toast({
        title: "Please Enter Gender",
        description: "Please enter your gender.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.socialState === "") {
      toast.toast({
        title: "Please Enter Social State",
        description: "Please enter your social state.",
        variant: "destructive",
      });
      return false;
    }
    if (formData.socialState === "other" && formData.othersState === "") {
      toast.toast({
        title: "Please Enter Social State",
        description: "Please enter your social state.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.dob === "") {
      toast.toast({
        title: "Please Enter Date of Birth",
        description: "Please enter your date of birth.",
        variant: "destructive",
      });
      return false;
    }
    if (formData.whyYouHere === "") {
      toast.toast({
        title: "Please Select",
        description: "How did you hear about the Grey to Green platform?",
        variant: "destructive",
      });
      return false;
    }

    if (formData.password === "") {
      toast.toast({
        title: "Please Enter Password",
        description: "Please enter your password.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.confirmPassword === "") {
      toast.toast({
        title: "Please Enter Confirm Password",
        description: "Please enter your confirm password.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.termsAccepted === false) {
      toast.toast({
        title: "Please Accept Terms and Conditions",
        description: "Please accept the terms and conditions.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.toast({
        title: "Passwords do not match",
        description: "Please enter the same password in both fields.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };
  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateState()) {
      try {
        setLoading(true);
        const res = await createUser({
          email: formData.email,
          emailVisibility: true,
          password: formData.password,
          passwordConfirm: formData.confirmPassword,
          first_name: formData.firstName,
          last_name: formData.lastName,
          mobile_no: formData.mobileNo,
          country: formData.country,
          city: formData.city,
          gender: formData.gender,
          socail_state: formData.socialState
            ? formData.socialState
            : formData.othersState,
          dob: formData.dob,
          user_type: "individual",
          company: "",
          role: "USER",
          tree_orders: [],
          complete: true,
          breef: formData.breef,
          whyYouHere: formData.whyYouHere,
        });
        if (type?.trim().toLocaleLowerCase() === "ambassador") {
          await client
            .post("/api/collections/ambassador_requests/records")
            .json({
              user: res.id,
              status: "pending",
            })
            .send();
        }
        localStorage.setItem("user", JSON.stringify(res));
        const auth = await signIn("credentials", {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });
        console.log(auth);

        if (auth?.ok) {
          window.location.replace("/account");
        }

        console.log(res);
      } catch (error: any) {
        const message = extractErrors(error?.response);
        console.log(message);
        console.log("Work");
        setLoading(false);
        toast.toast({
          title: message[0],
          description: message[0],
          variant: "destructive",
        });
        console.log(error);
      }
    }
    // Perform registration logic here
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container md:py-20 py-10">
      <FaArrowLeft
        size={20}
        className="bg-primary/10 w-14 h-14 md:mx-0 mx-auto mb-8 flex justify-center items-center p-4 cursor-pointer rounded-full text-primary"
        onClick={() => onChange(null)}
      />
      <h1 className="md:text-4xl text-lg font-bold mb-3">
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
        <Link href="/auth/signin" replace className="text-main">
          Login
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 gap-5 mt-8"
      >
        <div>
          <Label>First Name</Label>
          <Input
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="py-6 mt-2 shadow-none rounded-none"
          />
        </div>
        <div>
          <Label>Last Name</Label>
          <Input
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="py-6 mt-2 shadow-none rounded-none"
          />
        </div>
        <div>
          <Label>Email ID</Label>
          <Input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="py-6 mt-2 shadow-none rounded-none"
          />
        </div>
        <div>
          <Label>Mobile NO</Label>
          <Input
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleInputChange}
            className="py-6 mt-2 shadow-none rounded-none"
          />
        </div>
        <div>
          <Label>Country</Label>
          <CountryDropdown
            value={formData.country}
            onChange={(value) => handleSelectChange("country", value)}
            className="py-6 mt-2 shadow-none rounded-none w-full"
          />
        </div>
        <div>
          <Label>City</Label>
          <CityDropdown
            country={formData.country}
            value={formData.city}
            onChange={(value) => handleSelectChange("city", value)}
            className="py-6 mt-2 shadow-none rounded-none w-full"
          />
        </div>
        <div>
          <Label>Gender</Label>
          <Select
            onValueChange={(value) => handleSelectChange("gender", value)}
          >
            <SelectTrigger className="w-full py-6 mt-2 shadow-none rounded-none">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="others">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Social State</Label>
          <Select
            onValueChange={(value) => handleSelectChange("socialState", value)}
          >
            <SelectTrigger className="w-full py-6 mt-2 shadow-none rounded-none">
              <SelectValue placeholder="Select social state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Student">Student</SelectItem>
              <SelectItem value="Graduated">Graduated</SelectItem>
              <SelectItem value="Job Seeker">Job Seeker</SelectItem>
              <SelectItem value="Private Sector Employee">
                Private Sector Employee
              </SelectItem>
              <SelectItem value="Government Employee">
                Government Employee
              </SelectItem>
              <SelectItem value="Entrepreneur">Entrepreneur</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {formData.socialState === "other" && (
          <div>
            <Label>Enter Your Social State</Label>
            <Input
              name="othersState"
              value={formData.othersState}
              onChange={handleInputChange}
              className="py-6 mt-2 shadow-none rounded-none w-full"
            />
          </div>
        )}
        <div>
          <Label>DOB</Label>
          <Input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            className="py-6 mt-2 shadow-none w-full block rounded-none"
          />
        </div>
        <div className="md:col-span-3">
          <div className="">
            <Label>How did you hear about the Grey to Green platform?</Label>
            <Select
              name="whyYouHere"
              onValueChange={(e) => {
                handleSelectChange("whyYouHere", e);
              }}
            >
              <SelectTrigger className="w-full py-6 mt-2 shadow-none rounded-none">
                <SelectValue placeholder="Select marketing source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Social media">
                  Social Media (LinkedIn, Facebook, Instagram, etc.)
                </SelectItem>
                <SelectItem value="Search engine">
                  Search Engine (Google, Bing, etc.)
                </SelectItem>
                <SelectItem value="Email newsletter">
                  Email Newsletter
                </SelectItem>
                <SelectItem value="Online ads">
                  Online Ads (Google Ads, Facebook Ads, etc.)
                </SelectItem>
                <SelectItem value="Blogs or articles">
                  Blogs or Articles
                </SelectItem>
                <SelectItem value="Affiliate links">Affiliate Links</SelectItem>
                <SelectItem value="Customer review sites">
                  Customer Review Sites
                </SelectItem>
                <SelectItem value="Promotional videos">
                  Promotional Videos
                </SelectItem>
                <SelectItem value="Television">Television</SelectItem>
                <SelectItem value="Newspaper">Newspaper</SelectItem>
                <SelectItem value="Podcast">Podcast</SelectItem>
                <SelectItem value="Webinar">Webinar</SelectItem>
                <SelectItem value="Corporate outing/social">
                  Corporate Outing/Social
                </SelectItem>
                <SelectItem value="Networking event">
                  Networking Event
                </SelectItem>
                <SelectItem value="Training seminar">
                  Training Seminar
                </SelectItem>
                <SelectItem value="Ambassador">Ambassador</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label>Password</Label>
          <Input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            className="py-6 mt-2 shadow-none rounded-none"
          />
        </div>
        <div>
          <Label>Confirm Password</Label>
          <Input
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            type="password"
            className="py-6 mt-2 shadow-none rounded-none"
          />
        </div>
        <div className="md:col-span-3">
          <div className="flex justify-start items-center gap-2 cursor-pointer select-none">
            <Checkbox
              id="termsAccepted"
              checked={formData.termsAccepted}
              onClick={(checked) =>
                setFormData((prevData) => ({
                  ...prevData,
                  termsAccepted: !formData.termsAccepted,
                }))
              }
              className="rounded shadow-none border-gray-300 data-[state=checked]:border-primary"
            />
            <label htmlFor="termsAccepted" className="text-xs">
              Accept our{" "}
              <Link href="#" className="text-main">
                Privacy Policy
              </Link>{" "}
              &{" "}
              <Link className="text-main" href="#">
                Terms And Conditions
              </Link>
            </label>
          </div>
          <Button
            disabled={loading}
            type="submit"
            className="md:w-96 w-full rounded-none donateBtn py-6 font-bold mt-8 mb-10"
          >
            {loading && (
              <LoaderCircle size={15} className="mr-3 animate-spin" />
            )}{" "}
            Register Now
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
