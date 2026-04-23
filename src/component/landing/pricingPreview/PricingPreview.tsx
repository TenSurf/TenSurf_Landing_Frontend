"use client";

import React from "react";
import GsapAnimation from "@/utils/GsapAnimation";
import RoundTitleHeader from "@/component/landing/toolsV2/RoundTitleHeader";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const PLANS = [
  {
    name: "Free Trial",
    price: "0",
    period: "",
    feature: "Try TenSurf Brain free for 7 days",
    bestFor: "Best for: Trying TenSurf Brain risk-free",
    highlighted: false,
    badge: undefined as string | undefined,
  },
  {
    name: "Start Surf",
    price: "49",
    period: "/month",
    feature: "Full code generation package included",
    bestFor: "Best for: Hobbyist traders testing the waters",
    highlighted: false,
    badge: undefined as string | undefined,
  },
  {
    name: "Pro Surf",
    price: "149",
    period: "/month",
    feature: "Priority support & processing",
    bestFor: "Best for: Active traders iterating on multiple strategies",
    highlighted: true,
    badge: "Most Popular" as string | undefined,
  },
  {
    name: "Ultra Surf",
    price: "299",
    period: "/month",
    feature: "Early access to new features",
    bestFor: "Best for: Professional traders and strategy developers",
    highlighted: false,
    badge: undefined as string | undefined,
  },
];

const PricingPreview = () => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center gap-12 sm:gap-16 py-16 sm:py-24 max-w-screen-2xl px-4 md:px-0">
      <GsapAnimation
        fromVars={{ y: 100, opacity: 0 }}
        toVars={{ y: 0, opacity: 1, duration: 0.8, scrollTrigger: { start: "top bottom", trigger: "#pricingPreviewHeader" } }}
        selector="#pricingPreviewHeader"
      >
        <div id="pricingPreviewHeader" className="flex flex-col items-center justify-center gap-6">
          <RoundTitleHeader title="Simple Pricing" />
          <h2 className="font-normal text-3xl sm:text-4xl md:text-5xl text-center text-[#E9ECEF]">
            Simple, Transparent Pricing
          </h2>
          <p className="font-normal text-base sm:text-lg md:text-xl text-center text-[#ADB5BD]">
            Start free. Upgrade whenever you're ready.
          </p>
        </div>
      </GsapAnimation>

      <GsapAnimation
        fromVars={{ y: 100, opacity: 0 }}
        toVars={{ y: 0, opacity: 1, duration: 0.8, scrollTrigger: { start: "top bottom", trigger: "#pricingCards" } }}
        selector="#pricingCards"
      >
        <div id="pricingCards" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {PLANS.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col gap-6 p-8 rounded-2xl ${
                plan.highlighted
                  ? "bg-gradient-to-b from-[#082FDF]/20 to-[#01030B] border-2 border-[#082FDF] scale-105"
                  : "bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e]"
              } transition-all duration-300`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#082FDF] text-white px-4 py-1 rounded-full text-sm font-medium">
                    {plan.badge}
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-medium text-[#E9ECEF]">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-[#E9ECEF]">${plan.price}</span>
                <span className="text-xl text-[#ADB5BD]">{plan.period}</span>
              </div>
              <div className="flex items-center gap-2 text-[#ADB5BD]">
                <Check className="w-5 h-5 text-[#082FDF]" />
                <span>{plan.feature}</span>
              </div>
              <p className="text-sm text-[#6C757D] italic">{plan.bestFor}</p>
              <Link href="/waitlist" className="mt-auto">
                <Button
                  className={`w-full py-3 rounded-xl ${
                    plan.highlighted
                      ? "bg-[#082FDF] hover:bg-[#082FDF]/80"
                      : "bg-transparent border border-[#082FDF] hover:bg-[#082FDF]/10"
                  }`}
                >
                  Join the Waitlist
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </GsapAnimation>

      <Link href="/plans" className="text-[#082FDF] hover:text-[#082FDF]/80 flex items-center gap-2 text-lg">
        Compare all features <ArrowRight size={18} />
      </Link>
    </div>
  );
};

export default PricingPreview;
