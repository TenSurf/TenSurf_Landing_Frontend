"use client";

import React, { type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Star, Keyboard, HelpCircle, ArrowLeft } from "lucide-react";

const NAV_ITEMS = [
  { href: "/docs/getting-started", label: "Getting Started", icon: BookOpen },
  { href: "/docs/best-practices", label: "Best Practices", icon: Star },
  { href: "/docs/keyboard-shortcuts", label: "Keyboard Shortcuts", icon: Keyboard },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
];

export const DocsLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-full gap-0 mt-16 sm:mt-24 md:mt-32 mb-16 sm:mb-24 md:mb-32 max-w-screen-xl mx-auto px-4">
      {/* Back link */}
      <Link
        href="/"
        className="flex items-center gap-2 text-[#ADB5BD] hover:text-white text-sm mb-8 transition-colors w-fit"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to TenSurf
      </Link>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Sidebar nav */}
        <nav className="md:w-56 flex-shrink-0">
          <h3 className="text-xs font-semibold text-[#ADB5BD] uppercase tracking-wider mb-4">
            Documentation
          </h3>
          <div className="flex flex-row md:flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? "bg-[#082FDF]/10 text-[#082FDF] border border-[#082FDF]/30"
                      : "text-[#ADB5BD] hover:text-white hover:bg-[#0a0a1f]"
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Content */}
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </div>
  );
};

export default DocsLayout;
