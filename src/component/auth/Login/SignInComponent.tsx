import axios from "axios";
import { setCookie } from "@/helpers/auth";
import { BackendUrls } from "@/helpers/backend-urls";
import { backendUrl, HttpMethod, sendRequest } from "@/helpers/http-request";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { ROUTE } from "../../../constatns/general.constants";
import TensurfInputText from "../../general/inputText/tensurfInputText";
import MailIcon from "../../../icons/MailIcon";
import EyeOffIcon from "../../../icons/EyeOffIcon";
import TensurfButton from "../../general/TensurfButton";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { EyeIcon } from "lucide-react";
import { toast } from "sonner";
import { useGoogleLogin } from "@react-oauth/google";
import GoogleButton from "../component/GoogleButton";
import FacebookButton from "../component/FacebookButton";
import { useMsal } from "@azure/msal-react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const initialValues = {
  email: "",
  password: ""
};

type FormValues = typeof initialValues;

interface IProps {
  setSignInSignUpComponentMode?: Dispatch<
    SetStateAction<
      "signIn" | "signUp" | "forgetPassword" | "waitlist" | undefined
    >
  >;
  onModalClose?: () => void;
}

const SignInComponent: FC<IProps> = ({
                                       setSignInSignUpComponentMode,
                                       onModalClose
                                     }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [shouldShowPassword, setShouldShowPassword] = useState(false);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const handleFormSubmit = (values: FormValues) => {
    setIsLoading(true);
    axios({
      method: "post",
      url: backendUrl + BackendUrls.login,
      data: values
    })
      .then((response) => {
        if (response?.data?.token) {
          setCookie(response?.data?.token as string);
          router.replace(ROUTE.home);
          if (onModalClose) {
            onModalClose();
          }
        } else {
          setIsLoading(false);
        }
      })
      .catch((axiosError) => {
        if (axiosError.code === "ERR_NETWORK") {
          toast.error(
            "There was a problem connecting to the server. Check your internet connection and try again."
          );
        } else {
          toast.error(axiosError?.response?.data?.detail as string);
        }
        setIsLoading(false);
      });
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        setIsLoading(true);
        sendRequest("/dj-rest-auth/google/", HttpMethod.POST, {
          access_token: tokenResponse.access_token
        })
          .then((res) => {
            setCookie(res.data.key as string);
            router.replace(ROUTE.home);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    },
    onError: (errorResponse) => {
      console.error("Login Failed:", errorResponse);
    }
  });

  const { instance, accounts } = useMsal();

  const msalLogin = async () => {
    const request = { scopes: ["openid", "profile"] };
    await instance.loginPopup();
    await instance.acquireTokenPopup(request);
  };

  const facebookCallback = (response: any) => {
    if (response?.status === "unknown") {
      console.error("Sorry!", "Something went wrong with facebook Login.");
      return;
    }
    try {
      setIsLoading(true);
      sendRequest("/dj-rest-auth/facebook/", HttpMethod.POST, {
        access_token: response.accessToken
      })
        .then((res) => {
          setCookie(res.data.key as string);
          router.replace(ROUTE.home);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="flex flex-col gap-4">
          <Controller
            name="email"
            control={control}
            rules={{ required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }}
            render={({ field }) => (
              <TensurfInputText
                {...field}
                name="email"
                customClassName={{ container: "w-full" }}
                placeholder="Enter your Email"
                label="Email"
                leftItem={<MailIcon className="w-6 h-6" />}
                hasError={!!errors?.email}
                hint={
                  errors?.email?.type === "pattern" ? (
                    <div className="text-red-400 mt-2">Enter a valid email</div>
                  ) : (
                    ""
                  )
                }
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
            }}
            render={({ field }) => (
              <TensurfInputText
                {...field}
                name="Password"
                customClassName={{ container: "w-full" }}
                label="Password"
                type={shouldShowPassword ? "text" : "password"}
                leftItem={
                  shouldShowPassword ? (
                    <EyeIcon className="w-6 h-6" />
                  ) : (
                    <EyeOffIcon className="w-6 h-6" />
                  )
                }
                leftItemOnClick={() => {
                  setShouldShowPassword((prev) => !prev);
                }}
                placeholder="Enter your Password "
                hasError={errors?.password?.type === "pattern" && true}
                hint={
                  errors?.password?.type === "pattern" && (
                    <div className="text-red-400 mt-2">
                      Password must be at least 8 characters long and contain at
                      least one uppercase letter, one lowercase letter, and one
                      number.
                    </div>
                  )
                }
              />
            )}
          />
        </div>
        <TensurfButton
          onClick={() => {
            if (setSignInSignUpComponentMode) {
              setSignInSignUpComponentMode("forgetPassword");
            }
          }}
          variant="text"
          type="button"
          textColor="text-[#d7d7d7]"
          customClassName="self-start !p-0 mt-2"
          size={"small32"}
        >
          Forget Password
        </TensurfButton>

        <TensurfButton
          type={"submit"}
          isLoading={isLoading}
          customClassName="self-start w-full bg-primary rounded-full text-white mt-8"
          size={"xLarge56"}
        >
          Done
        </TensurfButton>
      </form>
      <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="w-full grid grid-cols-1 gap-4 justify-items-center items-center">
        <GoogleButton
          onClick={() => {
            // setGoogleLoginLoading(true);
            googleLogin();
          }}
        />
        {/* <MicrosoftButton onClick={msalLogin} /> */}
        {/* <AppleButton
          onClick={() => {
            console.log("coming soon");
          }}
        /> */}
        <FacebookLogin
          appId="1088597931155576"
          // autoLoad
          callback={facebookCallback}
          render={(renderProps: any) => (
            <FacebookButton onClick={renderProps.onClick} />
          )}
        />
      </div>
    </div>
  );
};

export default SignInComponent;
