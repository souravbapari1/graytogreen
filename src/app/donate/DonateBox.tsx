"use client";

import SupportBox from "@/components/GMapBox/SupportBox";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { montserrat } from "@/fonts/font";
import { cn } from "@/lib/utils";
import { genPbFiles } from "@/request/actions";
import { Gift } from "lucide-react";
import Image from "next/image";
import { ReactNode, useState } from "react";
import AmountDonateBox from "./box/AmountDonateBox";
import TreeDonateBox from "./box/TreeDonateBox";
import { ProjectItem } from "@/interface/project";

function DonateBox({ project, by }: { project: ProjectItem; by?: string }) {
  const [name, setName] = useState("");
  return (
    <div className="w-full min-h-screen h-full flex justify-center items-center bg-gray-100 select-none">
      <div className="fixed top-4 left-0 right-0 mx-auto">
        <div className="w-full flex justify-center items-center">
          <SupportBox />
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center ite++ms-center relative">
        <div className="w-80 md:h-96 h-52  rounded-xl  py-3  md:-mr-10 overflow-hidden md:mb-0 -mb-8 relative ">
          <div
            className="w-full h-full bg-primary shadow-md   rounded-xl bg-cover bg-center bg-no-repeat relative overflow-hidden"
            style={{
              backgroundImage: `url(${genPbFiles(
                project,
                project.preview_image
              )})`,
            }}
          >
            <div
              className={cn(
                "w-full h-full p-5 bg-gradient-to-t from-black to-transparent absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end items-end",
                montserrat.className
              )}
            >
              <div className="flex flex-col justify-start items-start w-full">
                <div className="flex justify-start items-start">
                  <div className="text-white/90 text-xl font-semibold md:pr-9">
                    {project.name}
                  </div>
                </div>
                <p className="text-[10px] text-white/80 mt-2 md:pr-9 md:mb-0 mb-4 ">
                  With your donation, you help us expand our global network,
                  train children at our academies to become Climate Justice
                  Ambassadors, and plant more trees. Even with small
                  contributions we can achieve a lot - and every donation brings
                  us a little closer to our goals. Thank you for your
                  contribution!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "w-80 md:h-96 bg-white z-20 p-5 rounded-xl shadow-md shadow-gray-400/20 relative flex justify-center ic ",
            montserrat.className
          )}
        >
          {by && (
            <GiftSomeOne onClose={(name) => setName(name)}>
              <div className="w-40 h-8 bg-primary rounded-3xl  mx-auto  cursor-pointer absolute -top-8 right-0 left-0 rounded-b-none flex justify-center items-center">
                <p className="text-white font-bold text-xs mt-0.5 flex justify-center items-center gap-2">
                  <Gift size={15} /> Gift {name || "Someone"}
                </p>
              </div>
            </GiftSomeOne>
          )}
          {project.project_prefix == "tree" ? (
            <TreeDonateBox data={project} />
          ) : (
            <AmountDonateBox data={project} />
          )}
        </div>
        <Image
          alt=""
          src="/assets/brand-shape.png"
          width={1040}
          height={1040}
          className="absolute -top-8 md:block hidden -right-16 h-16 w-16 object-contain "
        />
      </div>
    </div>
  );
}

export default DonateBox;

function GiftSomeOne({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose?: (e: string) => void;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState("");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className={montserrat.className}>
        <DialogHeader>
          <DialogTitle>Gift To Someone</DialogTitle>
        </DialogHeader>
        <div className="">
          <Label className="text-xs" htmlFor="terms">
            Name
          </Label>
          <Input
            className="shadow-none"
            placeholder="Enter name..."
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="">
          <Label className="text-xs" htmlFor="terms">
            Email ID
          </Label>
          <Input className="shadow-none" placeholder="Email ID..." />
        </div>
        <div className="">
          <Label className="text-xs" htmlFor="terms">
            Message
          </Label>
          <Textarea className="shadow-none" placeholder="Message..." />
        </div>
        <br />
        <Button
          className="w-full shadow-none donateBtn py-6"
          onClick={() => {
            setOpen(false);
            console.log(name);
            if (onClose) {
              onClose(name.trim().split(" ")[0]);
            }
          }}
        >
          Send Gift Donation
        </Button>
      </DialogContent>
    </Dialog>
  );
}
