"use client";
import React, { useState } from "react";
import GsapAnimation from "@/utils/GsapAnimation";
import RoundTitleHeader from "@/component/landing/toolsV2/RoundTitleHeader";
import { MessageSquare, CheckCircle, Play, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Describe Your Rules",
    description: "Open TenSurf Brain in NinjaTrader. Type your entry conditions, exit rules, and risk management in plain English.",
    icon: MessageSquare,
    time: "~30 seconds"
  },
  {
    number: "02",
    title: "Review & Confirm",
    description: "TenSurf Brain converts your rules to a standardized format—free, instant, and repeatable as many times as you need. No quota is consumed until you confirm. Catch any misinterpretations before code generation begins.",
    icon: CheckCircle,
    time: "Always free"
  },
  {
    number: "03",
    title: "Generate & Test",
    description: "TenSurf Brain creates production-ready NinjaScript code, a configuration file with tunable parameters, a strategy summary, and full documentation. It compiles everything inside NinjaTrader and runs a backtest automatically. This step uses one generation from your daily quota.",
    icon: Play,
    time: "~2 min · 1 credit"
  }
];

const HowItWorks = () => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center gap-12 sm:gap-16 py-16 sm:py-24 max-w-screen-2xl px-4 md:px-0">
      <GsapAnimation
        fromVars={{ y: 100, opacity: 0 }}
        toVars={{ y: 0, opacity: 1, duration: 0.8, scrollTrigger: { start: "top bottom", trigger: "#howItWorksHeader" } }}
        selector="#howItWorksHeader"
      >
        <div id="howItWorksHeader" className="flex flex-col items-center justify-center gap-6">
          <RoundTitleHeader title="How It Works" />
          <h2 className="font-normal text-3xl sm:text-4xl md:text-5xl text-center text-foreground">
            Three Steps to Vibe Trading
          </h2>
        </div>
      </GsapAnimation>

      <GsapAnimation
        fromVars={{ y: 100, opacity: 0 }}
        toVars={{ y: 0, opacity: 1, duration: 0.8, scrollTrigger: { start: "top bottom", trigger: "#stepsContainer" } }}
        selector="#stepsContainer"
      >
        <div id="stepsContainer" className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-card border border-border dark:border-[#1a1a2e] hover:border-[#082FDF]/50 transition-all duration-300"
            >
              {/* Time badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#10B981]/10 border border-[#10B981]/30 rounded-full px-3 py-1">
                <Clock className="w-3 h-3 text-[#10B981]" />
                <span className="text-xs text-[#10B981] font-medium">{step.time}</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-5xl font-bold text-primary/30">{step.number}</span>
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-medium text-foreground">{step.title}</h3>
              <p className="text-base sm:text-lg text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </GsapAnimation>


      {/* Animated Product Demo */}
      <GsapAnimation
        fromVars={{ y: 80, opacity: 0 }}
        toVars={{ y: 0, opacity: 1, duration: 0.8, scrollTrigger: { start: "top bottom", trigger: "#productDemo" } }}
        selector="#productDemo"
      >
        <div id="productDemo" className="w-full max-w-[628px]">
          <h3 className="text-2xl md:text-3xl font-medium text-center text-foreground mb-8">
            See It in Action
          </h3>
          <ProductDemoCarousel />
        </div>
      </GsapAnimation>

      {/* What happens next callout */}
      <GsapAnimation
        fromVars={{ y: 50, opacity: 0 }}
        toVars={{ y: 0, opacity: 1, duration: 0.6, scrollTrigger: { start: "top bottom", trigger: "#whatNextCallout" } }}
        selector="#whatNextCallout"
      >
        <div id="whatNextCallout" className="flex items-center gap-3 bg-[#082FDF]/10 border border-[#082FDF]/30 rounded-full px-6 py-3">
          <CheckCircle className="w-5 h-5 text-primary" />
          <span className="text-foreground">
            <span className="font-medium">What happens next:</span> Ready for backtesting in Strategy Analyzer
          </span>
        </div>
      </GsapAnimation>

      <GsapAnimation
        fromVars={{ y: 50, opacity: 0 }}
        toVars={{ y: 0, opacity: 1, duration: 0.6, scrollTrigger: { start: "top bottom", trigger: "#howItWorksCTA" } }}
        selector="#howItWorksCTA"
      >
        <div id="howItWorksCTA">
          <Link href="/waitlist">
            <Button className="flex gap-2 rounded-3xl drop-shadow-[3px_5px_24px_#082FDF] py-6 px-12">
              <span className="text-lg font-semibold">Join the Waitlist</span>
              <ArrowRight size={20} strokeWidth={2} />
            </Button>
          </Link>
        </div>
      </GsapAnimation>
    </div>
  );
};


const demoSlides = [
  { src: "/images/Strategy Surf.png", label: "Strategy Surf", description: "Describe your trading rules in plain English" },
  { src: "/images/Indicator Surf.png", label: "Indicator Surf", description: "Build custom NinjaTrader indicators with plain English rules" },
  { src: "/images/Script Surf.png", label: "Script Surf", description: "Modify your NinjaScripts for strategies or indicator with prompts" },
];

const ProductDemoCarousel = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-center gap-3">
        {demoSlides.map((slide, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              active === i
                ? "bg-[#082FDF] text-white"
                : "bg-white/10 text-gray-400 hover:bg-white/20"
            }`}
          >
            {slide.label}
          </button>
        ))}
      </div>
      <div className="relative w-full rounded-2xl overflow-hidden border border-[#1a1a2e] bg-[#00041A]">
        <div className="relative aspect-[16/10] w-full">
          {demoSlides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${
                active === i ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.label}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 628px"
              />
            </div>
          ))}
        </div>
        <div className="p-4 text-center border-t border-[#1a1a2e]">
          <p className="text-foreground font-medium">{demoSlides[active].label}</p>
          <p className="text-sm text-muted-foreground">{demoSlides[active].description}</p>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        {demoSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              active === i ? "w-8 bg-[#082FDF]" : "w-1.5 bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
