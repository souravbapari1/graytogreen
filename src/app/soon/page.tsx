"use client";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { setLnCookie } from "@/server";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Page() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    ("use server"); // This is not necessary here; remove if not needed
    await setLnCookie("english");
  };

  return (
    <div>
      <Navbar />
      <form action="/" onSubmit={handleSubmit} method="post">
        <div className="container h-[70vh] flex justify-center items-center flex-col gap-6">
          <Image
            src="/icons/soon.webp"
            width={2000}
            height={2000}
            alt=""
            className="w-96 h-auto"
          />

          <button type="submit" className="">
            Submit
          </button>

          <Link href="/" replace>
            <Button
              className="shadow-none border-none bg-primary/10 text-xs text-primary/60"
              variant="secondary"
            >
              Go Home
            </Button>
          </Link>
        </div>
      </form>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default Page;
