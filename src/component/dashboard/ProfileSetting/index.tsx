"use client";
import React, { useEffect, useState } from "react";
import { sendRequest } from "@/helpers/http-request";
import { BackendUrls } from "@/helpers/backend-urls";
import { useRouter, useSearchParams } from "next/navigation";
import { ROUTE } from "../../../constatns/general.constants";
import { EditProfile } from "./EditProfile";
import { AccountAndBilling } from "./AccountAndBilling";
import { useAccountStore } from "@/store/account";
import { Button } from "@/components/ui/button";
import { Calendar, Clock3 } from "lucide-react";

function getJoinedText(dateStr: string | undefined): string {
  if (!dateStr) return "";
  const joined = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - joined.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "Joined today";
  if (diffDays === 1) return "Joined yesterday";
  if (diffDays < 7) return `Joined ${diffDays} days ago`;
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `Joined ${weeks} week${weeks > 1 ? "s" : ""} ago`;
  }
  if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `Joined ${months} month${months > 1 ? "s" : ""} ago`;
  }
  const years = Math.floor(diffDays / 365);
  return `Joined ${years} year${years > 1 ? "s" : ""} ago`;
}

const ProfileSettings = () => {
  const router = useRouter();
  let params = useSearchParams();

  const [mode, setMode] = useState<"profileSetting" | "billing">(
    (params.get("mode") as "profileSetting" | "billing") || "profileSetting"
  );

  const { user_data, update_user_data }: any = useAccountStore();

  const [isGetDataLoading, setIsGetDataLoadingGetData] = useState(true);

  useEffect(() => {
    setMode(params.get("mode") as "profileSetting" | "billing");
  }, [params]);

  const changeModeHandler = (mode: "profileSetting" | "billing") => {
    setMode(mode);
    router.push(
      mode === "profileSetting" ? ROUTE.profileSetting : ROUTE.profileBilling
    );
  };

  useEffect(() => {
    sendRequest(BackendUrls.profile)
      .then((res: any) => {
        update_user_data(res.data);
      })
      .catch(() => {})
      .finally(() => setIsGetDataLoadingGetData(false));
  }, []);

  return (
    <>
      <div className="flex flex-col gap-16 items-center w-screen justify-center container my-28 sm:my-52 relative">
        <div
          style={{
            opacity: "0.5",
            background: "#2561FF",
            filter: "blur(280px)"
          }}
          className="z-0 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[420px] h-[400px] rounded-full"
        ></div>
        <div className="w-full max-w-[1015px] relative">
          <div className="flex flex-col gap-8">
            <div className="flex gap-5">
              <div className="flex gap-1 items-center">
                <Clock3 size={16} color="#495057" strokeWidth={2} />
                <p className="text-base font-medium">Online</p>
              </div>
              {user_data?.date_joined && (
                <div className="flex gap-1 items-center">
                  <Calendar size={16} color="#495057" strokeWidth={2} />
                  <p className="text-base font-medium">{getJoinedText(user_data.date_joined)}</p>
                </div>
              )}
            </div>
            <div
              className="px-1 sm:px-4 border-[1px] border-[rgba(255,255,255,0.08)] rounded-3xl bg-[#00041A] py-3 font-medium flex gap-0 sm:gap-2">
              <Button onClick={() => changeModeHandler("profileSetting")}
                      className={`p-2 text-xl sm:text-2xl bg-transparent hover:bg-transparent ${mode === "profileSetting" ? "text-white" : "text-[#495057]"}`}>
                Profile
              </Button>
              <Button onClick={() => changeModeHandler("billing")}
                      className={`p-2 text-xl sm:text-2xl bg-transparent hover:bg-transparent ${mode === "billing" ? "text-white" : "text-[#495057]"}`}>
                Account and Billing
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full relative">
          {mode === "profileSetting" ? (
            <EditProfile isGetDataLoading={isGetDataLoading} />
          ) : (
            <AccountAndBilling isGetDataLoading={isGetDataLoading} />
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
