import { type FC } from "react";
import CheckIcon from "../../../icons/CheckIcon";
import type { IPlan } from "../../../types/general.types";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface IProps {
  plan: IPlan;
  isAnnuallyChecked?: boolean;
  className?: string;
}

export const Plan: FC<IProps> = ({ plan, className }) => {
  return (
    <div
      className={cn(
        `h-full flex flex-col gap-3 px-4 py-5 border backdrop-blur-[20px] border-white/2 rounded-3xl relative z-10 w-full`,
        className
      )}
    >
      <div className="flex flex-col items-center h-28 gap-1">
        {/* Most Popular badge for Pro plan */}
        {plan.title?.toLowerCase().includes("pro") && !plan.is_trial && !plan.is_free && !plan.is_coming_soon && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#082FDF] to-[#10B981] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg z-20">
            Most Popular
          </span>
        )}
        {/* Trial Badge for free trial plan */}
        {plan.is_trial && (
          <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-1">
            7 Days Free
          </span>
        )}
        <div className="text-3xl font-bold">{plan.title}</div>

        {/* Tag / description */}
        {plan.description && !plan.is_trial && !plan.is_free && (
          <div className="text-xs text-gray-400 mt-0.5">{plan.description}</div>
        )}

        <div className="grid items-center my-auto">
          {plan.is_trial ? (
            <div className="grid my-auto items-center gap-1">
              <div className="text-2xl font-bold text-center">$0</div>
            </div>
          ) : plan.is_free ? (
            <div className="grid my-auto items-center gap-1">
              <div className="text-2xl font-bold text-center">Free</div>
              <div className="text-lg font-bold text-center">
                {plan.description}
              </div>
            </div>
          ) : plan.is_coming_soon ? (
            <div className="text-2xl font-bold text-center">
              {plan.description}
            </div>
          ) : (
            <div className="text-center">
              <div className="text-4xl font-bold">
                ${plan.priceMonthly}
                <span className="text-sm font-normal">/month</span>
              </div>
              {plan.cost_per_credit && (
                <div className="text-xs text-gray-400 mt-1">~${plan.cost_per_credit}/credit</div>
              )}
            </div>
          )}
        </div>
      </div>

      <Link href="/waitlist" className="w-full">
        <div className="w-full h-12 flex items-center justify-center gap-2 bg-[#082FDF]/20 border border-[#082FDF]/40 rounded-lg hover:bg-[#082FDF]/30 transition-colors">
          <span className="w-2 h-2 bg-[#082FDF] rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-white">Coming Soon \u2014 Join Waitlist</span>
        </div>
      </Link>

      <div className="flex flex-col gap-1">
        {plan?.features?.map((feature, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex gap-1 text-[16px] font-light">
              <CheckIcon className="shrink-0" />
              <div>{feature.title}</div>
            </div>
            {
              <div className="flex flex-col gap-2">
                {feature.subtitles?.map((subtitle, index) => (
                  <div key={index} className="font-normal text-sm">
                    {subtitle}
                  </div>
                ))}
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
};
