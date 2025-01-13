"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { montserrat } from "@/fonts/font";
import { useMutation } from "@tanstack/react-query";
import { sendReFundingRequest } from "@/request/worker/refundPayment";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { FaSpinner } from "react-icons/fa";
import { UserItem } from "@/interface/user";

function PartnerWallet({ balance, user }: { balance: number; user: UserItem }) {
  return (
    <Card x-chunk="dashboard-01-chunk-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium flex justify-between items-center w-full">
          <p>My Wallet</p>
          <p className="text-2xl text-gray-500">$</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between">
        <div className="">
          <div className="text-2xl font-bold">{balance.toFixed(2)} OMR</div>
          <p className="text-xs text-muted-foreground">your wallet amount</p>
        </div>
        {user?.user_type == "partner" && (
          <PartnerWalletDialog>
            <Button
              className="mt-10 shadow-none hover:bg-primary hover:text-white "
              variant="outline"
              size={"sm"}
            >
              Refund
            </Button>
          </PartnerWalletDialog>
        )}
      </CardContent>
    </Card>
  );
}

export default PartnerWallet;

function PartnerWalletDialog({ children }: { children: ReactNode }) {
  const session = useSession();

  const [amount, setAmount] = useState<number>(50);
  const mutate = useMutation({
    mutationFn: sendReFundingRequest,
    onSuccess: (data) => {
      window.location.replace(data.payUrl);
    },
    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong");
    },
  });
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className={montserrat.className}>
        <DialogHeader>
          <DialogTitle>Add Funds to your Wallet</DialogTitle>
          <DialogDescription>
            <p className="text-xs mt-2">
              You can add funds to your wallet by sending a donation to our
              partner account. This will help us to fund our projects and
              support our mission.
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <Input
            type="number"
            placeholder="Enter amount (max 5000 Omr)"
            max={5000}
            min={1}
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            className="shadow-none py-6 text-center text-sm font-extrabold"
          />
        </div>
        <Button
          className="shadow-none"
          disabled={mutate.isPending}
          onClick={() => {
            mutate.mutate({
              amount: amount,
              complete: false,
              title: "Refund",
              status: "pending",
              user: session?.data?.user?.id || "",
            });
          }}
        >
          {mutate.isPending && <FaSpinner className="animate-spin mr-4" />}
          Add Funds
        </Button>
      </DialogContent>
    </Dialog>
  );
}
