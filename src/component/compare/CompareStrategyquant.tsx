import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb, Dna, Check, X, ArrowLeft, Clock } from 'lucide-react';
import RoundTitleHeader from '@/component/landing/toolsV2/RoundTitleHeader';

const quickComparison = [
  { aspect: 'Approach', tensurf: 'Describe your strategy', strategyquant: 'Generate thousands of strategies' },
  { aspect: 'Input', tensurf: 'Plain English rules', strategyquant: 'Configuration parameters' },
  { aspect: 'NinjaTrader Native', tensurf: true, strategyquant: false },
  { aspect: 'Learning Curve', tensurf: 'Minutes', strategyquant: 'Days to weeks' },
  { aspect: 'Best For', tensurf: 'Implementing your ideas', strategyquant: 'Discovering new ideas' },
  { aspect: 'Trial', tensurf: '7 days free', strategyquant: '14-day free trial' },
  { aspect: 'Payment', tensurf: 'Monthly subscription', strategyquant: 'Lifetime license' },
];

const featureComparison = [
  { feature: 'Plain English input', tensurf: true, strategyquant: false },
  { feature: 'Genetic strategy generation', tensurf: false, strategyquant: true },
  { feature: 'NinjaTrader native', tensurf: true, strategyquant: false },
  { feature: 'Monte Carlo testing', tensurf: false, strategyquant: true },
  { feature: 'Walk-forward optimization', tensurf: false, strategyquant: true },
  { feature: 'Auto compilation in NT8', tensurf: true, strategyquant: false },
  { feature: 'Built-in backtesting', tensurf: true, strategyquant: true },
  { feature: 'Learning time', tensurf: 'Minutes', strategyquant: 'Days-weeks' },
];

const renderCell = (value: string | boolean) => {
  if (value === true) return <Check className="w-5 h-5 text-green-500 mx-auto" />;
  if (value === false) return <X className="w-5 h-5 text-red-500 mx-auto" />;
  return <span className="text-[#ADB5BD]">{value}</span>;
};

