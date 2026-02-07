"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, PenLine, Database, Check, X, ArrowLeft } from 'lucide-react';
import RoundTitleHeader from '@/component/landing/toolsV2/RoundTitleHeader';

const TBLSAI_API = process.env.NEXT_PUBLIC_TBLSAI_API_URL || "https://tblsai-app-dev.mangomeadow-024a1511.eastus.azurecontainerapps.io";

const quickComparison = [
  { aspect: 'Approach', tensurf: 'Describe your rules', buildalpha: 'Select from signal library' },
  { aspect: 'Input', tensurf: 'Plain English text', buildalpha: 'Pre-built signals (7,000+)' },
  { aspect: 'Strategy Creation', tensurf: 'You define the logic', buildalpha: 'Genetic algorithm generates' },
  { aspect: 'NinjaTrader Native', tensurf: true, buildalpha: 'Export only' },
  { aspect: 'Integration', tensurf: 'Runs inside NT8', buildalpha: 'Standalone software' },
  { aspect: 'Trial', tensurf: '7 days free', buildalpha: 'Demo available' },
  { aspect: 'Payment', tensurf: 'Monthly subscription', buildalpha: 'Lifetime license' },
];

const featureComparison = [
  { feature: 'Plain English input', tensurf: true, buildalpha: false },
  { feature: 'Pre-built signal library', tensurf: false, buildalpha: '7,000+ signals' },
  { feature: 'Genetic algorithm', tensurf: false, buildalpha: true },
  { feature: 'AI interpretation', tensurf: true, buildalpha: false },
  { feature: 'Free rule review before generating', tensurf: true, buildalpha: false },
  { feature: '4-component output (code + config + summary + docs)', tensurf: true, buildalpha: false },
  { feature: 'NinjaTrader native', tensurf: true, buildalpha: 'Export only' },
  { feature: 'Auto compilation in NT8', tensurf: true, buildalpha: false },
  { feature: 'Built-in backtesting', tensurf: true, buildalpha: true },
  { feature: 'Monte Carlo testing', tensurf: false, buildalpha: true },
  { feature: 'Intraday edge analysis', tensurf: false, buildalpha: true },
  { feature: 'Portfolio management', tensurf: false, buildalpha: true },
];

const renderCell = (value: string | boolean) => {
  if (value === true) return <Check className="w-5 h-5 text-green-500 mx-auto" />;
  if (value === false) return <X className="w-5 h-5 text-red-500 mx-auto" />;
  return <span className="text-[#ADB5BD]">{value}</span>;
};

