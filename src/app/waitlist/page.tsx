"use client";

import PageProvider from "@/component/general/PageProvider";
import { ROUTE } from "@/constatns/general.constants";
import { isLoggedIn } from "@/helpers/auth";
import DefaultLayout from "@/layout/publicContentLayout/DefaultLayout";
import SignInSignUpComponent from "@/layout/signInSignUp/SignInSignUpComponent";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const WaitlistPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn()) router.push(ROUTE.home);
  }, []);
  return (
    <PageProvider title="Sign In - TenSurf">
      <DefaultLayout>
        <div className="p-8 items-center flex justify-center  text-dark-Neutral-0 mt-16">
          <div className="flex items-center justify-center  bg-dark-Neutral-1 p-8 rounded-lg">
            <SignInSignUpComponent initialMode={"waitlist"} />
          </div>
        </div>
      </DefaultLayout>
    </PageProvider>
  );
};

export default WaitlistPage;
