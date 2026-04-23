'use client';

import { Button } from '@/components/ui/button';
import {
  ShieldCheck,
  Database,
  Eye,
  Share2,
  Lock,
  Cookie,
  Baby,
  Globe,
  RefreshCw,
  Mail,
  Server,
  UserX,
  ArrowUp,
  CheckCircle2,
} from 'lucide-react';
import { TENSURF_CONTACT } from '@/constatns/general.constants';

const sections = [
  {
    id: 'information-collected',
    icon: Database,
    title: 'Information We Collect',
    color: '#082FDF',
    content: [
      'We collect information you provide directly to us, including:',
      '• Account information (name, email address, password)',
      '• Payment information (processed securely through our payment provider)',
      '• Strategy descriptions and trading preferences',
      '• Communications with our support team',
      '• Usage data and analytics to improve our services',
    ],
  },
  {
    id: 'information-use',
    icon: Eye,
    title: 'How We Use Your Information',
    color: '#8B5CF6',
    content: [
      'We use the information we collect to:',
      '• Provide, maintain, and improve our services',
      '• Process transactions and send related information',
      '• Send technical notices, updates, and support messages',
      '• Respond to your comments, questions, and customer service requests',
      '• Monitor and analyze trends, usage, and activities',
      '• Personalize and improve your experience',
    ],
  },
  {
    id: 'data-security',
    icon: Lock,
    title: 'Data Security',
    color: '#10B981',
    content: [
      'We take the security of your data seriously and implement appropriate technical and organizational measures to protect your personal information.',
      '• All data is encrypted in transit using TLS 1.3',
      '• Sensitive data is encrypted at rest using AES-256',
      '• Regular security audits and penetration testing',
      '• Access controls and authentication mechanisms',
      '• Strategy data is stored only in your account and is never shared with third parties',
    ],
  },
  {
    id: 'data-processing',
    icon: Server,
    title: 'Data Processing',
    color: '#F59E0B',
    content: [
      'Your trading strategies and indicators are processed on our secure servers. They are stored in your account and used only to generate your code and improve your experience.',
      'We use your indicators to enhance your user experience. We never use your strategies or indicators to train our AI models, and we never share them with third parties.',
    ],
  },
  {
    id: 'information-sharing',
    icon: Share2,
    title: 'Information Sharing',
    color: '#EC4899',
    content: [
      'We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:',
      '• With your consent',
      '• With service providers who assist in our operations',
      '• To comply with legal obligations',
      '• To protect our rights, privacy, safety, or property',
      '• In connection with a merger, acquisition, or sale of assets',
    ],
  },
  {
    id: 'cookies',
    icon: Cookie,
    title: 'Cookies and Tracking',
    color: '#6366F1',
    content: [
      'We use cookies and similar technologies to:',
      '• Keep you logged in to your account',
      '• Remember your preferences',
      '• Analyze how our services are used',
      '• Improve our website performance',
      'You can control cookies through your browser settings. Some features may not work properly if cookies are disabled.',
    ],
  },
  {
    id: 'your-rights',
    icon: UserX,
    title: 'Your Rights',
    color: '#14B8A6',
    content: [
      'You have the right to:',
      '• Access the personal information we hold about you',
      '• Request correction of inaccurate data',
      '• Request deletion of your data',
      '• Object to processing of your data',
      '• Request data portability',
      '• Withdraw consent at any time',
      'To exercise these rights, contact us at support@tensurf.ai',
    ],
  },
  {
    id: 'childrens-privacy',
    icon: Baby,
    title: "Children's Privacy",
    color: '#F97316',
    content: [
      'Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.',
      'If we learn we have collected information from a child under 18, we will delete that information promptly.',
    ],
  },
  {
    id: 'international-transfers',
    icon: Globe,
    title: 'International Data Transfers',
    color: '#0EA5E9',
    content: [
      'Your information may be transferred to and processed in countries other than your country of residence.',
      'We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.',
    ],
  },
  {
    id: 'policy-changes',
    icon: RefreshCw,
    title: 'Changes to This Policy',
    color: '#A855F7',
    content: [
      'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.',
      'Your continued use of our services after changes indicates acceptance of the updated policy.',
    ],
  },
];

const privacyHighlights = [
  { text: 'Never used to train AI models', icon: CheckCircle2 },
  { text: 'No selling of personal data', icon: CheckCircle2 },
  { text: 'AES-256 encryption at rest', icon: CheckCircle2 },
  { text: 'TLS 1.3 encryption in transit', icon: CheckCircle2 },
];

