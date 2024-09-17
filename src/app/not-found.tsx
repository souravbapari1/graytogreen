import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="container h-[70vh] flex justify-center items-center flex-col gap-6">
        <h1 className="text-9xl font-bold">404</h1>
        <p>Page Not Found!</p>
        <Link href="/" replace>
          <Button className="shadow-none border-none">Go Home</Button>
        </Link>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default NotFound;
