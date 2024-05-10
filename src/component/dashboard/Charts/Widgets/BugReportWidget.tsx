import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { HttpMethod, sendRequest } from '@/helpers/http-request';
import { CardContent } from '@mui/material';
import { CheckedState } from '@radix-ui/react-checkbox';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import { ChangeEvent, useRef, useState, type FC } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export const BugReportWidget: FC = () => {
  const [filename, setFilename] = useState<string>('');
  const [isAgree, setIsAgree] = useState<CheckedState>('indeterminate');
  const [loading, setLoading] = useState<boolean>(false);
  const bugFileRef = useRef<HTMLInputElement>(null);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const bugLoadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFilename(e.target.files[0].name);
    }
  };

  const resetForm = () => {
    reset();
    setFilename('');
    setIsAgree('indeterminate');
    toast.success('Bug is saved and experts will review it');
  };

  const onSubmit = (data: any) => {
    if (isAgree === true) {
      setLoading(true);
      if (bugFileRef.current?.files?.length) {
        const formData = new FormData();
        formData.append('file', bugFileRef.current?.files[0]);
        formData.append('description', data.description);
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('device', data.device);
        sendRequest('/bug/new_bug/', HttpMethod.POST, formData, true)
          .then(() => {
            resetForm();
            setLoading(false);
          })
          .catch(() => {
            setLoading(false);
            toast.error('A problem occurred');
          });
      } else {
        sendRequest('/bug/new_bug/', HttpMethod.POST, data)
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
          <h2 className='text-sm font-medium'>Bug report icon can be like this</h2>
          <p className='font-medium'>Report Bugs to Make TenSurf Hub Better!</p>
          <p className='text-slate-500'>
            Encountered a glitch? Noticed something not working as it should? Your feedback is invaluable in helping us
            enhance the TenSurf Hub experience.
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <Textarea
            placeholder='Describe the Issue'
            className={`bg-card placeholder:text-[10px] ${errors.description && 'border-destructive'}`}
            rows={3}
            {...register('description', {
              required: true,
              minLength: 50
            })}
            text_error={errors.description && 'Minimum character count is 50 characters'}
          />
          <p className='text-xs text-slate-500'>
            Give us a detailed description of the problem. Include what you were trying to do when the bug
            occurred.Provide Steps to Replicate: If possible, let us know the steps to reproduce the bug. This
            information is crucial for us to understand and fix the issue.
          </p>
        </div>
        <Card className='border-dashed border-2 rounded-lg'>
          <CardContent className='flex flex-col gap-2 items-center'>
            <Image src='/images/picture.png' width={57} height={45} alt='picture' />
            <span className='text-center text-sm'>Include Screenshots or Screen Recordings</span>
            {!!filename && filename}
            <Button
              variant='outline'
              color='primary'
              className='bg-card text-primary hover:text-primary'
              onClick={() => bugFileRef.current?.click()}
              type='button'
            >
              Upload screen
            </Button>
          </CardContent>
          <Input
            onChange={bugLoadFile}
            ref={bugFileRef}
            type='file'
            className='hidden'
            accept='.jpg, .jpeg, .png, .mp4'
          />
        </Card>
        <p className='text-slate-400'>
          Visuals can be incredibly helpful. If you can, attach screenshots or a short screen recording showing the bug.
        </p>
        <div className='flex flex-col gap-4'>
          <h3 className='text-xs font-bold'>Device and Browser Details</h3>
          <Input
            className={errors.device && 'border-destructive'}
            placeholder='Example : Chrome'
            {...register('device', {
              required: true
            })}
            text_error={errors.device && 'Device is required'}
          ></Input>
        </div>
        <p className='text-slate-400'>
          Let us know which device and browser (including versions) you were using. This helps us identify if the issue
          is platform-specific.
        </p>
        <p className='text-slate-500'>
          Our dedicated support team will review and respond to your report as swiftly as possible.
        </p>
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
        <div className='flex gap-2 w-full'>
          <Button type='submit' color='primary' className='grow' disabled={loading}>
            {loading ? <Loader2 className='h-4 w-4 animate-spin' /> : 'Submit'}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default BugReportWidget;
