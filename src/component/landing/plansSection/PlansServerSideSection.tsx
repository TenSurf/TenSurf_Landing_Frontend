import React from "react";
import { BackendUrls } from "@/helpers/backend-urls";
import type { IPlan } from "@/types/general.types";
import { headers } from "next/headers";
import { PlansSection } from "@/component/landing/plansSection/PlansSection";

export const backendUrl = process.env.NEXT_PUBLIC_API_HUB_URL;

async function getPlans() {
  // const baseUrl = headers().get('referer')?.includes('localhost') ? 'http://localhost:8080' : 'http://localhost:8080';
  let res = await fetch(backendUrl + BackendUrls.plans, {
    cache: "no-store"
  });
  const data = await res.json();

  return Object.values(data).map((val: any): IPlan => {
    return {
      title: val.name,
      description: val.description,
      buttonLabel: val.is_coming_soon ? "Contact Us" : "Start Now",
      features: val.features.map((feature: any) => ({ title: feature.name })),
      priceAnnually: val.year_unit_amount / 100,
      priceMonthly: val.month_unit_amount / 100,
      is_coming_soon: val.is_coming_soon,
      month_price_id: val.month_price_id,
      year_price_id: val.year_price_id,
      is_free: val.is_free,
      order_id: val.order_id,
      month_currency: val?.month_currency,
      year_currency: val?.year_currency
    };
  }).sort((a, b) => a.order_id - b.order_id);
}

const PlansServerSideSection = async () => {

  const data = await getPlans();

  return (
    <PlansSection data={data}/>
  );
};

export default PlansServerSideSection;