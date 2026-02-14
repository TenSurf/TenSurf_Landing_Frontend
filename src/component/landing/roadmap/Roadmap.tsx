"use client";
import React, { useEffect, useRef, useState } from "react";
import GsapAnimation from "@/utils/GsapAnimation";
import RoundTitleHeader from "@/component/landing/toolsV2/RoundTitleHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Check, TrendingUp, BarChart3, Activity, Layers, Brain, Zap } from "lucide-react";

const indicators = [
  { name: "RSI", full: "Relative Strength Index" },
  { name: "MACD", full: "Moving Average Convergence Divergence" },
  { name: "Stochastic", full: "Stochastic Oscillator" },
  { name: "CCI", full: "Commodity Channel Index" },
  { name: "SMA", full: "Simple Moving Average" },
  { name: "EMA", full: "Exponential Moving Average" },
  { name: "WMA", full: "Weighted Moving Average" },
  { name: "Bollinger Bands", full: "Bollinger Bands" },
  { name: "ATR", full: "Average True Range" },
  { name: "Keltner Channel", full: "Keltner Channel" },
  { name: "VWAP", full: "Volume Weighted Average Price" },
  { name: "ADX", full: "Average Directional Index" },
  { name: "Parabolic SAR", full: "Parabolic Stop and Reverse" },
  { name: "Donchian Channel", full: "Donchian Channel" },
  { name: "Ichimoku", full: "Ichimoku Cloud" },
  { name: "OBV", full: "On-Balance Volume" },
];

const upcomingFeatures = [
  { name: "Price Action", icon: TrendingUp, desc: "Candlestick patterns, support & resistance, breakouts" },
  { name: "Volume Profile", icon: BarChart3, desc: "POC, value area, volume nodes" },
  { name: "Order Flow", icon: Activity, desc: "Delta, footprint, cumulative analysis" },
  { name: "Intermarket Analysis", icon: Layers, desc: "Cross-market correlations & divergences" },
  { name: "ICT & Smart Money", icon: Brain, desc: "FVG, order blocks, liquidity sweeps" },
];

const IndicatorChips = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <TooltipProvider delayDuration={200}>
      <div ref={ref} className="flex flex-wrap gap-2">
        {indicators.map((ind, i) => (
          <Tooltip key={ind.name}>
            <TooltipTrigger asChild>
              <span
                className={`roadmap-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-sm text-[#10B981] cursor-default ${visible ? "roadmap-chip-visible" : ""}`}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <Check className="w-3 h-3" />
                {ind.name}
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>{ind.full}</p>
            </TooltipContent>
          </Tooltip>
        ))}
        <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#10B981]/5 border border-[#10B981]/10 text-sm text-[#10B981]/70">
          + 80 more
        </span>
      </div>
    </TooltipProvider>
  );
};

const Roadmap = () => {
  return (
    <div id="roadmap" className="relative w-full flex flex-col justify-center items-center gap-10 sm:gap-12 py-16 sm:py-24 max-w-screen-2xl scroll-m-28 px-4 md:px-0">
      {/* Header */}
      <GsapAnimation
        fromVars={{ y: 80, opacity: 0 }}
        toVars={{ y: 0, opacity: 1, duration: 0.8, scrollTrigger: { start: "top bottom", trigger: "#roadmapHeader" } }}
        selector="#roadmapHeader"
      >
        <div id="roadmapHeader" className="flex flex-col items-center justify-center gap-6">
          <RoundTitleHeader title="Roadmap" />
          <h2 className="font-normal text-3xl sm:text-4xl md:text-5xl text-center text-[#E9ECEF]">
            Built for Technical Analysis
          </h2>
          <p className="font-normal text-base sm:text-lg md:text-xl max-w-[700px] text-center text-[#ADB5BD]">
            TenSurf Brain v1.0 supports indicator-based strategies using 100+ NinjaTrader built-in indicators.
            More trading methods are on the way.
          </p>
        </div>
      </GsapAnimation>

      {/* Available Now */}
      <GsapAnimation
        fromVars={{ y: 60, opacity: 0 }}
        toVars={{ y: 0, opacity: 1, duration: 0.8, scrollTrigger: { start: "top bottom", trigger: "#availableNow" } }}
        selector="#availableNow"
      >
        <Card id="availableNow" className="w-full max-w-4xl border-[#10B981]/30 bg-gradient-to-b from-[#00041A] to-[#01030B]">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/30 rounded-full px-4 py-1.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
                </span>
                <span className="text-sm font-medium text-[#10B981]">Available Now</span>
              </div>
            </div>
            <h3 className="text-2xl font-medium text-[#E9ECEF] mb-3">
              Indicator-Based Strategies
            </h3>
            <p className="text-[#ADB5BD] mb-6 max-w-2xl">
              Create entry and exit rules using any NinjaTrader built-in indicator, combined with stop loss,
              take profit, position sizing, and multi-condition logic.
            </p>
            <IndicatorChips />
          </CardContent>
        </Card>
      </GsapAnimation>

      {/* Coming Soon */}
      <GsapAnimation
        fromVars={{ y: 60, opacity: 0 }}
        toVars={{ y: 0, opacity: 1, duration: 0.8, scrollTrigger: { start: "top bottom", trigger: "#comingSoon" } }}
        selector="#comingSoon"
      >
        <div id="comingSoon" className="w-full flex flex-col gap-8">
          <h3 className="text-2xl font-medium text-center text-[#E9ECEF]">
            Coming in Future Releases
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {upcomingFeatures.map((feature, i) => (
              <Card
                key={feature.name}
                className="roadmap-upcoming border-[#082FDF]/20 bg-gradient-to-b from-[#00041A] to-[#01030B] hover:border-[#082FDF]/50 transition-all duration-300"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <CardContent className="flex flex-col gap-3 p-6">
                  <feature.icon className="w-7 h-7 text-[#082FDF]" />
                  <h4 className="text-lg font-medium text-[#E9ECEF]">{feature.name}</h4>
                  <p className="text-sm text-[#ADB5BD]">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Free upgrade banner */}
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-3 bg-[#082FDF]/10 border border-[#082FDF]/30 rounded-full px-6 py-3">
              <Zap className="w-5 h-5 text-[#082FDF]" />
              <span className="text-[#E9ECEF]">
                All existing subscribers get <span className="font-medium text-[#082FDF]">free upgrades</span> to new versions
              </span>
            </div>
          </div>
        </div>
      </GsapAnimation>
    </div>
  );
};

export default Roadmap;
