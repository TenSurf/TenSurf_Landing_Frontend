import React from "react";
import GsapAnimation from "@/utils/GsapAnimation";
import Link from "next/link";

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

          <Link href="/waitlist">
            <div className="flex items-center gap-3 bg-[#082FDF]/20 border border-[#082FDF]/40 rounded-full px-12 py-6 mt-4 hover:bg-[#082FDF]/30 transition-colors">
              <span className="w-3 h-3 bg-[#082FDF] rounded-full animate-pulse"></span>
              <span className="text-lg font-semibold text-white">Coming Soon — Join the Waitlist</span>
            </div>
          </Link>

          {/* Objection handlers */}
          <p className="text-sm text-[#6C757D]">
            Be the first to know when we launch • No commitment required
          </p>
        </div>
      </GsapAnimation>
    </div>
  );
};

export default FinalCTA;
