"use client";

import React from "react";
import PageProvider from "@/component/general/PageProvider";
import DefaultLayout from "@/layout/publicContentLayout/DefaultLayout";
import { Button } from "@/components/ui/button";
import { ROUTE } from "@/constatns/general.constants";
import { useRouter } from "next/navigation";

const PaymentCancelPage = () => {
  const router = useRouter();

  return (
    <PageProvider title="Payment Canceled">
      <DefaultLayout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
          <div className="max-w-md w-full text-center">
            <div className="mx-auto w-20 h-20 bg-gray-500/20 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            <h1 className="text-3xl font-bold text-white mb-4">
              Payment Canceled
            </h1>

            <p className="text-gray-400 text-lg mb-8">
              No worries, you haven't been charged. Your trial selection was not completed.
            </p>

            <div className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-white font-semibold mb-3">Why try TenSurf Brain?</h2>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>7-day free trial, no credit card required</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Build strategies in plain English</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Native NinjaTrader integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cancel anytime</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => router.push(ROUTE.plans)}
                size="lg"
                className="px-6 bg-[#3861fb] hover:bg-[#3861fb]/90 text-white"
              >
                View Plans
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

            <p className="text-gray-500 text-sm mt-8">
              Questions? <a href="mailto:support@tensurf.ai" className="text-blue-500 hover:underline">Contact our support team</a>
            </p>
          </div>
        </div>
      </DefaultLayout>
    </PageProvider>
  );
};

export default PaymentCancelPage;
