import React from "react";
import GsapAnimation from "@/utils/GsapAnimation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, CheckCircle2, Clock } from "lucide-react";

const PainPoint = () => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center py-16 sm:py-24 max-w-screen-2xl px-4">
      <GsapAnimation
        fromVars={{ y: 80, opacity: 0 }}
        toVars={{
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { start: "top bottom", trigger: "#painPointSection" },
        }}
        selector="#painPointSection"
      >
        <div
          id="painPointSection"
          className="relative flex flex-col items-center gap-12 w-full max-w-4xl mx-auto"
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-medium text-center text-foreground leading-tight max-w-3xl">
            ChatGPT Gets You Started.{" "}
            <span className="text-primary">Vibe Trading Gets You Backtested.</span>
          </h2>

          {/* Stat callout */}
          <div className="flex items-center gap-3 bg-yellow-50 dark:bg-[#FEF3C7]/10 border border-yellow-300 dark:border-[#F59E0B]/30 rounded-full px-6 py-3">
            <Clock className="w-5 h-5 text-yellow-500" />
            <span className="text-foreground">
              Average trader spends <span className="font-bold text-yellow-500">40+ hours</span> learning to code their first strategy
            </span>
          </div>

          {/* Two-column pain vs solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Pain */}
            <div className="flex flex-col gap-4 p-8 rounded-2xl bg-red-50/50 dark:bg-gradient-to-b dark:from-[#1a0a0a] dark:to-[#0a0505] border border-red-200 dark:border-red-900/30">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-medium text-red-400">
                  The ChatGPT problem
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                ChatGPT doesn&apos;t know NinjaTrader. It generates code with
                deprecated methods, missing references, and logic that looks
                right until you hit compile. You&apos;re left debugging C# you
                didn&apos;t write and don&apos;t fully understand.
              </p>
              <ul className="text-muted-foreground text-sm space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Code that doesn&apos;t compile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Deprecated API calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Hours of debugging required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>No way to verify interpretation before generating</span>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div className="flex flex-col gap-4 p-8 rounded-2xl bg-indigo-50/50 dark:bg-gradient-to-b dark:from-[#00115E]/30 dark:to-[#00041A] border border-indigo-200 dark:border-[#082FDF]/30">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#10B981]" />
                <h3 className="text-xl font-medium text-[#10B981]">
                  The TenSurf Brain difference
                </h3>
              </div>
              <p className="text-foreground leading-relaxed">
                TenSurf Brain generates NinjaScript inside NinjaTrader and
                handles compilation automatically. You get code that
                works — not code that almost works.
              </p>
              <ul className="text-foreground text-sm space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981]">✓</span>
                  <span>Compiles on first try</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981]">✓</span>
                  <span>Current NinjaTrader API</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981]">✓</span>
                  <span>Ready to backtest immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981]">✓</span>
                  <span>Free review step — confirm AI&apos;s interpretation before generating</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Callout badge */}
          <div className="flex items-center gap-3 bg-[#10B981]/10 border border-[#10B981]/20 rounded-full px-6 py-3">
            <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
            <span className="text-foreground font-medium">
              Your strategies stay on your machine. Your ideas stay yours.
            </span>
          </div>

          {/* CTA */}
          <Link href="/waitlist">
            <Button className="flex gap-2 rounded-3xl drop-shadow-[3px_5px_24px_#082FDF] py-6 px-10">
              <span className="text-lg font-semibold">
                Join the Waitlist
              </span>
              <ArrowRight size={20} strokeWidth={2} />
            </Button>
          </Link>
        </div>
      </GsapAnimation>
    </div>
  );
};

export default PainPoint;
