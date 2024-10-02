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
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

function SignupForm({
  onChange,
  type,
}: {
  type: "Individual" | "Ambassador" | "Company" | null;
  onChange: Function;
}) {
  return (
    <div className="container  md:py-20 py-10">
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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 gap-5 mt-8">
        <div className="">
          <Label>First Name</Label>
          <Input className="py-6 mt-2 shadow-none rounded-none" />
        </div>
        <div className="">
          <Label>Last Name</Label>
          <Input className="py-6 mt-2 shadow-none rounded-none" />
        </div>
        <div className="">
          <Label>Email ID</Label>
          <Input className="py-6 mt-2 shadow-none rounded-none" />
        </div>
        <div className="">
          <Label>Mobile NO</Label>
          <Input className="py-6 mt-2 shadow-none rounded-none" />
        </div>
        <div className="">
          <Label>Country / City</Label>
          <Input className="py-6 mt-2 shadow-none rounded-none" />
        </div>
        <div className="">
          <Label>Gender</Label>
          <Select>
            <SelectTrigger className="w-full py-6 mt-2 shadow-none rounded-none">
              <SelectValue placeholder="male" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="others">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="">
          <Label>Social State</Label>
          <Select>
            <SelectTrigger className="w-full py-6 mt-2 shadow-none rounded-none">
              <SelectValue placeholder="student" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="graduated">Graduated</SelectItem>
              <SelectItem value="job_seeker">Job Seeker</SelectItem>
              <SelectItem value="private_sector_employee">
                Private Sector Employee
              </SelectItem>
              <SelectItem value="gov_employee">Government Employee</SelectItem>
              <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="">
          <Label>DOB</Label>
          <Input
            type="date"
            className="py-6 mt-2 shadow-none w-full   block rounded-none"
          />
        </div>
        <div className="">
          <Label>Password</Label>
          <Input className="py-6 mt-2 shadow-none rounded-none" />
        </div>
        <div className="">
          <Label>Confirm Password</Label>
          <Input className="py-6 mt-2 shadow-none rounded-none" />
        </div>
      </div>
      <div className="mt-10">
        <div className="">
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
        <Link href="/account">
          {" "}
          <Button className="md:w-96 w-full rounded-none donateBtn py-6 font-bold mt-8 mb-10">
            Register Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default SignupForm;
