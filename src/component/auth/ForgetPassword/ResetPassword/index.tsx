import { backendUrl } from "@/helpers/http-request";
import { BackendUrls } from "@/helpers/backend-urls";
import axios from "axios";
import { TeLock } from "@/icons";
import { type Dispatch, type FC, type SetStateAction, useState } from "react";
import TensurfInputText from "../../../general/inputText/tensurfInputText";
import EyeOffIcon from "@/icons/EyeOffIcon";
import TensurfButton from "../../../general/TensurfButton";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

const initialValues = {
  code: "",
  password: "",
};

type FormValues = typeof initialValues;

export interface IResetPasswordProps {
  email: string;
  setSignInSignUpComponentMode?: Dispatch<
    SetStateAction<
      "signIn" | "signUp" | "forgetPassword" | "waitlist" | undefined
    >
  >;
  setActiveStep: Dispatch<SetStateAction<number>>;
}
const ResetPassword: FC<IResetPasswordProps> = ({
  email,
  setSignInSignUpComponentMode,
  setActiveStep,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [shouldShowPassword, setShouldShowPassword] = useState(false);
  const [shouldShowConfirmPassword, setShouldShowConfirmPassword] =
    useState(false);

  // RHF ↓•↓•↓
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      code: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const values = watch();

  const handleFormSubmit = (values: FormValues) => {
    setIsLoading(true);
    axios({
      method: "post",
      url: backendUrl + BackendUrls.verify_forgot_pass_code,
      data: {
        ...values,
        email,
      },
    })
      .then((response) => {
        toast.success(response?.data?.detail as string);
        if (setSignInSignUpComponentMode) {
          setSignInSignUpComponentMode("signIn");
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
      className="flex flex-col gap-6"
    >
      <Controller
        name="code"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TensurfInputText
            {...field}
            label="Confirmation Code"
            placeholder="Enter your verification code"
            hasError={errors?.code?.type === "required" && true}
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
            label="New password"
            placeholder="Enter your new password"
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
            label="Re-type new password"
            name="passwordConfirmation"
            placeholder="Re-enter your need password"
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

      <div className="flex flex-col gap-2">
        <TensurfButton
          isLoading={isLoading}
          type="submit"
          customClassName={"w-full"}
          size={"xLarge56"}
        >
          Reset Password
        </TensurfButton>

        <TensurfButton
          onClick={() => setActiveStep(0)}
          variant="text"
          customClassName="m-auto text-[#3861fb]"
          size={"small32"}
        >
          ← Insert email again to resend code
        </TensurfButton>
      </div>
    </form>
  );
};
export default ResetPassword;
