import type IGetEmailStepProps from "./Register/GetEmailStep/types";
import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { BrainUrls, brainApiUrl } from "../../helpers/backend-urls";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const GetEmailVerificationCode: FC<IGetEmailStepProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const handleFormSubmit = (values: { email: string }) => {
    setIsLoading(true);
    axios({
      method: "post",
      url: brainApiUrl + BrainUrls.send_code,
      data: {
        email: values.email.toLowerCase(),
      },
    })
      .then((response) => {
        toast.success(response?.data?.message || "Verification code sent!");
        props.setEmail(values.email.toLowerCase());
        props.setActiveStep(1);
      })
      .catch((e) => {
        const detail = e?.response?.data?.detail;
        const message = typeof detail === "string" ? detail : detail?.message || "An error occurred. Please try again.";
        toast.error(message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form className="flex flex-col gap-8">
      <Controller
        name="email"
        control={control}
        rules={{ required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }}
        render={({ field }) => (
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-sm font-medium text-[#E9ECEF]">
              Email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6C757D]" />
              <Input
                {...field}
                id="email"
                type="email"
                placeholder="you@example.com"
                className={`h-11 pl-10 bg-[#0A0F1E] border text-sm text-white placeholder:text-[#6C757D] rounded-lg transition-colors focus-visible:ring-1 focus-visible:ring-[#082FDF] focus-visible:ring-offset-0 ${
                  errors?.email
                    ? "border-red-500 focus-visible:ring-red-500"
                    : "border-[#1E293B] hover:border-[#334155] focus-visible:border-[#082FDF]"
                }`}
              />
            </div>
            {errors?.email?.type === "pattern" && (
              <p className="text-xs text-red-400">Please enter a valid email address</p>
            )}
            {errors?.email?.type === "required" && (
              <p className="text-xs text-red-400">Email is required</p>
            )}
          </div>
        )}
      />
      <Button
        type="button"
        onClick={handleSubmit(handleFormSubmit)}
        loading={isLoading}
        size="xl"
        className="w-full bg-primary rounded-full text-white"
      >
        Send Code
      </Button>
    </form>
  );
};

export default GetEmailVerificationCode;
