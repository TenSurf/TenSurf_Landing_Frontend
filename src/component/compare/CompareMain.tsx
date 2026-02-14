import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, GitBranch, Database, Check, X, Bot, AlertTriangle } from 'lucide-react';
import RoundTitleHeader from '@/component/landing/toolsV2/RoundTitleHeader';

const tools = [
  {
    name: 'TenSurf Brain',
    approach: 'AI-Powered Plain English',
    description: 'Write your strategy rules in natural language. The AI interprets your intent, generates NinjaScript code, and compiles it—all inside NinjaTrader. Your strategy is then ready to backtest.',
    bestFor: 'Traders who know what they want to automate and prefer writing over visual interfaces.',
    icon: MessageSquare,
    link: '/login'
  },
  {
    name: 'BloodHound',
    approach: 'Visual Drag-and-Drop',
    description: 'Build strategies by connecting nodes on a canvas. Each node represents a condition, indicator, or action. Configure parameters through dropdown menus.',
    bestFor: 'Visual thinkers who prefer seeing logic flows as connected diagrams.',
    icon: GitBranch,
    link: '/compare/bloodhound'
  },
  {
    name: 'Build Alpha',
    approach: 'Signal Library + Optimization',
    description: 'Select from 7,000+ pre-built signals covering price action, indicators, fundamentals, and alternative data. The genetic algorithm finds combinations that performed well historically.',
    bestFor: 'Traders who want to explore many signal types and let algorithms find combinations.',
    icon: Database,
    link: '/compare/build-alpha'
  }
];

const comparisonTable = [
  { feature: 'Input Method', tensurf: 'Plain English', bloodhound: 'Visual nodes', buildalpha: 'Signal selection' },
  { feature: 'AI-Powered', tensurf: true, bloodhound: false, buildalpha: 'Genetic only' },
  { feature: 'NT8 Native', tensurf: true, bloodhound: true, buildalpha: 'Export only' },
  { feature: 'Auto Compilation', tensurf: true, bloodhound: true, buildalpha: false },
  { feature: 'Strategy Discovery', tensurf: false, bloodhound: false, buildalpha: true },
  { feature: 'Learning Curve', tensurf: 'Low', bloodhound: 'Medium', buildalpha: 'Medium-High' },
  { feature: 'Subscription', tensurf: true, bloodhound: false, buildalpha: false },
  { feature: 'Free Trial', tensurf: '7 days', bloodhound: '30 days', buildalpha: 'Demo' },
];

const renderCell = (value: string | boolean) => {
  if (value === true) return <Check className="w-5 h-5 text-green-500 mx-auto" />;
  if (value === false) return <X className="w-5 h-5 text-red-500 mx-auto" />;
  return <span className="text-[#ADB5BD]">{value}</span>;
};

