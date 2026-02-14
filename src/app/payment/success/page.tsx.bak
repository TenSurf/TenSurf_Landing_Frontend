"use client";

import React, { Suspense } from "react";
import PageProvider from "@/component/general/PageProvider";
import DefaultLayout from "@/layout/publicContentLayout/DefaultLayout";
import { Button } from "@/components/ui/button";
import { ROUTE } from "@/constatns/general.constants";
import { useRouter, useSearchParams } from "next/navigation";

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
          {isTrial ? "Your Free Trial Has Started!" : "Welcome to TenSurf!"}
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          {isTrial 
            ? "You have 7 days of full access to all features. No credit card required."
            : "Your subscription is now active. You have full access to all features."
          }
        </p>

        <div className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-6 mb-8 text-left">
          <h2 className="text-white font-semibold mb-4">Getting Started:</h2>
          <ol className="space-y-3 text-gray-400">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">1</span>
              <span>Download the TenSurf Brain add-on for NinjaTrader</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">2</span>
              <span>Install and activate using your NinjaTrader username</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">3</span>
              <span>Start creating strategies using plain English</span>
            </li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

        {isTrial && (
          <p className="text-gray-500 text-sm mt-8">
            Your trial ends in 7 days. Upgrade to a paid plan anytime to continue using TenSurf Brain.
          </p>
        )}
      </div>
    </div>
  );
};

const PaymentSuccessPage = () => {
  return (
    <PageProvider title="Payment Successful">
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
