"use client";

import PageProvider from "@/component/general/PageProvider";
import { ROUTE } from "@/constatns/general.constants";
import { isLoggedIn } from "@/helpers/auth";
// import { msalConfig } from "@/helpers/authConfig";
import DefaultLayout from "@/layout/publicContentLayout/DefaultLayout";
import SignInSignUpComponent from "@/layout/signInSignUp/SignInSignUpComponent";
// import { PublicClientApplication } from "@azure/msal-browser";
// import { MsalProvider } from "@azure/msal-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const LoginPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn()) router.push(ROUTE.home);
  }, []);

  // const msalInstance = new PublicClientApplication(msalConfig);

  return (
    <PageProvider title="Sign In - TenSurf">
      {/* <MsalProvider instance={msalInstance}> */}
      <DefaultLayout>
        <div className="p-8 items-center flex justify-center  text-dark-Neutral-0 pt-16">
          <div className="flex items-center justify-center  bg-dark-Neutral-1 p-8 rounded-lg">
            <SignInSignUpComponent initialMode={"forgetPassword"} />
          </div>
        </div>
      </DefaultLayout>
      {/* </MsalProvider> */}
    </PageProvider>
  );
};

export default LoginPage;
