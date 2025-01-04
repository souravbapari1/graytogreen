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

import PhoneInput from "react-phone-number-input";
import { CountryDropdown } from "@/components/complete/country-dropdown";
import { CityDropdown } from "@/components/complete/city-dropdown";
import { Label } from "@/components/ui/label";

export const selectIndustryItems = [
  { value: "Food and Drink", label: "Food and Drink" },
  { value: "Energy and Mining", label: "Energy and Mining" },
  { value: "Oil and Gas Services", label: "Oil and Gas Services" },
  {
    value: "Healthcare and Pharmaceutical Services",
    label: "Healthcare and Pharmaceutical Services",
  },
  { value: "Education and Training", label: "Education and Training" },
  { value: "Aviation", label: "Aviation" },
  {
    value: "Real Estate, Construction and Contracting",
    label: "Real Estate, Construction and Contracting",
  },
  {
    value: "Financial Services, Investment and Insurance",
    label: "Financial Services, Investment and Insurance",
  },
  {
    value: "Transportation and Logistics Services",
    label: "Transportation and Logistics Services",
  },
  {
    value: "Communications and Information Technology",
    label: "Communications and Information Technology",
  },
  {
    value: "Horticulture and Plant Nursery",
    label: "Horticulture and Plant Nursery",
  },
  {
    value: "Metal Fabrication and Processing",
    label: "Metal Fabrication and Processing",
  },
  {
    value: "Plastic Injection and Moulding",
    label: "Plastic Injection and Moulding",
  },
  {
    value: "E-commerce & Online Retail Industry",
    label: "E-commerce & Online Retail Industry",
  },
  {
    value: "Government & Public Administration Industry",
    label: "Government & Public Administration Industry",
  },
  { value: "Manufacturing Industry", label: "Manufacturing Industry" },
  { value: "Wholesale and Distribution", label: "Wholesale and Distribution" },
  { value: "Utilities Industry", label: "Utilities Industry" },
  {
    value: "Research and Development, R&D",
    label: "Research and Development, R&D",
  },
  {
    value: "Jobbing, Production and Assembly",
    label: "Jobbing, Production and Assembly",
  },
  { value: "Manufacture", label: "Manufacture" },
  {
    value:
      "Agriculture, Forestry, Fishing and Hunting Aquaculture, Farms and Irrigation",
    label:
      "Agriculture, Forestry, Fishing and Hunting Aquaculture, Farms and Irrigation",
  },
  { value: "Retail Trade", label: "Retail Trade" },
  {
    value: "Management Consulting and Marketing",
    label: "Management Consulting and Marketing",
  },
  { value: "Sports and Entertainment", label: "Sports and Entertainment" },
  { value: "Tourism and Hospitality", label: "Tourism and Hospitality" },
  { value: "Fashion", label: "Fashion" },
  { value: "Electronics", label: "Electronics" },
  {
    value: "Clothing, Consumer Goods and Furniture",
    label: "Clothing, Consumer Goods and Furniture",
  },
  { value: "Media and News", label: "Media and News" },
  { value: "Social Work", label: "Social Work" },
  {
    value: "IOT, AI and Machine Learning",
    label: "IOT, AI and Machine Learning",
  },
  {
    value: "Waste Management / Recycling / Sustainability",
    label: "Waste Management / Recycling / Sustainability",
  },
  { value: "Legal", label: "Legal" },
  {
    value: "Arts, Entertainment and Recreation",
    label: "Arts, Entertainment and Recreation",
  },
  {
    value: "Service, Repair and Maintenance",
    label: "Service, Repair and Maintenance",
  },
  {
    value: "Administration, Business Support and Waste Management Services",
    label: "Administration, Business Support and Waste Management Services",
  },
  { value: "Labour Hire and Workforce", label: "Labour Hire and Workforce" },
  { value: "Others", label: "Others" },
];

