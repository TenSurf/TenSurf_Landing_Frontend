'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Receipt,
  XCircle,
  Calendar,
  Settings,
  CreditCard,
  ArrowUpCircle,
  HelpCircle,
  Mail,
  CheckCircle2,
  AlertCircle,
  ArrowUp,
  Clock,
  Sparkles,
} from 'lucide-react';
import { TENSURF_CONTACT } from '@/constatns/general.constants';

const policyPoints = [
  {
    icon: XCircle,
    title: 'Non-Refundable Subscriptions',
    description:
      'Monthly and annual subscription plans are non-refundable once purchased. We maintain this policy to ensure continuous high-quality service.',
    color: '#EF4444',
    bgGradient: 'from-[#EF4444]/10 to-transparent',
  },
  {
    icon: Sparkles,
    title: 'Free Trial First',
    description:
      'We offer a 7-day free trial with full access to all features. Use this time to evaluate TenSurf Brain before committing to a paid plan.',
    color: '#10B981',
    bgGradient: 'from-[#10B981]/10 to-transparent',
  },
  {
    icon: Clock,
    title: 'Cancel Anytime',
    description:
      'You can cancel your subscription at any time. Your access continues until the end of your current billing period.',
    color: '#F59E0B',
    bgGradient: 'from-[#F59E0B]/10 to-transparent',
  },
];

const managementFeatures = [
  {
    icon: Settings,
    title: 'Access Your Profile',
    description: 'Manage your subscription directly from your profile page on the TenSurf website.',
    color: '#082FDF',
  },
  {
    icon: CreditCard,
    title: 'Update Payment Method',
    description: 'Change your payment information at any time through your account settings.',
    color: '#8B5CF6',
  },
  {
    icon: ArrowUpCircle,
    title: 'Upgrade or Downgrade',
    description: 'Switch between plans anytime. Upgrades take effect immediately; downgrades apply at the next billing cycle.',
    color: '#10B981',
  },
  {
    icon: Calendar,
    title: 'View Billing History',
    description: 'Access your complete billing history and download invoices from your profile.',
    color: '#F59E0B',
  },
];

const cancellationSteps = [
  { step: 'Log in to your TenSurf account', icon: '1' },
  { step: 'Navigate to your Profile page', icon: '2' },
  { step: 'Click on "Subscription" or "Billing"', icon: '3' },
  { step: 'Select "Cancel Subscription"', icon: '4' },
  { step: 'Confirm your cancellation', icon: '5' },
];

