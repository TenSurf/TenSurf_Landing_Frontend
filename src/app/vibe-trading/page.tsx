import DefaultLayout from '@/layout/publicContentLayout/DefaultLayout';
import PageProvider from '@/component/general/PageProvider';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What is Vibe Trading? | TenSurf Brain',
  description: 'Vibe Trading: describe your trading strategy in English, get working NinjaScript code. Coined by Keivan Ebrahimi & Aaron Korbs. Inspired by vibe coding. Built for NinjaTrader.',
  openGraph: {
    title: 'The Hottest New Algo Trading Language is English',
    description: 'Vibe Trading: describe your strategy in plain English. AI generates the code, compiles it, and backtests it.',
    type: 'article',
    url: 'https://tensurf.ai/vibe-trading',
    images: ['/images/og-vibe-trading.png'],
  },
};

const VibeAlgoTradingPage = () => {
  return (
    <PageProvider title="Vibe Trading | TenSurf">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Vibe Trading?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vibe Trading is algorithmic trading powered by natural language and AI. Instead of writing code, you describe your trading strategy in plain English and let AI handle the programming, compilation, and backtesting. The term was coined by Keivan Ebrahimi and Aaron Korbs in March 2026, inspired by Andrej Karpathy's concept of 'vibe coding.'"
                }
              },
              {
                "@type": "Question",
                name: "How is Vibe Trading different from vibe coding?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vibe coding produces code you hope works. Vibe Trading produces code that is automatically compiled, verified, and backtested against historical data. The AI handles everything end-to-end inside NinjaTrader 8."
                }
              }
            ]
          })
        }}
      />
      <DefaultLayout>
        <div className="flex flex-col w-full max-w-4xl mx-auto px-4 mt-16 sm:mt-24 md:mt-32 mb-16 sm:mb-24 md:mb-32 gap-16">
          
          {/* Hero */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-2 bg-[#082FDF]/10 border border-[#082FDF]/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-[#082FDF] rounded-full animate-pulse"></span>
              <span className="text-sm text-[#ADB5BD]">Vibe Trading</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center text-[#F8F9FA] leading-tight">
              What is Vibe Trading?
            </h1>
            <p className="text-lg sm:text-xl text-[#DEE2E6] text-center max-w-3xl leading-relaxed">
              In February 2025, Andrej Karpathy — AI pioneer and former Tesla AI Director — coined the term &ldquo;vibe coding&rdquo;: writing software by describing what you want in English and letting AI generate the code. We took that idea and applied it to algorithmic trading.
            </p>
          </div>

          {/* Karpathy Quote */}
          <div className="border-l-2 border-[#082FDF]/40 pl-8 py-4">
            <p className="text-xl sm:text-2xl italic text-[#E9ECEF] leading-relaxed">
              &ldquo;There&apos;s a new kind of coding I call &apos;vibe coding&apos;, where you fully give in to the vibes, embrace exponentials, and forget that the code even exists.&rdquo;
            </p>
            <p className="text-base text-[#6C757D] mt-4">
              — Andrej Karpathy, AI pioneer and former Tesla AI Director
            </p>
          </div>

          {/* Transition */}
          <p className="text-lg text-[#DEE2E6] leading-relaxed">
            Vibe Trading takes this concept into the world of automated trading. Describe your strategy in plain English. AI generates the NinjaScript code, compiles it, and backtests it — all inside NinjaTrader 8. No coding required. No hoping it works. Verified and backtested before you risk a dollar.
          </p>

          {/* Keivan & Aaron Quote */}
          <div className="bg-[#00041A] border border-[#082FDF]/20 rounded-2xl p-8 text-center">
            <p className="text-2xl sm:text-3xl font-medium text-[#F8F9FA] leading-tight">
              &ldquo;The hottest new <span className="text-[#082FDF]">algo trading</span> language is English.&rdquo;
            </p>
            <p className="text-base text-[#6C757D] mt-4">
              — Keivan Ebrahimi &amp; Aaron Korbs, co-founders of Vibe Trading
            </p>
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#E9ECEF]">The Evolution</h2>
            <div className="flex flex-col gap-0">
              {[
                { date: '2025 Feb', title: 'Andrej Karpathy coins "Vibe Coding"', desc: 'Developers embrace AI-generated code' },
                { date: '2025', title: 'Vibe Coding goes mainstream', desc: 'The hottest programming language becomes English' },
                { date: '2026 Mar', title: 'Keivan Ebrahimi & Aaron Korbs coin "Vibe Trading"', desc: 'Algorithmic trading meets natural language AI' },
                { date: '2026', title: 'TenSurf Brain makes Vibe Trading real', desc: 'The first purpose-built tool for NinjaTrader 8' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start py-4 border-l-2 border-[#082FDF]/30 pl-6 relative">
                  <div className="absolute left-[-5px] top-6 w-2 h-2 rounded-full bg-[#082FDF]" />
                  <div>
                    <span className="text-sm text-[#082FDF] font-medium">{item.date}</span>
                    <h3 className="text-lg font-medium text-[#E9ECEF] mt-1">{item.title}</h3>
                    <p className="text-sm text-[#ADB5BD]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#E9ECEF] text-center">Same AI Magic. Different Standards.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4 p-8 rounded-2xl bg-gradient-to-b from-[#1a0a0a] to-[#0a0505] border border-red-900/30">
                <h3 className="text-xl font-medium text-red-400">Vibe Coding</h3>
                <p className="text-sm text-[#6C757D]">Hope-based development</p>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-[#ADB5BD]">
                  &ldquo;Build me a todo app with dark mode&rdquo;
                </div>
                <ul className="text-sm text-[#ADB5BD] space-y-2">
                  <li className="flex items-start gap-2"><span className="text-red-400">&rarr;</span> Maybe it works</li>
                  <li className="flex items-start gap-2"><span className="text-red-400">&rarr;</span> Maybe it doesn&apos;t compile</li>
                  <li className="flex items-start gap-2"><span className="text-red-400">&rarr;</span> No verification</li>
                  <li className="flex items-start gap-2"><span className="text-red-400">&rarr;</span> Ship and pray</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 p-8 rounded-2xl bg-gradient-to-b from-[#00115E]/30 to-[#00041A] border border-[#082FDF]/30">
                <h3 className="text-xl font-medium text-[#10B981]">Vibe Trading</h3>
                <p className="text-sm text-[#6C757D]">Verified-by-default development</p>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-[#ADB5BD]">
                  &ldquo;Buy when VWAP bands contract below 0.5% and price breaks above with volume 1.5x average&rdquo;
                </div>
                <ul className="text-sm text-[#E9ECEF] space-y-2">
                  <li className="flex items-start gap-2"><span className="text-[#10B981]">&#10003;</span> AI generates NinjaScript</li>
                  <li className="flex items-start gap-2"><span className="text-[#10B981]">&#10003;</span> Auto-compiled in NinjaTrader 8</li>
                  <li className="flex items-start gap-2"><span className="text-[#10B981]">&#10003;</span> Backtested against historical data</li>
                  <li className="flex items-start gap-2"><span className="text-[#10B981]">&#10003;</span> Verified before you risk a dollar</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-[#ADB5BD] italic">Vibe coding is hope. Vibe Trading is proof.</p>
          </div>

          {/* What it is NOT */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#E9ECEF]">What Vibe Trading is Not</h2>
            <p className="text-lg text-[#DEE2E6] leading-relaxed">
              Let&apos;s be clear: Vibe Trading is not trading on vibes. It&apos;s not gambling. It&apos;s not asking an AI to pick stocks for you.
            </p>
            <p className="text-lg text-[#DEE2E6] leading-relaxed">
              Vibe Trading is the disciplined application of AI to implement YOUR systematic, rule-based trading strategies. Every strategy you create is:
            </p>
            <ul className="text-lg text-[#E9ECEF] space-y-3 ml-4">
              <li className="flex items-start gap-3"><span className="text-[#082FDF]">&bull;</span> Based on quantifiable rules you define</li>
              <li className="flex items-start gap-3"><span className="text-[#082FDF]">&bull;</span> Compiled and syntax-verified by NinjaTrader 8&apos;s own compiler</li>
              <li className="flex items-start gap-3"><span className="text-[#082FDF]">&bull;</span> Backtested against real historical data on your machine</li>
              <li className="flex items-start gap-3"><span className="text-[#082FDF]">&bull;</span> Transparent — you can read and modify every line of code</li>
            </ul>
            <p className="text-lg text-[#DEE2E6] leading-relaxed">
              The &ldquo;vibe&rdquo; is in how you communicate with the AI: plain English instead of C#. The trading itself is as systematic and rigorous as hand-coded strategies — because it IS real NinjaScript code.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-6 py-8">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#E9ECEF] text-center">Ready to Try Vibe Trading?</h2>
            <p className="text-lg text-[#ADB5BD] text-center max-w-2xl">
              TenSurf Brain is the first tool purpose-built for Vibe Trading on NinjaTrader 8. Describe your strategy in English. Get backtested results in minutes.
            </p>
            <Link href="/waitlist">
              <div className="flex items-center gap-3 bg-[#082FDF]/20 border border-[#082FDF]/40 rounded-full px-12 py-6 hover:bg-[#082FDF]/30 transition-colors">
                <span className="w-3 h-3 bg-[#082FDF] rounded-full animate-pulse"></span>
                <span className="text-lg font-semibold text-white">Join the Waitlist</span>
              </div>
            </Link>
            <p className="text-sm text-[#6C757D]">Be first in line when we launch &bull; No credit card required</p>
          </div>

          {/* Coined-by footer */}
          <div className="text-center text-sm text-[#6C757D] border-t border-[#1a1a2e] pt-8">
            Vibe Trading — coined by Keivan Ebrahimi and Aaron Korbs, March 2026. Inspired by Andrej Karpathy&apos;s Vibe Coding (February 2025).
          </div>
        </div>
      </DefaultLayout>
    </PageProvider>
  );
};

export default VibeAlgoTradingPage;
