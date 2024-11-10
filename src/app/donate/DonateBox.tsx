"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { montserrat } from "@/fonts/font";
import { ProjectItem } from "@/interface/project";
import { localClient } from "@/request/actions";
import { Flower2 } from "lucide-react";
import { useSession } from "next-auth/react";
import React, { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";

// Helper functions
const calculateAmount = (
  projectPrefix: string,
  unit: number,
  selected: number,
  custom: boolean,
  customValue: number | undefined
): number => {
  const presetAmounts = [5, 10, 15, 20];
  if (projectPrefix === "tree") {
    return custom ? (customValue || 0) * unit : presetAmounts[selected] * unit;
  }
  return custom ? customValue || 0 : presetAmounts[selected] * unit;
};

const calculateQuantity = (
  projectPrefix: string,
  selected: number,
  customValue: number | undefined
): number => {
  return projectPrefix === "tree"
    ? customValue || [5, 10, 15, 20][selected]
    : 1;
};

// Reusable component for donation options
const DonationOption = ({
  isSelected,
  amount,
  displayText,
  onClick,
}: {
  isSelected: boolean;
  amount: number;
  displayText: JSX.Element | string;
  onClick: () => void;
}) => (
  <div
    className={`w-full h-16 bg-gray-100 cursor-pointer flex gap-2 justify-center items-center border-2 text-gray-600 rounded-xl text-lg font-bold ${
      isSelected ? "bg-main text-white border-green-100/30 shadow-md " : ""
    }`}
    onClick={onClick}
  >
    {displayText}
    <p className="font-light text-xs">﷼ {amount}</p>
  </div>
);

function DonateBox({ project }: { project: ProjectItem }) {
  const { data } = useSession();
  const [selected, setSelected] = useState(0);
  const [custom, setCustom] = useState(false);
  const [customValue, setCustomValue] = useState<number>();
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  // Donation action
  const createDonation = useCallback(async () => {
    if (project.project_prefix === "tree") {
      if (custom) {
        if (customValue && customValue > 100 && customValue < 1) {
          toast.error("Trees count should not exceed 100");
          return;
        }
      }
    }
    setLoading(true);

    try {
      const req = await localClient
        .post("/api/pay")
        .json({
          amount: project.omr_unit * 1000,
          projectId: project.id,
          donate: project.project_prefix,
          projectName: project.name,
          quantity: calculateQuantity(
            project.project_prefix,
            selected,
            customValue
          ),
          userId: data?.user.id,
        })
        .send<any>();

      window.location.replace(req.payUrl);
    } catch (error) {
      console.error("Donation error:", error);
      toast.error("Something went wrong, please try again");
      setLoading(false);
    }
  }, [amount, data, project, selected, customValue]);

  return (
    <div>
      <p
        className={`text-xl font-semibold text-gray-700 mt-8 ${montserrat.className}`}
      >
        Choose a donation amount
      </p>
      <div className={`mt-6 ${montserrat.className}`}>
        <div className="grid grid-cols-2 gap-4">
          {!custom &&
            [5, 10, 15, 20].map((value, index) => (
              <DonationOption
                key={index}
                isSelected={selected === index}
                amount={value * (project.omr_unit || 1)}
                displayText={
                  project.project_prefix === "tree" ? (
                    <>
                      <div className="flex items-center justify-center gap-2">
                        <Flower2 size={20} /> {value}{" "}
                        <small className="font-normal">
                          {project.unit_measurement}
                        </small>
                      </div>
                    </>
                  ) : (
                    `﷼ ${value * (project.omr_unit || 1)}`
                  )
                }
                onClick={() => setSelected(index)}
              />
            ))}
          {custom && (
            <div className="col-span-2">
              <Input
                type="number"
                value={customValue}
                max={100}
                min={1}
                minLength={1}
                maxLength={100}
                onChange={(e) => setCustomValue(Number(e.target.value))}
                placeholder={
                  project.project_prefix === "tree"
                    ? "Enter Trees Count (max 100)"
                    : "Enter Amount"
                }
                className="w-full h-16 focus:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-green-500 bg-gray-100 text-gray-600 rounded-xl text-lg font-bold text-center"
              />
              {project.project_prefix === "tree" && (customValue || 0) >= 1 && (
                <p className="font-bold text-green-900 text-md text-center mt-5">
                  ({customValue} Trees X {project.omr_unit}﷼ /Tree) ={" "}
                  {(customValue || 0) * (project.omr_unit || 1)} ﷼
                </p>
              )}
            </div>
          )}
        </div>
      </div>
      <p
        className={`${montserrat.className} cursor-pointer mt-10 text-main underline`}
        onClick={() => setCustom(!custom)}
      >
        {custom ? "Cancel custom donation" : "Enter a custom donation"}
      </p>
      <p className={`${montserrat.className} text-xs mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        pariatur nam tenetur deserunt quis laboriosam illum tempora nemo cum ab
        alias mollitia dolorem odit dolores, fugiat animi nobis numquam! Fuga?
      </p>
      <Button
        disabled={loading}
        onClick={createDonation}
        className={`w-full h-14 donateBtn border-none shadow-none mt-8 ${montserrat.className} font-bold`}
      >
        Send {project.project_prefix === "tree" && "Trees"} Donation
      </Button>
    </div>
  );
}

export default DonateBox;
