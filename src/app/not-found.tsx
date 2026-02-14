import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowRight, Search, HelpCircle } from 'lucide-react';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#01030B] flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <Link href="/" className="mb-8">
        <Image
          src="/tensurf.png"
          width={150}
          height={50}
          alt="TenSurf"
          className="rounded"
        />
      </Link>

      {/* 404 Number */}
      <div className="text-[150px] md:text-[200px] font-bold text-[#082FDF]/20 leading-none select-none">
        404
      </div>

      {/* Message */}
      <h1 className="text-3xl md:text-4xl font-medium text-[#E9ECEF] text-center -mt-8 mb-4">
        Page Not Found
      </h1>
      <p className="text-lg text-[#ADB5BD] text-center max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
        <Link href="/">
          <Button className="flex gap-2 rounded-xl bg-[#082FDF] hover:bg-[#082FDF]/80 py-3 px-6">
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </Button>
        </Link>
        <Link href="/login">
          <Button className="flex gap-2 rounded-xl bg-transparent border border-[#082FDF] hover:bg-[#082FDF]/10 py-3 px-6">
            <span>Start Free Trial</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      {/* Helpful Links */}
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-[#6C757D]">Or try one of these:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/plans" 
            className="text-sm text-[#ADB5BD] hover:text-[#082FDF] flex items-center gap-1"
          >
            <Search className="w-3 h-3" />
            View Plans
          </Link>
          <Link 
            href="/faq" 
            className="text-sm text-[#ADB5BD] hover:text-[#082FDF] flex items-center gap-1"
          >
            <HelpCircle className="w-3 h-3" />
            FAQ
          </Link>
          <Link 
            href="/compare" 
            className="text-sm text-[#ADB5BD] hover:text-[#082FDF] flex items-center gap-1"
          >
            Compare Tools
          </Link>
          <Link 
            href="/contact-us" 
            className="text-sm text-[#ADB5BD] hover:text-[#082FDF] flex items-center gap-1"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
