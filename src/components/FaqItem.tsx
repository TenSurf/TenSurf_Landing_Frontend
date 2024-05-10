import {AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import React, {useState} from 'react';

const FaqItem = ({question, answer}: { question: string, answer: string }) => {

    const [open, setOpen] = useState(false)

    return (
        <AccordionItem value={question} className={'w-full'}>
            <AccordionTrigger>
                <h3 onClick={() => setOpen(prevState => !prevState)}
                    className={'text-xl font-bold'}>{question}</h3>
            </AccordionTrigger>
            <AccordionContent className={'w-full'}>
                <h4 className={'text-lg font-light pt-4'}>{answer}</h4>
            </AccordionContent>
        </AccordionItem>
    );
};

export default FaqItem;