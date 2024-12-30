"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { montserrat } from "@/fonts/font";
import { authUser, getUser } from "@/request/worker/auth";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const params = useSearchParams();
  const url = params.get("redirect");

  useEffect(() => {
    // Retrieve 'rememberMe' state from localStorage when the component mounts
    const storedRememberMe = localStorage.getItem("rememberMe");
    if (storedRememberMe) {
      setRememberMe(JSON.parse(storedRememberMe));
    }
  }, []);

  useEffect(() => {
    // Save 'rememberMe' state to localStorage whenever it changes
    localStorage.setItem("rememberMe", JSON.stringify(rememberMe));
  }, [rememberMe]);

  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handlePasswordChange = (e: any) => setPassword(e.target.value);
  const handleRememberMeChange = () => setRememberMe(!rememberMe);

  const handleSignIn = async () => {
    // Implement the sign-in logic here

    if (email && password) {
      setLoading(true);
      toast.dismiss();
      toast.loading("Signing in...");
      try {
        const authUserData = await authUser({
          email,
          password,
        });

        const res = await signIn("credentials", {
          redirect: false,
          email,
          password,
          callbackUrl: url || "/account",
        });
        if (res?.ok && !res.error) {
          localStorage.setItem("user", JSON.stringify(authUserData.record));
          window.location.replace(url || "/account");
        } else {
          toast.dismiss();
          toast.error("Invalid Credentials");
        }
        console.log(res);
      } catch (error) {
        console.log(error);
        toast.dismiss();
        toast.error("Invalid Credentials");
      } finally {
        setLoading(false);
      }
    } else {
      toast.dismiss();
      toast.error("Please Enter Email Or Password");
    }
  };

  return (
    <div className="md:min-h-screen md:h-screen md:bg-[url('https://images.pexels.com/photos/1151418/pexels-photo-1151418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat bg-center">
      <div
        className={`${montserrat.className} w-full h-full md:bg-green-950/30 flex justify-center items-center`}
      >
        <div className="md:w-96 bg-white rounded-3xl md:shadow-2xl p-8">
          <Link href="/">
            <Image
              src="/logo/main-logo.png"
              width={200}
              height={200}
              alt="Main Logo"
              className="w-20 h-auto object-contain md:block hidden"
            />
          </Link>
          <h1 className="font-bold text-xl mt-5">Login to your Account</h1>
          <p className="text-sm mt-2 text-gray-600">
            Log in to Gray to Green Account to continue.
          </p>
          <br />
          <div>
            <Label className="text-gray-600">Email ID</Label>
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="shadow-none py-5 mt-1"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center w-full">
              <Label className="text-gray-600">Password</Label>
              <Link
                href="/auth/forgot"
                replace
                className="text-[9px] text-main"
              >
                Forgot Password?
              </Link>
            </div>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="shadow-none py-5 mt-2"
            />
          </div>
          <div className="flex justify-start items-center gap-2 mt-4 cursor-pointer select-none">
            <label htmlFor="checked" className="flex items-center gap-2">
              <Checkbox
                id="checked"
                checked={rememberMe}
                onClick={handleRememberMeChange}
                className="rounded shadow-none border-gray-300 data-[state=checked]:border-primary"
              />
              <span className="text-xs">Remember Me</span>
            </label>
          </div>

          <br />
          <Button
            disabled={loading}
            onClick={handleSignIn}
            className="py-5 w-full shadow-none"
          >
            Continue
          </Button>
          <br />
          <div className="flex justify-center items-center text-center gap-2 text-xs mt-10">
            <p>Not Registered Yet?</p>
            <Link href="/auth/signup" replace className="text-main">
              Create Account
            </Link>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
