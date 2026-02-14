"use client"
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { backendUrl } from "@/helpers/http-request";
import { BackendUrls } from "@/helpers/backend-urls";
import { Button } from "@/components/ui/button";
import TensurfInputText from "@/component/general/inputText/tensurfInputText";
import { MailIcon, CheckCircle, AlertCircle } from "lucide-react";

export const NewsLetter = () => {
  const [response, setResponse] = useState<{
    hasError: boolean;
    message: string;
    alreadySubscribed?: boolean;
  } | null>(null);
  const [isNewsLetterLoading, setIsNewsLetterLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: ""
    }
  });

  const submitHandler = async (values: any) => {
    setIsNewsLetterLoading(true);
    try {
      const res = await axios({
        method: "post",
        url: backendUrl + BackendUrls.news_letter,
        data: values
      });
      
      if (res?.data) {
        setResponse({ 
          hasError: false, 
          message: res.data.detail || "Verification email sent! Check your inbox.",
          alreadySubscribed: res.data.already_subscribed
        });
        reset();
      }
    } catch (e: any) {
      const errorMessage = e?.response?.data?.detail || "Something went wrong. Please try again.";
      setResponse({ 
        hasError: true, 
        message: typeof errorMessage === "string" ? errorMessage : "Something went wrong. Please try again."
      });
    } finally {
      setIsNewsLetterLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col border-b-[1px] border-b-[#343A40] md:border-b-0 pb-6">
      {response?.message ? (
        <div className="flex flex-col gap-3">
          <div className="text-base font-medium">Email</div>
          <div
            className={`min-h-[56px] text-sm flex items-center justify-center gap-2 border-[1px] rounded-lg p-4 ${
              response?.hasError 
                ? "text-red-400 border-red-400/30 bg-red-400/10" 
                : response?.alreadySubscribed 
                  ? "text-blue-400 border-blue-400/30 bg-blue-400/10"
                  : "text-green-400 border-green-400/30 bg-green-400/10"
            }`}
          >
            {response?.hasError ? (
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
            ) : (
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
            )}
            <span className="text-center">{response?.message}</span>
          </div>
          <Button 
            onClick={() => setResponse(null)} 
            size="sm"
            className="self-end mt-1"
          >
            <span className="text-xs font-normal w-20">
              {response?.alreadySubscribed ? "Got it" : "Ok"}
            </span>
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(submitHandler)} className="w-full flex flex-col gap-0">
          <Controller
            name="email"
            control={control}
            rules={{ 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email"
              }
            }}
            render={({ field }) => (
              <TensurfInputText
                {...field}
                name="email"
                customClassName={{ 
                  container: "w-full", 
                  labelAndInputContainer: "!bg-black", 
                  input: "!bg-black"
                }}
                placeholder="Enter your Email"
                leftItem={<MailIcon className="w-6 h-6" />}
                hasError={!!errors?.email}
                hint={
                  errors?.email?.message ? (
                    <div className="text-red-400 text-sm">{errors.email.message}</div>
                  ) : (
                    " "
                  )
                }
              />
            )}
          />
          <Button
            loading={isNewsLetterLoading}
            type="submit"
            size="sm"
            className="self-end"
          >
            <span className="text-xs font-normal w-20">
              {isNewsLetterLoading ? "Sending..." : "Subscribe"}
            </span>
          </Button>
        </form>
      )}
    </div>
  );
};
