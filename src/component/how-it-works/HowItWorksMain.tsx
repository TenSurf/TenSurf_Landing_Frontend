'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  MessageSquareText,
  ClipboardCheck,
  Cpu,
  Wrench,
  BarChart3,
  Clock,
  Shield,
  Zap,
  CheckCircle2,
  PlayCircle,
  Code2,
  Package,
  RefreshCw,
} from 'lucide-react';
import RoundTitleHeader from '@/component/landing/toolsV2/RoundTitleHeader';

const steps = [
  {
    number: '01',
    title: 'Describe Your Strategy',
    subtitle: 'In Plain English',
    description:
      'Open TenSurf Brain inside NinjaTrader and type your trading rules the way you\'d explain them to another trader. No special syntax. No programming concepts. Just your strategy in your words.',
    example: '"Buy when RSI crosses below 30 and price is above the 200-period moving average. Exit when RSI crosses above 70 or after holding for 10 bars."',
    icon: MessageSquareText,
    color: '#082FDF',
  },
  {
    number: '02',
    title: 'Review Your Interpreted Rules',
    subtitle: 'Free — No Quota Used',
    description:
      'TenSurf Brain converts your plain English into a standardized rule format and shows it to you for confirmation. This step is completely free and repeatable—submit as many times as you need until the interpretation matches your intent. No generation quota is consumed until you explicitly confirm.',
    features: ['Free and instant', 'Repeat as needed', 'No quota consumed', 'Catches misunderstandings early'],
    icon: ClipboardCheck,
    color: '#10B981',
  },
  {
    number: '03',
    title: 'AI Generates Your Code',
    subtitle: '4 Deliverables Per Strategy',
    description:
      'Once you confirm, TenSurf Brain generates four components: production-ready NinjaScript code, a configuration file with all tunable parameters, a plain-English strategy summary, and complete documentation. Clean code structure, proper error handling, and NT8 best practices—all handled automatically.',
    features: ['NinjaScript .cs code', 'Configuration JSON', 'Strategy summary', 'Full documentation'],
    icon: Cpu,
    color: '#082FDF',
  },
  {
    number: '04',
    title: 'Automatic Compilation',
    subtitle: 'Zero Syntax Errors',
    description:
      'Your strategy compiles directly inside NinjaTrader. TenSurf Brain catches compilation errors and fixes them automatically—no more hunting through code for missing semicolons.',
    icon: Wrench,
    color: '#F59E0B',
  },
  {
    number: '05',
    title: 'Run Your Backtest',
    subtitle: 'See Results Instantly',
    description:
      'TenSurf Brain launches the backtest using your NinjaTrader data. Review performance metrics, trade history, and equity curves. Refine and iterate until you\'re satisfied.',
    icon: BarChart3,
    color: '#8B5CF6',
  },
];

const benefits = [
  {
    icon: Clock,
    title: 'Minutes, Not Weeks',
    description: 'Test 10 strategy variations in the time it takes to code one manually.',
  },
  {
    icon: Shield,
    title: 'Your Data Stays Local',
    description: 'Everything runs on your machine. Your strategies never leave your computer.',
  },
  {
    icon: Zap,
    title: 'Instant Iteration',
    description: 'Change entry conditions, tweak parameters, test again. No recompiling headaches.',
  },
  {
    icon: Package,
    title: '4 Deliverables Per Strategy',
    description: 'Every generation produces NinjaScript code, a configuration file, a plain-English summary, and full documentation—not just a code dump.',
  },
];

const beforeAfter = {
  before: {
    title: 'Without TenSurf Brain',
    items: [
      'Learn C# programming fundamentals',
      'Study NinjaScript documentation',
      'Write code, debug syntax errors',
      'Figure out NT8 compilation process',
      'Set up backtesting parameters',
      'Weeks to your first working strategy',
    ],
  },
  after: {
    title: 'With TenSurf Brain',
    items: [
      'Type your strategy rules in English',
      'Review AI interpretation for free',
      'AI handles code, config, summary, and docs',
      'One-click compilation',
      'Instant backtesting',
      'First strategy in under 10 minutes',
    ],
  },
};

const useCases = [
  {
    persona: 'Experienced Traders',
    challenge: 'You know exactly what you want to automate but coding isn\'t your strength.',
    solution: 'Describe your proven manual strategy and let AI do the implementation.',
  },
  {
    persona: 'Strategy Testers',
    challenge: 'You want to test multiple variations quickly without hiring a developer.',
    solution: 'Iterate rapidly—change conditions, test, refine, repeat.',
  },
  {
    persona: 'Busy Professionals',
    challenge: 'You don\'t have time to learn programming but want systematic trading.',
    solution: 'Skip the learning curve and go straight to backtesting your ideas.',
  },
];

