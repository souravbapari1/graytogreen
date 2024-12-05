import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { countryCodes } from "@/data/countryCodes";
import { useMicroActionState } from "./microActioonState";
import { createNewImpact } from "./actions";
import { useSearchParams } from "next/navigation";
import { extractErrors } from "@/request/actions";
import toast from "react-hot-toast";
import { MAImpactItem } from "./md";

function UserImpactInfo({
  open,
  setOpen,
  onComplete,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  onComplete: (e: MAImpactItem) => void;
}) {
  const data = useMicroActionState();

  const params = useSearchParams();
  const handleNext = async () => {
    if (data.validateData()) {
      try {
        toast.dismiss();
        toast.loading("Submitting...");
        const res = await createNewImpact({
          micro_action: data.selected?.id || "",
          submit: data.data.impact || 0,
          impact: (data.data.impact || 0) * (data.selected?.kgPerUnit || 0),
          userData: JSON.stringify(data.data),
          user: data.data.id || undefined,
          refer: params.get("refer") || undefined,
        });
        toast.dismiss();
        toast.success("Submitted successfully");
        onComplete(res);
        setOpen(false);
      } catch (error: any) {
        const errors = extractErrors(error.response);
        toast.dismiss();
        console.log(errors);
        toast.error(errors[0]);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="border-none">
        <DialogHeader>
          <DialogTitle>Let's get to know you</DialogTitle>
          <DialogDescription>
            We’ll share cool sustainability tips, your impact reports, stories,
            the next micro-actions, and incentives!
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <Label>Your Name</Label>
          <Input
            placeholder="Enter Full Name"
            className="shadow-none py-5 mt-2"
            value={data.data.name}
            onChange={(e) => data.setData("name", e.target.value)}
          />
        </div>
        <div className="">
          <Label>Mobile NO</Label>
          <div className="mt-2 flex">
            <Select
              name="countryCode"
              value={data.data.code}
              onValueChange={(e) => data.setData("code", e)}
            >
              <SelectTrigger className="w-[80px] shadow-none py-5 rounded-r-none border-r-0 bg-gray-100">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                {countryCodes.map((e, i) => {
                  return (
                    <SelectItem key={i} value={e}>
                      {e}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>

            <Input
              placeholder="Enter Mobile No"
              className="shadow-none py-5 rounded-l-none"
              value={data.data.mobile_no}
              onChange={(e) => data.setData("mobile_no", e.target.value)}
            />
          </div>
        </div>
        <div className="">
          <Label>Email ID</Label>
          <Input
            placeholder="Enter Email ID"
            className="shadow-none py-5 mt-2"
            value={data.data.email}
            onChange={(e) => data.setData("email", e.target.value)}
          />
        </div>
        <p className="text-xs mt-2 text-center">
          By submitting your response, you agree to our{" "}
          <Link href="#" className="text-primary">
            Terms & Conditions
          </Link>
        </p>
        <Button className="w-full py-6 shadow-none mt-3" onClick={handleNext}>
          Submit Your Impact
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default UserImpactInfo;
