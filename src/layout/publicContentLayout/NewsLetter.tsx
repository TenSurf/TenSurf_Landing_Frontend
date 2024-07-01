"use client"
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { backendUrl } from "@/helpers/http-request";
import { BackendUrls } from "@/helpers/backend-urls";
import { NOTIFICATION } from "@/constatns/general.constants";
import TensurfButton from "@/component/general/TensurfButton";
import TensurfInputText from "@/component/general/inputText/tensurfInputText";
import { MailIcon } from "lucide-react";

export const NewsLetter = () => {

  const [response, setResponse] = useState<any>();
  const [isNewsLetterLoading, setIsNewsLetterLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: ""
    }
  });

  const submitHandler = (values: any) => {
    axios({
      method: "post",
      url: backendUrl + BackendUrls.news_letter,
      data: values
    })
      .then(response => {
        if (response?.data) {
          setResponse({ hasError: false, message: NOTIFICATION.newsLetter.successMessage });
        } else {
          setIsNewsLetterLoading(false);
        }
      })
      .finally(() => setIsNewsLetterLoading(false))
      .catch(e => {
        setResponse({ hasError: true, message: NOTIFICATION.newsLetter.errorMessage });
        setIsNewsLetterLoading(false);
      });
  };

  // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
  return (
    <div className="w-full flex flex-col border-b-[1px] border-b-[#343A40] md:border-b-0 pb-6">
      {response?.message ? (
        <>
          <div className="flex flex-col gap-1">
            <div className="text-base">Email</div>
            <div
              className={`h-[56px] text-sm flex items-center justify-center border-[1px] rounded-lg mb-3 ${
                response?.hasError ? "text-dark-red-400" : "text-green-400"
              }`}
            >
              {response?.message}
            </div>
            <TensurfButton onClick={() => setResponse(undefined)} customClassName=" !self-end mt-1 ">
              <div className="!text-xs !font-normal w-20">Ok</div>
            </TensurfButton>
          </div>
        </>
      ) : (
        <form className="w-full flex flex-col gap-0">
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TensurfInputText
                {...field}
                name="email"
                customClassName={{ container: "w-full" , labelAndInputContainer: "!bg-black"}}
                placeholder="Enter your Email "
                leftItem={<MailIcon className="w-6 h-6" />}
                hasError={!!errors?.email}
                hint={
                  errors?.email?.type === "validate" ? (
                    <div className="text-dark-red-400">Enter a valid email</div>
                  ) : (
                    " "
                  )
                }
              />
            )}
          />
          <TensurfButton
            // isLoading={isNewsLetterLoading}
            type={"submit"}
            customClassName=" !self-end "
          >
            <div className="!text-xs !font-normal w-20">Subscribe</div>
          </TensurfButton>
        </form>
      )}
    </div>
  );
};
