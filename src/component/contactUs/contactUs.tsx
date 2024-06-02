import React, { type FC, useState } from 'react';
import TensurfInputText from '../general/inputText/tensurfInputText';
import MailIcon from '../../icons/MailIcon';
import UserIcon from '../../icons/UserIcon';
import TensurfButton from '../general/TensurfButton';
import EditIcon from '../../icons/EditIcon';
import SendIcon from '../../icons/SendIcon';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { backendUrl } from '../../helpers/http-request';
import { BackendUrls } from '../../helpers/backend-urls';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Script from "next/script";
import { useHubspotForm } from "next-hubspot";

export const ContactUs: FC = () => {
  const [isSendLoading, setIsSendLoading] = useState(false);
  // RHF ↓•↓•↓
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      text: ''
    }
  });

  const values = watch();
  const handleFormSubmit = (submittedData: any) => {
    setIsSendLoading(true);
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
        setIsSendLoading(false);
        reset();
      })
      .catch(e => {
        toast.error(e?.response?.data?.detail as string);
        setIsSendLoading(false);
      })
      .finally(() => setIsSendLoading(false));
  };

  useHubspotForm({
    portalId: '46299069',
    formId: 'be87769e-44ef-47c3-904e-171a6a124132',
    target: '#hubspot-form-wrapper'
  })

  // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
  return (
    <div className=' flex flex-col gap-[200px] py-20 w-full max-w-[1300px]'>
      <div className='flex flex-col gap-20 items-center px-1 sm:px-2 md:px-4 xl:px-8'>
        <div className='pageTitle'>
          <h1 className={'text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl'}>Get in Touch with our
            Team</h1>
        </div>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className='flex flex-col gap-8 p-6 md:p-8 xl:p-10 w-full border-[1.5px] rounded-[24px] border-gray-700'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-8 md:gap-8'>
            <Controller
              name='name'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  // customClassName={{ container: 'w-full' }}
                  placeholder='Name'
                  className='bg-[#121212] sm:text-xs md:text-lg xl:text-xl w-full border-none'
                  // label='Your Name'
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
                <Input
                  {...field}
                  // customClassName={{ container: 'w-full' }}
                  placeholder='Example@example.com'
                  className='bg-[#121212] sm:text-xs md:text-lg xl:text-xl w-full border-none'
                  // label='Email'
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
              <Textarea
                rows={5}
                {...field}
                // isMultiLine={true}
                placeholder='Message'
                className='bg-[#121212] sm:text-xs md:text-lg xl:text-xl border-none'
                // label='Message'
                // customClassName={{ input: 'w-full !h-[125px]' }}
                // leftItem={<EditIcon />}
                // hasError={errors?.text?.type === 'required'}
              />
            )}
          />

          <TensurfButton type={'submit'} isLoading={isSendLoading} size={'large48'} customClassName='self-start'>
            <SendIcon />
            <div>Send Message</div>
          </TensurfButton>
        </form>
      </div>
    </div>
    // <div id={"hubspot-form-wrapper"} className={'my-10'}/>
  );
};

export default ContactUs;