'use client';

import { Button } from '@/components/ui/button';
import {
  AlertTriangle,
  TrendingDown,
  Info,
  Scale,
  DollarSign,
  BarChart2,
  ShieldAlert,
  UserCheck,
  Mail,
  ArrowUp,
  XCircle,
  CheckCircle2,
} from 'lucide-react';
import { TENSURF_CONTACT } from '@/constatns/general.constants';

const riskSections = [
  {
    id: 'market-risks',
    icon: TrendingDown,
    title: 'Understanding the Risks in Financial Markets',
    content:
      "Engaging in futures, stocks, and options trading carries a high level of risk and may not be suitable for all investors. The possibility of substantial loss is inherent in such trading activities. Before deciding to participate in trading, it's crucial for investors to consider their financial position and the suitability of this kind of trading to their personal financial circumstances.",
    color: '#EF4444',
  },
  {
    id: 'trading-insights',
    icon: Info,
    title: 'Nature of Trading Insights',
    content:
      'TenSurf provides trading insights as a third-party system. We are not registered with the Commodity Futures Trading Commission (CFTC) in any capacity and do not have direct control over client accounts. TenSurf Brain is a strategy building tool, not investment advice.',
    color: '#F59E0B',
  },
  {
    id: 'suitability',
    icon: Scale,
    title: 'Consideration of Investment Suitability',
    content:
      'It is vital for potential investors to carefully evaluate whether trading aligns with their specific financial requirements, considering the substantial risk involved. Trading in these financial instruments might not be appropriate for every investor. Consult with a qualified financial advisor before making trading decisions.',
    color: '#8B5CF6',
  },
  {
    id: 'fees',
    icon: DollarSign,
    title: 'Charges and Fees',
    content:
      'Futures accounts may be subject to significant charges, including commission, management, or advisory fees. These charges may require accounts to generate substantial trading profits to prevent depletion of assets. We recommend a thorough review of all relevant account forms, disclosure documents, and risk disclosure statements provided by the broker managing your account.',
    color: '#10B981',
  },
  {
    id: 'past-performance',
    icon: BarChart2,
    title: 'Past Performance and Future Results',
    content:
      'Please be aware that past performance of trading strategies and insights is not necessarily indicative of future results. There are no guarantees of profit nor of avoiding losses when trading in futures, stocks, and options. Backtesting results do not guarantee future performance.',
    color: '#082FDF',
  },
  {
    id: 'liability',
    icon: ShieldAlert,
    title: 'Non-liability',
    content:
      'TenSurf shall not be liable for any losses incurred in your trading activities, including but not limited to losses due to platform malfunctions or inaccuracies in trading insights provided by our tools. All trading decisions are made at your own discretion and risk.',
    color: '#EC4899',
  },
];

const recommendations = [
  { text: 'Only use risk capital—funds you can afford to lose without affecting your financial security', priority: 'critical' },
  { text: 'Never trade with money you cannot afford to lose', priority: 'critical' },
  { text: 'Consider your overall financial situation before trading', priority: 'high' },
  { text: 'Use TenSurf Brain as an assistant tool for strategy development, not as financial advice', priority: 'high' },
  { text: 'Ensure all final trading decisions are based on your independent judgment', priority: 'high' },
  { text: 'Consult with qualified financial professionals before making investment decisions', priority: 'medium' },
  { text: 'Understand that all automated strategies carry inherent risks', priority: 'medium' },
  { text: 'Regularly monitor and review your trading activities', priority: 'medium' },
];

const tensurfIsNot = [
  'Investment advice or financial advisory service',
  'A guarantee of trading profits or success',
  'A replacement for professional financial consultation',
  'A signal service or trade recommendation system',
];

