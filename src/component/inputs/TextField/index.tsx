import { type InputBaseProps, InputBase, Typography } from '@mui/material';
import { useField } from 'formik';
import React from 'react';

interface ITextFieldProps extends InputBaseProps {
  name: string;
  placeholder?: string;
  helperText?: string;
  label: string;
  icon?: JSX.Element;
}

export const TextField: React.FC<ITextFieldProps> = props => {
  const [field, meta] = useField(props.name); // Get the field and meta data from the formik hook

  const textFieldProps: ITextFieldProps = {
    ...props,
    ...field,
    fullWidth: true,
    placeholder: props.placeholder,
    className:
      'w-full rounded-lg border border-stroke bg-transparent  outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:text-white'
  };

  if (meta && meta.touched && meta.error) {
    textFieldProps.error = true;
    textFieldProps.helperText = meta.error;
  }

  return (
    <>
      <div className='mb-4'>
        <label className='mb-2.5 block font-medium text-black dark:text-white'>{props.label}</label>
        <div className='relative'>
          <InputBase
            {...textFieldProps}
            sx={{
              '& input': {
                p: '1rem 2.5rem 1rem 1.5rem',
                borderRadius: '0.5rem'
              }
            }}
          />
          {textFieldProps.helperText && (
            <Typography sx={{ mt: '5px', fontSize: '12px' }}>{textFieldProps.helperText}</Typography>
          )}
          <span className='absolute right-4 top-4'>{props.icon}</span>
        </div>
      </div>
    </>
  );
};
