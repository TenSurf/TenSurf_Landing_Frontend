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
      // password: "",
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
    // setValue("password", "");
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
            // password: "",
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
    <div className="p-8 border rounded-lg w-full">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="flex gap-2 w-full">
          <TensurfButton
            type={"button"}
            onClick={() => setMode("editProfile")}
            variant={"text"}
            textColor={"text-dark-Neutral-0"}
            customClassName={
              mode === "editProfile"
                ? "border-b-2 border-dark-primary-400  !rounded-none"
                : "!rounded-none"
            }
            size={"medium40"}
          >
            Edit Profile
          </TensurfButton>
          <TensurfButton
            type={"button"}
            onClick={() => setMode("changePassword")}
            variant={"text"}
            textColor={"text-dark-Neutral-0"}
            customClassName={
              mode === "changePassword"
                ? "border-b-2 border-dark-primary-400  !rounded-none"
                : "!rounded-none"
            }
            size={"medium40"}
          >
            Change Password
          </TensurfButton>
        </div>
        {mode === "editProfile" ? (
          <>
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
                  isLoading={isGetDataLoading}
                  leftItem={<MailIcon />}
                  isDisabled={true}
                  hint={
                    <div className="text-slate-500">
                      Note: Email cannot be changed
                    </div>
                  }
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
                  leftItem={<UserIcon className="w-6 h-6" />}
                  hasError={errors?.full_name?.type === "required" && true}
                />
              )}
            />
          </>
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
              name="newPassword"
              control={control}
              rules={{
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              }}
              render={({ field }) => (
                <TensurfInputText
                  {...field}
                  label="New Password"
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
                  label="New Password Confirmation"
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
          customClassName="self-end"
          size={"xLarge56"}
        >
          Save change
        </TensurfButton>
      </form>
    </div>
  );
};
