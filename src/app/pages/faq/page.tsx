import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { montserrat } from "@/fonts/font";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <div className={`container py-20 ${montserrat.className}`}>
        <h1 className="text-3xl font-extrabold text-center">
          Frequently Asked Questions
        </h1>
        <div className="w-full flex justify-center items-center flex-col mt-10">
          {Array.from({ length: 20 }).map((_, i) => {
            return (
              <Accordion
                type="single"
                collapsible
                className="lg:w-[900px] w-full"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="md:text-xl text-sm text-left ">
                    <div className="flex justify-start items-center md:gap-8 gap-4">
                      <div className="w-4 h-4 rounded-full bg-main"></div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt beatae obcaecati ab illo suscipit dolore culpa id,
                    nobis aliquam placeat exercitationem qui quas ratione
                    aspernatur laboriosam est, quae ipsa. Consectetur.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;
