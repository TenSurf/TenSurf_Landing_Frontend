import { FAQ } from '../../constatns/faqPage.constants';
import Image from "next/image";
import React from "react";
import FaqSection from "@/component/landing/FaqSection";

// *.*.*.*.*.*.*.*.*.*.* Main Function ↓•↓•↓
export const Faq = () => {
  // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
  return (
    <div
      className="flex flex-col w-full gap-[120px] mt-44 mb-[200px]">
      <h1 className={"text-5xl md:text-7xl font-medium text-center"}>Frequently Asked Questions</h1>
      <div className="relative w-full pb-[75vh] overflow-visible">
        <div
          className="absolute w-screen bg-[url('/images/subtitleBackground.svg')] bg-no-repeat bg-cover h-[200vh] bottom-0">
        </div>
        <Image src={"/images/faq.png"} className={'2xl:rounded-3xl max-w-screen-2xl mx-auto'} objectFit={"cover"}
               alt={"About Us"} fill />
      </div>
      <div className="container w-full mx-auto flex-col md:gap-[200px]">
        <FaqSection/>
      </div>
    </div>
  );
};

export default Faq;