const CompareStrategyquant = () => {
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
          TenSurf Brain vs StrategyQuant X
        </h1>
        <p className="text-xl text-[#ADB5BD] text-center max-w-2xl">
          Two different approaches to building trading strategies. Here's how to decide which fits your workflow.
        </p>
      </div>

      {/* Quick Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#1a1a2e]">
              <th className="py-4 px-6 text-left text-[#ADB5BD]">Aspect</th>
              <th className="py-4 px-6 text-center text-[#082FDF]">TenSurf Brain</th>
              <th className="py-4 px-6 text-center text-[#ADB5BD]">StrategyQuant X</th>
            </tr>
          </thead>
          <tbody>
            {quickComparison.map((row, index) => (
              <tr key={index} className="border-b border-[#1a1a2e]/50 hover:bg-[#00041A]/50">
                <td className="py-4 px-6 text-[#E9ECEF] font-medium">{row.aspect}</td>
                <td className="py-4 px-6 text-center text-[#ADB5BD]">{row.tensurf}</td>
                <td className="py-4 px-6 text-center text-[#ADB5BD]">{row.strategyquant}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6 p-8 rounded-2xl bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#082FDF]">
          <div className="flex items-center gap-3">
            <Lightbulb className="w-6 h-6 text-[#082FDF]" />
            <h3 className="text-xl font-medium text-[#E9ECEF]">TenSurf Brain: Your Strategy, Automated</h3>
          </div>
          <p className="text-[#ADB5BD]">You have a trading idea. TenSurf Brain helps you implement it.</p>
          <div className="text-sm text-[#6C757D] space-y-2">
            <p>1. You know RSI + Moving Average works for you</p>
            <p>2. Describe the exact rules in plain English</p>
            <p>3. Generate, compile, and backtest in minutes</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 p-8 rounded-2xl bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e]">
          <div className="flex items-center gap-3">
            <Dna className="w-6 h-6 text-[#ADB5BD]" />
            <h3 className="text-xl font-medium text-[#E9ECEF]">StrategyQuant X: Strategy Discovery Engine</h3>
          </div>
          <p className="text-[#ADB5BD]">StrategyQuant uses genetic algorithms to generate thousands of potential strategies based on parameters you define.</p>
          <div className="text-sm text-[#6C757D] space-y-2">
            <p>1. Define what indicators and conditions to explore</p>
            <p>2. Let the algorithm generate thousands of combinations</p>
            <p>3. Filter results using robustness tests</p>
            <p>4. Select promising strategies for further testing</p>
          </div>
        </div>
      </div>

      {/* When to Choose */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 p-8 rounded-2xl bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#082FDF]">
          <h3 className="text-xl font-medium text-[#E9ECEF]">Choose TenSurf Brain If...</h3>
          <ul className="space-y-3 text-[#ADB5BD]">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#082FDF] flex-shrink-0 mt-0.5" />
              <span><strong>You already know what you want to trade</strong> — Implement your rules directly</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#082FDF] flex-shrink-0 mt-0.5" />
              <span><strong>You want native NinjaTrader integration</strong> — No external software</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#082FDF] flex-shrink-0 mt-0.5" />
              <span><strong>You value simplicity over options</strong> — Does one thing well</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#082FDF] flex-shrink-0 mt-0.5" />
              <span><strong>You prefer to start small</strong> — Monthly subscription, low commitment</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 p-8 rounded-2xl bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e]">
          <h3 className="text-xl font-medium text-[#E9ECEF]">StrategyQuant Might Be Better If...</h3>
          <ul className="space-y-3 text-[#ADB5BD]">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#ADB5BD] flex-shrink-0 mt-0.5" />
              <span><strong>You want software to find strategies for you</strong> — Genetic algorithm exploration</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#ADB5BD] flex-shrink-0 mt-0.5" />
              <span><strong>You want advanced optimization features</strong> — Monte Carlo, walk-forward testing</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#ADB5BD] flex-shrink-0 mt-0.5" />
              <span><strong>You prefer owning software outright</strong> — Lifetime license available</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Learning Curve */}
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-medium text-center text-[#E9ECEF]">Learning Curve Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-[#00041A] border border-[#082FDF]">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-[#082FDF]" />
              <h4 className="text-lg font-medium text-[#E9ECEF]">TenSurf Brain</h4>
            </div>
            <ul className="space-y-2 text-sm text-[#ADB5BD]">
              <li>• Install the add-on: 5 minutes</li>
              <li>• Create first strategy: 10 minutes</li>
              <li>• Understand the full workflow: Same day</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-[#00041A] border border-[#1a1a2e]">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-[#ADB5BD]" />
              <h4 className="text-lg font-medium text-[#E9ECEF]">StrategyQuant X</h4>
            </div>
            <ul className="space-y-2 text-sm text-[#ADB5BD]">
              <li>• Installation and setup: 30 minutes</li>
              <li>• Basic operation: Several hours</li>
              <li>• Effective use with robustness testing: Weeks of learning</li>
              <li className="text-[#6C757D] italic">Note: Official documentation recommends training courses</li>
            </ul>
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
                <th className="py-4 px-6 text-center text-[#ADB5BD]">StrategyQuant X</th>
              </tr>
            </thead>
            <tbody>
              {featureComparison.map((row, index) => (
                <tr key={index} className="border-b border-[#1a1a2e]/50 hover:bg-[#00041A]/50">
                  <td className="py-4 px-6 text-[#E9ECEF]">{row.feature}</td>
                  <td className="py-4 px-6 text-center">{renderCell(row.tensurf)}</td>
                  <td className="py-4 px-6 text-center">{renderCell(row.strategyquant)}</td>
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
            You have trading ideas you want to implement, you primarily use NinjaTrader, and you value simplicity over exhaustive features.
          </p>
        </div>
        <div className="p-6 rounded-xl bg-[#00041A] border border-[#1a1a2e]">
          <h4 className="text-lg font-medium text-[#E9ECEF] mb-2">StrategyQuant is for you if:</h4>
          <p className="text-[#ADB5BD]">
            You want software to discover strategies for you, you need multi-platform support, or you want advanced optimization capabilities.
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="flex flex-col items-center gap-6 py-16">
        <h2 className="text-3xl font-medium text-center text-[#E9ECEF]">
          See If Plain English Strategy Building Fits Your Workflow
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

export default CompareStrategyquant;
