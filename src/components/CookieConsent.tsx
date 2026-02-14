"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Cookie, X } from 'lucide-react';
import Link from 'next/link';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay before showing banner
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setShowBanner(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-[#01061D]/95 backdrop-blur-lg border border-[#1a1a2e] rounded-2xl p-6 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <Cookie className="w-8 h-8 text-[#082FDF] shrink-0" />
            <div className="flex-1">
              <h3 className="text-[#E9ECEF] font-medium mb-1">We use cookies</h3>
              <p className="text-sm text-[#ADB5BD]">
                We use cookies to improve your experience and analyze site traffic. 
                By clicking "Accept All", you consent to our use of cookies. 
                <Link href="/privacy-policy" className="text-[#082FDF] hover:underline ml-1">
                  Learn more
                </Link>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button
              onClick={acceptEssential}
              variant="outline"
              className="flex-1 md:flex-none rounded-xl border-[#1a1a2e] hover:bg-[#1a1a2e] text-[#ADB5BD]"
            >
              Essential Only
            </Button>
            <Button
              onClick={acceptAll}
              className="flex-1 md:flex-none rounded-xl bg-[#082FDF] hover:bg-[#082FDF]/80"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
