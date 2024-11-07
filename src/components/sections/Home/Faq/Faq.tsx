import { HomePage } from "@/app/homePage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { montserrat } from "@/fonts/font";

function Faq({ data }: { data?: HomePage["faqs"] }) {
  if (!data) {
    return <></>;
  }
  return (
    <div
      className={`container flex justify-center items-center flex-col mb-10 md:gap-5  ${montserrat.className}`}
    >
      <h1 className="lg:text-5xl text-2xl font-bold mb-10 uppercase">Faq`s</h1>
      {data.map((e, i) => {
        return (
          <Accordion
            type="single"
            collapsible
            className="lg:w-[900px] w-full"
            key={e.id}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="md:text-xl text-sm text-left ">
                <div className="flex justify-start items-center md:gap-8 gap-4">
                  <div className="w-4 h-4 rounded-full bg-main"></div>
                  {e.question}
                </div>
              </AccordionTrigger>
              <AccordionContent>{e.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
}

export default Faq;
