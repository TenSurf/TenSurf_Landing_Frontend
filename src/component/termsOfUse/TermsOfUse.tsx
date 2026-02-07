'use client';

import { Button } from '@/components/ui/button';
import {
  FileText,
  Users,
  Shield,
  UserCheck,
  Ban,
  AlertTriangle,
  Scale,
  RefreshCw,
  Gavel,
  Mail,
  ArrowUp,
} from 'lucide-react';
import { TENSURF_CONTACT } from '@/constatns/general.constants';

const sections = [
  {
    id: 'introduction',
    icon: FileText,
    title: 'Introduction',
    content: [
      'Welcome to TenSurf. By accessing or using our website and services, you agree to be bound by these terms and conditions. If you do not agree to all of these terms, do not use this site.',
    ],
  },
  {
    id: 'use-of-site',
    icon: Users,
    title: 'Use of the Site',
    content: [
      'Eligibility: You must be at least 18 years old to use our services. By agreeing to these Terms, you represent and warrant that you are legally capable of entering into binding contracts.',
      'Permitted Use: You agree to use our site and services for lawful purposes only and in accordance with these Terms.',
    ],
  },
  {
    id: 'intellectual-property',
    icon: Shield,
    title: 'Intellectual Property Rights',
    content: [
      'The content on TenSurf, including text, graphics, images, and software, is the property of TenSurf LLC and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.',
    ],
  },
  {
    id: 'user-accounts',
    icon: UserCheck,
    title: 'User Accounts',
    content: [
      'If you create an account on TenSurf, you are responsible for maintaining the security of your account and are fully responsible for all activities that occur under the account.',
      'You must immediately notify us of any unauthorized use of your account or any other breach of security.',
    ],
  },
  {
    id: 'prohibited-activities',
    icon: Ban,
    title: 'Prohibited Activities',
    content: [
      'You agree not to engage in any of the following activities:',
      '• Copying, redistributing, or disclosing any part of our services in any medium',
      '• Using automated systems, such as "robots" and "spiders," to access the services',
      '• Interfering with the proper working of the services',
      '• Attempting to bypass any security measures',
      '• Using the service to transmit harmful code or malware',
    ],
  },
  {
    id: 'disclaimer',
    icon: AlertTriangle,
    title: 'Disclaimer of Warranties',
    content: [
      'TenSurf is provided "as is" and "as available" without any warranties, express or implied, including but not limited to the implied warranties of merchantability or fitness for a particular purpose.',
      'We do not guarantee that the service will be uninterrupted, secure, or error-free.',
    ],
  },
  {
    id: 'liability',
    icon: Scale,
    title: 'Limitation of Liability',
    content: [
      'In no event shall TenSurf, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, or other intangible losses.',
      'Our total liability shall not exceed the amount you paid us in the twelve (12) months prior to the claim.',
    ],
  },
  {
    id: 'changes',
    icon: RefreshCw,
    title: 'Changes to Terms',
    content: [
      'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms of Use on this site.',
      'Your continued use of the service after any changes constitutes acceptance of the new Terms.',
    ],
  },
  {
    id: 'governing-law',
    icon: Gavel,
    title: 'Governing Law',
    content: [
      'These Terms shall be governed by and construed in accordance with the laws of the state of California, United States, without regard to its conflict of law provisions.',
      'Any disputes arising from these Terms shall be resolved in the courts of California.',
    ],
  },
];

export const TermsOfUse = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main
      className="flex flex-col w-full gap-16 mt-24 mb-32 max-w-screen-xl mx-auto px-4 md:px-8"
      role="main"
      aria-labelledby="terms-heading"
    >
      {/* Header */}
      <header className="flex flex-col items-center gap-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#082FDF]/10 border border-[#082FDF]/30 rounded-full transition-all duration-300 hover:bg-[#082FDF]/20 hover:border-[#082FDF]/50">
          <FileText className="w-4 h-4 text-[#082FDF]" aria-hidden="true" />
          <span className="text-sm text-[#082FDF] font-medium">Legal</span>
        </div>
        <h1
          id="terms-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#E9ECEF] tracking-tight"
        >
          Terms of Use
        </h1>
        <p className="text-lg text-[#ADB5BD] max-w-2xl leading-relaxed">
          Please read these terms carefully before using TenSurf services
        </p>
        <div className="flex items-center gap-2 text-sm text-[#6C757D]">
          <span>Last Updated:</span>
          <time dateTime="2026-02" className="text-[#ADB5BD]">February 2026</time>
        </div>
      </header>

      {/* Table of Contents - Quick Navigation */}
      <nav
        className="bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e] rounded-2xl p-6 md:p-8"
        aria-label="Table of contents"
      >
        <h2 className="text-lg font-semibold text-[#E9ECEF] mb-4">Quick Navigation</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {sections.map((section, index) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="flex items-center gap-2 text-sm text-[#ADB5BD] hover:text-[#082FDF] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#082FDF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01030B] rounded px-2 py-1 -mx-2"
              >
                <span className="text-[#6C757D] font-mono text-xs">{String(index + 1).padStart(2, '0')}</span>
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content Sections */}
      <div className="flex flex-col gap-8" role="region" aria-label="Terms content">
        {sections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <section
              key={section.id}
              id={section.id}
              className="bg-gradient-to-b from-[#00041A] to-[#01030B] border border-[#1a1a2e] rounded-2xl p-6 md:p-8 scroll-mt-24 transition-all duration-300 hover:border-[#082FDF]/30 group"
              aria-labelledby={`heading-${section.id}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#082FDF]/10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-[#082FDF]/20 group-hover:scale-105">
                  <IconComponent className="w-6 h-6 text-[#082FDF]" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
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
                  <div className="space-y-3">
                    {section.content.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-[#ADB5BD] leading-relaxed"
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
          className="inline-flex items-center gap-2 px-4 py-2 text-sm text-[#ADB5BD] hover:text-[#082FDF] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#082FDF] rounded-full border border-[#1a1a2e] hover:border-[#082FDF]/30 bg-[#00041A]"
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
          Questions About Our Terms?
        </h2>
        <p className="text-[#ADB5BD] text-center max-w-md">
          If you have any questions about these Terms, please contact our support team.
        </p>
        <a
          href={TENSURF_CONTACT.mailToLink}
          aria-label="Contact us via email about terms of use"
        >
          <Button className="rounded-xl px-8 py-3 bg-[#082FDF] hover:bg-[#082FDF]/80 transition-all duration-300 hover:shadow-[0_0_20px_rgba(8,47,223,0.4)] focus-visible:ring-2 focus-visible:ring-[#082FDF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01030B]">
            Contact Us
          </Button>
        </a>
      </section>
    </main>
  );
};

export default TermsOfUse;
