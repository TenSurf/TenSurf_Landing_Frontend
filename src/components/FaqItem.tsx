import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";

const FaqItem = ({
                   question,
                   answer
                 }: {
  question: string;
  answer: string;
}) => {
  return (
    <AccordionItem value={question} className={"w-full faq-item border-0 rounded-3xl p-4"}>
      <AccordionTrigger>
        <h3 className={"text-left text-xl font-bold"}>{question}</h3>
      </AccordionTrigger>
      <AccordionContent className={"w-full"}>
        <h4 className={"text-left text-lg font-light pt-4"}>{answer}</h4>
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaqItem;
