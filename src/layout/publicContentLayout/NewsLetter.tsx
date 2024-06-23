// import axios from "axios";
// import { backendUrl } from "../../helpers/http-request";
// import { BackendUrls } from "../../helpers/backend-urls";
// import { Controller, useForm } from "react-hook-form";
import React from "react";
// import isEmail from 'validator/lib/isEmail';
// import { NOTIFICATION } from "../../constatns/general.constants";

export const NewsLetter = () => {
  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     email: "",
  //   },
  // });

  // const submitHandler = (values: any) => {
  //   axios({
  //     method: 'post',
  //     url: backendUrl + BackendUrls.news_letter,
  //     data: values
  //   })
  //     .then(response => {
  //       if (response?.data) {
  //         setResponse({ hasError: false, message: NOTIFICATION.newsLetter.successMessage });
  //       } else {
  //         setIsNewsLetterLoading(false);
  //       }
  //     })
  //     .finally(() => setIsNewsLetterLoading(false))
  //     .catch(e => {
  //       setResponse({ hasError: true, message: NOTIFICATION.newsLetter.errorMessage });
  //       setIsNewsLetterLoading(false);
  //     });
  // };

  // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
  return (
    <div className="w-full flex flex-col">
      {/* {response?.message ? (
        <>
          <div className='flex flex-col gap-1'>
            <div className='text-base'>Email</div>
            <div
              className={`h-[56px] text-sm flex items-center justify-center border-[1px] rounded-lg mb-3 ${
                response?.hasError ? 'text-dark-red-400' : 'text-green-400'
              }`}
            >
              {response?.message}
            </div>
            <TensurfButton onClick={() => setResponse(undefined)} customClassName=' !self-end mt-1 '>
              <div className='!text-xs !font-normal w-20'>Ok</div>
            </TensurfButton>
          </div>
        </>
      ) : ( */}
      <form className="w-full flex flex-col gap-0">
        {/* <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TensurfInputText
              {...field}
              name="email"
              customClassName={{ container: "w-full" }}
              placeholder="Enter your Email "
              label="Email"
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
        /> */}
        {/* <TensurfButton
          // isLoading={isNewsLetterLoading}
          type={"submit"}
          customClassName=" !self-end "
        >
          <div className="!text-xs !font-normal w-20">Subscribe</div>
        </TensurfButton> */}
      </form>
      {/* )} */}
    </div>
  );
};
