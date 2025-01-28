import { montserrat } from "@/fonts/font";
import Image from "next/image";

import { ProjectItem } from "@/interface/project";
import { client, genPbFiles } from "@/request/actions";
import NotFound from "../not-found";

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
import DonateBox from "./DonateBox";

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

  return <DonateBox project={project} by={by} />;
}

export default Donate;
