import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { HttpMethod, backendUrl, sendRequest } from "@/helpers/http-request";
import { BackendUrls } from "@/helpers/backend-urls";
import axios from "axios";
import TensurfInputText from "@/component/general/inputText/tensurfInputText";
import MailIcon from "@/icons/MailIcon";
import TensurfButton from "@/component/general/TensurfButton";
import { toast } from "sonner";

const WaitList = (props: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // RHF ↓•↓•↓
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });

  const handleFormSubmit = (values: { email: string }) => {
    setIsLoading(true);
    sendRequest(BackendUrls.waitlist, HttpMethod.POST, {
      email: values.email.toLowerCase(),
    })
      .then((response) => {
        // toast.success(response.data.message as string);
        props.setIsJoin(true);
      })
      .catch((e) => {
        toast.error(e?.response?.data?.detail as string);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="w-full">
      {props.isJoin ? (
        <div className="w-full text-center flex flex-col gap-4">
          <div className="text-start text-xl">{`Thanks for joining the TenSurf Hub waiting list! We're excited to have you on board. Stay tuned for updates! 🌊 🚀`}</div>
          <span className="text-center mx-auto w-full mt-4">
            <a
              className="text-primary"
              href={process.env.NEXT_PUBLIC_TENSURF_URL}
            >
              Go back to the homepage
            </a>
          </span>
        </div>
      ) : (
        <form className="flex flex-col gap-4 w-full">
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
            Join Our Wait list
          </TensurfButton>
        </form>
      )}
    </div>
  );
};

export default WaitList;
