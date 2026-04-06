import { TimerOrButton } from "./TimerOrButton";
import type IVerificationProps from "./types";
import { BrainUrls, brainApiUrl } from "@/helpers/backend-urls";

import axios from "axios";
import { setCookie } from "@/helpers/auth";
import { type FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TensurfInputText from "../../../general/inputText/tensurfInputText";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { ROUTE } from "@/constatns/general.constants";

const Verification: FC<IVerificationProps> = (props) => {
  const [inputFocus, setInputFocus] = useState(1);
  const [isVerificationLoading, setIsVerificationLoading] =
    useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    control,
    handleSubmit,
    setFocus,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      digit1: "",
      digit2: "",
      digit3: "",
      digit4: "",
      digit5: "",
    },
  });
  const watchAllFields = watch();
  useEffect(() => {
    setFocus("digit1");
    setInputFocus(1);
  }, [isVerificationLoading]);

  const shouldAutoConfirm =
    (Number(watchAllFields.digit1) || watchAllFields.digit1 === "0") &&
    (Number(watchAllFields.digit2) || watchAllFields.digit2 === "0") &&
    (Number(watchAllFields.digit3) || watchAllFields.digit3 === "0") &&
    (Number(watchAllFields.digit4) || watchAllFields.digit4 === "0") &&
    (Number(watchAllFields.digit5) || watchAllFields.digit5 === "0") &&
    inputFocus === 5;

  const keyUpHandler = (
    event: any,
    digit: "digit1" | "digit2" | "digit3" | "digit4" | "digit5"
  ) => {
    let value = event.target.value;
    value = value.replace(/[۰-۹]/g, (d: string) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
    setValue(`${digit}`, value as string);

    if (event.keyCode === 37) {
      if (inputFocus === 2) { setInputFocus(1); setFocus("digit1"); }
      else if (inputFocus === 3) { setInputFocus(2); setFocus("digit2"); }
      else if (inputFocus === 4) { setInputFocus(3); setFocus("digit3"); }
      else if (inputFocus === 5) { setInputFocus(4); setFocus("digit4"); }
    } else if (value !== "") {
      setInputFocus((prev) => {
        if (prev === 1) { setFocus("digit2"); return 2; }
        else if (prev === 2) { setFocus("digit3"); return 3; }
        else if (prev === 3) { setFocus("digit4"); return 4; }
        else { setFocus("digit5"); return 5; }
      });
    }

    if (shouldAutoConfirm) {
      handleSubmit(onSubmit)();
    }
  };

  const pasteHandler = (event: any) => {
    const clipBoard = event.clipboardData.getData("text");
    setValue("digit1", clipBoard[0] as string);
    setValue("digit2", clipBoard[1] as string);
    setValue("digit3", clipBoard[2] as string);
    setValue("digit4", clipBoard[3] as string);
    setValue("digit5", clipBoard[4] as string);

    if (!watchAllFields.digit1) { setInputFocus(1); setFocus("digit1"); }
    else if (!watchAllFields.digit2) { setInputFocus(2); setFocus("digit2"); }
    else if (!watchAllFields.digit3) { setInputFocus(3); setFocus("digit3"); }
    else if (!watchAllFields.digit4) { setInputFocus(4); setFocus("digit4"); }
    else if (!watchAllFields.digit5) { setInputFocus(5); setFocus("digit5"); }

    if (shouldAutoConfirm) {
      handleSubmit(onSubmit)();
    }
  };

  const onSubmit = (submittedData: any) => {
    setIsVerificationLoading(true);
    let code =
      submittedData.digit1.toString() +
      submittedData.digit2.toString() +
      submittedData.digit3.toString() +
      submittedData.digit4.toString() +
      submittedData.digit5.toString();
    code = Number(code);
    const isNumber = Number.isInteger(code);
    if (isNumber && !isVerificationLoading) {
      axios({
        method: "post",
        url: brainApiUrl + BrainUrls.verify_code,
        data: { code, email: props.email },
      })
        .then((response) => {
          setCookie(response.data.token as string);
          toast.success("Welcome to TenSurf!");
          if (props.onModalClose) props.onModalClose();
          router.replace(searchParams.get("redirect") || ROUTE.home);
          setIsVerificationLoading(false);
        })
        .catch((e) => {
          toast.error(e?.response?.data?.detail as string);
          setIsVerificationLoading(false);
          reset();
          setFocus("digit1");
          setInputFocus(1);
        })
        .finally(() => {
          setIsVerificationLoading(false);
        });
    } else {
      toast.error("Please enter a valid 5-digit verification code");
      setIsVerificationLoading(false);
      setInputFocus(1);
      setFocus("digit1");
    }
  };

  const resend = () => {
    axios({
      method: "post",
      url: brainApiUrl + BrainUrls.send_code,
      data: { email: props.email },
    })
      .then((response) => {
        toast.success(response?.data?.detail as string);
      })
      .catch((e) => {
        toast.error(e?.response?.data?.detail as string);
      });
  };

  return (
    <div className="flex flex-col h-full justify-between gap-6 items-center">
      <div className="text-sm !text-white">
        Enter the code sent to: <span className="font-bold">{props.email}</span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {(errors?.digit1?.type === "required" && watchAllFields.digit1 === "") ||
        (errors?.digit2?.type === "required" && watchAllFields.digit2 === "") ||
        (errors?.digit3?.type === "required" && watchAllFields.digit3 === "") ||
        (errors?.digit4?.type === "required" && watchAllFields.digit4 === "") ||
        (errors?.digit5?.type === "required" && watchAllFields.digit5 === "") ? (
          <div className="text-center text-sm text-white">{"Fill all fields"}</div>
        ) : (
          <div className="h-5"></div>
        )}
        <div className="flex gap-2 w-full justify-center">
          {(["digit1", "digit2", "digit3", "digit4", "digit5"] as const).map((digit, i) => (
            <Controller
              key={digit}
              name={digit}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TensurfInputText
                  shouldAutoFocus={i === 0}
                  autoComplete="off"
                  isDisabled={isVerificationLoading || undefined}
                  onFocus={() => setInputFocus(i + 1)}
                  onPaste={i === 0 ? pasteHandler : undefined}
                  onKeyUp={(e) => keyUpHandler(e, digit)}
                  customClassName={{
                    container: "w-11",
                    input: "p-2 text-center",
                  }}
                  hasNoPadding={true}
                  maxChar={1}
                  hasError={
                    errors?.[digit]?.type === "required" &&
                    watchAllFields[digit] === "" &&
                    true
                  }
                  {...field}
                />
              )}
            />
          ))}
        </div>
        <Button
          loading={isVerificationLoading}
          type="submit"
          size="lg"
          className="animate-scale w-full bg-[#3861fb] hover:bg-[#3861fb]/90 text-white"
        >
          confirm
        </Button>
        <TimerOrButton seconds={300} resendCode={resend} />
      </form>
    </div>
  );
};
export default Verification;