const CompareMain = () => {
  return (
    <div className="flex flex-col w-full gap-10 sm:gap-16 md:gap-20 mt-16 sm:mt-24 md:mt-32 mb-16 sm:mb-24 md:mb-32 max-w-screen-xl mx-auto px-4">
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-6">
        <RoundTitleHeader title="2026 Comparison Guide" />
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium text-center text-[#E9ECEF]">
          Best Strategy Builders for NinjaTrader
        </h1>
        <p className="text-xl text-[#ADB5BD] text-center max-w-2xl">
          Compare the leading tools for building automated strategies without coding
        </p>
      </div>

      {/* ChatGPT Comparison Section - NEW */}
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-medium text-center text-[#E9ECEF]">
          TenSurf Brain vs ChatGPT
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ChatGPT Problems */}
          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-gradient-to-b from-[#1a0a0a] to-[#0a0505] border border-red-900/30">
            <div className="flex items-center gap-3">
              <Bot className="w-8 h-8 text-red-400" />
              <h3 className="text-2xl font-medium text-red-400">ChatGPT</h3>
            </div>
            <p className="text-[#ADB5BD]">
              ChatGPT generates code outside NinjaTrader. You copy-paste, hope it works, and debug errors yourself.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3 text-[#ADB5BD]">
                <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Generates deprecated NinjaScript methods</span>
              </li>
              <li className="flex items-start gap-3 text-[#ADB5BD]">
                <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Code often doesn't compile on first try</span>
              </li>
              <li className="flex items-start gap-3 text-[#ADB5BD]">
                <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>You debug C# you didn't write</span>
              </li>
              <li className="flex items-start gap-3 text-[#ADB5BD]">
                <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>No NinjaTrader-specific training</span>
              </li>
              <li className="flex items-start gap-3 text-[#ADB5BD]">
                <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Copy-paste workflow prone to errors</span>
              </li>
            </ul>
          </div>

          {/* TenSurf Brain Advantages */}
          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-gradient-to-b from-[#00115E]/30 to-[#00041A] border border-[#082FDF]">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-8 h-8 text-[#082FDF]" />
              <h3 className="text-2xl font-medium text-[#10B981]">TenSurf Brain</h3>
            </div>
            <p className="text-[#E9ECEF]">
              TenSurf Brain runs inside NinjaTrader, compiles automatically, and catches errors before you see them.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3 text-[#E9ECEF]">
                <Check className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <span>Trained on current NinjaScript API</span>
              </li>
              <li className="flex items-start gap-3 text-[#E9ECEF]">
                <Check className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <span>Compiles inside NinjaTrader automatically</span>
              </li>
              <li className="flex items-start gap-3 text-[#E9ECEF]">
                <Check className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <span>Auto-fixes compilation errors (up to 3 tries)</span>
              </li>
              <li className="flex items-start gap-3 text-[#E9ECEF]">
                <Check className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <span>Production-ready code that works</span>
              </li>
              <li className="flex items-start gap-3 text-[#E9ECEF]">
                <Check className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <span>No copy-paste—seamless workflow</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Key Differentiator Callout */}
        <div className="flex items-center justify-center gap-3 bg-[#10B981]/10 border border-[#10B981]/30 rounded-full px-6 py-4 mx-auto">
          <Check className="w-5 h-5 text-[#10B981]" />
          <span className="text-[#E9ECEF] font-medium">
            The key difference: TenSurf Brain compiles your code inside NinjaTrader—errors are caught before you see them.
          </span>
        </div>
      </div>

      {/* Introduction */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-lg text-[#ADB5BD] leading-relaxed">
          If you trade on NinjaTrader and want to build automated strategies without learning C#, you have several options. This guide compares the leading strategy builders to help you choose the right tool for your trading style.
        </p>
      </div>

      {/* Tool Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className={`flex flex-col gap-6 p-8 rounded-2xl bg-gradient-to-b from-[#00041A] to-[#01030B] border ${
              index === 0 ? 'border-[#082FDF]' : 'border-[#1a1a2e]'
            } hover:border-[#082FDF]/50 transition-all`}
          >
            <div className="flex items-center gap-4">
              <tool.icon className="w-8 h-8 text-[#082FDF]" />
              <div>
                <h3 className="text-2xl font-medium text-[#E9ECEF]">{tool.name}</h3>
                <span className="text-sm text-[#082FDF]">{tool.approach}</span>
              </div>
            </div>
            <p className="text-[#ADB5BD]">{tool.description}</p>
            <p className="text-sm text-[#6C757D]">
              <strong className="text-[#ADB5BD]">Best for:</strong> {tool.bestFor}
            </p>
            <Link href={tool.link} className="mt-auto">
              <Button className="w-full rounded-xl bg-transparent border border-[#082FDF] hover:bg-[#082FDF]/10">
                {index === 0 ? 'Start Free Trial' : 'Compare Details'}
              </Button>
            </Link>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-medium text-center text-[#E9ECEF]">Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[500px]">
            <thead>
              <tr className="border-b border-[#1a1a2e]">
                <th className="py-3 px-2 sm:px-4 md:px-6 text-left text-[#ADB5BD]">Feature</th>
                <th className="py-3 px-2 sm:px-4 md:px-6 text-center text-[#082FDF]">TenSurf Brain</th>
                <th className="py-3 px-2 sm:px-4 md:px-6 text-center text-[#ADB5BD]">BloodHound</th>
                <th className="py-3 px-2 sm:px-4 md:px-6 text-center text-[#ADB5BD]">Build Alpha</th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, index) => (
                <tr key={index} className="border-b border-[#1a1a2e]/50 hover:bg-[#00041A]/50">
                  <td className="py-3 px-2 sm:px-4 md:px-6 text-[#E9ECEF]">{row.feature}</td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 text-center">{renderCell(row.tensurf)}</td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 text-center">{renderCell(row.bloodhound)}</td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 text-center">{renderCell(row.buildalpha)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Decision Guide */}
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-medium text-center text-[#E9ECEF]">The Key Question</h2>
        <div className="text-center bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e] rounded-2xl p-8">
          <p className="text-xl sm:text-2xl text-[#E9ECEF] mb-4 sm:mb-6">
            Do you want to <strong className="text-[#082FDF]">implement</strong> a strategy or <strong className="text-[#082FDF]">discover</strong> one?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="text-left">
              <h4 className="text-lg font-medium text-[#E9ECEF] mb-2">Implement:</h4>
              <p className="text-[#ADB5BD]">TenSurf Brain or BloodHound</p>
              <p className="text-sm text-[#6C757D] mt-2">If you prefer writing → TenSurf Brain</p>
              <p className="text-sm text-[#6C757D]">If you prefer visual → BloodHound</p>
            </div>
            <div className="text-left">
              <h4 className="text-lg font-medium text-[#E9ECEF] mb-2">Discover:</h4>
              <p className="text-[#ADB5BD]">Build Alpha</p>
              <p className="text-sm text-[#6C757D] mt-2">Uses genetic algorithms to generate strategies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Transparency Note */}
      <div className="bg-[#00041A]/50 border border-[#1a1a2e] rounded-xl p-6 text-center">
        <p className="text-sm text-[#6C757D]">
          <strong className="text-[#ADB5BD]">About This Comparison:</strong> This guide was created by the TenSurf Brain team. While we believe TenSurf Brain is the best choice for traders who want to implement their own strategies using natural language, we recognize that different tools serve different needs. We've aimed to present each option fairly.
        </p>
      </div>

      {/* Final CTA */}
      <div className="flex flex-col items-center gap-6 py-16">
        <h2 className="text-3xl font-medium text-center text-[#E9ECEF]">
          Ready to Try Plain English Strategy Building?
        </h2>
        <Link href="/waitlist">
          <Button className="flex gap-2 rounded-3xl drop-shadow-[3px_5px_24px_#082FDF] py-6 px-12">
            <span className="text-lg font-semibold">Coming Soon — Join Waitlist</span>
            <ArrowRight size={20} strokeWidth={2} />
          </Button>
        </Link>
        <p className="text-sm text-[#6C757D]">
          Full access to all features • No credit card required
        </p>
      </div>
    </div>
  );
};

export default CompareMain;
