import { toast } from "sonner";
import { type FC, useState } from "react";
import CheckIcon from "../../../icons/CheckIcon";
import type { IPlan } from "../../../types/general.types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { isLoggedIn } from "@/helpers/auth";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constatns/general.constants";
import { HttpMethod, sendRequest } from "@/helpers/http-request";
import { BackendUrls } from "@/helpers/backend-urls";
import { Loader } from "lucide-react";

interface IProps {
  plan: IPlan;
  isAnnuallyChecked?: boolean;
  className?: string;
}

export const Plan: FC<IProps> = ({ plan, className }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (plan.is_coming_soon) {
      router.push(ROUTE.contactUs);
      return;
    }

    // Free trial plan (is_trial = true)
    if (plan.is_trial) {
      if (isLoggedIn()) {
        setLoading(true);
        try {
          const res = await sendRequest(BackendUrls.start_trial, HttpMethod.POST, {});
          if (res.data.success) {
            router.push("/payment/success?trial=true");
          } else {
            toast.error(res.data.message || "Unable to start trial");
          }
        } catch (error: any) {
          toast.error(error?.response?.data?.message || "Unable to start trial");
        } finally {
          setLoading(false);
        }
      } else {
        router.push("/signup");
      }
      return;
    }

    // Legacy free plan (chart access)
    if (plan.is_free) {
      router.push(ROUTE.chart);
      return;
    }

    // Paid plans - go to Stripe checkout
    if (isLoggedIn()) {
      setLoading(true);
      sendRequest(BackendUrls.payment, HttpMethod.POST, {
        price_id: plan.month_price_id,
      })
        .then((res) => {
          router.push(res.data.url);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
      router.push("/signup");
    }
  };

  // Determine button styling based on plan type
  const getButtonClass = () => {
    if (plan.is_coming_soon) {
      return "bg-white text-black hover:bg-white hover:text-black hover:opacity-90";
    }
    if (plan.is_trial) {
      return "bg-blue-600 hover:bg-blue-700";
    }
    if (plan.is_free) {
      return "bg-white text-black hover:bg-white hover:text-black hover:opacity-90";
    }
    return "bg-green-600 hover:bg-green-700";
  };

  // Determine button label
  const getButtonLabel = () => {
    if (plan.is_trial) {
      return "Start Free Trial";
    }
    return plan.buttonLabel || "Get Started";
  };

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
            </div>
          )}
        </div>
      </div>

      <Button
        onClick={handleClick}
        className={cn("w-full h-12 text-base", getButtonClass())}
        disabled={loading}
      >
        {loading ? <Loader className="animate-spin"></Loader> : getButtonLabel()}
      </Button>

      {/* Info text */}
      {plan.is_trial && (
        <p className="text-center text-gray-400 text-xs">
          No credit card required
        </p>
      )}

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
