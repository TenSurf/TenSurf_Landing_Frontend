import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { HttpMethod, sendRequest } from '@/helpers/http-request';
import { CheckedState } from '@radix-ui/react-checkbox';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import { ChangeEvent, useRef, useState, type FC } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export const FeatureRequestWidget: FC = () => {
  const [filename, setFilename] = useState<string>('');
  const [isAgree, setIsAgree] = useState<CheckedState>('indeterminate');
  const [loading, setLoading] = useState<boolean>(false);
  const featureFileRef = useRef<HTMLInputElement>(null);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const featureLoadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFilename(e.target.files[0].name);
    }
  };

  const resetForm = () => {
    reset();
    setFilename('');
    setIsAgree('indeterminate');
    toast.success('Your feature request is saved and experts will review it');
  };

  const onSubmit = (data: any) => {
    if (isAgree === true) {
      setLoading(true);
      if (featureFileRef.current?.files?.length) {
        const formData = new FormData();
        formData.append('file', featureFileRef.current?.files[0]);
        formData.append('description', data.description);
        formData.append('name', data.name);
        formData.append('email', data.email);
        sendRequest('/feature/new_feature/', HttpMethod.POST, formData, true)
          .then(() => {
            resetForm();
            setLoading(false);
          })
          .catch(() => {
            setLoading(false);
            toast.error('A problem occurred');
          });
      } else {
        sendRequest('/feature/new_feature/', HttpMethod.POST, data)
          .then(() => {
            resetForm();
            setLoading(false);
          })
          .catch(() => {
            setLoading(false);
            toast.error('A problem occurred');
          });
      }
    } else {
      setIsAgree(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-6 text-xs text-card-foreground'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-sm font-medium'>Feature Request</h2>
          <p className='text-slate-500'>
            Got an idea to enhance TenSurf? We’re all ears! TenSurf experts can analyze any rule-based idea with
            historical market data and visualize the results so that you don’t trade blindly with no statistical basis.{' '}
          </p>
          <p className='text-slate-500'>
            Share your thoughts on new features you’d like to see on our platform. Your insights help us grow and
            improve.
          </p>
        </div>
        <Textarea
          placeholder='Describe the feature you envision'
          className={`bg-card placeholder:text-[10px] ${errors.description && 'border-destructive'}`}
          rows={3}
          {...register('description', {
            required: true,
            minLength: 150
          })}
          text_error={errors.description && 'Minimum character count is 150 characters'}
        />
        <div className='flex flex-col gap-4'>
          <h3>Your Contact Information</h3>
          <div className='relative'>
            <Input
              placeholder='Name'
              className={`ps-10  ${errors.name && 'border-destructive'}`}
              {...register('name', {
                required: true,
                minLength: 3
              })}
              text_error={
                errors.name &&
                (errors.name.type === 'required' ? 'Name is required' : 'Minimum character count is 3 characters')
              }
            ></Input>
            <Image
              src='/images/user.svg'
              width={24}
              height={24}
              alt='user'
              className='absolute top-[10px] left-[10px]'
            />
          </div>
          <div className='relative'>
            <Input
              placeholder='Email Address'
              className={`ps-10  ${errors.email && 'border-destructive'}`}
              {...register('email', {
                required: true,
                validate: value => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
              })}
              text_error={
                errors.email &&
                (errors.email.type === 'required' ? 'Email address is required' : 'Enter a valid email address')
              }
            ></Input>
            <Image
              src='/images/mail.svg'
              width={24}
              height={24}
              alt='mail'
              className='absolute top-[10px] left-[10px]'
            />
          </div>

          <div className='flex items-center gap-2'>
            <Checkbox
              id='agree'
              className={isAgree === false ? 'border-destructive' : 'border-primary'}
              onCheckedChange={(e: CheckedState) => setIsAgree(e)}
            />
            <Label htmlFor='agree' className='text-xs font-normal cursor-pointer'>
              I agree to TenSurf’s <span className='text-primary'>Privacy Policy</span>
            </Label>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-2 w-full'>
            <Button
              variant='outline'
              color='primary'
              className='bg-card grow text-primary hover:text-primary w-2/3'
              onClick={() => featureFileRef.current?.click()}
            >
              Upload Attachment
            </Button>
            <Input
              onChange={featureLoadFile}
              ref={featureFileRef}
              type='file'
              className='hidden'
              accept='.jpg, .jpeg, .png'
            />
            <Button color='primary' className='grow w-1/3' disabled={loading}>
              {loading ? <Loader2 className='h-4 w-4 animate-spin' /> : 'Submit'}
            </Button>
          </div>
          <span className='text-xs text-muted-foreground'>{filename}</span>
        </div>
        <p className='text-slate-500'>Thank you for helping us innovate!</p>
      </div>
    </form>
  );
};

export default FeatureRequestWidget;
