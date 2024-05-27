import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {

  const [open, setOpen] = useState(false);
  const faqItemRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(faqItemRef.current, { opacity: 0, y: 100 }, {
      opacity: 1, y: 0, duration: 1.5 , scrollTrigger: {
        trigger: faqItemRef.current,
        start: "center center"
      }
    });
  });

  return (
    <div ref={faqItemRef}>
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