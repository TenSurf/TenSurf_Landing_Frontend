import React from "react";
import type { IPlan } from "@/types/general.types";
import { PlansSection } from "@/component/landing/plansSection/PlansSection";

const PLANS: IPlan[] = [
  {
    title: "Free Trial",
    description: "Try it free for 7 days",
    buttonLabel: "Start Free Trial",
    features: [
      { title: "Full code generation package included" },
      { title: "All NinjaTrader 8 indicators supported" },
    ],
    priceAnnually: 0,
    priceMonthly: 0,
    is_coming_soon: false,
    month_price_id: "",
    year_price_id: "",
    is_free: false,
    is_trial: true,
    order_id: 0,
    month_currency: "usd",
    year_currency: "usd",
    strategies_per_day: 0,
    credits_per_day: 0,
    trial_days: 7,
  },
  {
    title: "Start Surf",
    description: "For traders getting started",
    buttonLabel: "Get Started",
    features: [
      { title: "Full code generation package included" },
      { title: "All NinjaTrader 8 indicators supported" },
      { title: "Email support" },
    ],
    priceAnnually: 0,
    priceMonthly: 49,
    is_coming_soon: false,
    month_price_id: "",
    year_price_id: "",
    is_free: false,
    is_trial: false,
    order_id: 1,
    month_currency: "usd",
    year_currency: "usd",
    strategies_per_day: 0,
    credits_per_day: 0,
    trial_days: 0,
  },
  {
    title: "Pro Surf",
    description: "For active traders",
    buttonLabel: "Get Started",
    features: [
      { title: "Full code generation package included" },
      { title: "All NinjaTrader 8 indicators supported" },
      { title: "Priority support & processing" },
    ],
    priceAnnually: 0,
    priceMonthly: 149,
    is_coming_soon: false,
    month_price_id: "",
    year_price_id: "",
    is_free: false,
    is_trial: false,
    order_id: 2,
    month_currency: "usd",
    year_currency: "usd",
    strategies_per_day: 0,
    credits_per_day: 0,
    trial_days: 0,
  },
  {
    title: "Ultra Surf",
    description: "For power traders",
    buttonLabel: "Get Started",
    features: [
      { title: "Full code generation package included" },
      { title: "All NinjaTrader 8 indicators supported" },
      { title: "Priority support & processing" },
      { title: "Early access to new features" },
    ],
    priceAnnually: 0,
    priceMonthly: 299,
    is_coming_soon: false,
    month_price_id: "",
    year_price_id: "",
    is_free: false,
    is_trial: false,
    order_id: 3,
    month_currency: "usd",
    year_currency: "usd",
    strategies_per_day: 0,
    credits_per_day: 0,
    trial_days: 0,
  },
];

const PlansServerSideSection = async () => {
  return <PlansSection data={PLANS} />;
};

export default PlansServerSideSection;
