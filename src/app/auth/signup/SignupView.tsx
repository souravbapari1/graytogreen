"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import CompanyApplicationForm from "./CompanyForm";
import SignupForm from "./SignupForm";

function SignupView() {
  const [type, setType] = useState<
    "Individual" | "Ambassador" | "Company" | null
  >(null);
  return (
    <div>
      {type == null && (
        <div className="container flex h-[80vh] justify-center items-center flex-col gap-4">
          <h1 className="text-3xl font-bold text-green-950">Register as</h1>
          <Button
            onClick={() => setType("Individual")}
            className="rounded-none md:p-8 hover:text-white bg-primary/5 text-primary md:w-96 w-80 p-7 shadow-none"
          >
            Register As Individual
          </Button>
          <Button
            onClick={() => setType("Ambassador")}
            className="rounded-none md:p-8 hover:text-white bg-primary/5 text-primary md:w-96 w-80 p-7 shadow-none"
          >
            Register As Ambassador
          </Button>
          <Button
            onClick={() => setType("Company")}
            className="rounded-none md:p-8 hover:text-white bg-primary/5 text-primary md:w-96 w-80 p-7 shadow-none"
          >
            Register As Company
          </Button>
        </div>
      )}
      {type != null &&
        (type === "Company" ? (
          <CompanyApplicationForm type={type} onChange={setType} />
        ) : (
          <SignupForm type={type} onChange={setType} />
        ))}
    </div>
  );
}

export default SignupView;