export const PrivacyPolicy = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main
      className="flex flex-col w-full gap-16 mt-24 mb-32 max-w-screen-xl mx-auto px-4 md:px-8"
      role="main"
      aria-labelledby="privacy-heading"
    >
      {/* Header */}
      <header className="flex flex-col items-center gap-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10B981]/10 border border-[#10B981]/30 rounded-full transition-all duration-300 hover:bg-[#10B981]/20 hover:border-[#10B981]/50">
          <ShieldCheck className="w-4 h-4 text-[#10B981]" aria-hidden="true" />
          <span className="text-sm text-[#10B981] font-medium">Your Privacy Matters</span>
        </div>
        <h1
          id="privacy-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#E9ECEF] tracking-tight"
        >
          Privacy Policy
        </h1>
        <p className="text-lg text-[#ADB5BD] max-w-2xl leading-relaxed">
          We are committed to protecting your privacy and being transparent about how we handle your data
        </p>
        <div className="flex items-center gap-2 text-sm text-[#6C757D]">
          <span>Last Updated:</span>
          <time dateTime="2026-04" className="text-[#ADB5BD]">April 2026</time>
        </div>
      </header>

      {/* Privacy Highlights Bar */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {privacyHighlights.map((highlight, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-[#10B981]/5 border border-[#10B981]/20 rounded-full"
          >
            <highlight.icon className="w-4 h-4 text-[#10B981]" aria-hidden="true" />
            <span className="text-sm text-[#ADB5BD]">{highlight.text}</span>
          </div>
        ))}
      </div>

      {/* Key Highlight */}
      <section
        className="bg-gradient-to-r from-[#10B981]/10 to-[#082FDF]/10 border border-[#10B981]/30 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-[#10B981]/50"
        aria-labelledby="key-highlight-heading"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-[#10B981]/20 rounded-xl flex items-center justify-center transition-transform duration-300 hover:scale-105">
            <Lock className="w-6 h-6 text-[#10B981]" aria-hidden="true" />
          </div>
          <div>
            <h2 id="key-highlight-heading" className="text-xl font-semibold text-[#E9ECEF] mb-2">
              Your Strategies Stay Private
            </h2>
            <p className="text-[#ADB5BD] leading-relaxed">
              Your trading strategies are processed on our secure servers. They are
              stored in your account and used only to generate your code and improve
              your experience. We never use your strategies to train our AI models,
              and we never share them with third parties.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <nav
        className="bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e] rounded-2xl p-6"
        aria-label="Privacy policy sections"
      >
        <h2 className="text-lg font-semibold text-[#E9ECEF] mb-4">Quick Navigation</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="flex items-center gap-2 text-sm text-[#ADB5BD] hover:text-[#10B981] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01030B] rounded px-2 py-1 -mx-2"
              >
                <section.icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: section.color }} aria-hidden="true" />
                <span className="truncate">{section.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content Sections */}
      <div className="grid gap-6 md:grid-cols-2" role="region" aria-label="Privacy policy content">
        {sections.map((section) => {
          const IconComponent = section.icon;
          return (
            <section
              key={section.id}
              id={section.id}
              className="bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e] rounded-2xl p-6 scroll-mt-24 transition-all duration-300 hover:border-[#1a1a2e]/80 group"
              style={{ '--hover-color': section.color } as React.CSSProperties}
              aria-labelledby={`heading-${section.id}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                  style={{ backgroundColor: `${section.color}15` }}
                >
                  <IconComponent className="w-5 h-5" style={{ color: section.color }} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2
                    id={`heading-${section.id}`}
                    className="text-lg font-semibold text-[#E9ECEF] mb-3"
                  >
                    {section.title}
                  </h2>
                  <div className="space-y-2">
                    {section.content.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-sm text-[#ADB5BD] leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Back to Top Button */}
      <div className="flex justify-center">
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm text-[#ADB5BD] hover:text-[#10B981] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded-full border border-[#1a1a2e] hover:border-[#10B981]/30 bg-[#00041A]"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" aria-hidden="true" />
          Back to Top
        </button>
      </div>

      {/* Contact CTA */}
      <section
        className="flex flex-col items-center gap-6 py-12 px-6 md:px-8 bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e] rounded-3xl transition-all duration-300 hover:border-[#10B981]/20"
        aria-labelledby="contact-heading"
      >
        <div className="w-16 h-16 bg-[#10B981]/10 rounded-2xl flex items-center justify-center transition-transform duration-300 hover:scale-105">
          <Mail className="w-8 h-8 text-[#10B981]" aria-hidden="true" />
        </div>
        <h2 id="contact-heading" className="text-2xl font-medium text-[#E9ECEF] text-center">
          Privacy Questions?
        </h2>
        <p className="text-[#ADB5BD] text-center max-w-md">
          If you have questions about how we handle your data or want to exercise your privacy rights, contact us.
        </p>
        <a
          href={TENSURF_CONTACT.mailToLink}
          aria-label="Contact support via email"
        >
          <Button className="rounded-xl px-8 py-3 bg-[#10B981] hover:bg-[#10B981]/80 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01030B]">
            Contact Support
          </Button>
        </a>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
