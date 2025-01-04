import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MultiSelect } from "@/components/ui/multi-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface FormData {
  applicantName: string;
  position: string;
  contactNo: string;
  email: string;
  orgName: string;
  website: string;
  country: string;
  city: string;
  branches: string;
  orgType: string;
  orgSize: string;
  industry: string;
  reasons: string[];
  categories: string[];
  annualBudget: string;
}

const PartnerForm = () => {
  const [formData, setFormData] = useState<FormData>({
    applicantName: "",
    position: "",
    contactNo: "",
    email: "",
    orgName: "",
    website: "",
    country: "",
    city: "",
    branches: "",
    orgType: "",
    orgSize: "",
    industry: "",
    reasons: [],
    categories: [],
    annualBudget: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMultiSelectChange = (name: string, value: string[]) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Your form submit logic
  };

  return (
    <form className="container py-10 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Request Form To Be Partner</h1>

      {/* Applicant Details */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Applicant Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="font-medium">Applicant Name *</label>
            <Input
              name="applicantName"
              value={formData.applicantName}
              onChange={handleChange}
              className="py-6 shadow-none mt-2 border border-gray-300 rounded-none"
              required
            />
          </div>
          <div>
            <label className="font-medium">Position *</label>
            <Input
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="py-6 shadow-none mt-2 border border-gray-300 rounded-none"
              required
            />
          </div>
          <div>
            <label className="font-medium">Contact No *</label>
            <Input
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              className="py-6 shadow-none mt-2 border border-gray-300 rounded-none"
              required
            />
          </div>
          <div>
            <label className="font-medium">Email *</label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="py-6 shadow-none mt-2 border border-gray-300 rounded-none"
              required
            />
          </div>
        </div>
      </div>

      {/* Company/Organization Details */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          Company / Organization Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="font-medium">Org/ Company Name *</label>
            <Input
              name="orgName"
              value={formData.orgName}
              onChange={handleChange}
              className="py-6 shadow-none mt-2 border border-gray-300 rounded-none"
              required
            />
          </div>
          <div>
            <label className="font-medium">Website *</label>
            <Input
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="py-6 shadow-none mt-2 border border-gray-300 rounded-none"
              required
            />
          </div>
          <div>
            <label className="font-medium">Country *</label>
            <Select
              name="country"
              onValueChange={(value: string) =>
                setFormData({ ...formData, country: value })
              }
              value={formData.country}
            >
              <SelectTrigger className="py-6 shadow-none mt-2 border border-gray-300 rounded-none">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Oman">Oman</SelectItem>
                <SelectItem value="UAE">UAE</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="font-medium">City *</label>
            <Select
              name="city"
              onValueChange={(value: string) =>
                setFormData({ ...formData, city: value })
              }
              value={formData.city}
              required
            >
              <SelectTrigger className="py-6 shadow-none mt-2 border border-gray-300 rounded-none">
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                {/* Add city options */}
                <SelectItem value="Muscat">Muscat</SelectItem>
                <SelectItem value="Dubai">Dubai</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="font-medium">Branches *</label>
            <Select
              name="branches"
              onValueChange={(value: string) =>
                setFormData({ ...formData, branches: value })
              }
              value={formData.branches}
              required
            >
              <SelectTrigger className="py-6 shadow-none mt-2 border border-gray-300 rounded-none">
                <SelectValue placeholder="Select Branches" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="One Branch">One Branch</SelectItem>
                <SelectItem value="Multiple Branches within Oman Only">
                  Multiple Branches within Oman Only
                </SelectItem>
                <SelectItem value="Multiple Branches Outside Oman Only">
                  Multiple Branches Outside Oman Only
                </SelectItem>
                <SelectItem value="Multiple Branches within Oman and Outside Oman">
                  Multiple Branches within Oman and Outside Oman
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="font-medium">Org/ Company Type *</label>
            <Select
              name="orgType"
              onValueChange={(value: string) =>
                setFormData({ ...formData, orgType: value })
              }
              value={formData.orgType}
              required
            >
              <SelectTrigger className="py-6 shadow-none mt-2 border border-gray-300 rounded-none">
                <SelectValue placeholder="Select Organization Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Government Company">
                  Government Company
                </SelectItem>
                <SelectItem value="Private Company">Private Company</SelectItem>
                <SelectItem value="Public Company">Public Company</SelectItem>
                <SelectItem value="Startup Company">Startup Company</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="font-medium">Org/ Company Size *</label>
            <Select
              name="orgSize"
              onValueChange={(value: string) =>
                setFormData({ ...formData, orgSize: value })
              }
              value={formData.orgSize}
              required
            >
              <SelectTrigger className="py-6 shadow-none mt-2 border border-gray-300 rounded-none">
                <SelectValue placeholder="Select Organization Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Less than 10 employees">
                  Less than 10 employees
                </SelectItem>
                <SelectItem value="10-49 employees">10-49 employees</SelectItem>
                <SelectItem value="50-249 employees">
                  50-249 employees
                </SelectItem>
                <SelectItem value="More than 250 employees">
                  More than 250 employees
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="font-medium">Working Industry *</label>
            <Select
              name="industry"
              onValueChange={(value: string) =>
                setFormData({ ...formData, industry: value })
              }
              value={formData.industry}
              required
            >
              <SelectTrigger className="py-6 shadow-none mt-2 border border-gray-300 rounded-none">
                <SelectValue placeholder="Select Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Food and Drink">Food and Drink</SelectItem>
                <SelectItem value="Healthcare and Pharmaceutical Services">
                  Healthcare and Pharmaceutical Services
                </SelectItem>
                {/* Add more industries */}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="font-medium">
              Reasons to Partner with Grey to Green *
            </label>
            <MultiSelect
              name="reasons"
              value={formData.reasons}
              onValueChange={(value: string[]) =>
                handleMultiSelectChange("reasons", value)
              }
              options={[]}
              className="py-3 shadow-none mt-2 border border-gray-300 rounded-none"
            />
          </div>
          <div>
            <label className="font-medium">
              What Categories are you looking to consider? *
            </label>
            <MultiSelect
              name="categories"
              value={formData.categories}
              onValueChange={(value: string[]) =>
                handleMultiSelectChange("categories", value)
              }
              options={[]}
              className="py-3 shadow-none mt-2 border border-gray-300 rounded-none"
            />
          </div>
          <div>
            <label className="font-medium">
              Expected Annual Budget for Sponsorship *
            </label>
            <Select
              name="annualBudget"
              onValueChange={(value: string) =>
                setFormData({ ...formData, annualBudget: value })
              }
              value={formData.annualBudget}
              required
            >
              <SelectTrigger className="py-6 shadow-none mt-2 border border-gray-300 rounded-none">
                <SelectValue placeholder="Select Budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Less Than 10,000 OMR">
                  Less Than 10,000 OMR
                </SelectItem>
                <SelectItem value="10,000 - 50,000 OMR">
                  10,000 - 50,000 OMR
                </SelectItem>
                <SelectItem value="50,000 - 100,000 OMR">
                  50,000 - 100,000 OMR
                </SelectItem>
                <SelectItem value="100,000 - 200,000 OMR">
                  100,000 - 200,000 OMR
                </SelectItem>
                <SelectItem value="More than 200,000 OMR">
                  More than 200,000 OMR
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-8 py-5 w-full  rounded-none"
      >
        Submit
      </Button>
    </form>
  );
};

export default PartnerForm;