export const RiskDisclosure = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return '#EF4444';
      case 'high': return '#F59E0B';
      default: return '#10B981';
    }
  };

  return (
    <main
      className="flex flex-col w-full gap-16 mt-24 mb-32 max-w-screen-xl mx-auto px-4 md:px-8"
      role="main"
      aria-labelledby="risk-heading"
    >
      {/* Header */}
      <header className="flex flex-col items-center gap-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EF4444]/10 border border-[#EF4444]/30 rounded-full animate-pulse">
          <AlertTriangle className="w-4 h-4 text-[#EF4444]" aria-hidden="true" />
          <span className="text-sm text-[#EF4444] font-medium">Important Disclosure</span>
        </div>
        <h1
          id="risk-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#E9ECEF] tracking-tight"
        >
          Risk Disclosure
        </h1>
        <p className="text-lg text-[#ADB5BD] max-w-2xl leading-relaxed">
          Please read this disclosure carefully before using TenSurf services for trading
        </p>
        <div className="flex items-center gap-2 text-sm text-[#6C757D]">
          <span>Last Updated:</span>
          <time dateTime="2026-02" className="text-[#ADB5BD]">February 2026</time>
        </div>
      </header>

      {/* Critical Warning Banner */}
      <section
        className="bg-gradient-to-r from-[#EF4444]/20 to-[#EF4444]/5 border-2 border-[#EF4444]/40 rounded-2xl p-6 md:p-8 relative overflow-hidden"
        aria-labelledby="warning-heading"
        role="alert"
      >
        {/* Pulsing background effect */}
        <div className="absolute inset-0 bg-[#EF4444]/5 animate-pulse" aria-hidden="true" />
        <div className="relative flex items-start gap-4">
          <div className="flex-shrink-0 w-14 h-14 bg-[#EF4444]/20 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-[#EF4444]" aria-hidden="true" />
          </div>
          <div>
            <h2 id="warning-heading" className="text-xl font-semibold text-[#EF4444] mb-2">
              Trading Involves Substantial Risk of Loss
            </h2>
            <p className="text-[#E9ECEF] leading-relaxed">
              Trading futures, stocks, and options involves substantial risk of loss and is not suitable
              for all investors. You could lose more than your initial investment. Only trade with money
              you can afford to lose.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <nav
        className="bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e] rounded-2xl p-6"
        aria-label="Risk disclosure sections"
      >
        <h2 className="text-lg font-semibold text-[#E9ECEF] mb-4">Quick Navigation</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {riskSections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="flex items-center gap-2 text-sm text-[#ADB5BD] hover:text-[#E9ECEF] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01030B] rounded px-2 py-1 -mx-2"
              >
                <section.icon className="w-4 h-4 flex-shrink-0" style={{ color: section.color }} aria-hidden="true" />
                <span className="truncate">{section.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Risk Sections */}
      <div className="flex flex-col gap-6" role="region" aria-label="Risk disclosure content">
        {riskSections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <section
              key={section.id}
              id={section.id}
              className="bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e] rounded-2xl p-6 md:p-8 scroll-mt-24 transition-all duration-300 hover:border-[#1a1a2e]/80 group"
              aria-labelledby={`heading-${section.id}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                  style={{ backgroundColor: `${section.color}15` }}
                >
                  <IconComponent className="w-6 h-6" style={{ color: section.color }} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-[#6C757D] bg-[#1a1a2e] px-2 py-1 rounded">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2
                      id={`heading-${section.id}`}
                      className="text-xl md:text-2xl font-semibold text-[#E9ECEF]"
                    >
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-[#ADB5BD] leading-relaxed">{section.content}</p>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Recommendations */}
      <section
        className="bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e] rounded-2xl p-6 md:p-8"
        aria-labelledby="recommendations-heading"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#10B981]/10 rounded-lg flex items-center justify-center">
            <UserCheck className="w-5 h-5 text-[#10B981]" aria-hidden="true" />
          </div>
          <h2 id="recommendations-heading" className="text-2xl font-semibold text-[#E9ECEF]">
            Recommendations for Traders
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-[#1a1a2e]/30 group"
            >
              <div
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: `${getPriorityColor(rec.priority)}20` }}
              >
                <CheckCircle2
                  className="w-4 h-4"
                  style={{ color: getPriorityColor(rec.priority) }}
                  aria-hidden="true"
                />
              </div>
              <p className="text-[#ADB5BD] text-sm leading-relaxed">{rec.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-[#1a1a2e]">
          <div className="flex items-center gap-2 text-xs text-[#6C757D]">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]/20" aria-hidden="true" />
            <span>Critical Priority</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#6C757D]">
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]/20" aria-hidden="true" />
            <span>High Priority</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#6C757D]">
            <span className="w-3 h-3 rounded-full bg-[#10B981]/20" aria-hidden="true" />
            <span>Recommended</span>
          </div>
        </div>
      </section>

      {/* TenSurf Brain Specific */}
      <section
        className="bg-gradient-to-r from-[#082FDF]/10 to-[#8B5CF6]/10 border border-[#082FDF]/30 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-[#082FDF]/50"
        aria-labelledby="about-heading"
      >
        <h2 id="about-heading" className="text-xl font-semibold text-[#E9ECEF] mb-4">
          About TenSurf Brain
        </h2>
        <div className="space-y-4 text-[#ADB5BD]">
          <p className="leading-relaxed">
            TenSurf Brain is a strategy building and backtesting tool. It helps you translate
            trading ideas into NinjaScript code and test them against historical data.
          </p>
          <div className="bg-[#01030B]/50 border border-[#1a1a2e] rounded-xl p-4">
            <p className="font-medium text-[#E9ECEF] mb-3 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-[#EF4444]" aria-hidden="true" />
              TenSurf Brain is NOT:
            </p>
            <ul className="space-y-2">
              {tensurfIsNot.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-[#EF4444] mt-1" aria-hidden="true">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="leading-relaxed pt-2">
            Always conduct your own research and consult with qualified financial professionals
            before making any trading decisions.
          </p>
        </div>
      </section>

      {/* Back to Top Button */}
      <div className="flex justify-center">
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm text-[#ADB5BD] hover:text-[#EF4444] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] rounded-full border border-[#1a1a2e] hover:border-[#EF4444]/30 bg-[#00041A]"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" aria-hidden="true" />
          Back to Top
        </button>
      </div>

      {/* Contact CTA */}
      <section
        className="flex flex-col items-center gap-6 py-12 px-6 md:px-8 bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e] rounded-3xl transition-all duration-300 hover:border-[#082FDF]/20"
        aria-labelledby="contact-heading"
      >
        <div className="w-16 h-16 bg-[#082FDF]/10 rounded-2xl flex items-center justify-center transition-transform duration-300 hover:scale-105">
          <Mail className="w-8 h-8 text-[#082FDF]" aria-hidden="true" />
        </div>
        <h2 id="contact-heading" className="text-2xl font-medium text-[#E9ECEF] text-center">
          Questions About This Disclosure?
        </h2>
        <p className="text-[#ADB5BD] text-center max-w-md">
          If you have questions about trading risks or this disclosure, please contact us.
        </p>
        <a
          href={TENSURF_CONTACT.mailToLink}
          aria-label="Contact us via email about risk disclosure"
        >
          <Button className="rounded-xl px-8 py-3 bg-[#082FDF] hover:bg-[#082FDF]/80 transition-all duration-300 hover:shadow-[0_0_20px_rgba(8,47,223,0.4)] focus-visible:ring-2 focus-visible:ring-[#082FDF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01030B]">
            Contact Us
          </Button>
        </a>
      </section>
    </main>
  );
};

export default RiskDisclosure;
