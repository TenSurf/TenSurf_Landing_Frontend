import React from "react";
import GsapAnimation from "@/utils/GsapAnimation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center py-16 sm:py-24 max-w-screen-2xl px-4 md:px-0">
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: "radial-gradient(ellipse at center, rgba(8,47,223,0.15) 0%, transparent 70%)",
        }}
      />
      <GsapAnimation
        fromVars={{ y: 100, opacity: 0 }}
        toVars={{ y: 0, opacity: 1, duration: 0.8, scrollTrigger: { start: "top bottom", trigger: "#finalCTAContent" } }}
        selector="#finalCTAContent"
      >
        <div id="finalCTAContent" className="relative flex flex-col items-center justify-center gap-8 text-center py-16 px-8">
          <h2 className="font-medium text-3xl sm:text-4xl md:text-5xl text-[#E9ECEF] max-w-3xl leading-tight">
            Your Trading Ideas Deserve to Run Automatically
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#ADB5BD] max-w-2xl">
            Stop waiting to learn coding. Start generating strategies today.
          </p>

          <Link href="/login">
            <Button className="flex gap-2 rounded-3xl drop-shadow-[3px_5px_24px_#082FDF] py-6 px-12 mt-4">
              <span className="text-lg font-semibold">Start Your 7-Day Free Trial</span>
              <ArrowRight size={20} strokeWidth={2} />
            </Button>
          </Link>

          {/* Objection handlers */}
          <p className="text-sm text-[#6C757D]">
            30-second signup • No credit card required • Full access to all features
          </p>
        </div>
      </GsapAnimation>
    </div>
  );
};

export default FinalCTA;
