import type IGetEmailStepProps from "./Register/GetEmailStep/types";
import { FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { backendUrl } from "../../helpers/http-request";
import { BackendUrls } from "../../helpers/backend-urls";
import axios from "axios";
import TensurfInputText from "../general/inputText/tensurfInputText";
import MailIcon from "../../icons/MailIcon";
import TensurfButton from "../general/TensurfButton";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { ROUTE } from "@/constatns/general.constants";

const GetEmailVerificationCode: FC<IGetEmailStepProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const search_params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const token = search_params.get("token");
    if (!token) router.replace(ROUTE.waitlist);
  }, []);

  // RHF ↓•↓•↓
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
    let url = backendUrl + BackendUrls.send_code;

    if (props.isForgetPassword) {
      url = backendUrl + BackendUrls.send_forgot_pass_code;
    }
    setIsLoading(true);
    axios({
      method: "post",
      url,
      data: {
        email: values.email.toLowerCase(),
        token: search_params.get("token"),
      },
    })
      .then((response) => {
        toast.success(response?.data?.detail as string);
        props.setEmail(values.email);
        props.setActiveStep(1);
      })
      .catch((e) => {
        toast.error(e?.response?.data?.detail as string);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form className="flex flex-col gap-4">
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
                <div className="text-red-400">Enter a valid email</div>
              ) : (
                ""
              )
            }
          />
        )}
      />
      <TensurfButton
        onClick={handleSubmit(handleFormSubmit)}
        isLoading={isLoading}
        textColor="text-white"
        customClassName="self-start w-full m-auto bg-[#3861fb]"
        size={"xLarge56"}
      >
        Send verification code
      </TensurfButton>
    </form>
  );
};

export default GetEmailVerificationCode;
