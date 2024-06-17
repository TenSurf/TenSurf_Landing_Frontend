import React from "react";
import { FAQ_SECTION } from "@/constatns/landingPage.constants";
import FaqItem from "@/components/FaqItem";
import { Accordion } from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <div
         className="relative flex flex-col items-center gap-10 scroll-m-20 w-full max-w-screen-2xl mb-28">
      {/*<div className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-6">{FAQ_SECTION.title}</div>*/}
      <Accordion type="multiple" className="w-full flex flex-col gap-4">
        {FAQ_SECTION.items.map(val => (
          <FaqItem question={val.question} answer={val.answer} key={val.question} />
        ))}
      </Accordion>
    </div>
  );
};

export default FaqSection;
