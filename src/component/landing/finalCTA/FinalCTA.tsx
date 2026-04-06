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
        <div id="finalCTAContent" className="relative flex flex-col items-center justify-center gap-6 text-center py-16 px-8">
          <h2 className="font-medium text-3xl sm:text-4xl md:text-5xl text-foreground max-w-3xl leading-tight">
            Start <Link href="/vibe-trading" className="text-primary hover:underline">Vibe Trading</Link> Today
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl">
            Karpathy made vibe coding mainstream. We&apos;re making Vibe Trading real. Describe your strategy in English. Let AI do the rest.
          </p>

          <Link href="/waitlist">
            <div className="flex items-center gap-3 bg-primary/20 border border-primary/40 rounded-full px-12 py-6 mt-4 hover:bg-primary/30 transition-colors">
              <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
              <span className="text-lg font-semibold text-foreground">Join the Waitlist</span>
            </div>
          </Link>

          <p className="text-sm text-muted-foreground">
            Be the first to know when we launch • No commitment required
          </p>
        </div>
      </GsapAnimation>
    </div>
  );
};

export default FinalCTA;
