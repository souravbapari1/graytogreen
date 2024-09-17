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
function Forgot() {
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
                className="w-20 h-auto object-contain md:block hidden"
              />
            </Link>
            <h1 className=" font-bold text-xl mt-5">Forgot Your Password?</h1>
            <p className="text-sm mt-2 text-gray-600">
              Enter your email id and verify to reset password.
            </p>
            <br />
            <div className="">
              <Label className="text-gray-600">Email ID</Label>
              <Input className="shadow-none py-5 mt-1" />
            </div>
            <br />
            <Button className="py-5 w-full shadow-none">
              Send Verification Link
            </Button>
            <br />
            <div className="flex justify-center items-center text-center gap-2 text-xs mt-10">
              <p>Not Registered Yet?</p>
              <Link href="/auth/signup" replace className="text-main ">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgot;
