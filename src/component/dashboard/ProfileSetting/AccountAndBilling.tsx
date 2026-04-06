import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { useAccountStore } from "@/store/account";
import { Ban, Calendar, CheckCheck, Crown, ExternalLink, Loader2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTE } from "@/constatns/general.constants";
import { HttpMethod, sendRequest } from "@/helpers/http-request";
import { BackendUrls } from "@/helpers/backend-urls";
import { toast } from "sonner";

interface SubStatus {
  subscription_status: string;
  is_on_trial: boolean;
  is_trial_expired: boolean;
  trial_days_remaining: number;
  trial_end_date: string | null;
  has_active_subscription: boolean;
  plan_id: string | null;
  expire_plan_at: string | null;
  stripe_status?: string;
  cancel_at_period_end?: boolean;
  current_period_end?: string;
}

// Plan name mapping (matches backend PLAN_NAMES)
const PLAN_NAMES: Record<string, string> = {
  prod_TrV10lB65U7XuF: "Start Surf",
  prod_TrV162mO7Mo7St: "Pro Surf",
  prod_TrV1Yp6aqiPSCJ: "Ultra Surf",
};

export const AccountAndBilling = ({
  isGetDataLoading,
}: {
  isGetDataLoading: boolean;
}) => {
  const router = useRouter();
  const { user_data }: any = useAccountStore();
  const [subStatus, setSubStatus] = useState<SubStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [portalLoading, setPortalLoading] = useState(false);

  useEffect(() => {
    sendRequest<SubStatus>(BackendUrls.subscription_status)
      .then((res) => setSubStatus(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const openStripePortal = async () => {
    setPortalLoading(true);
    try {
      const res = await sendRequest<{ url: string }>(
        BackendUrls.billing,
        HttpMethod.POST,
        { return_url: window.location.href }
      );
      window.location.href = res.data.url;
    } catch (error: any) {
      const msg = error?.response?.data?.detail || "Unable to open billing portal.";
      toast.error(msg);
      setPortalLoading(false);
    }
  };

  const status = subStatus?.subscription_status || "none";
  const isActive = status === "active" || subStatus?.has_active_subscription;
  const isTrialing = status === "trialing" || subStatus?.is_on_trial;
  const isCancelling = isActive && subStatus?.cancel_at_period_end;
  const isTrialExpired = status === "trial_expired" || subStatus?.is_trial_expired;
  const hasNoPlan = status === "none" && !isTrialing;
  const isPastDue = subStatus?.stripe_status === "past_due";

  const planName = subStatus?.plan_id ? PLAN_NAMES[subStatus.plan_id] || user_data?.plan_name || "" : "";

  const renewalDate = subStatus?.current_period_end
    ? moment(subStatus.current_period_end).format("YYYY MMM D")
    : subStatus?.expire_plan_at
      ? moment(subStatus.expire_plan_at).format("YYYY MMM D")
      : null;

  const trialEndDate = subStatus?.trial_end_date
    ? moment(subStatus.trial_end_date).format("YYYY MMM D")
    : null;

  if (isGetDataLoading || loading) {
    return (
      <div className="flex flex-col gap-6 p-8 w-full max-w-[1015px] mx-auto border border-white/[0.08] bg-[#00041A] rounded-3xl">
        <div className="rounded-xl bg-dark-Neutral-2 h-20 animate-pulse" />
        <div className="rounded-xl bg-dark-Neutral-2 h-16 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-8 w-full max-w-[1015px] mx-auto border border-white/[0.08] bg-[#00041A] rounded-3xl">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-bold">
          {isTrialing
            ? "Free Trial"
            : isActive
              ? "Your Subscription Plan"
              : isTrialExpired
                ? "Trial Expired"
                : "No Active Subscription"}
        </div>
        <div className="flex gap-4 items-start">
          {isTrialing ? (
            <Clock className="shrink-0 mt-0.5" size={20} color="#3B82F6" strokeWidth={2} />
          ) : isPastDue ? (
            <Ban className="shrink-0 mt-0.5" size={20} color="#F26056" strokeWidth={2} />
          ) : isActive && !isCancelling ? (
            <CheckCheck className="shrink-0 mt-0.5" size={20} color="#3DC751" strokeWidth={2} />
          ) : isCancelling ? (
            <Calendar className="shrink-0 mt-0.5" size={20} color="#FFCC26" strokeWidth={2} />
          ) : (
            <Ban className="shrink-0 mt-0.5" size={20} color="#F26056" strokeWidth={2} />
          )}
          <div className="text-base font-normal flex-1">
            {isTrialing
              ? `You have ${subStatus?.trial_days_remaining || 0} days remaining in your free trial. Upgrade anytime to keep your access.`
              : isCancelling
                ? `Your plan is active until ${renewalDate}. After that, it will not renew. You can resubscribe anytime from the plans page.`
                : isActive
                  ? isPastDue
                    ? "Your payment is past due. Please update your payment method to keep your access."
                    : "Your current plan is active and running smoothly. Enjoy all premium features without interruption."
                  : isTrialExpired
                    ? "Your free trial has ended. Subscribe to a plan to continue using TenSurf Brain."
                    : "Explore our plans and find one that suits your trading needs!"}
          </div>
        </div>
      </div>

      {/* Plan Card */}
      <div className="flex justify-between items-center rounded-[10px] border border-white/[0.08] bg-[#01030B] px-4 py-3">
        <div className="flex flex-col gap-1">
          <div className="font-medium text-sm text-dark-Neutral-200">
            Current Plan
          </div>
          <div className="flex items-center gap-2">
            {(isActive || isTrialing) && <Crown size={18} color="#FFCC26" />}
            <h3 className="font-bold text-xl">
              {isTrialing ? "Free Trial" : planName || "No Plan"}
            </h3>
          </div>
          {isCancelling && (
            <span className="text-xs text-yellow-400">Cancels on {renewalDate}</span>
          )}
          {isPastDue && (
            <span className="text-xs text-red-400">Payment past due</span>
          )}
          {isTrialing && trialEndDate && (
            <span className="text-xs text-blue-400">Ends on {trialEndDate}</span>
          )}
        </div>

        <div className="flex gap-2">
          {isActive ? (
            <Button
              onClick={openStripePortal}
              loading={portalLoading}
              className="self-start w-fit bg-primary rounded-full text-white text-lg"
            >
              Manage Plan <ExternalLink size={16} className="ml-1" />
            </Button>
          ) : (
            <Button
              onClick={() => router.push(ROUTE.plans)}
              className="self-start w-fit bg-primary rounded-full text-white text-lg"
            >
              {isTrialing || isTrialExpired ? "Subscribe Now" : "View Plans"}
            </Button>
          )}
        </div>
      </div>

      {/* Renewal Info */}
      {isActive && !isCancelling && renewalDate && (
        <div className="flex gap-2 items-center">
          <Calendar size={16} color="#ADB5BD" />
          <div className="text-base font-medium">
            Your account will be automatically charged on{" "}
            <strong>{renewalDate}</strong> for the renewal.
          </div>
        </div>
      )}

      {/* Trial countdown */}
      {isTrialing && (
        <div className="flex gap-2 items-center">
          <Clock size={16} color="#3B82F6" />
          <div className="text-base font-medium">
            <strong>{subStatus?.trial_days_remaining}</strong> days remaining in your free trial.
          </div>
        </div>
      )}
    </div>
  );
};
