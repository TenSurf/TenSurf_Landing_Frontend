import React from "react";
import GsapAnimation from "@/utils/GsapAnimation";
import RoundTitleHeader from "@/component/landing/toolsV2/RoundTitleHeader";
import { Shield, Code2, Handshake } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Full Copyright Ownership",
    description:
      "You hold complete rights to every strategy generated. Use it, share it, or build a business on it.",
  },
  {
    icon: Code2,
    title: "Edit Without Limits",
    description:
      "The raw NinjaScript C# source code is yours to modify. Change indicators, adjust risk rules, extend the logic — no lock-in.",
  },
  {
    icon: Handshake,
    title: "Trade or Sell Freely",
    description:
      "List your strategies on marketplaces, license them to other traders, or keep them as your competitive edge. Your call.",
  },
];

const CodeOwnership = () => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center gap-10 sm:gap-12 py-16 sm:py-24 max-w-screen-2xl px-4 md:px-0">
      <GsapAnimation
        fromVars={{ y: 80, opacity: 0 }}
        toVars={{
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            start: "top bottom",
            trigger: "#codeOwnershipHeader",
          },
        }}
        selector="#codeOwnershipHeader"
      >
        <div
          id="codeOwnershipHeader"
          className="flex flex-col items-center justify-center gap-6"
        >
          <RoundTitleHeader title="Code Ownership" />
          <h2 className="font-normal text-3xl sm:text-4xl md:text-5xl text-center text-[#E9ECEF]">
            Your Code. Your Rules. Your Profit.
          </h2>
          <p className="font-normal text-base sm:text-lg md:text-xl max-w-[700px] text-center text-[#ADB5BD]">
            Every strategy TenSurf generates is yours — fully. Download the .cs
            file, open it in any editor, modify the logic, or hand it to your
            developer. No usage restrictions, no licensing fees, no strings
            attached.
          </p>
        </div>
      </GsapAnimation>

      <GsapAnimation
        fromVars={{ y: 80, opacity: 0 }}
        toVars={{
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            start: "top bottom",
            trigger: "#codeOwnershipCards",
          },
        }}
        selector="#codeOwnershipCards"
      >
        <div
          id="codeOwnershipCards"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e] hover:border-[#082FDF]/50 transition-all duration-300"
            >
              <benefit.icon className="w-8 h-8 text-[#082FDF]" />
              <h3 className="text-2xl font-medium text-[#E9ECEF]">
                {benefit.title}
              </h3>
              <p className="text-base sm:text-lg text-[#ADB5BD]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </GsapAnimation>
    </div>
  );
};

export default CodeOwnership;
