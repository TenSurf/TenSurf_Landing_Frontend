import {AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import React, { useEffect, useState } from "react";
import AOS from "aos";

const FaqItem = ({question, answer}: { question: string, answer: string }) => {

    const [open, setOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
      anchorPlacement: 'bottom-bottom'
    });
  }, []);

    return (
      <div data-aos="fade-up" >
        <AccordionItem value={question} className={'w-full'}>
          <AccordionTrigger>
            <h3 onClick={() => setOpen(prevState => !prevState)}
                className={'text-left text-xl font-bold'}>{question}</h3>
          </AccordionTrigger>
          <AccordionContent className={'w-full'}>
            <h4 className={'text-left text-lg font-light pt-4'}>{answer}</h4>
          </AccordionContent>
        </AccordionItem>
      </div>
    );
};

export default FaqItem;