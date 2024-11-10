"use client";
import { showConfettiFireworks } from "@/components/ui/magic/ConfettiFireworks";
import { montserrat } from "@/fonts/font";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";

function SucessView() {
  useEffect(() => {
    showConfettiFireworks();
  }, []);
  return (
    <div
      className={`flex justify-center items-center text-center container flex-col gap-5 h-[70vh] ${montserrat.className}`}
    >
      <CircleCheck size={70} className="text-main" />
      <h1 className="text-2xl font-bold">Payment Sucessful!</h1>
      <p>Thank you for your donation ! Your payment was successful</p>
      <Link
        className="text-xs text-main mt-3 underline font-semibold"
        href="/account/orders"
      >
        View Orders
      </Link>
    </div>
  );
}

export default SucessView;
