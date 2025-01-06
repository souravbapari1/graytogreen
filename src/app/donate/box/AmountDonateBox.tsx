"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ProjectItem } from "@/interface/project";
import { cn } from "@/lib/utils";
import { localClient } from "@/request/actions";
import { useMutation } from "@tanstack/react-query";
import { TreeDeciduousIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiMoney } from "react-icons/bi";
import { FaSpinner } from "react-icons/fa";
import { ImSortAmountAsc } from "react-icons/im";

function AmountDonateBox({ data }: { data: ProjectItem }) {
  const session = useSession();
  const [amount, setAmount] = useState<number>(5);
  const [custom, setCustom] = useState<boolean>(false);
  const [terms, setTerms] = useState(true);
  const isSelect = () => {
    return "bg-primary/70 text-primary text-white";
  };
  const params = useSearchParams();

  const validateState = () => {
    if (custom) {
      if (amount <= 0) {
        toast.error("amount should be greater than 0");
        return false;
      }
      if (amount > 5000) {
        toast.error("amount should be less than 5000");
        return false;
      }
    }
    if (!terms) {
      toast.error("You must agree to the terms and conditions");
      return false;
    }
    return true;
  };

  const mutateSubmit = useMutation({
    mutationFn: async () => {
      const req = await localClient
        .post("/api/pay")
        .json({
          amount: amount * 1000,
          projectId: data.id,
          donate: data.project_prefix,
          projectName: data.name,
          quantity: 1,
          userId: session.data?.user.id,
          support: params?.get("support"),
        })
        .send<any>();
      return req;
    },
    onSuccess: (data) => {
      window.location.replace(data.payUrl);
    },
    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong");
    },
  });

  return (
    <div className="w-full h-full bg-white rounded-xl  flex flex-col justify-between items-center">
      <div className="w-full">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">
          Choose a donation amount
        </h3>
        <div className="grid grid-cols-2 gap-2 ">
          {[50, 100, 250, 1000].map((e, i) => (
            <div
              onClick={() => {
                setCustom(false);
                setAmount(e);
              }}
              key={i}
              className={cn(
                "border border-primary/5 bg-primary/10 rounded-xl p-2 gap-3 cursor-pointer flex  justify-start items-center text-green-800",
                e === amount && isSelect()
              )}
            >
              <div className="flex justify-center items-center p-2 bg-primary/30 rounded-md ">
                <BiMoney size={15} />
              </div>
              <div className="flex flex-col ">
                <p className="text-xs font-bold ">{e} OMR</p>
                <p className="text-[10px] ">
                  {(e / data.omr_unit).toFixed(1)} {data.unit_measurement}
                </p>
              </div>
            </div>
          ))}
        </div>

        {!custom ? (
          <div
            onClick={() => {
              setAmount(0);
              setAmount(10);
              setCustom(true);
            }}
            className="w-full h-10 bg-primary/10 cursor-pointer text-xs font-bold text-primary border mt-5 border-primary/10 rounded-xl flex justify-center items-center"
          >
            <p>Or enter a custom donation</p>
          </div>
        ) : (
          <div className="w-full">
            <p className="text-xs font-semibold text-gray-700 mt-5">
              Or enter a custom donation
            </p>
            <div className="mt-2">
              <Input
                type="number"
                placeholder="Enter amount Count (max 100)"
                max={100}
                value={amount}
                onChange={(e) => setAmount(+e.target.value)}
                min={1}
                className="shadow-none text-center text-sm font-extrabold"
              />
              <p className="font-bold text-green-900 text-[10px] text-center mt-3">
                {amount} OMR X {data.omr_unit} OMR/
                {data.unit_measurement}= {(amount / data.omr_unit).toFixed(1)}{" "}
                {data.unit_measurement}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="w-full rounded-xl md:mt-0 mt-5">
        <div className="text-[8px] flex  gap-2">
          <Checkbox
            className="shadow-none"
            id="terms"
            checked={terms}
            onClick={() => setTerms(!terms)}
          />
          <Label className="text-xs" htmlFor="terms">
            I agree to the{" "}
            <Link
              href="/pages/terms-and-conditions"
              className="text-primary underline"
              target="_blank"
            >
              Terms and Conditions
            </Link>
          </Label>
        </div>
        <Button
          disabled={mutateSubmit.isPending}
          onClick={() => {
            if (validateState()) {
              mutateSubmit.mutate();
            }
          }}
          size="sm"
          className="mt-5 h-10 font-bold w-full shadow-none donateBtn md:rounded-full"
        >
          {mutateSubmit.isPending && (
            <FaSpinner className="animate-spin mr-4" />
          )}
          Continue
        </Button>
      </div>
    </div>
  );
}

export default AmountDonateBox;