const faqs = [
  {
    question: 'What if the AI misunderstands my strategy?',
    answer: 'TenSurf Brain shows you exactly how it interpreted your rules before generating code. This review step is free and repeatable—adjust and resubmit until it matches your intent, with no quota used.',
  },
  {
    question: 'Can I see and edit the generated code?',
    answer: 'Yes. Every strategy generates real NinjaScript code that you can inspect, modify, and use however you want. It\'s your code.',
  },
  {
    question: 'What indicators are supported?',
    answer: 'All 100+ NinjaTrader built-in indicators—RSI, MACD, Bollinger Bands, moving averages, ATR, Stochastic, and many more. Combine them however you need.',
  },
  {
    question: 'Does my data leave my computer?',
    answer: 'Your trading data stays on your machine. TenSurf Brain processes your strategy description through secure AI, but your historical data and backtests run locally in NinjaTrader.',
  },
];

const HowItWorksMain = () => {
  return (
    <div className="flex flex-col w-full gap-12 sm:gap-16 md:gap-24 mt-16 sm:mt-24 md:mt-32 mb-16 sm:mb-24 md:mb-32 max-w-screen-xl mx-auto px-4">
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-6 text-center">
        <RoundTitleHeader title="How It Works" />
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium text-[#E9ECEF] max-w-4xl">
          From Trading Idea to <span className="text-[#082FDF]">Automated Strategy</span> in Minutes
        </h1>
        <p className="text-xl text-[#ADB5BD] max-w-2xl">
          You describe your rules. TenSurf Brain handles the code, compilation, and backtesting.
          No programming required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link href="/waitlist">
            <Button className="flex gap-2 rounded-3xl drop-shadow-[3px_5px_24px_#082FDF] py-6 px-8">
              <span>Coming Soon — Join Waitlist</span>
              <ArrowRight size={20} strokeWidth={2} />
            </Button>
          </Link>
          <Link href="#steps">
            <Button
              variant="outline"
              className="flex gap-2 rounded-3xl py-6 px-8 border-[#1a1a2e] bg-transparent hover:bg-[#00041A]"
            >
              <PlayCircle size={20} />
              <span>See the Process</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* The Problem Section */}
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center text-[#E9ECEF]">
          Tired of the Coding Barrier?
        </h2>
        <p className="text-lg text-[#ADB5BD] text-center max-w-3xl">
          Tried ChatGPT? So have most traders. The problem: it doesn't compile inside
          NinjaTrader. You get code with deprecated methods, missing references, and logic errors
          that waste hours to debug. TenSurf Brain generates your strategy code, compiles it in NT8,
          and fixes errors automatically. No copy-pasting. No debugging someone else's broken code.
        </p>
        <p className="text-xl text-[#E9ECEF] text-center font-medium">
          What if you could skip straight to the results?
        </p>
      </div>

      {/* 5-Step Process */}
      <div id="steps" className="flex flex-col gap-16 scroll-mt-20">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center text-[#E9ECEF]">
            Five Steps to Your First Strategy
          </h2>
          <p className="text-lg text-[#ADB5BD] text-center max-w-2xl">
            From idea to backtest results—without writing a single line of code
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-8 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Step Content */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${step.color}20` }}
                  >
                    <step.icon className="w-8 h-8" style={{ color: step.color }} />
                  </div>
                  <div>
                    <span className="text-sm font-mono text-[#6C757D]">STEP {step.number}</span>
                    <h3 className="text-2xl font-medium text-[#E9ECEF]">{step.title}</h3>
                  </div>
                </div>
                <span className="text-[#082FDF] font-medium">{step.subtitle}</span>
                <p className="text-[#ADB5BD] leading-relaxed">{step.description}</p>

                {/* Example (for step 1) */}
                {step.example && (
                  <div className="bg-[#00041A] border border-[#1a1a2e] rounded-xl p-4 mt-2">
                    <p className="text-sm text-[#6C757D] mb-2">Example input:</p>
                    <p className="text-[#E9ECEF] italic">"{step.example}"</p>
                  </div>
                )}

                {/* Features list */}
                {step.features && (
                  <div className="flex flex-wrap gap-3 mt-2">
                    {step.features.map((feature, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Visual placeholder */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e] rounded-2xl h-64 lg:h-80 flex items-center justify-center">
                  <div className="text-center">
                    <step.icon className="w-16 h-16 mx-auto mb-4 opacity-20" style={{ color: step.color }} />
                    <p className="text-[#6C757D] text-sm">Step {step.number} visualization</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Before/After Comparison */}
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center text-[#E9ECEF]">
          The Difference is Clear
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before */}
          <div className="bg-gradient-to-b from-[#1a0a0a] to-[#0a0505] border border-red-900/30 rounded-2xl p-4 sm:p-6 md:p-8">
            <h3 className="text-xl font-medium text-red-400 mb-6">{beforeAfter.before.title}</h3>
            <ul className="flex flex-col gap-4">
              {beforeAfter.before.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-[#ADB5BD]">
                  <span className="text-red-500 mt-1">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-gradient-to-b from-[#00115E]/30 to-[#00041A] border border-[#082FDF]/30 rounded-2xl p-4 sm:p-6 md:p-8">
            <h3 className="text-xl font-medium text-[#082FDF] mb-6">{beforeAfter.after.title}</h3>
            <ul className="flex flex-col gap-4">
              {beforeAfter.after.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-[#E9ECEF]">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center text-[#E9ECEF]">
          Why Traders Choose TenSurf Brain
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e] rounded-2xl hover:border-[#082FDF]/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#082FDF]/10 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-[#082FDF]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#E9ECEF] mb-2">{benefit.title}</h3>
                <p className="text-[#ADB5BD]">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases / Personas */}
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center text-[#E9ECEF]">
          Built For Traders Like You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e] rounded-2xl"
            >
              <h3 className="text-xl font-medium text-[#082FDF]">{useCase.persona}</h3>
              <p className="text-[#ADB5BD] text-sm">
                <span className="text-[#E9ECEF]">Challenge:</span> {useCase.challenge}
              </p>
              <p className="text-[#ADB5BD] text-sm">
                <span className="text-[#10B981]">Solution:</span> {useCase.solution}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Iteration CTA */}
      <div className="bg-gradient-to-b from-[#00115E]/20 to-[#00041A] border border-[#082FDF]/20 rounded-3xl p-4 sm:p-8 md:p-12 text-center">
        <RefreshCw className="w-12 h-12 text-[#082FDF] mx-auto mb-6" />
        <h2 className="text-2xl md:text-3xl font-medium text-[#E9ECEF] mb-4">
          The Real Power: Rapid Iteration
        </h2>
        <p className="text-lg text-[#ADB5BD] max-w-2xl mx-auto mb-6">
          The first version of your strategy is just the beginning. With TenSurf Brain, you can
          test dozens of variations—different indicators, timeframes, exit conditions—in a single
          session. Find what actually works for your trading style.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="px-4 py-2 rounded-full bg-[#00041A] border border-[#1a1a2e] text-[#ADB5BD]">
            "What if I use EMA instead of SMA?"
          </span>
          <span className="px-4 py-2 rounded-full bg-[#00041A] border border-[#1a1a2e] text-[#ADB5BD]">
            "Let me try a tighter stop loss"
          </span>
          <span className="px-4 py-2 rounded-full bg-[#00041A] border border-[#1a1a2e] text-[#ADB5BD]">
            "Does this work on the 15-minute chart?"
          </span>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center text-[#E9ECEF]">
          Common Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e] rounded-2xl"
            >
              <h3 className="text-lg font-medium text-[#E9ECEF] mb-3">{faq.question}</h3>
              <p className="text-[#ADB5BD]">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/faq" className="text-[#082FDF] hover:underline">
            See all frequently asked questions →
          </Link>
        </div>
      </div>

      {/* Final CTA */}
      <div className="flex flex-col items-center gap-6 py-16 bg-gradient-to-b from-[#00041A] to-[#01030B] rounded-3xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center text-[#E9ECEF] px-4">
          Ready to Turn Your Trading Ideas Into Code?
        </h2>
        <p className="text-lg text-[#ADB5BD] text-center max-w-xl px-4">
          Start your 7-day free trial. No credit card required.
          Full access to all features.
        </p>
        <Link href="/waitlist">
          <Button className="flex gap-2 rounded-3xl drop-shadow-[3px_5px_24px_#082FDF] py-6 px-12">
            <span className="text-lg font-semibold">Coming Soon — Join Waitlist</span>
            <ArrowRight size={20} strokeWidth={2} />
          </Button>
        </Link>
        <p className="text-sm text-[#6C757D]">
          Works with NinjaTrader • 100+ indicators supported • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default HowItWorksMain;
