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
import { Button } from "@/components/ui/button";
import { Calendar, Clock3 } from "lucide-react";

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
      <div className="flex flex-col gap-16 items-center w-screen justify-center container my-52 relative">
        <div
          style={{
            opacity: "0.5",
            background: "#2561FF",
            filter: "blur(280px)"
          }}
          className="z-0 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[420px] h-[400px] rounded-full"
        ></div>
        {/* <Breadcrumb pageName='Profile Settings' /> */}
        <div className="w-full max-w-[1015px] relative">
          <div className="flex flex-col gap-8">
            <h1
              className={'text-xl font-medium sm:text-3xl sm:font-normal text-[#F8F9FA]'}>ahmad_reza_shah2002@gmail.com</h1>
            <div className="flex gap-5">
              <div className="flex gap-1 items-center">
                <Clock3 size={16} color="#495057" strokeWidth={2} />
                <p className={'text-base font-medium'}>Online</p>
              </div>
              <div className="flex gap-1 items-center">
                <Calendar size={16} color="#495057" strokeWidth={2} />
                <p className={'text-base font-medium'}>Joined a month ago</p>
              </div>
            </div>
            <div
              className="px-4 text-[24px]  border-[1px] border-[#212529] rounded-3xl bg-[#02040E] py-3 font-medium flex gap-2">
              <Button onClick={() => changeModeHandler("profileSetting")}
                      className={`text-2xl bg-transparent hover:bg-transparent ${mode === "profileSetting" ? "text-white" : "text-[#495057]"}`}>
                Profile
              </Button>
              <Button onClick={() => changeModeHandler("billing")}
                      className={`text-2xl bg-transparent hover:bg-transparent ${mode === "billing" ? "text-white" : "text-[#495057]"}`}>
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
