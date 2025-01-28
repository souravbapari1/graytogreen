import { montserrat } from "@/fonts/font";
import Image from "next/image";

import { ProjectItem } from "@/interface/project";
import { client, genPbFiles } from "@/request/actions";
import NotFound from "../not-found";
import DonateBox from "./DonateBox";
import { cn } from "@/lib/utils";
import TreeDonateBox from "./box/TreeDonateBox";
import AmountDonateBox from "./box/AmountDonateBox";
import SupportBox from "@/components/GMapBox/SupportBox";
import { useSession } from "next-auth/react";
import { auth } from "@/auth";
import Navbar from "@/components/sections/Navbar/Navbar";
import Footer from "@/components/sections/Footer/Footer";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { Gift } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const revalidate = 0;
export const metadata = {
  title: "Donate",
};
async function Donate({ searchParams }: { searchParams?: any }) {
  const donate = searchParams.donate;
  const by = searchParams.by;
  const support = searchParams.support;

  const id = searchParams.id;
  const type = searchParams.type;
  const session = await auth();

  if (!donate || !by || !id) {
    return <NotFound />;
  }
  if (!["tree", "plastic", "others"].includes(donate)) {
    return <NotFound />;
  }
  const project = await client
    .get(`/api/collections/projects/records/${id}`, {
      hideFields: "about_project,challenges_and_impact_details",
    })
    .send<ProjectItem>();

  if (!project) {
    return <NotFound />;
  }

  if (!["tree", "plastic", "others"].includes(project.project_prefix)) {
    return <NotFound />;
  }

  if (support == session?.user?.id) {
    return (
      <>
        <Navbar />
        <div className="container mt-20 text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 mb-10 flex justify-center items-center mx-auto">
            <IoClose size={30} className="text-primary/80 " />
          </div>
          <p className="text-center text-xl font-bold text-primary">
            You Not Support Yourself.
          </p>
          <Link
            href="/platform"
            className="mt-10 text-center block mx-auto text-sm text-primary underline"
          >
            Back Platform
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="w-full min-h-screen h-full flex justify-center items-center bg-gray-100 select-none">
      <div className="fixed top-4 left-0 right-0 mx-auto">
        <div className="w-full flex justify-center items-center">
          <SupportBox />
        </div>
        +
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
            <GiftSomeOne>
              <div className="w-40 h-8 bg-primary rounded-3xl  mx-auto  cursor-pointer absolute -top-8 right-0 left-0 rounded-b-none flex justify-center items-center">
                <p className="text-white font-bold text-xs mt-0.5 flex justify-center items-center gap-2">
                  <Gift size={15} /> Gift Someone
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

export default Donate;

function GiftSomeOne({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className={montserrat.className}>
        <DialogHeader>
          <DialogTitle>Gift To Someone</DialogTitle>
        </DialogHeader>

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
        <Button className="w-full shadow-none">Send Gift Donation</Button>
      </DialogContent>
    </Dialog>
  );
}
