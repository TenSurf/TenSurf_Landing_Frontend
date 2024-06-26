"use client";
import React, { useEffect, useState } from "react";
import { sendRequest } from "@/helpers/http-request";
import { BackendUrls } from "@/helpers/backend-urls";
import TensurfButton from "../../general/TensurfButton";
import { useRouter, useSearchParams } from "next/navigation";
import { ROUTE } from "../../../constatns/general.constants";
import { EditProfile } from "./EditProfile";
import { AccountAndBilling } from "./AccountAndBilling";
import { useParams } from "next/navigation";
import { useAccountStore } from "@/store/account";

const ProfileSettings = () => {
  const router = useRouter();
  let params = useSearchParams();
  const modeInQuery = "profileSetting";

  const [mode, setMode] = useState<"profileSetting" | "billing">(
    (params.get("mode") as "profileSetting" | "billing") || "profileSetting"
  );

  const { user_data, update_user_data }: any = useAccountStore();

  const [isGetDataLoading, setIsGetDataLoadingGetData] = useState(true);
  // const [isStripLoading, setIsStripLoading] = useState<boolean>(false);

  useEffect(() => {
    setMode(params.get("mode") as "profileSetting" | "billing");
  }, [params]);

  const changeModeHandler = (mode: "profileSetting" | "billing") => {
    setMode(mode);
    router.push(
      mode === "profileSetting" ? ROUTE.profileSetting : ROUTE.profileBilling
    );
  };
  // ____________________________________________________________

  // get user Data ↓•↓•↓
  useEffect(() => {
    sendRequest(BackendUrls.profile)
      .then((res: any) => {
        update_user_data(res.data);
      })
      .catch(() => {})
      .finally(() => setIsGetDataLoadingGetData(false));
  }, []);

  // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
  return (
    <>
      <div className="flex flex-col gap-16 items-center w-screen">
        {/* <Breadcrumb pageName='Profile Settings' /> */}
        <div className="w-full bg-slate-900">
          <div className="px-32 text-[24px]  font-medium flex gap-2">
            <TensurfButton
              onClick={() => changeModeHandler("profileSetting")}
              variant={"text"}
              textColor={"text-white"}
              customClassName={
                mode === "profileSetting"
                  ? "border-b-2 border-dark-primary-400  !rounded-none"
                  : "!rounded-none"
              }
            >
              Profile
            </TensurfButton>
            <TensurfButton
              onClick={() => changeModeHandler("billing")}
              variant={"text"}
              textColor={"text-white"}
              customClassName={
                mode === "billing"
                  ? "border-b-2 !rounded-none"
                  : "!rounded-none"
              }
            >
              Account and Billing
            </TensurfButton>
          </div>
        </div>

        <div className="px-6 mt-24 w-full lg:w-1/2 max-w-[1200px]">
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