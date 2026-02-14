import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { HttpMethod, sendRequest } from "../../../helpers/http-request";
import { BackendUrls } from "../../../helpers/backend-urls";
import TensurfInputText from "../../general/inputText/tensurfInputText";
import { toast } from "sonner";
import { useAccountStore } from "@/store/account";
import { Button } from "@/components/ui/button";

export const EditProfile = ({
  isGetDataLoading,
}: {
  isGetDataLoading: boolean;
}) => {
  const [isEditProfileLoading, setIsEditProfileLoading] = useState(false);

  const { user_data, update_user_data }: any = useAccountStore();

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user_data.email || "",
      full_name: user_data.full_name || "",
    },
    mode: "onChange",
  });
  const values = watch();
  useEffect(() => {
    setValue("email", user_data.email || "");
    setValue("full_name", user_data.full_name || "");
  }, [user_data.email, user_data.full_name]);

  const handleFormSubmit = (values: Record<string, string>) => {
    setIsEditProfileLoading(true);
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
  };

  return (
    <div className="p-3 sm:p-8 border-[1px] border-[rgba(255,255,255,0.08)] bg-[#00041A] rounded-3xl w-full max-w-[540px] mx-auto">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-10"
      >
        <div className="flex gap-2 w-full">
          <Button type="button"
                  className="p-1 text-lg sm:text-xl font-bold bg-transparent hover:bg-transparent rounded-none text-white border-b-2 border-[#082FDF]">
            Edit Profile
          </Button>
        </div>
        <div className="flex flex-col gap-6">
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TensurfInputText
                {...field}
                label="Email"
                value={values.email}
                autoComplete="new-password"
                placeholder="Enter email"
                isLoading={isGetDataLoading}
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
                hasError={errors?.full_name?.type === "required" && true}
              />
            )}
          />
        </div>

        <Button
          type="submit"
          disabled={isGetDataLoading}
          loading={isEditProfileLoading}
          className="self-start w-fit bg-primary rounded-full text-white text-lg sm:text-xl"
        >
          Save change
        </Button>
      </form>
    </div>
  );
};
