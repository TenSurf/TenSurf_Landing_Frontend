"use client"
import React, { type FC, useState } from "react";
import axios from "axios";
import { backendUrl } from "@/helpers/http-request";
import { BackendUrls } from "@/helpers/backend-urls";
import { toast } from "sonner";
import { Controller, useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, SendIcon } from "lucide-react";
import TensurfButton from "@/component/general/TensurfButton";
import { Button } from "@/components/ui/button";
import { CircularProgress } from "@mui/material";
import TensurfInputText from "@/component/general/inputText/tensurfInputText";

export const ContactUs: FC = () => {
  const [loading, setLoading] = useState(false);
  // RHF ↓•↓•↓
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      text: "",
    },
  });

  // const values = watch();
  const handleFormSubmit = (submittedData: any) => {
    setLoading(true);
    const email = submittedData?.email;
    const name = submittedData?.name;
    const text = submittedData?.text;
    axios({
      method: 'post',
      url: backendUrl + BackendUrls.contact_us,
      data: {
        email,
        name,
        text
      }
    })
      .then(response => {
        toast.success('Your message has been received. We will contact you soon.');
        setLoading(false);
        reset();
      })
      .catch(e => {
        toast.error(e?.response?.data?.detail as string);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  };

  // useHubspotForm({
  //   portalId: "46299069",
  //   formId: "be87769e-44ef-47c3-904e-171a6a124132",
  //   target: "#hubspot-form-wrapper",
  // });

  return (
    <div className='py-20 w-full container my-12 lg:my-36'>
      <div className='flex flex-col lg:flex-row gap-16 md:gap-28 lg:gap-20 items-center px-2 lg:px-4'>
        <div className="relative">
          <div
            style={{
              opacity: "0.5",
              background: "#2561FF",
              filter: "blur(100px)"
            }}
            className="hidden lg:block z-0 absolute inset-0 w-[160px] h-[160px] rounded-full"
          ></div>
          <h1 className={"text-center lg:text-left text-5xl lg:text-6xl 2xl:text-7xl font-normal"}>Get in Touch
            with our Team</h1>
        </div>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex flex-col gap-8 p-6 md:p-8 xl:p-10 w-full border-[1.5px] rounded-[24px] border-gray-700 overflow-hidden"
        >
          <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-8 md:gap-8'>
            <Controller
              name='name'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TensurfInputText
                  {...field}
                  // customClassName={{ container: 'w-full' }}
                  placeholder='Name'
                  customClassName={{input: "bg-[#121212] sm:text-xs md:text-lg xl:text-xl w-full border-none"}}
                  label='Your Name'
                  // leftItem={<UserIcon className='w-6 h-6' />}
                  // hasError={errors?.name?.type === 'required'}
                />
              )}
            />

            <Controller
              name='email'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TensurfInputText
                  {...field}
                  // customClassName={{ container: 'w-full' }}
                  placeholder='Example@example.com'
                  customClassName={{input: "bg-[#121212] sm:text-xs md:text-lg xl:text-xl w-full border-none"}}
                  label='Email'
                  // leftItem={<MailIcon className='w-6 h-6' />}
                  // hasError={errors?.email?.type === 'required' || !!values.email}
                  // hint={values.email ? <div className='text-dark-red-400'>Enter a valid email</div> : ' '}
                />
              )}
            />
          </div>
          <Controller
            name='text'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TensurfInputText
                isMultiLine
                rows={9}
                {...field}
                // isMultiLine={true}
                placeholder='Message'
                customClassName={{input: "bg-[#121212] sm:text-xs md:text-lg xl:text-xl border-none"}}
                label='Message'
                // customClassName={{ input: 'w-full !h-[125px]' }}
                // leftItem={<EditIcon />}
                // hasError={errors?.text?.type === 'required'}
              />
            )}
          />

          <Button type={'submit'} className="flex gap-2 rounded-3xl drop-shadow-[3px_5px_24px_#082FDF] py-6 self-end">
            {loading ? (
              <CircularProgress size={16} className='!text-dark-Neutral-0 '/>
            ) : (
              <>
                <p>Send Message</p>
                <ArrowRight size={20} strokeWidth={2} />
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
