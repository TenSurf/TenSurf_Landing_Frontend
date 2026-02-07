"use client";

import React, { useEffect, useState } from "react";
import GsapAnimation from "@/utils/GsapAnimation";
import RoundTitleHeader from "@/component/landing/toolsV2/RoundTitleHeader";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const TBLSAI_API = process.env.NEXT_PUBLIC_TBLSAI_API_URL || "https://tblsai-app-dev.mangomeadow-024a1511.eastus.azurecontainerapps.io";

interface PricingTier {
  price_id: string;
  amount: number; // cents
  name: string;
  description: string;
  features: string[];
}

interface PricingData {
  tiers: Record<string, PricingTier>;
  currency: string;
  billing_cycle: string;
}

// Static trial card (not in Stripe)
const trialCard = {
  name: "Free Trial",
  price: "0",
  period: "",
  feature: "3 strategies/day for 7 days",
  bestFor: "Best for: Trying TenSurf Brain risk-free",
  cta: "Start Free Trial",
  highlighted: false,
  isTrial: true,
};

function tierToCard(key: string, tier: PricingTier) {
  const price = String(tier.amount / 100);
  const dailyFeature = tier.features.find((f) => f.toLowerCase().includes("strategies per day")) || tier.features[0] || "";
  const bestForMap: Record<string, string> = {
    start_surf: "Best for: Hobbyist traders testing the waters",
    pro_surf: "Best for: Active traders iterating on multiple strategies",
    ultra_surf: "Best for: Professional traders and strategy developers",
  };
  const ctaMap: Record<string, string> = {
    start_surf: "Get Started",
    pro_surf: "Go Pro",
    ultra_surf: "Go Ultra",
  };
  return {
    name: tier.name,
    price,
    period: "/month",
    feature: dailyFeature,
    bestFor: bestForMap[key] || "",
    cta: ctaMap[key] || "Get Started",
    highlighted: key === "pro_surf",
    badge: key === "pro_surf" ? "Most Popular" : undefined,
    isTrial: false,
  };
}

const PricingPreview = () => {
  const [plans, setPlans] = useState<any[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${TBLSAI_API}/api/v1/stripe/pricing`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data: PricingData) => {
        const cards = [trialCard];
        for (const key of ["start_surf", "pro_surf", "ultra_surf"]) {
          if (data.tiers[key]) cards.push(tierToCard(key, data.tiers[key]));
        }
        setPlans(cards);
      })
      .catch(() => setError(true));
  }, []);

  // Skeleton loader
  if (!plans && !error) {
    return (
      <div className="relative w-full flex flex-col justify-center items-center gap-16 py-24 max-w-screen-2xl">
        <div className="flex flex-col items-center gap-6">
          <RoundTitleHeader title="Simple Pricing" />
          <h2 className="font-normal text-4xl md:text-5xl text-center text-[#E9ECEF]">Simple, Transparent Pricing</h2>
          <p className="font-normal text-xl text-center text-[#ADB5BD]">Start free. Upgrade when you need more strategies.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-64 rounded-2xl bg-[#00041A] animate-pulse border border-[#1a1a2e]" />
          ))}
        </div>
      </div>
    );
  }

  // Error state — hide section gracefully
  if (error || !plans) return null;

  return (
    <div className="relative w-full flex flex-col justify-center items-center gap-16 py-24 max-w-screen-2xl">
      <GsapAnimation
        fromVars={{ y: 100, opacity: 0 }}
        toVars={{ y: 0, opacity: 1, duration: 0.8, scrollTrigger: { start: "top bottom", trigger: "#pricingPreviewHeader" } }}
        selector="#pricingPreviewHeader"
      >
        <div id="pricingPreviewHeader" className="flex flex-col items-center justify-center gap-6">
          <RoundTitleHeader title="Simple Pricing" />
          <h2 className="font-normal text-4xl md:text-5xl text-center text-[#E9ECEF]">
            Simple, Transparent Pricing
          </h2>
          <p className="font-normal text-xl text-center text-[#ADB5BD]">
            Start free. Upgrade when you need more strategies.
          </p>
        </div>
      </GsapAnimation>

      <GsapAnimation
        fromVars={{ y: 100, opacity: 0 }}
        toVars={{ y: 0, opacity: 1, duration: 0.8, scrollTrigger: { start: "top bottom", trigger: "#pricingCards" } }}
        selector="#pricingCards"
      >
        <div id="pricingCards" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {plans.map((plan, index) => (
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
              <Link href={plan.isTrial ? "/signup" : "/plans"} className="mt-auto">
                <Button
                  className={`w-full py-3 rounded-xl ${
                    plan.highlighted
                      ? "bg-[#082FDF] hover:bg-[#082FDF]/80"
                      : "bg-transparent border border-[#082FDF] hover:bg-[#082FDF]/10"
                  }`}
                >
                  {plan.cta}
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
