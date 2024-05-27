import { type FC, useRef, useState } from "react";
import InfoFilledIcon from "../../../icons/InfoFilledIcon";
import CheckIcon from "../../../icons/CheckIcon";
import type { IPlan } from "../../../types/general.types";
import { ROUTE } from "../../../constatns/general.constants";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { HttpMethod, sendRequest } from "@/helpers/http-request";
import { BackendUrls } from "@/helpers/backend-urls";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface IProps {
  plan: IPlan;
  isAnnuallyChecked: boolean;
}

// *.*.*.*.*.*.*.*.*.*.* Main Function ↓•↓•↓
export const Plan: FC<IProps> = ({ plan, isAnnuallyChecked }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const planRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(planRef.current, { opacity: 0, y: -100 }, {
      opacity: 1, y: 0, duration: 2, scrollTrigger: {
        trigger: planRef.current,
        start: "center bottom"
      }
    });
  });

  // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
  return (
    <div
      ref={planRef
      }
      style={{
        background:
          "linear-gradient(136deg, rgba(57, 68, 225, 0.50) 7.59%, rgba(113, 82, 218, 0.15) 37.43%, rgba(255, 127, 101, 0.05) 66.68%), rgba(0, 0, 0, 0.40)"
      }}
      className={`flex flex-col gap-6 px-8 py-8 border backdrop-blur-[20px]  border-white/2 rounded-3xl relative z-10 w-full lg:w-96`}
    >
      <div className="flex flex-col items-center h-48 gap-3">
        <div className="text-4xl font-bold">{plan.title}</div>

        <div className="grid items-center my-auto">
          {plan.is_free ? (
            <div className="grid my-auto items-center gap-2">
              <div className="text-3xl font-bold text-center">Free</div>
              <div className="text-xl font-bold text-center">{plan.description}</div>
            </div>
          ) : plan.is_coming_soon ? (
            <div className="text-3xl font-bold text-center">{plan.description}</div>
          ) : (
            <div className="text-center">
              <div className="text-5xl font-bold">
                ${isAnnuallyChecked && plan.priceAnnually ? plan.priceAnnually / 12 : plan.priceMonthly}
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
              Save $<span className="">{plan.priceMonthly * 12 - plan.priceAnnually}</span> per year!
            </div>
            <InfoFilledIcon className="h-4 w-4 text-[#D7D7D7] rounded-full" />
          </div>
        ) : null}
      </div>

      <Button
        onClick={() => {
          if (plan.is_coming_soon) {
            router.push(ROUTE.contactUs);
          } else if (plan.is_free) {
            router.push(ROUTE.chart);
            // router.push(ROUTE.chart);
          } else {
            sendRequest(BackendUrls.payment, HttpMethod.POST, {
              price_id: isAnnuallyChecked ? plan.year_price_id : plan.month_price_id
            })
              .then(res => {
                router.push(res.data.url);
                setLoading(false);
              })
              .catch(() => setLoading(false));
          }
        }}
        className={`w-full h-16 text-lg ${
          plan.is_coming_soon ||
          (plan.is_free && "bg-white text-black hover:bg-white hover:text-black hover:opacity-90")
        }`}
        disabled={loading}
      >
        {loading ? <Loader></Loader> : plan.buttonLabel}
      </Button>

      <div className="flex flex-col gap-5">
        {plan?.features?.map((feature, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div className="flex gap-1 text-[18px] font-bold">
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
