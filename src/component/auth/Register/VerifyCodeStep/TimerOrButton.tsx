import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export interface ITimerProps {
  seconds: number;
  resendCode: () => any;
}

export const TimerOrButton = (props: ITimerProps): JSX.Element => {
  const max = props.seconds != null ? props.seconds : 120;
  const [seconds, setSeconds] = useState<number>(max);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
    if (seconds === 0) {
      setSeconds(0);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  const showTimer = () => {
    const min: string = ('0' + Math.floor(seconds / 60).toString()).slice(-2);
    const sec: string = ('0' + (seconds % 60).toString()).slice(-2);
    return min + ':' + sec;
  };

  const resend = () => {
    props.resendCode();
    setSeconds(max);
  };

  return seconds === 0 ? (
    <div>
      <Button
        type='button'
        variant='text'
        size='sm'
        className='text-[#3861fb] animate-scale'
        onClick={resend}
      >
        Resend Code
      </Button>
    </div>
  ) : (
    <div className='text-center h-8 flex items-center justify-center text-white'> {showTimer()}</div>
  );
};
