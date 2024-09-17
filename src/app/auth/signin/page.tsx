import Navbar from "@/components/sections/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
function SignIn() {
  return (
    <>
      <div className="md:hidden">
        <Navbar />
      </div>

      <div className=" md:min-h-screen md:h-screen md:bg-[url('https://images.pexels.com/photos/1151418/pexels-photo-1151418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat bg-center ">
        <div
          className={`${montserrat.className} w-full h-full md:bg-green-950/30 flex justify-center items-center`}
        >
          <div className="md:w-96  bg-white rounded-3xl md:shadow-2xl  p-8">
            <Link href="/">
              <Image
                src="/logo/main-logo.png"
                width={200}
                height={200}
                alt=""
                className="w-20 h-auto object-contain  md:block hidden"
              />
            </Link>
            <h1 className=" font-bold text-xl mt-5">Login to your Account</h1>
            <p className="text-sm mt-2 text-gray-600">
              Log in to Gray to Green Account to continue.
            </p>
            <br />
            <div className="">
              <Label className="text-gray-600">Email ID</Label>
              <Input className="shadow-none py-5 mt-1" />
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center w-full">
                <Label className="text-gray-600">Password</Label>
                <Link
                  href="/auth/forgot"
                  replace
                  className="text-[9px] text-main "
                >
                  Forgot Password?
                </Link>
              </div>
              <Input className="shadow-none py-5 mt-2" />
            </div>
            <div className="flex justify-start items-center gap-2 mt-4 cursor-pointer select-none">
              <label htmlFor="checked" className="flex items-center gap-2">
                <Checkbox
                  className="rounded shadow-none border-gray-300 data-[state=checked]:border-primary"
                  id="checked"
                  checked
                />
                <span className="text-xs">Remember Me</span>
              </label>
            </div>

            <br />
            <Button className="py-5 w-full shadow-none">Continue</Button>
            <br />
            <div className="flex justify-center items-center text-center gap-2 text-xs mt-10">
              <p>Not Registered Yet?</p>
              <Link href="/auth/signup" replace className="text-main ">
                Create Account
              </Link>
            </div>
            <br />
            <div className="flex justify-between items-center gap-5 p-3 mb-3">
              <div className="w-full h-[1px] bg-gray-200"></div>
              <p className="text-xs">OR</p>
              <div className="w-full h-[1px] bg-gray-200"></div>
            </div>

            <Button
              variant="outline"
              className="shadow-none text-xs py-5 w-full  gap-5 flex justify-start items-center"
            >
              <FcGoogle size={20} />
              <span className="text-gray-600">Continue With Google</span>
            </Button>
            <Button
              variant="outline"
              className="shadow-none text-xs py-5 w-full mt-5 gap-5 flex justify-start items-center"
            >
              <RiFacebookCircleFill size={20} className="text-blue-700" />
              <span className="text-gray-600">Continue With Facebook</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
