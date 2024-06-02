import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {

  return (
    <div className={"faq-item"}>
      <AccordionItem value={question} className={"w-full"}>
        <AccordionTrigger>
          <h3
            className={"text-left text-xl font-bold"}>{question}</h3>
        </AccordionTrigger>
        <AccordionContent className={"w-full"}>
          <h4 className={"text-left text-lg font-light pt-4"}>{answer}</h4>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
};

export default FaqItem;