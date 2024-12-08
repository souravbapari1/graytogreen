import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCheck } from "lucide-react";
import Navbar from "@/components/sections/Navbar/Navbar";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Footer from "@/components/sections/Footer/Footer";

function ThankYouPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[90vh] bg-gray-50">
        <div className="text-center">
          <div className="bg-green-100 text-green-600 rounded-full p-6 inline-block">
            <CheckCheck />
          </div>
          <h1 className="mt-6 text-2xl font-bold text-gray-800">
            Thank You for Your Submission!
          </h1>
          <p className="mt-2 text-gray-600">
            We’ve received your application. Our team will review it and get
            back to you shortly.
          </p>
        </div>

        <div className="mt-6">
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
      <FooterTop />
      <Footer />
    </>
  );
}

export default ThankYouPage;