const CompareBuildAlpha = () => {
  const [startingPrice, setStartingPrice] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${TBLSAI_API}/api/v1/stripe/pricing`)
      .then((r) => r.json())
      .then((data) => {
        const startSurf = data?.tiers?.start_surf;
        if (startSurf) setStartingPrice(String(startSurf.amount / 100));
      })
      .catch(() => {});
  }, []);

  const priceText = startingPrice ? `$${startingPrice}/month` : "...";

  return (
    <div className="flex flex-col w-full gap-16 mt-32 mb-32 max-w-screen-xl mx-auto px-4">
      {/* Back Link */}
      <Link href="/compare" className="flex items-center gap-2 text-[#ADB5BD] hover:text-[#082FDF] transition-colors w-fit">
        <ArrowLeft size={18} /> Back to all comparisons
      </Link>

      {/* Hero Section */}
      <div className="flex flex-col items-center gap-6">
        <RoundTitleHeader title="Comparison" />
        <h1 className="text-4xl md:text-6xl font-medium text-center text-[#E9ECEF]">
          TenSurf Brain vs Build Alpha
        </h1>
        <p className="text-xl text-[#ADB5BD] text-center max-w-2xl">
          Two tools for building trading strategies without coding—but they work very differently.
        </p>
      </div>

      {/* Quick Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#1a1a2e]">
              <th className="py-4 px-6 text-left text-[#ADB5BD]">Aspect</th>
              <th className="py-4 px-6 text-center text-[#082FDF]">TenSurf Brain</th>
              <th className="py-4 px-6 text-center text-[#ADB5BD]">Build Alpha</th>
            </tr>
          </thead>
          <tbody>
            {quickComparison.map((row, index) => (
              <tr key={index} className="border-b border-[#1a1a2e]/50 hover:bg-[#00041A]/50">
                <td className="py-4 px-6 text-[#E9ECEF] font-medium">{row.aspect}</td>
                <td className="py-4 px-6 text-center text-[#ADB5BD]">{row.tensurf}</td>
                <td className="py-4 px-6 text-center text-[#ADB5BD]">{row.buildalpha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Approach */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6 p-8 rounded-2xl bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#082FDF]">
          <div className="flex items-center gap-3">
            <PenLine className="w-6 h-6 text-[#082FDF]" />
            <h3 className="text-xl font-medium text-[#E9ECEF]">TenSurf Brain: Your Words, Your Strategy</h3>
          </div>
          <p className="text-[#ADB5BD]">You write exactly what you want:</p>
          <div className="bg-[#01030B] border border-[#1a1a2e] rounded-lg p-4">
            <code className="text-sm text-[#ADB5BD]">
              "Buy when RSI crosses below 30 and the 50 EMA is above the 200 EMA. Exit when RSI crosses above 70. Stop loss at 1.5%."
            </code>
          </div>
          <p className="text-sm text-[#6C757D]">
            TenSurf Brain interprets your rules and generates the NinjaScript code. The strategy is yours—you designed it, the AI implemented it.
          </p>
        </div>

        <div className="flex flex-col gap-6 p-8 rounded-2xl bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e]">
          <div className="flex items-center gap-3">
            <Database className="w-6 h-6 text-[#ADB5BD]" />
            <h3 className="text-xl font-medium text-[#E9ECEF]">Build Alpha: Combine Signals, Let Algorithms Decide</h3>
          </div>
          <p className="text-[#ADB5BD]">
            Build Alpha provides a library of 7,000+ pre-built signals covering price action, indicators, volume, seasonality, and more.
          </p>
          <p className="text-sm text-[#6C757D]">
            You select which signals to include, and the genetic algorithm finds combinations that perform well historically.
          </p>
        </div>
      </div>

      {/* Key Question */}
      <div className="text-center bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e] rounded-2xl p-8">
        <h2 className="text-2xl font-medium text-[#E9ECEF] mb-6">
          Who Decides What the Strategy Is?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div className="text-left p-4 rounded-xl bg-[#01030B] border border-[#082FDF]">
            <h4 className="text-lg font-medium text-[#082FDF] mb-2">TenSurf Brain:</h4>
            <p className="text-[#ADB5BD]">You decide. You describe the rules. The AI implements them.</p>
          </div>
          <div className="text-left p-4 rounded-xl bg-[#01030B] border border-[#1a1a2e]">
            <h4 className="text-lg font-medium text-[#ADB5BD] mb-2">Build Alpha:</h4>
            <p className="text-[#ADB5BD]">The algorithm decides. You set parameters. The software finds combinations that performed well historically.</p>
          </div>
        </div>
        <p className="text-sm text-[#6C757D] mt-6">Neither approach is inherently better—they serve different needs.</p>
      </div>

      {/* When to Choose */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 p-8 rounded-2xl bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#082FDF]">
          <h3 className="text-xl font-medium text-[#E9ECEF]">Choose TenSurf Brain If...</h3>
          <ul className="space-y-3 text-[#ADB5BD]">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#082FDF] flex-shrink-0 mt-0.5" />
              <span><strong>You have a specific strategy in mind</strong> — Implement it directly, no searching through results</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#082FDF] flex-shrink-0 mt-0.5" />
              <span><strong>You want control over the logic</strong> — Every rule comes from you</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#082FDF] flex-shrink-0 mt-0.5" />
              <span><strong>You use NinjaTrader exclusively</strong> — Built-in, no separate software</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#082FDF] flex-shrink-0 mt-0.5" />
              <span><strong>You prefer low-commitment pricing</strong> — Start at {priceText}</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 p-8 rounded-2xl bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e]">
          <h3 className="text-xl font-medium text-[#E9ECEF]">Build Alpha Might Be Better If...</h3>
          <ul className="space-y-3 text-[#ADB5BD]">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#ADB5BD] flex-shrink-0 mt-0.5" />
              <span><strong>You want to discover new strategies</strong> — Genetic algorithm tests millions of combinations</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#ADB5BD] flex-shrink-0 mt-0.5" />
              <span><strong>You need extensive pre-built signals</strong> — 7,000+ covering COT, sentiment, weather data, more</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#ADB5BD] flex-shrink-0 mt-0.5" />
              <span><strong>You want advanced robustness testing</strong> — Monte Carlo simulations, proprietary stress tests</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Trader Profiles */}
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-medium text-center text-[#E9ECEF]">Which Trader Are You?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-[#00041A] border border-[#082FDF]">
            <h4 className="text-lg font-medium text-[#082FDF] mb-4">TenSurf Brain fits traders who say:</h4>
            <div className="bg-[#01030B] border border-[#1a1a2e] rounded-lg p-4">
              <p className="text-[#ADB5BD] italic">
                "I've been trading this setup for years. I just need it coded so I can automate it and scale it."
              </p>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-[#00041A] border border-[#1a1a2e]">
            <h4 className="text-lg font-medium text-[#ADB5BD] mb-4">Build Alpha fits traders who say:</h4>
            <div className="bg-[#01030B] border border-[#1a1a2e] rounded-lg p-4">
              <p className="text-[#ADB5BD] italic">
                "I want to systematically explore what has worked historically across many different signal types and find edge I haven't discovered."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Comparison */}
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-medium text-center text-[#E9ECEF]">Feature-by-Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#1a1a2e]">
                <th className="py-4 px-6 text-left text-[#ADB5BD]">Feature</th>
                <th className="py-4 px-6 text-center text-[#082FDF]">TenSurf Brain</th>
                <th className="py-4 px-6 text-center text-[#ADB5BD]">Build Alpha</th>
              </tr>
            </thead>
            <tbody>
              {featureComparison.map((row, index) => (
                <tr key={index} className="border-b border-[#1a1a2e]/50 hover:bg-[#00041A]/50">
                  <td className="py-4 px-6 text-[#E9ECEF]">{row.feature}</td>
                  <td className="py-4 px-6 text-center">{renderCell(row.tensurf)}</td>
                  <td className="py-4 px-6 text-center">{renderCell(row.buildalpha)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl bg-[#00041A] border border-[#082FDF]">
          <h4 className="text-lg font-medium text-[#E9ECEF] mb-2">TenSurf Brain is for you if:</h4>
          <p className="text-[#ADB5BD]">
            You have trading strategies you want to implement, you primarily use NinjaTrader, and you want direct control over every rule.
          </p>
        </div>
        <div className="p-6 rounded-xl bg-[#00041A] border border-[#1a1a2e]">
          <h4 className="text-lg font-medium text-[#E9ECEF] mb-2">Build Alpha is for you if:</h4>
          <p className="text-[#ADB5BD]">
            You want software to discover strategies using its signal library, you need multi-platform support, or you want sophisticated robustness testing.
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="flex flex-col items-center gap-6 py-16">
        <h2 className="text-3xl font-medium text-center text-[#E9ECEF]">
          See How Natural Language Strategy Building Works
        </h2>
        <Link href="/signup">
          <Button className="flex gap-2 rounded-3xl drop-shadow-[3px_5px_24px_#082FDF] py-6 px-12">
            <span className="text-lg font-semibold">Start Your 7-Day Free Trial</span>
            <ArrowRight size={20} strokeWidth={2} />
          </Button>
        </Link>
        <p className="text-sm text-[#6C757D]">
          Full access to all features
        </p>
      </div>
    </div>
  );
};

export default CompareBuildAlpha;
