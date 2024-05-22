import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React, { useState } from "react";

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {

  const [open, setOpen] = useState(false);

  return (
    <div data-aos="fade-up" >
      <AccordionItem value={question} className={"w-full"}>
        <AccordionTrigger>
          <h3 onClick={() => setOpen(prevState => !prevState)}
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