"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, GitBranch, Check, X, ArrowLeft } from 'lucide-react';
import RoundTitleHeader from '@/component/landing/toolsV2/RoundTitleHeader';

const TBLSAI_API = process.env.NEXT_PUBLIC_TBLSAI_API_URL || "https://tblsai-app-dev.mangomeadow-024a1511.eastus.azurecontainerapps.io";

const quickComparison = [
  { aspect: 'Input Method', tensurf: 'Plain English text', bloodhound: 'Visual drag-and-drop nodes' },
  { aspect: 'Learning Curve', tensurf: 'Minutes to start', bloodhound: 'Hours to learn interface' },
  { aspect: 'AI-Powered', tensurf: true, bloodhound: false },
  { aspect: 'Platform', tensurf: 'NinjaTrader native', bloodhound: 'NinjaTrader native' },
  { aspect: 'Auto Backtest', tensurf: true, bloodhound: true },
  { aspect: 'Trial', tensurf: '7 days free', bloodhound: '30 days free' },
  { aspect: 'Payment Model', tensurf: 'Monthly subscription', bloodhound: 'Lifetime license' },
];

const featureComparison = [
  { feature: 'Plain English input', tensurf: true, bloodhound: false },
  { feature: 'Visual node editor', tensurf: false, bloodhound: true },
  { feature: 'AI interpretation', tensurf: true, bloodhound: false },
  { feature: 'Free rule review before generating', tensurf: true, bloodhound: false },
  { feature: '4-component output (code + config + summary + docs)', tensurf: true, bloodhound: false },
  { feature: 'All NT8 indicators', tensurf: true, bloodhound: true },
  { feature: 'Custom indicators', tensurf: 'Planned', bloodhound: 'Yes (with C#)' },
  { feature: 'Auto code generation', tensurf: true, bloodhound: true },
  { feature: 'Auto compilation', tensurf: true, bloodhound: true },
  { feature: 'Built-in backtesting', tensurf: true, bloodhound: true },
  { feature: 'Strategy versioning', tensurf: true, bloodhound: false },
  { feature: 'Priority support', tensurf: 'Pro/Ultra tiers', bloodhound: 'Included' },
  { feature: 'Weekly training', tensurf: false, bloodhound: true },
];

const renderCell = (value: string | boolean) => {
  if (value === true) return <Check className="w-5 h-5 text-green-500 mx-auto" />;
  if (value === false) return <X className="w-5 h-5 text-red-500 mx-auto" />;
  return <span className="text-[#ADB5BD]">{value}</span>;
};

