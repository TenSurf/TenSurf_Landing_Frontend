import * as React from 'react';

import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  text_error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <div className='flex flex-col gap-1'>
      <textarea
        className={cn(
          'flex min-h-[36px] w-full rounded-lg border border-input bg-card px-3 py-2 text-xs ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
      {props.text_error && <span className='text-[10px] text-destructive'>{props.text_error}</span>}
    </div>
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };
