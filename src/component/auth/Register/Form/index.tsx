import axios from "axios";
import { getCookie, setCookie } from "@/helpers/auth";
import { BackendUrls } from "@/helpers/backend-urls";
import { backendUrl } from "@/helpers/http-request";
import { TeLock } from "@/icons";
import React, {
  type Dispatch,
  type FC,
  type SetStateAction,
  useState,
} from "react";
import { Controller, useForm } from "react-hook-form";
import TensurfInputText from "../../../general/inputText/tensurfInputText";
import EyeOffIcon from "../../../../icons/EyeOffIcon";
import TensurfButton from "../../../general/TensurfButton";
import UserIcon from "../../../../icons/UserIcon";
import { ROUTE } from "../../../../constatns/general.constants";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AccountState, useAccountStore } from "@/store/account";

interface IProps {
  setActiveStep?: Dispatch<SetStateAction<number>>;
  onModalClose?: () => void;
}

export const RegisterForm: FC<IProps> = ({ setActiveStep, onModalClose }) => {
  const [shouldShowPassword, setShouldShowPassword] = useState(false);
  const [shouldShowConfirmPassword, setShouldShowConfirmPassword] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [terms, setTerms] = useState(false);
  const { update_waitlist }: AccountState = useAccountStore();

  const router = useRouter();

  // RHF ↓•↓•↓
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      full_name: "",
      password: "",
      passwordConfirmation: "",
    },
    mode: "onChange",
  });

  const values = watch();

  const handleFormSubmit = (submittedData: any) => {
    setIsLoading(true);
    const full_name = submittedData?.full_name;
    const password = submittedData?.password;
    axios({
      method: "post",
      url: backendUrl + BackendUrls.register_form,
      data: {
        full_name,
        password,
        token: getCookie(),
      },
    })
      .then((response) => {
        setIsLoading(false);
        if (response.data.token) {
          setCookie(response?.data?.token as string);
          router.replace(ROUTE.home);
        } else {
          toast.info(response.data.detail);
          update_waitlist(true);
          router.replace(ROUTE.waitlist);
        }
        if (onModalClose) {
          onModalClose();
        }
      })
      .catch((e) => {
        toast.error(e?.response?.data?.detail as string);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-5 w-full"
    >
      <Controller
        name="full_name"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TensurfInputText
            {...field}
            name="Full Name"
            customClassName={{ container: "w-full" }}
            placeholder="Enter your Full Name "
            label="Full Name"
            leftItem={<UserIcon className="w-6 h-6" />}
            hasError={errors?.full_name?.type === "required" && true}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: true,
          pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        }}
        render={({ field }) => (
          <TensurfInputText
            {...field}
            label="Password"
            placeholder="Enter your password"
            autoComplete={"new-password"}
            leftItem={<TeLock />}
            rightItem={<EyeOffIcon className="w-6 h-6" />}
            type={shouldShowPassword ? "text" : "password"}
            rightItemOnClick={() => {
              setShouldShowPassword((prev) => !prev);
            }}
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
      <Controller
        name="passwordConfirmation"
        control={control}
        rules={{
          required: true,
          validate: (value) =>
            value === values.password || "Password confirmation does not match",
        }}
        render={({ field }) => (
          <TensurfInputText
            {...field}
            label="Password Confirmation"
            name="passwordConfirmation"
            placeholder="Re-enter your password"
            autoComplete={"new-password"}
            leftItem={<TeLock />}
            rightItem={<EyeOffIcon className="w-6 h-6" />}
            type={shouldShowConfirmPassword ? "text" : "password"}
            rightItemOnClick={() => {
              setShouldShowConfirmPassword((prev) => !prev);
            }}
            hasError={!!errors?.passwordConfirmation}
            hint={
              !!errors?.passwordConfirmation && (
                <div className="text-red-400 mt-2">
                  Password confirmation does not match
                </div>
              )
            }
          />
        )}
      />
      <div className="flex items-start">
        <input
          id="link-checkbox"
          type="checkbox"
          checked={terms}
          onChange={(event) => setTerms(event.target.checked)}
          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
        />
        <label
          htmlFor="link-checkbox"
          className="ms-2 text-sm font-medium text-white dark:text-gray-300"
        >
          I have read and agreed with the
          <a
            href={ROUTE.termsOfUse}
            target={"_blank"}
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Terms Of Use
          </a>{" "}
          ,{" "}
          <a
            href={ROUTE.privacyPolicy}
            target={"_blank"}
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Privacy Policy
          </a>{" "}
          ,{" "}
          <a
            href={ROUTE.refundPolicy}
            target={"_blank"}
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            {" "}
            Refund Policy
          </a>{" "}
          and{" "}
          <a
            href={ROUTE.riskDisclosure}
            target={"_blank"}
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Risk Disclosure
          </a>{" "}
          .
        </label>
      </div>
      <TensurfButton
        isDisabled={!terms}
        type={"submit"}
        isLoading={isLoading}
        customClassName="self-start w-full disabled:bg-gray-700"
        size={"xLarge56"}
      >
        Register
      </TensurfButton>
      <TensurfButton
        onClick={() => {
          if (setActiveStep) {
            setActiveStep(0);
          }
        }}
        variant="text"
        customClassName="m-auto text-[#3861fb]"
        size={"small32"}
      >
        ← Insert email again to resend code
      </TensurfButton>
    </form>
  );
};