const CompareBloodhound = () => {
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

  const priceText = startingPrice ? `$${startingPrice}/month` : "$39/month";

  return (
    <div className="flex flex-col w-full gap-10 sm:gap-16 mt-16 sm:mt-24 md:mt-32 mb-16 sm:mb-24 md:mb-32 max-w-screen-xl mx-auto px-4">
      {/* Back Link */}
      <Link href="/compare" className="flex items-center gap-2 text-[#ADB5BD] hover:text-[#082FDF] transition-colors w-fit">
        <ArrowLeft size={18} /> Back to all comparisons
      </Link>

      {/* Hero Section */}
      <div className="flex flex-col items-center gap-6">
        <RoundTitleHeader title="Comparison" />
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium text-center text-[#E9ECEF]">
          TenSurf Brain vs BloodHound
        </h1>
        <p className="text-xl text-[#ADB5BD] text-center max-w-2xl">
          Both tools help NinjaTrader traders build strategies without coding. Here's how they compare.
        </p>
      </div>

      {/* Quick Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#1a1a2e]">
              <th className="py-3 px-2 sm:px-4 md:px-6 text-left text-[#ADB5BD]">Aspect</th>
              <th className="py-3 px-2 sm:px-4 md:px-6 text-center text-[#082FDF]">TenSurf Brain</th>
              <th className="py-3 px-2 sm:px-4 md:px-6 text-center text-[#ADB5BD]">BloodHound</th>
            </tr>
          </thead>
          <tbody>
            {quickComparison.map((row, index) => (
              <tr key={index} className="border-b border-[#1a1a2e]/50 hover:bg-[#00041A]/50">
                <td className="py-3 px-2 sm:px-4 md:px-6 text-[#E9ECEF] font-medium">{row.aspect}</td>
                <td className="py-3 px-2 sm:px-4 md:px-6 text-center">{renderCell(row.tensurf)}</td>
                <td className="py-3 px-2 sm:px-4 md:px-6 text-center">{renderCell(row.bloodhound)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* How They Work */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#082FDF]">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-[#082FDF]" />
            <h3 className="text-xl font-medium text-[#E9ECEF]">TenSurf Brain: Text-Based AI</h3>
          </div>
          <p className="text-[#ADB5BD]">You describe your strategy in plain English:</p>
          <div className="bg-[#01030B] border border-[#1a1a2e] rounded-lg p-4">
            <code className="text-sm text-[#ADB5BD]">
              "Enter long when RSI crosses below 30 and price is above the 200 SMA. Exit when RSI crosses above 70. Use a 2% stop loss."
            </code>
          </div>
          <p className="text-sm text-[#6C757D]">
            TenSurf Brain's AI interprets your rules, generates NinjaScript code, compiles it, and runs a backtest—all automatically.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e]">
          <div className="flex items-center gap-3">
            <GitBranch className="w-6 h-6 text-[#ADB5BD]" />
            <h3 className="text-xl font-medium text-[#E9ECEF]">BloodHound: Visual Node System</h3>
          </div>
          <p className="text-[#ADB5BD]">
            You drag pre-built nodes onto a canvas and connect them to create logic flows. Each node represents a condition, indicator, or action.
          </p>
          <p className="text-sm text-[#6C757D]">
            Configure parameters through dropdown menus and input fields. Connect nodes to build your strategy logic visually.
          </p>
        </div>
      </div>

      {/* When to Choose */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#082FDF]">
          <h3 className="text-xl font-medium text-[#E9ECEF]">Choose TenSurf Brain If...</h3>
          <ul className="space-y-3 text-[#ADB5BD]">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#082FDF] flex-shrink-0 mt-0.5" />
              <span><strong>You think in words, not diagrams</strong> — If you can describe your strategy to another trader, you can use TenSurf Brain</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#082FDF] flex-shrink-0 mt-0.5" />
              <span><strong>You want to start immediately</strong> — No interface to learn first</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#082FDF] flex-shrink-0 mt-0.5" />
              <span><strong>You prefer AI assistance</strong> — Catches inconsistencies before you backtest</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#082FDF] flex-shrink-0 mt-0.5" />
              <span><strong>You want flexible subscription pricing</strong> — Start at {priceText}, cancel anytime</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e]">
          <h3 className="text-xl font-medium text-[#E9ECEF]">BloodHound Might Be Better If...</h3>
          <ul className="space-y-3 text-[#ADB5BD]">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#ADB5BD] flex-shrink-0 mt-0.5" />
              <span><strong>You prefer visual thinking</strong> — See logic flows as connected nodes</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#ADB5BD] flex-shrink-0 mt-0.5" />
              <span><strong>You want a one-time purchase</strong> — Lifetime license available</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#ADB5BD] flex-shrink-0 mt-0.5" />
              <span><strong>You're already familiar with it</strong> — Switching cost may not be worth it</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Feature Comparison */}
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-medium text-center text-[#E9ECEF]">Feature-by-Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#1a1a2e]">
                <th className="py-3 px-2 sm:px-4 md:px-6 text-left text-[#ADB5BD]">Feature</th>
                <th className="py-3 px-2 sm:px-4 md:px-6 text-center text-[#082FDF]">TenSurf Brain</th>
                <th className="py-3 px-2 sm:px-4 md:px-6 text-center text-[#ADB5BD]">BloodHound</th>
              </tr>
            </thead>
            <tbody>
              {featureComparison.map((row, index) => (
                <tr key={index} className="border-b border-[#1a1a2e]/50 hover:bg-[#00041A]/50">
                  <td className="py-3 px-2 sm:px-4 md:px-6 text-[#E9ECEF]">{row.feature}</td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 text-center">{renderCell(row.tensurf)}</td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 text-center">{renderCell(row.bloodhound)}</td>
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
            You want the fastest path from idea to backtest, prefer writing over visual building, or want flexible monthly pricing.
          </p>
        </div>
        <div className="p-6 rounded-xl bg-[#00041A] border border-[#1a1a2e]">
          <h4 className="text-lg font-medium text-[#E9ECEF] mb-2">BloodHound is for you if:</h4>
          <p className="text-[#ADB5BD]">
            You strongly prefer visual interfaces, want a one-time purchase, or have already mastered their node system.
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="flex flex-col items-center gap-6 py-16">
        <h2 className="text-3xl font-medium text-center text-[#E9ECEF]">
          See How Natural Language Strategy Building Works
        </h2>
        <Link href="/login">
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

export default CompareBloodhound;
