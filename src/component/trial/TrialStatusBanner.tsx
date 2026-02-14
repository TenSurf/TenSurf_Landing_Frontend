"use client";

import React, { useEffect, useState } from "react";
import { isLoggedIn } from "@/helpers/auth";
import { HttpMethod, sendRequest } from "@/helpers/http-request";
import { BackendUrls } from "@/helpers/backend-urls";

interface TrialStatus {
  has_started_trial: boolean;
  is_on_trial: boolean;
  is_trial_expired: boolean;
  trial_days_remaining: number;
  trial_end_date: string | null;
  has_active_subscription: boolean;
  subscription_status: string;
}

export const TrialStatusBanner = () => {
  const [trialStatus, setTrialStatus] = useState<TrialStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoggedIn()) {
      sendRequest(BackendUrls.trial_status, HttpMethod.GET)
        .then((res) => {
          setTrialStatus(res.data);
        })
        .catch((err) => {
          console.error("Failed to fetch trial status", err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading || !trialStatus) {
    return null;
  }

  // Don't show banner if user has an active subscription
  if (trialStatus.has_active_subscription) {
    return null;
  }

  // Trial expired banner
  if (trialStatus.is_trial_expired) {
    return (
      <div className="max-w-screen-2xl mx-auto w-full px-4 pt-24">
        <div className="bg-red-900/50 border border-red-500 rounded-lg p-4 text-center">
          <div className="text-red-200 font-semibold text-lg mb-2">
            Your Free Trial Has Expired
          </div>
          <p className="text-red-300 text-sm">
            To continue using TenSurf Brain, please select one of the paid plans below.
          </p>
        </div>
      </div>
    );
  }

  // Active trial banner
  if (trialStatus.is_on_trial) {
    const daysText = trialStatus.trial_days_remaining === 1 ? "day" : "days";
    return (
      <div className="max-w-screen-2xl mx-auto w-full px-4 pt-24">
        <div className="bg-blue-900/50 border border-blue-500 rounded-lg p-4 text-center">
          <div className="text-blue-200 font-semibold text-lg mb-2">
            {trialStatus.trial_days_remaining} {daysText} left in your free trial
          </div>
          <p className="text-blue-300 text-sm">
            Upgrade now to ensure uninterrupted access to TenSurf Brain.
          </p>
        </div>
      </div>
    );
  }

  // No trial started yet - don't show banner
  return null;
};

export default TrialStatusBanner;
