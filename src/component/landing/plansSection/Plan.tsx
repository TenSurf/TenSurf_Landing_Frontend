import { type FC } from "react";
import InfoFilledIcon from "../../../icons/InfoFilledIcon";
import CheckIcon from "../../../icons/CheckIcon";
import type { IPlan } from "../../../types/general.types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface IProps {
  plan: IPlan;
  isAnnuallyChecked?: boolean;
  className?: string;
}

export const Plan: FC<IProps> = ({ plan, isAnnuallyChecked, className }) => {
  return (
    <div
      // style={{
      //   background:
      //     "linear-gradient(136deg, rgba(57, 68, 225, 0.50) 7.59%, rgba(113, 82, 218, 0.15) 37.43%, rgba(255, 127, 101, 0.05) 66.68%), rgba(0, 0, 0, 0.40)",
      // }}
      className={cn(
        `h-full flex flex-col gap-4 px-4 py-6 border backdrop-blur-[20px] border-white/2 rounded-3xl relative z-10 w-full lg:w-96`,
        className
      )}
    >
      <div className="flex flex-col items-center h-48 gap-1">
        <div className="text-4xl font-bold">{plan.title}</div>

        <div className="grid items-center my-auto">
          {plan.is_free ? (
            <div className="grid my-auto items-center gap-2">
              <div className="text-3xl font-bold text-center">Free</div>
              <div className="text-xl font-bold text-center">
                {plan.description}
              </div>
            </div>
          ) : plan.is_coming_soon ? (
            <div className="text-3xl font-bold text-center">
              {plan.description}
            </div>
          ) : (
            <div className="text-center">
              <div className="text-5xl font-bold">
                $
                {isAnnuallyChecked && plan.priceAnnually
                  ? plan.priceAnnually / 12
                  : plan.priceMonthly}
                <span className="text-sm font-normal">/month</span>
              </div>
              <div className="text-base font-normal my-2">
                ${plan.priceAnnually}
                <span className="font-normal">/year</span>
              </div>
            </div>
          )}
        </div>
        {!plan.is_free && !plan.is_coming_soon && isAnnuallyChecked ? (
          <div className="bg-[#313131] py-2 px-3 flex items-center gap-3 rounded-lg font-semibold text-sm">
            <div>
              Save $
              <span className="">
                {plan.priceMonthly * 12 - plan.priceAnnually}
              </span>{" "}
              per year!
            </div>
            <InfoFilledIcon className="h-4 w-4 text-[#D7D7D7] rounded-full" />
          </div>
        ) : null}
      </div>

      <Button
        // onClick={() => {
        //   if (plan.is_coming_soon) {
        //     router.push(ROUTE.contactUs);
        //   } else if (plan.is_free) {
        //     router.push(ROUTE.chart);
        //     // router.push(ROUTE.chart);
        //   } else {
        //     sendRequest(BackendUrls.payment, HttpMethod.POST, {
        //       price_id: isAnnuallyChecked
        //         ? plan.year_price_id
        //         : plan.month_price_id,
        //     })
        //       .then((res) => {
        //         router.push(res.data.url);
        //       })
        //       .catch(() => {});
        //   }
        // }}
        className={`w-full h-16 text-lg ${
          plan.is_coming_soon ||
          (plan.is_free &&
            "bg-white text-black hover:bg-white hover:text-black hover:opacity-90")
        }`}
      >
        {plan.buttonLabel}
      </Button>

      <div className="flex flex-col gap-1">
        {plan?.features?.map((feature, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div className="flex gap-1 text-[18px] font-light">
              <CheckIcon className="shrink-0" />
              <div>{feature.title}</div>
            </div>
            {
              <div className="flex flex-col gap-3">
                {feature.subtitles?.map((subtitle, index) => (
                  <div key={index} className="font-normal text-base">
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
