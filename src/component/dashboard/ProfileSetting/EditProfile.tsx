import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { HttpMethod, sendRequest } from "../../../helpers/http-request";
import { BackendUrls } from "../../../helpers/backend-urls";
import TensurfInputText from "../../general/inputText/tensurfInputText";
import MailIcon from "../../../icons/MailIcon";
import UserIcon from "../../../icons/UserIcon";
import { TeLock } from "../../../icons";
import EyeOffIcon from "../../../icons/EyeOffIcon";
import TensurfButton from "../../general/TensurfButton";
import PasswordValidation from "../../../utils/PasswordValidation";
import InputPasswordHint from "../../../utils/InputPasswordHint";
import { toast } from "sonner";
import { useAccountStore } from "@/store/account";
import { Button } from "@/components/ui/button";

export const EditProfile = ({
  isGetDataLoading,
}: {
  isGetDataLoading: boolean;
}) => {
  // const [shouldShowPassword, setShouldShowPassword] = useState(false);
  const [shouldShowNewPassword, setShouldShowNewPassword] = useState(false);
  const [shouldShowConfirmPassword, setShouldShowConfirmPassword] =
    useState(false);
  const [isEditProfileLoading, setIsEditProfileLoading] = useState(false);
  const [mode, setMode] = useState<"editProfile" | "changePassword">(
    "editProfile"
  );

  const { user_data, update_user_data }: any = useAccountStore();

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user_data.email || "",
      full_name: user_data.full_name || "",
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    mode: "onChange",
  });
  const values = watch();
  useEffect(() => {
    setValue("email", user_data.email || "");
    setValue("full_name", user_data.full_name || "");
  }, [user_data.email, user_data.full_name]);

  useEffect(() => {
    setValue("password", "");
    setValue("newPassword", "");
    setValue("confirmNewPassword", "");
    setValue("email", user_data.email || "");
    setValue("full_name", user_data.full_name || "");
  }, [mode]);

  const handleFormSubmit = (values: Record<string, string>) => {
    setIsEditProfileLoading(true);
    if (mode === "editProfile") {
      sendRequest(BackendUrls.edit_profile, HttpMethod.PATCH, {
        full_name: values.full_name,
      })
        .then((res) => {
          toast.success("Your profile has been updated");
          update_user_data(res.data);
          setValue("full_name", values.full_name || "");
        })
        .finally(() => {
          setIsEditProfileLoading(false);
        })
        .catch(() => {});
    } else {
      sendRequest(BackendUrls.change_password, HttpMethod.POST, {
        new_password: values.newPassword,
        confirm_new_password: values.confirmNewPassword,
      })
        .then((res) => {
          toast.success("Your password has been updated");
          reset({
            password: "",
            newPassword: "",
            confirmNewPassword: "",
            email: user_data.email || "",
            full_name: user_data.full_name || "",
          });
          clearErrors("newPassword");
          setMode("editProfile");
        })
        .finally(() => {
          setIsEditProfileLoading(false);
        })
        .catch(() => {});
    }
  };

  const passwordValidation = PasswordValidation({
    inputPassword: values.newPassword,
  });

  return (
    <div className="p-8 border-[1px] border-[#212529] bg-[#02040E] rounded-3xl w-full max-w-[540px] mx-auto">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-10"
      >
        <div className="flex gap-2 w-full">
          <Button type={"button"} onClick={() => setMode("editProfile")}
                  className={`text-xl font-bold bg-transparent hover:bg-transparent rounded-none ${mode === "editProfile" ? "text-white border-b-2 border-[#082FDF]" : "text-[#495057]"}`}>
            Edit Profile
          </Button>
          <Button type={'button'} onClick={() => setMode("changePassword")}
                  className={`text-xl font-bold bg-transparent hover:bg-transparent rounded-none ${mode === "changePassword" ? "text-white border-b-2 border-[#082FDF]" : "text-[#495057]"}`}>
            change Password
          </Button>
        </div>
        {mode === "editProfile" ? (
          <div className={'flex flex-col gap-6'}>
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TensurfInputText
                  {...field}
                  label="Email"
                  value={values.email}
                  autoComplete={"new-password"}
                  placeholder="Enter email"
                  isLoading={isGetDataLoading}
                  // leftItem={<MailIcon />}
                  isDisabled={true}
                />
              )}
            />

            <Controller
              name="full_name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TensurfInputText
                  {...field}
                  name="Full Name"
                  isLoading={isGetDataLoading}
                  customClassName={{ container: "w-full" }}
                  value={values.full_name}
                  placeholder="Enter your Full Name "
                  label="Full Name"
                  // leftItem={<UserIcon className="w-6 h-6" />}
                  hasError={errors?.full_name?.type === "required" && true}
                />
              )}
            />
          </div>
        ) : (
          <>
            {/* <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TensurfInputText
                  {...field}
                  label="Current Password"
                  placeholder="Enter your current password"
                  autoComplete={"new-password"}
                  leftItem={<TeLock />}
                  rightItem={<EyeOffIcon className="w-6 h-6" />}
                  type={shouldShowPassword ? "text" : "password"}
                  rightItemOnClick={() => {
                    setShouldShowPassword((prev) => !prev);
                  }}
                  hasError={errors?.password?.type === "required" && true}
                />
              )}
            /> */}

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
                  label="Current Password"
                  placeholder="Enter your current password"
                  autoComplete={"current-password"}
                  leftItem={<TeLock />}
                  rightItem={<EyeOffIcon className="w-6 h-6" />}
                  type={shouldShowNewPassword ? "text" : "password"}
                  rightItemOnClick={() => {
                    setShouldShowNewPassword((prev) => !prev);
                  }}
                  hasError={errors.newPassword?.type === "pattern" && true}
                  hint={
                    errors?.newPassword?.type === "pattern" && (
                      <InputPasswordHint validation={passwordValidation} />
                    )
                  }
                />
              )}
            />
            <Controller
              name="newPassword"
              control={control}
              rules={{
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              }}
              render={({ field }) => (
                <TensurfInputText
                  {...field}
                  label="Password"
                  placeholder="Enter your new password"
                  autoComplete={"new-password"}
                  leftItem={<TeLock />}
                  rightItem={<EyeOffIcon className="w-6 h-6" />}
                  type={shouldShowNewPassword ? "text" : "password"}
                  rightItemOnClick={() => {
                    setShouldShowNewPassword((prev) => !prev);
                  }}
                  hasError={errors.newPassword?.type === "pattern" && true}
                  hint={
                    errors?.newPassword?.type === "pattern" && (
                      <InputPasswordHint validation={passwordValidation} />
                    )
                  }
                />
              )}
            />

            <Controller
              name="confirmNewPassword"
              control={control}
              rules={{
                required: true,
                validate: (value) => value === values.newPassword,
              }}
              render={({ field }) => (
                <TensurfInputText
                  {...field}
                  label="Password Confirmation"
                  name="passwordConfirmation"
                  placeholder="Re-enter new password"
                  autoComplete={"new-password"}
                  leftItem={<TeLock />}
                  rightItem={<EyeOffIcon className="w-6 h-6" />}
                  type={shouldShowConfirmPassword ? "text" : "password"}
                  rightItemOnClick={() => {
                    setShouldShowConfirmPassword((prev) => !prev);
                  }}
                  hasError={errors?.confirmNewPassword && true}
                />
              )}
            />
          </>
        )}

        <TensurfButton
          type={"submit"}
          isDisabled={isGetDataLoading}
          isLoading={isEditProfileLoading}
          customClassName="self-start w-fit bg-primary rounded-full text-white"
          size={"xLarge56"}
        >
          Save change
        </TensurfButton>
      </form>
    </div>
  );
};
