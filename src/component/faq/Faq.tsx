'use client';

import { FAQ, FAQ_DATA, FAQ_CATEGORIES } from '../../constatns/faqPage.constants';
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  questions: FAQItem[];
}

const FAQAccordion = ({ question, answer }: FAQItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#1a1a2e]">
      <button
        className="w-full flex items-center justify-between py-6 text-left hover:text-[#082FDF] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg text-[#E9ECEF] pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#082FDF] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#ADB5BD] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 text-[#ADB5BD] leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  const [activeCategory, setActiveCategory] = useState<string>('general');

  const categoryData = FAQ_DATA.find((cat: FAQCategory) => cat.category === activeCategory);

  return (
    <div className="flex flex-col w-full gap-10 sm:gap-16 mt-16 sm:mt-24 md:mt-32 mb-16 sm:mb-24 md:mb-32 max-w-screen-xl mx-auto px-4">
      {/* Header */}
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium text-center text-[#E9ECEF]">
          {FAQ.title}
        </h1>
        <p className="text-xl text-[#ADB5BD] text-center">
          {FAQ.description}
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3">
        {Object.entries(FAQ_CATEGORIES).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
              activeCategory === key
                ? 'bg-[#082FDF] text-white'
                : 'bg-[#00041A] text-[#ADB5BD] border border-[#1a1a2e] hover:border-[#082FDF]/50'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto w-full">
        {categoryData?.questions.map((item: FAQItem, index: number) => (
          <FAQAccordion key={index} question={item.question} answer={item.answer} />
        ))}
      </div>

      {/* Contact CTA */}
      <div className="flex flex-col items-center gap-6 py-16 bg-gradient-to-b from-[#00041A] to-[#01030B] rounded-3xl mt-8">
        <h2 className="text-2xl font-medium text-[#E9ECEF]">
          Can't find what you're looking for?
        </h2>
        <p className="text-[#ADB5BD]">Our support team is here to help.</p>
        <Link href="/contact-us">
          <Button className="rounded-xl px-8 py-3 bg-[#082FDF] hover:bg-[#082FDF]/80">
            Contact Support
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Faq;
