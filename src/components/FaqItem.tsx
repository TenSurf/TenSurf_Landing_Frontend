import {AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import React, { useEffect, useState } from "react";
import AOS from "aos";

const FaqItem = ({question, answer}: { question: string, answer: string }) => {

    const [open, setOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      anchorPlacement: 'center-center'
    });
  }, []);

    return (
      <div data-aos="fade-up" >
        <AccordionItem value={question} className={'w-full'}>
          <AccordionTrigger>
            <h3 onClick={() => setOpen(prevState => !prevState)}
                className={'text-xl font-bold'}>{question}</h3>
          </AccordionTrigger>
          <AccordionContent className={'w-full'}>
            <h4 className={'text-lg font-light pt-4'}>{answer}</h4>
          </AccordionContent>
        </AccordionItem>
      </div>
    );
};

export default FaqItem;