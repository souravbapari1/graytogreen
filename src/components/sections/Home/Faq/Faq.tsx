import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { montserrat } from "@/fonts/font";

function Faq() {
  return (
    <div
      className={`container flex justify-center items-center flex-col mb-10 md:gap-5  ${montserrat.className}`}
    >
      <h1 className="lg:text-5xl text-2xl font-bold mb-10 uppercase">Faq`s</h1>
      {Array.from({ length: 5 }).map((_, i) => {
        return (
          <Accordion type="single" collapsible className="lg:w-[900px] w-full">
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
                nobis aliquam placeat exercitationem qui quas ratione aspernatur
                laboriosam est, quae ipsa. Consectetur.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
}

export default Faq;
