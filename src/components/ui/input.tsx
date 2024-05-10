import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text_error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, text_error, ...props }, ref) => {
  return (
    <div className='flex flex-col gap-1'>
      <input
        type={type}
        className={cn(
          'flex h-11 w-full rounded-md border border-input bg-card px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
      {text_error && <span className='text-[10px] text-destructive'>{text_error}</span>}
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
