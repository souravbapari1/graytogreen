import { Input } from "@/components/ui/input";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function ApplyForm() {
  return (
    <div>
      <p className="font-semibold mb-2">
        Register As <span className="text-red-600 text-xl font-bold ">*</span>
      </p>
      <Select>
        <SelectTrigger className="w-full p-5 shadow-none font-bold">
          <SelectValue placeholder="Participant" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="null" disabled>
            - Select -
          </SelectItem>
          <SelectItem value="Participant">Participant (Child)</SelectItem>
          <SelectItem value="Chaperone">Chaperone</SelectItem>
          <SelectItem value="Speaker">Speaker</SelectItem>
          <SelectItem value="Teacher">Teacher</SelectItem>
          <SelectItem value="Moderator">Moderator</SelectItem>
          <SelectItem value="Co-Moderator">Co-Moderator</SelectItem>
        </SelectContent>
      </Select>
      <br />
      <div>
        <h1 className="text-2xl font-semibold mt-5 mb-2">
          Participant's Contact
        </h1>
        <hr />

        <div className="mt-6">
          <p className="font-medium mb-2 text-gray-600">
            Title <span className="text-red-600 text-xl font-bold ">*</span>
          </p>
          <Select>
            <SelectTrigger className="w-full p-5 shadow-none font-semibold">
              <SelectValue placeholder="Mr." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="null" disabled>
                - Select -
              </SelectItem>
              <SelectItem value="mr">Mr.</SelectItem>
              <SelectItem value="ms">Ms.</SelectItem>
              <SelectItem value="mx">Mx.</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          <div className="">
            <p className="font-medium mb-2 text-gray-600">
              Child's First Name
              <span className="text-red-600 text-xl font-bold ">*</span>
            </p>
            <Input className="p-5 shadow-none" />
          </div>
          <div className="">
            <p className="font-medium mb-2 text-gray-600">
              Child's Last Name
              <span className="text-red-600 text-xl font-bold ">*</span>
            </p>
            <Input className="p-5 shadow-none" />
          </div>
        </div>

        <div className="mt-6">
          <p className="font-medium mb-2 text-gray-600">
            Child's Email (Optional)
          </p>
          <Input className="p-5 shadow-none" />
        </div>

        <div className="mt-6">
          <p className="font-medium mb-2 text-gray-600">
            Date of Birth
            <span className="text-red-600 text-xl font-bold ">*</span>
          </p>
          <Input className="p-5 shadow-none block w-full" type="date" />
        </div>

        <div className="mt-6">
          <p className="font-medium mb-2 text-gray-600">
            School Name
            <span className="text-red-600 text-xl font-bold ">*</span>
          </p>
          <Input className="p-5 shadow-none block w-full" type="text" />
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          <div className="">
            <p className="font-medium mb-2 text-gray-600">
              Grade
              <span className="text-red-600 text-xl font-bold ">*</span>
            </p>
            <Input className="p-5 shadow-none" />
          </div>
          <div className="">
            <p className="font-medium mb-2 text-gray-600">
              T-Shirt size
              <span className="text-red-600 text-xl font-bold ">*</span>
            </p>
            <Select>
              <SelectTrigger className="w-full p-5 shadow-none font-semibold">
                <SelectValue placeholder="XS (140)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="null" disabled>
                  - Select -
                </SelectItem>

                <SelectItem value="XS">XS (140)</SelectItem>
                <SelectItem value="S">S (152)</SelectItem>
                <SelectItem value="M">M (164)</SelectItem>
                <SelectItem value="L">L</SelectItem>
                <SelectItem value="XL">XL</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <br />
        <br />

        <h1 className="text-2xl font-semibold mt-5 mb-2">
          Participant's Contact
        </h1>
        <hr />
        <div className="mt-6">
          <p className="font-medium mb-2 text-gray-600">
            Title <span className="text-red-600 text-xl font-bold ">*</span>
          </p>
          <Select>
            <SelectTrigger className="w-full p-5 shadow-none font-semibold">
              <SelectValue placeholder="Mr." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="null" disabled>
                - Select -
              </SelectItem>
              <SelectItem value="mr">Mr.</SelectItem>
              <SelectItem value="ms">Ms.</SelectItem>
              <SelectItem value="mx">Mx.</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          <div className="">
            <p className="font-medium mb-2 text-gray-600">
              First Name
              <span className="text-red-600 text-xl font-bold ">*</span>
            </p>
            <Input className="p-5 shadow-none" />
          </div>
          <div className="">
            <p className="font-medium mb-2 text-gray-600">
              Last Name
              <span className="text-red-600 text-xl font-bold ">*</span>
            </p>
            <Input className="p-5 shadow-none" />
          </div>
        </div>

        <p className="font-semibold mb-2 text-gray-600 mt-8">Address</p>
        <div className="grid md:grid-cols-2 gap-5 mt-6">
          <div className="">
            <p className="font-medium mb-2 text-gray-600">Street</p>
            <Input className="p-5 shadow-none" />
          </div>
          <div className="">
            <p className="font-medium mb-2 text-gray-600">House No.</p>
            <Input className="p-5 shadow-none" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-4">
          <div className="">
            <p className="font-medium mb-2 text-gray-600">
              City <span className="text-red-600 text-xl font-bold ">*</span>
            </p>
            <Input className="p-5 shadow-none" />
          </div>
          <div className="">
            <p className="font-medium mb-2 text-gray-600">
              State <span className="text-red-600 text-xl font-bold ">*</span>
            </p>
            <Input className="p-5 shadow-none" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-4">
          <div className="">
            <p className="font-medium mb-2 text-gray-600">
              ZipCOde <span className="text-red-600 text-xl font-bold ">*</span>
            </p>
            <Input className="p-5 shadow-none" />
          </div>
          <div className="">
            <p className="font-medium mb-2 text-gray-600">
              Country <span className="text-red-600 text-xl font-bold ">*</span>
            </p>
            <Input className="p-5 shadow-none" />
          </div>
        </div>

        <div className="mt-6">
          <p className="font-medium mb-2 text-gray-600">
            Email ID <span className="text-red-600 text-xl font-bold ">*</span>
          </p>
          <Input className="p-5 shadow-none" />
        </div>

        <div className="mt-6">
          <p className="font-medium mb-2 text-gray-600">
            Mobile No <span className="text-red-600 text-xl font-bold ">*</span>
          </p>
          <div className="flex justify-center items-center">
            <Select>
              <SelectTrigger className="w-[100px] border-r-0 p-5 shadow-none bg-gray-100 rounded-r-none">
                <SelectValue placeholder="+91" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">+91</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            <Input className="p-5 shadow-none rounded-l-none" />
          </div>
        </div>
        <br />
        <br />
        <p className="text-sm">
          Note: If you are registering your children, please enter an Emergency
          contact number.
        </p>

        <div className="mt-6">
          <p className="font-medium mb-2 text-gray-600">Message</p>
          <Textarea className="p-5 shadow-none" />
        </div>

        <h1 className="text-2xl font-semibold mt-10 mb-2">
          Participant's Contact
        </h1>
        <hr />
        <p className="mt-8">
          Release Statement (pictures){" "}
          <span className="text-red-600 text-xl font-bold ">*</span>
        </p>
        <RadioGroup defaultValue="option-tow">
          <div className="grid md:grid-cols-2 gap-5 mt-4">
            <div className="">
              <p className="font-medium mb-2 text-gray-600">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Yes</Label>
                </div>
              </p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia enim corporis quisquam deleniti vero, debitis culpa
                architecto, optio repellat ab nobis rem unde rerum? Nostrum
                inventore magni officia sunt quas!
              </p>
            </div>

            <div className="">
              <p className="font-medium mb-2 text-gray-600">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">NO</Label>
                </div>
              </p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia enim corporis quisquam deleniti vero, debitis culpa
                architecto, optio repellat ab nobis rem unde rerum? Nostrum
                inventore magni officia sunt quas!
              </p>
            </div>
          </div>
        </RadioGroup>
        <Button className="p-6 px-10 mt-10 donateBtn">Register Now</Button>
      </div>
    </div>
  );
}

export default ApplyForm;
