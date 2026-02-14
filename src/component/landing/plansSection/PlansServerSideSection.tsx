import React from "react";
import { BackendUrls } from "@/helpers/backend-urls";
import type { IPlan } from "@/types/general.types";
import { PlansSection } from "@/component/landing/plansSection/PlansSection";

export const backendUrl = process.env.NEXT_PUBLIC_API_URL;

// TBLSAI is the single source of truth for plan data.
// Falls back to Django proxy if TBLSAI_PLANS_URL is not set.
const TBLSAI_PLANS_URL =
  process.env.TBLSAI_PLANS_URL || backendUrl + BackendUrls.plans;

async function getPlans() {
  let res = await fetch(TBLSAI_PLANS_URL, {
    cache: "no-store",
  });

  let data: any;

  try {
    data = await res.json();
  } catch (e) {
    data = {};
  }

  return Object.entries(data)
    .map(([key, val]: [string, any]): IPlan => {
      let buttonLabel = "Get Started";
      if (val.is_coming_soon) {
        buttonLabel = "Contact Us";
      } else if (val.is_trial) {
        buttonLabel = "Start Free Trial";
      } else if (val.is_free) {
        buttonLabel = "Try Free";
      }

      return {
        title: val.name,
        description: val.description,
        buttonLabel: buttonLabel,
        features: val.features?.map((f: any) => ({
          title: typeof f === "string" ? f : f.name,
        })),
        priceAnnually: 0,
        priceMonthly: val.price || (val.month_unit_amount ? val.month_unit_amount / 100 : 0),
        is_coming_soon: val.is_coming_soon || false,
        month_price_id: val.stripe_price_id || val.month_price_id || "",
        year_price_id: val.year_price_id || "",
        is_free: val.is_free || false,
        is_trial: val.is_trial || false,
        order_id: val.order_id || 0,
        month_currency: val.month_currency || "usd",
        year_currency: val.year_currency || "usd",
        strategies_per_day: val.credits_per_day || val.strategies_per_day || 0,
        credits_per_day: val.credits_per_day || val.strategies_per_day || 0,
        cost_per_credit:
          val.price && val.credits_per_day
            ? (val.price / (val.credits_per_day * 30)).toFixed(2)
            : val.month_unit_amount && val.strategies_per_day
              ? (val.month_unit_amount / 100 / (val.strategies_per_day * 30)).toFixed(2)
              : undefined,
        trial_days: val.trial_days || 0,
      };
    })
    .sort((a, b) => a.order_id - b.order_id);
}

const PlansServerSideSection = async () => {
  const data = await getPlans();

  return <PlansSection data={data} />;
};

export default PlansServerSideSection;
