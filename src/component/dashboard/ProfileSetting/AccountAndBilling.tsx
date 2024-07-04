import { useRouter } from "next/navigation";
import TensurfButton from "../../general/TensurfButton";
import { ROUTE } from "../../../constatns/general.constants";
import React from "react";
import moment from "moment";
import { useAccountStore } from "@/store/account";
import { Ban, Calendar, CheckCheck } from "lucide-react";

export const AccountAndBilling = ({
                                    isGetDataLoading
                                  }: {
  isGetDataLoading: boolean;
}) => {
  const router = useRouter();
  const { user_data }: any = useAccountStore();

  return (
    <div
      className="flex flex-col gap-6 p-8 w-full max-w-[1015px] mx-auto border-[1px] border-[#212529] bg-[#02040E] rounded-3xl">
      {isGetDataLoading ? (
        <div className="rounded-xl bg-dark-Neutral-2 h-20 animate-pulse"></div>
      ) : (
        <>
          <div className="flex flex-col gap-2">
            <div className="text-[24px] font-bold">
              {user_data?.expire_plan_at
                ? "Your Subscription Plan"
                : "No Active Subscription"}
            </div>
            <div className="flex gap-4 items-center">
              {user_data?.expire_plan_at ? (
                <CheckCheck size={20} color="#3DC751" strokeWidth={2} />
              ) : (
                <Ban size={20} color="#F26056" strokeWidth={2} />
              )}
              <div className="text-[16px] font-normal">
                {user_data?.expire_plan_at
                  ? `Your current premium plan is active and running smoothly. Keep enjoying all the premium features without interruption`
                  : `It looks like you don't have an active premium plan at the moment. Explore our plans and find the one
                    that best suits your trading needs!`}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div
              className="flex justify-between items-center rounded-[10px] border-[1px] border-[#343A40] border-dark-Neutral-7 bg-[#212529] px-4 py-3">
              <div className="flex flex-col gap-2 ">
                <div className="font-medium text-sm text-dark-Neutral-200">
                  Current Plan
                </div>
                <h3 className="font-bold text-[20px]">{user_data?.plan_name}</h3>
              </div>
              <TensurfButton onClick={() => router.push(ROUTE.plans)}>
                Change Plan
              </TensurfButton>
            </div>
            {user_data?.expire_plan_at ? (
              <div className="flex gap-2 items-center mt-4">
                <Calendar size={16} color="#ADB5BD" />
                <div className="text-base font-medium">
                  Your account will be automatically charged on{" "}
                  <strong>
                    {moment(user_data?.expire_plan_at).format("YYYY MMM D")}
                  </strong>{" "}
                  for the renewal
                </div>
              </div>
            ) : (
              <></>
              // <span>
              //   Unlock advanced features & optimize your trades - start your
              //   TenSurf plan today!
              // </span>
            )}
          </div>
        </>
      )}
    </div>
  );
};
