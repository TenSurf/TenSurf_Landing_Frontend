import React, { useState } from 'react';
import type IGetEmailStepProps from './types';
import axios from 'axios';
import { backendUrl } from '@/helpers/http-request';
import { BackendUrls } from '@/helpers/backend-urls';
import TensurfInputText from '../../../general/inputText/tensurfInputText';
import MailIcon from '../../../../icons/MailIcon';
import { Button } from '@/components/ui/button';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';

type FormValues = { email: string };

const SignUpGetEmailCode: React.FC<IGetEmailStepProps> = props => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: ''
    }
  });

  const handleFormSubmit = (values: FormValues) => {
    let url = backendUrl + BackendUrls.send_code;

    if (props.isForgetPassword) {
      url = backendUrl + BackendUrls.send_verification_code;
    }
    setIsLoading(true);
    axios({
      method: 'post',
      url,
      data: values
    })
      .then(response => {
        toast.success(response?.data?.detail as string);
        props.setEmail(values.email);
        props.setActiveStep(1);
      })
      .catch(e => {
        toast.error(e?.response?.data?.detail as string);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className='flex flex-col gap-4'>
      <Controller
        name='email'
        control={control}
        rules={{
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email address',
            },
          }}
        render={({ field }) => (
          <TensurfInputText
            {...field}
            name='email'
            customClassName={{ container: 'w-full' }}
            placeholder='Enter your Email '
            label='Email'
            leftItem={<MailIcon className='w-6 h-6' />}
            hasError={!!errors?.email}
            errorMessage={errors?.email?.message as string}
          />
        )}
      />

      <Button
        type='submit'
        loading={isLoading}
        size='xl'
        className='w-full bg-[#3861fb] hover:bg-[#3861fb]/90 text-white'
      >
        Send Verification Code
      </Button>
    </form>
  );
};

export default SignUpGetEmailCode;
