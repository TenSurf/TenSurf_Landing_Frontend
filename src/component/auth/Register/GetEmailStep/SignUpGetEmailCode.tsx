import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import type IGetEmailStepProps from './types';
import axios from 'axios';
import { backendUrl } from '@/helpers/http-request';
import { BackendUrls } from '@/helpers/backend-urls';
import TensurfInputText from '../../../general/inputText/tensurfInputText';
import MailIcon from '../../../../icons/MailIcon';
import TensurfButton from '../../../general/TensurfButton';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const initialValues = {
  email: ''
};

const formValidation = Yup.object().shape({
  email: Yup.string().email().required('This field is required')
});

type FormValues = typeof initialValues;

const SignUpGetEmailCode: React.FC<IGetEmailStepProps> = props => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // RHF ↓•↓•↓
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
    <Formik initialValues={initialValues} validationSchema={formValidation} onSubmit={handleFormSubmit}>
      <Form className='flex flex-col gap-4'>
        <Controller
          name='email'
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TensurfInputText
              {...field}
              name='email'
              customClassName={{ container: 'w-full' }}
              placeholder='Enter your Email '
              label='Emal'
              leftItem={<MailIcon className='w-6 h-6' />}
              hasError={errors?.email?.type === 'required' && true}
            />
          )}
        />

        <TensurfButton
          onClick={handleSubmit(handleFormSubmit)}
          isLoading={isLoading}
          textColor='text-dark-Neutral-0'
          customClassName='self-start w-full m-auto'
          size={'xLarge56'}
        >
          Send Verification Code
        </TensurfButton>
      </Form>
    </Formik>
  );
};

export default SignUpGetEmailCode;
