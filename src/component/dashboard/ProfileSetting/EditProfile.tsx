import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { HttpMethod, sendRequest } from '../../../helpers/http-request';
import { BackendUrls } from '../../../helpers/backend-urls';
import { catchRequestError } from '../../../utils/functions';
import TensurfInputText from '../../general/inputText/tensurfInputText';
import MailIcon from '../../../icons/MailIcon';
import UserIcon from '../../../icons/UserIcon';
import { TeLock } from '../../../icons';
import EyeOffIcon from '../../../icons/EyeOffIcon';
import TensurfButton from '../../general/TensurfButton';
import PasswordValidation from '../../../utils/PasswordValidation';
import InputPasswordHint from '../../../utils/InputPasswordHint';
import { toast } from 'sonner';

export const EditProfile = ({
  isGetDataLoading,
  emailData,
  fullNameData
}: {
  isGetDataLoading: boolean;
  emailData?: string;
  fullNameData?: string;
}) => {
  const [shouldShowPassword, setShouldShowPassword] = useState(false);
  const [shouldShowNewPassword, setShouldShowNewPassword] = useState(false);
  const [shouldShowConfirmPassword, setShouldShowConfirmPassword] = useState(false);
  const [isEditProfileLoading, setIsEditProfileLoading] = useState(false);
  const [mode, setMode] = useState<'editProfile' | 'changePassword'>('editProfile');

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    clearErrors,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: emailData || '',
      full_name: fullNameData || '',
      password: '',
      newPassword: '',
      confirmNewPassword: ''
    }
  });
  const values = watch();
  useEffect(() => {
    setValue('email', emailData || '');
    setValue('full_name', fullNameData || '');
  }, [emailData, fullNameData]);

  useEffect(() => {
    setValue('password', '');
    setValue('newPassword', '');
    setValue('confirmNewPassword', '');
    setValue('email', emailData || '');
    setValue('full_name', fullNameData || '');
  }, [mode]);

  const handleFormSubmit = (values: Record<string, string>) => {
    setIsEditProfileLoading(true);
    if (mode === 'editProfile') {
      sendRequest(BackendUrls.edit_profile, HttpMethod.PATCH, { full_name: values.full_name })
        .then(res => {
          toast.success('Your profile has been updated');
        })
        .finally(() => {
          setIsEditProfileLoading(false);
        })
        .catch(catchRequestError);
    } else {
      sendRequest(BackendUrls.change_password, HttpMethod.POST, {
        password: values.password,
        new_password: values.newPassword,
        confirm_new_password: values.confirmNewPassword
      })
        .then(res => {
          toast.success('Your password has been updated');
          reset({
            password: '',
            newPassword: '',
            confirmNewPassword: '',
            email: emailData || '',
            full_name: fullNameData || ''
          });
          clearErrors('newPassword');
          setMode('editProfile');
        })
        .finally(() => {
          setIsEditProfileLoading(false);
        })
        .catch(catchRequestError);
    }
  };

  const passwordValidation = PasswordValidation({ inputPassword: values.newPassword });

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className='p-10  border-[1px] rounded-[24px] border-dark-Neutral-4 flex flex-col gap-5 w-[600px] mt-24'
    >
      <div className='flex gap-2'>
        <TensurfButton
          type={'button'}
          onClick={() => setMode('editProfile')}
          variant={'text'}
          textColor={'text-dark-Neutral-0'}
          customClassName={
            mode === 'editProfile' ? 'border-b-2 border-dark-primary-400  !rounded-none' : '!rounded-none'
          }
          isDisabled={isGetDataLoading || isEditProfileLoading}
          size={'medium40'}
        >
          Edit Profile
        </TensurfButton>
        <TensurfButton
          type={'button'}
          onClick={() => setMode('changePassword')}
          variant={'text'}
          textColor={'text-dark-Neutral-0'}
          customClassName={
            mode === 'changePassword' ? 'border-b-2 border-dark-primary-400  !rounded-none' : '!rounded-none'
          }
          isDisabled={isGetDataLoading || isEditProfileLoading}
          size={'medium40'}
        >
          Change Password
        </TensurfButton>
      </div>
      {mode === 'editProfile' ? (
        <>
          <Controller
            name='email'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TensurfInputText
                {...field}
                label='Email'
                value={values.email}
                autoComplete={'new-password'}
                isLoading={isGetDataLoading}
                leftItem={<MailIcon />}
                isDisabled={true}
                hint={<div className='text-slate-500'>Note: Email cannot be changed</div>}
              />
            )}
          />

          <Controller
            name='full_name'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TensurfInputText
                {...field}
                name='Full Name'
                isLoading={isGetDataLoading}
                customClassName={{ container: 'w-full' }}
                value={values.full_name}
                placeholder='Enter your Full Name '
                label='Full Name'
                leftItem={<UserIcon className='w-6 h-6' />}
                hasError={errors?.full_name?.type === 'required' && true}
              />
            )}
          />
        </>
      ) : (
        <>
          <Controller
            name='password'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TensurfInputText
                {...field}
                label='Current Password'
                placeholder='Enter your current password'
                autoComplete={'new-password'}
                leftItem={<TeLock />}
                rightItem={<EyeOffIcon className='w-6 h-6' />}
                type={shouldShowPassword ? 'text' : 'password'}
                rightItemOnClick={() => {
                  setShouldShowPassword(prev => !prev);
                }}
                hasError={errors?.password?.type === 'required' && true}
              />
            )}
          />

          <Controller
            name='newPassword'
            control={control}
            rules={{ required: true, validate: value => passwordValidation.isValidate }}
            render={({ field }) => (
              <TensurfInputText
                {...field}
                label='New Password'
                placeholder='Enter your new password'
                autoComplete={'new-password'}
                leftItem={<TeLock />}
                rightItem={<EyeOffIcon className='w-6 h-6' />}
                type={shouldShowNewPassword ? 'text' : 'password'}
                rightItemOnClick={() => {
                  setShouldShowNewPassword(prev => !prev);
                }}
                hasError={
                  errors.newPassword?.type === 'required' || !!(values.newPassword && !passwordValidation.isValidate)
                }
                hint={<InputPasswordHint validation={passwordValidation} />}
              />
            )}
          />

          <Controller
            name='confirmNewPassword'
            control={control}
            rules={{ required: true, validate: value => value === values.newPassword }}
            render={({ field }) => (
              <TensurfInputText
                {...field}
                label='New Password Confirmation'
                name='passwordConfirmation'
                placeholder='Re-enter new password'
                autoComplete={'new-password'}
                leftItem={<TeLock />}
                rightItem={<EyeOffIcon className='w-6 h-6' />}
                type={shouldShowConfirmPassword ? 'text' : 'password'}
                rightItemOnClick={() => {
                  setShouldShowConfirmPassword(prev => !prev);
                }}
                hasError={errors?.confirmNewPassword && true}
              />
            )}
          />
        </>
      )}

      <TensurfButton
        type={'submit'}
        isDisabled={isGetDataLoading}
        isLoading={isEditProfileLoading}
        customClassName='self-end'
        size={'xLarge56'}
      >
        Save change
      </TensurfButton>
    </form>
  );
};
