import { Toaster } from "@/components/ui/toaster";
import { lora } from "@/fonts/font";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import NextTopLoader from "nextjs-toploader";
import "react-multi-carousel/lib/styles.css";
import "react-slideshow-image/dist/styles.css";
import Client from "./client";
import "./globals.css";
import "react-phone-number-input/style.css";
import { SessionProvider } from "next-auth/react";
import { Toaster as ToasterBox } from "react-hot-toast";
import GoogleTranslate from "./GoogleTranslate";
import Script from "next/script";
export const metadata: Metadata = {
  title: " Gray To Green ",
  description: "Generated by create next app",
};
export const revalidate = 30;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={lora.className}>
        <Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" />
        {/* <GoogleTranslate /> */}
        <NextTopLoader color="#11a665" />
        <SessionProvider>
          <Client> {children}</Client>
        </SessionProvider>
        <ToasterBox />
        <Toaster />
        <div className="h-10 w-60 bg-red-500 fixed bottom-8 right-6 z-30 flex justify-center items-center text-white">
          Under Development
        </div>
      </body>
    </html>
  );
}
