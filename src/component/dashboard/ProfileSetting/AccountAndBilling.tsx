import { useRouter } from "next/navigation";
import React, { useState } from "react";
import moment from "moment";
import { useAccountStore } from "@/store/account";
import { Ban, Calendar, CheckCheck, TriangleAlert, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { ROUTE } from "@/constatns/general.constants";

export const AccountAndBilling = ({
                                    isGetDataLoading
                                  }: {
  isGetDataLoading: boolean;
}) => {
  const router = useRouter();
  const { user_data }: any = useAccountStore();
  const [planCancellationModal, setPlanCancellationModal] = useState(false);

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
            <div className="flex gap-4 items-start">
              {user_data?.expire_plan_at ? (
                <CheckCheck size={20} color="#3DC751" strokeWidth={2} />
              ) : (
                <Ban className={""} size={20} color="#F26056" strokeWidth={2} />
                // <TriangleAlert size={20} color="#FFCC26" strokeWidth={2} />
              )}
              <div className="text-[16px] font-normal flex-1">
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
              <Button
                onClick={() => {
                  user_data?.expire_plan_at ?
                    setPlanCancellationModal(true) :
                    router.push(ROUTE.plans);
                }}
                type={"submit"}
                disabled={isGetDataLoading}
                className={"self-start w-fit bg-primary rounded-full text-white text-lg"}
              >
                {user_data?.expire_plan_at ? "Cancel plan" : "Upgrade"}
              </Button>
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
      <Dialog open={planCancellationModal} onOpenChange={setPlanCancellationModal}>
        <DialogContent className={"max-w-[520px] w-full rounded-3xl bg-[#02040E] p-8 border-[1px] border-[#495057]"}>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <div className="flex w-full justify-between items-start">
                <h3 className={"font-bold text-3xl text-white"}>Notice of Subscription Cancellation</h3>
                <DialogClose>
                  <X color="#A0A0A0" />
                </DialogClose>
              </div>
              <p className={"font-normal text-xl"}>Do you want your subscription not to be renewed?</p>
            </div>
            <div className="w-full flex justify-start gap-2">
              <DialogClose>
                <Button variant={"outline"}
                        className={"py-6 px-5 w-fit bg-transparent rounded-full text-white text-lg sm:text-xl"}>
                  No Thanks
                </Button>
              </DialogClose>
              <Button className={"py-6 px-5 w-fit bg-primary rounded-full text-white text-lg sm:text-xl"}>
                Confirm
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
