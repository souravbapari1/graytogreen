"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { MultiSelect } from "@/components/ui/multi-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { extractErrors } from "@/request/actions";
import { createCompanyRequest } from "@/request/worker/company";
import { createUser } from "@/request/worker/users";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
export const selectIndustryItems = [
  { value: "food and drink", label: "Food and Drink" },
  { value: "energy and mining", label: "Energy and Mining" },
  { value: "oil and gas services", label: "Oil and Gas Services" },
  {
    value: "healthcare and pharmaceutical services",
    label: "Healthcare and Pharmaceutical Services",
  },
  { value: "education and training", label: "Education and Training" },
  {
    value: "real estate construction and contracting",
    label: "Real Estate, Construction and Contracting",
  },
  {
    value: "financial services investment and insurance",
    label: "Financial Services, Investment and Insurance",
  },
  {
    value: "transportation and logistics services",
    label: "Transportation and Logistics Services",
  },
  {
    value: "communications and information technology",
    label: "Communications and Information Technology",
  },
  {
    value: "environment and agriculture",
    label: "Environment and Agriculture",
  },
  { value: "retail trade", label: "Retail Trade" },
  {
    value: "management consulting and marketing",
    label: "Management Consulting and Marketing",
  },
  { value: "sports and entertainment", label: "Sports and Entertainment" },
  { value: "tourism and hospitality", label: "Tourism and Hospitality" },
  { value: "fashion", label: "Fashion" },
  { value: "media and news", label: "Media and News" },
  { value: "social work", label: "Social Work" },
  { value: "entertainment", label: "Entertainment" },
  { value: "others", label: "Others" },
];

function CompanyApplicationForm({
  onChange,
  type,
}: {
  type: "Individual" | "Ambassador" | "Company" | null;
  onChange: Function;
}) {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    position: "",
    phone: "",
    email: "",
    companyName: "",
    website: "",
    industry: "",
    companySize: "",
    countryCity: "",
    reasons: [] as string[],
    heardFrom: "",
    password: "",
    confirmPassword: "",
  });

  const validateFields = () => {
    if (formData.title === "") {
      toast.toast({
        title: "Please select One Mr/MS",
        description: "Please select Mr/Ms.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.name === "") {
      toast.toast({
        title: "Please enter your Applicant Name.",
        description: "Please enter your Applicant Name.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.position === "") {
      toast.toast({
        title: "Please enter your Position.",
        description: "Please enter your Position.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.phone === "") {
      toast.toast({
        title: "Please enter your Phone Number.",
        description: "Please enter your Phone Number.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.email === "") {
      toast.toast({
        title: "Please enter your Email Address.",
        description: "Please enter your Email Address.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.companyName === "") {
      toast.toast({
        title: "Please enter your Company Name.",
        description: "Please enter your Company Name.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.website === "") {
      toast.toast({
        title: "Please enter your Company Website.",
        description: "Please enter your Company Website.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.industry === "") {
      toast.toast({
        title: "Please enter your Industry.",
        description: "Please enter your Industry.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.companySize === "") {
      toast.toast({
        title: "Please enter your Company Size.",
        description: "Please enter your Company Size.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.countryCity === "") {
      toast.toast({
        title: "Please enter your Country and City.",
        description: "Please enter your Country and City.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.reasons.length === 0) {
      toast.toast({
        title: "Please select at least one reason.",
        description: "Please select at least one reason.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.heardFrom === "") {
      toast.toast({
        title: "Please select how did you hear about us.",
        description: "Please select how did you hear about us.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.password === "") {
      toast.toast({
        title: "Please enter your Password.",
        description: "Please enter your Password.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.confirmPassword === "") {
      toast.toast({
        title: "Please confirm your Password.",
        description: "Please confirm your Password.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.toast({
        title: "Passwords do not match.",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validateFields()) {
      try {
        setLoading(true);
        createCompanyRequest({
          mr_ms: formData.title,
          application_name: formData.name,
          position: formData.position,
          company_name: formData.companyName,
          website: formData.website,
          Industry_type: formData.industry,
          size_hint: formData.companySize,
          city: formData.countryCity,
          country: formData.countryCity,
          about_us: formData.heardFrom,
          resonses: formData.reasons,
          approved_status: "pending",
        }).then(async (res) => {
          try {
            const user = await createUser({
              city: formData.countryCity,
              company: res.id,
              complete: true,
              country: formData.countryCity,
              email: formData.email,
              emailVisibility: true,
              first_name: formData.companyName,
              last_name: "",
              dob: "",
              gender: "",
              mobile_no: formData.phone,
              socail_state: "",
              role: "USER",
              tree_orders: [],
              user_type: "partner",
              password: formData.password,
              passwordConfirm: formData.confirmPassword,
            });

            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("company", JSON.stringify(res));

            const auth = await signIn("credentials", {
              redirect: false,
              email: formData.email,
              password: formData.password,
            });

            if (auth?.ok) {
              window.location.replace("/account");
            }
          } catch (error: any) {
            setLoading(false);
            const errors = extractErrors(error.response);
            toast.toast({
              title: "Error",
              description: errors[0],
              variant: "destructive",
            });
            console.log(error);
          }
        });
      } catch (error) {
        setLoading(false);
      }
    }
  };

  return (
    <form className="container py-10">
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
              {selectIndustryItems.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
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
        <div>
          <label className="font-medium">Reasons *</label>
          <MultiSelect
            defaultValue={formData.reasons}
            options={[
              {
                label: "Start up Company",
                value: "Start up Company",
              },
              {
                label: "Small Facility (1-49 Employees)",
                value: "Small Facility (1-49 Employees)",
              },
            ]}
            onValueChange={(value) =>
              setFormData({ ...formData, reasons: value })
            }
            maxCount={1}
            className="py-0 h-[50px] rounded-none shadow-none mt-2"
            name="countryCity"
            value={formData.countryCity}
            onChange={handleChange}
          />
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
      <div className="mt-6 grid grid-cols-2 gap-6">
        <div className="">
          <label className="font-medium">Password</label>
          <Input
            className="p-6 rounded-none shadow-none mt-2"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="">
          <label className="font-medium">Confirm Password</label>
          <Input
            className="p-6 rounded-none shadow-none mt-2"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
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
      <Button
        onClick={handleSubmit}
        disabled={loading}
        className="md:w-96 w-full rounded-none donateBtn py-6 font-bold mt-8 mb-10"
      >
        Register Now
      </Button>
    </form>
  );
}

export default CompanyApplicationForm;
