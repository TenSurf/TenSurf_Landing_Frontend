"use client";

import React, { Suspense } from "react";
import PageProvider from "@/component/general/PageProvider";
import DefaultLayout from "@/layout/publicContentLayout/DefaultLayout";
import { Button } from "@/components/ui/button";
import { ROUTE } from "@/constatns/general.constants";
import { useRouter, useSearchParams } from "next/navigation";
import { NewsLetter } from "@/layout/publicContentLayout/NewsLetter";

const PaymentSuccessContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isTrial = searchParams.get("trial") === "true";

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center">
        <div className={"mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-6 " + 
          (isTrial ? "bg-blue-500/20" : "bg-green-500/20")}>
          <svg
            className={"w-10 h-10 " + (isTrial ? "text-blue-500" : "text-green-500")}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-white mb-4">
          {isTrial ? "You're on the List!" : "Welcome to TenSurf!"}
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          {isTrial 
            ? "Thank you for signing up! We're putting the finishing touches on TenSurf Brain."
            : "Your subscription is now active. We'll notify you as soon as TenSurf Brain is ready."
          }
        </p>

        <div className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-6 mb-8 text-left">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-white font-semibold text-lg">Coming Soon</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            TenSurf Brain — the AI-powered NinjaTrader add-on that turns plain English into working trading strategies — is launching soon. Your account is ready and waiting.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No coding required — describe strategies in plain English</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>AI generates, compiles, and backtests NinjaScript code</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Custom indicators, strategy modification, and more</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button
            onClick={() => router.push(ROUTE.profile)}
            size="lg"
            className="px-6 bg-[#3861fb] hover:bg-[#3861fb]/90 text-white"
          >
            Go to Dashboard
          </Button>
          <Button
            onClick={() => router.push(ROUTE.home)}
            variant="text"
            size="lg"
            className="text-gray-400"
          >
            Back to Home
          </Button>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <h3 className="text-white font-semibold mb-2">Get Notified When We Launch</h3>
          <p className="text-gray-500 text-sm mb-4">
            Subscribe to our newsletter and be the first to know when TenSurf Brain is available.
          </p>
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

const PaymentSuccessPage = () => {
  return (
    <PageProvider title="Welcome to TenSurf">
      <DefaultLayout>
        <Suspense fallback={
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-white">Loading...</div>
          </div>
        }>
          <PaymentSuccessContent />
        </Suspense>
      </DefaultLayout>
    </PageProvider>
  );
};

export default PaymentSuccessPage;
