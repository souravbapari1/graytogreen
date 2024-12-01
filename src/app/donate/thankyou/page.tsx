import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { showConfettiFireworks } from "@/components/ui/magic/ConfettiFireworks";
import { montserrat } from "@/fonts/font";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
import SucessView from "./SucessView";

function page({ searchParams }: { searchParams?: any }) {
  const type = searchParams.type;

  return (
    <div className="">
      <Navbar />
      <SucessView type={type} />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