export const RefundPolicy = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main
      className="flex flex-col w-full gap-16 mt-24 mb-32 max-w-screen-xl mx-auto px-4 md:px-8"
      role="main"
      aria-labelledby="refund-heading"
    >
      {/* Header */}
      <header className="flex flex-col items-center gap-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-full transition-all duration-300 hover:bg-[#F59E0B]/20 hover:border-[#F59E0B]/50">
          <Receipt className="w-4 h-4 text-[#F59E0B]" aria-hidden="true" />
          <span className="text-sm text-[#F59E0B] font-medium">Billing</span>
        </div>
        <h1
          id="refund-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#E9ECEF] tracking-tight"
        >
          Refund Policy
        </h1>
        <p className="text-lg text-[#ADB5BD] max-w-2xl leading-relaxed">
          Clear, straightforward policies for subscriptions, cancellations, and billing
        </p>
        <div className="flex items-center gap-2 text-sm text-[#6C757D]">
          <span>Last Updated:</span>
          <time dateTime="2025-01" className="text-[#ADB5BD]">January 2025</time>
        </div>
      </header>

      {/* Key Policy Points */}
      <section aria-labelledby="policy-points-heading">
        <h2 id="policy-points-heading" className="sr-only">Key Policy Points</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {policyPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <article
                key={index}
                className={`bg-gradient-to-b ${point.bgGradient} from-[#00041A] to-[#01030B] border border-[#1a1a2e] rounded-2xl p-6 text-center transition-all duration-300 hover:border-opacity-50 group`}
                style={{ '--hover-border-color': point.color } as React.CSSProperties}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${point.color}15` }}
                >
                  <IconComponent
                    className="w-7 h-7 transition-transform duration-300"
                    style={{ color: point.color }}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#E9ECEF] mb-2">{point.title}</h3>
                <p className="text-sm text-[#ADB5BD] leading-relaxed">{point.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Important Notice - Try Before You Buy */}
      <section
        className="bg-gradient-to-r from-[#10B981]/10 to-[#082FDF]/10 border border-[#10B981]/30 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-[#10B981]/50"
        aria-labelledby="trial-heading"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-[#10B981]/20 rounded-xl flex items-center justify-center transition-transform duration-300 hover:scale-105">
            <CheckCircle2 className="w-6 h-6 text-[#10B981]" aria-hidden="true" />
          </div>
          <div>
            <h2 id="trial-heading" className="text-xl font-semibold text-[#E9ECEF] mb-2">
              Try Before You Buy
            </h2>
            <p className="text-[#ADB5BD] leading-relaxed">
              We strongly encourage you to use our 7-day free trial before subscribing.
              This gives you full access to all TenSurf Brain features so you can evaluate
              whether it meets your needs—no credit card required.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="inline-flex items-center gap-1.5 text-sm text-[#10B981]">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                Full feature access
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-[#10B981]">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                No credit card required
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-[#10B981]">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                7 days to evaluate
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How to Cancel */}
      <section
        id="cancellation"
        className="bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e] rounded-2xl p-6 md:p-8 scroll-mt-24"
        aria-labelledby="cancel-heading"
      >
        <h2 id="cancel-heading" className="text-2xl font-semibold text-[#E9ECEF] mb-6">
          How to Cancel Your Subscription
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-[#ADB5BD] mb-6 leading-relaxed">
              To avoid charges for the next billing cycle, cancel your subscription before your next billing date.
              Follow these steps:
            </p>
            <ol className="space-y-4" aria-label="Cancellation steps">
              {cancellationSteps.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-[#ADB5BD] group"
                >
                  <span
                    className="flex-shrink-0 w-8 h-8 bg-[#082FDF] rounded-full flex items-center justify-center text-sm font-semibold text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(8,47,223,0.4)]"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <span className="transition-colors duration-200 group-hover:text-[#E9ECEF]">
                    {item.step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="bg-[#01030B] border border-[#1a1a2e] rounded-xl p-6 transition-all duration-300 hover:border-[#F59E0B]/30">
            <div className="flex items-start gap-3 mb-6">
              <div className="flex-shrink-0 w-8 h-8 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-[#F59E0B]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-medium text-[#E9ECEF] mb-2">Important Note</h3>
                <p className="text-sm text-[#ADB5BD] leading-relaxed">
                  After cancellation, you retain access to TenSurf Brain until the end of your
                  current billing period. No prorated refunds are provided for unused time.
                </p>
              </div>
            </div>
            <Link href="/profile" aria-label="Go to profile settings to manage subscription">
              <Button className="w-full rounded-xl bg-transparent border border-[#1a1a2e] text-[#E9ECEF] hover:bg-[#082FDF]/10 hover:border-[#082FDF] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#082FDF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01030B]">
                Go to Profile Settings
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Managing Your Subscription */}
      <section aria-labelledby="management-heading">
        <h2 id="management-heading" className="text-2xl font-semibold text-[#E9ECEF] mb-6 text-center">
          Managing Your Subscription
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {managementFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <article
                key={index}
                className="flex items-start gap-4 bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e] rounded-xl p-5 transition-all duration-300 hover:border-[#1a1a2e]/80 group"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <IconComponent
                    className="w-5 h-5"
                    style={{ color: feature.color }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-[#E9ECEF] mb-1">{feature.title}</h3>
                  <p className="text-sm text-[#ADB5BD] leading-relaxed">{feature.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Back to Top Button */}
      <div className="flex justify-center">
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm text-[#ADB5BD] hover:text-[#F59E0B] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded-full border border-[#1a1a2e] hover:border-[#F59E0B]/30 bg-[#00041A]"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" aria-hidden="true" />
          Back to Top
        </button>
      </div>

      {/* Contact CTA */}
      <section
        className="flex flex-col items-center gap-6 py-12 px-6 md:px-8 bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e] rounded-3xl transition-all duration-300 hover:border-[#F59E0B]/20"
        aria-labelledby="billing-contact-heading"
      >
        <div className="w-16 h-16 bg-[#F59E0B]/10 rounded-2xl flex items-center justify-center transition-transform duration-300 hover:scale-105">
          <HelpCircle className="w-8 h-8 text-[#F59E0B]" aria-hidden="true" />
        </div>
        <h2 id="billing-contact-heading" className="text-2xl font-medium text-[#E9ECEF] text-center">
          Questions About Billing?
        </h2>
        <p className="text-[#ADB5BD] text-center max-w-md">
          Our support team is here to help with any billing questions or concerns.
        </p>
        <a
          href={TENSURF_CONTACT.mailToLink}
          aria-label="Contact support via email"
        >
          <Button className="rounded-xl px-8 py-3 bg-[#F59E0B] hover:bg-[#F59E0B]/80 text-black font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01030B]">
            Contact Support
          </Button>
        </a>
      </section>
    </main>
  );
};

export default RefundPolicy;