function CompanyApplicationForm({
  onChange,
  type,
}: {
  type: "Individual" | "Ambassador" | "Partner" | null;
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
    country: "",
    city: "",
    branch: "",
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
          <PhoneInput
            name="phone"
            style={{ width: "100%", border: 1, borderColor: "red" }}
            value={formData.phone}
            onChange={(value) =>
              setFormData({ ...formData, phone: value || "" })
            }
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
        <div className="">
          <label className="font-medium">Country</label>
          <CountryDropdown
            onChange={(value) => setFormData({ ...formData, country: value })}
            value={formData.country}
            className="w-full p-6 rounded-none shadow-none mt-2"
          />
        </div>
        <div className="">
          <label className="font-medium">City</label>
          <CityDropdown
            onChange={(value) => setFormData({ ...formData, city: value })}
            value={formData.city}
            country={formData.country || ""}
            className="w-full p-6 rounded-none shadow-none mt-2"
          />
        </div>
        <div>
          <label className="font-medium">Working Insdustry *</label>
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
              {[
                "Less than 10 employees",
                "10-49 employees",
                "50-249 employees",
                "More than 250 employees",
              ].map((value, index) => (
                <SelectItem key={index} value={value}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="">
          <label className="font-medium">Branches</label>
          <Select
            name="branch"
            value={formData.branch}
            onValueChange={(value) =>
              setFormData({ ...formData, branch: value })
            }
          >
            <SelectTrigger className="w-full p-6 rounded-none shadow-none mt-2">
              <SelectValue placeholder="Select Branches" />
            </SelectTrigger>
            <SelectContent>
              {[
                { label: "One Branch", value: "One Branch" },
                {
                  label: "Multiple Branches within Oman Only",
                  value: "Multiple Branches within Oman Only",
                },
                {
                  label: "Multiple Branches Outside Oman Only",
                  value: "Multiple Branches Outside Oman Only",
                },
                {
                  label: "Multiple Branches within Oman and Outside Oman",
                  value: "Multiple Branches within Oman and Outside Oman",
                },
              ].map((value, index) => (
                <SelectItem key={index} value={value.value}>
                  {value.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="">
          <label className="font-medium">Org/ Company Type</label>
          <Select
            name="branch"
            value={formData.branch}
            onValueChange={(value) =>
              setFormData({ ...formData, branch: value })
            }
          >
            <SelectTrigger className="w-full p-6 rounded-none shadow-none mt-2">
              <SelectValue placeholder="Select Branches" />
            </SelectTrigger>
            <SelectContent>
              {[
                { label: "One Branch", value: "One Branch" },
                {
                  label: "Multiple Branches within Oman Only",
                  value: "Multiple Branches within Oman Only",
                },
                {
                  label: "Multiple Branches Outside Oman Only",
                  value: "Multiple Branches Outside Oman Only",
                },
                {
                  label: "Multiple Branches within Oman and Outside Oman",
                  value: "Multiple Branches within Oman and Outside Oman",
                },
              ].map((value, index) => (
                <SelectItem key={index} value={value.value}>
                  {value.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="md:col-span-3">
          <label className="font-medium">
            Reasons to partners with Grey to Green
          </label>
          <MultiSelect
            defaultValue={formData.reasons}
            options={[
              {
                label: "Reducing carbon footprint",
                value: "Reducing carbon footprint",
              },
              {
                label: "Reducing plastic footprint",
                value: "Reducing plastic footprint",
              },
              {
                label: "Reducing water footprint",
                value: "Reducing water footprint",
              },
              {
                label: "Enhancing energy efficiency and resource efficiency",
                value: "Enhancing energy efficiency and resource efficiency",
              },
              {
                label: "Enhancing environmental responsibility",
                value: "Enhancing environmental responsibility",
              },
              {
                label:
                  "Establishing sustainable practices and enhancing the circular economy",
                value:
                  "Establishing sustainable practices and enhancing the circular economy",
              },
              {
                label: "Increasing popularity and enhancing the brand",
                value: "Increasing popularity and enhancing the brand",
              },
              {
                label: "Achieving Oman 2050 net zero goals",
                value: "Achieving Oman 2050 net zero goals",
              },
              {
                label: "Enhancing social responsibility",
                value: "Enhancing social responsibility",
              },
              {
                label: "Enhancing environmental responsibility",
                value: "Enhancing environmental responsibility",
              },
              {
                label: "Enhancing the local added value of the institution",
                value: "Enhancing the local added value of the institution",
              },
              {
                label:
                  "Reducing carbon emissions and compensating them in a more efficient way",
                value:
                  "Reducing carbon emissions and compensating them in a more efficient way",
              },
              { label: "Increasing sales", value: "Increasing sales" },
              {
                label: "Introducing the company's products and services",
                value: "Introducing the company's products and services",
              },
              {
                label: "Motivating the facility's employees",
                value: "Motivating the facility's employees",
              },
              {
                label: "Targeting a specific segment of customers",
                value: "Targeting a specific segment of customers",
              },
              {
                label: "Developing business relationships",
                value: "Developing business relationships",
              },
              { label: "Marketing", value: "Marketing" },
              { label: "Other", value: "Other" },
            ]}
            onValueChange={(value) =>
              setFormData({ ...formData, reasons: value })
            }
            maxCount={10}
            className="py-3 rounded-none shadow-none mt-2"
            name="reasons"
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
