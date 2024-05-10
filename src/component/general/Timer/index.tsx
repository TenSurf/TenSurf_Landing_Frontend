import React, { useEffect } from 'react';
import type ITimerProps from './types';
import TimerButton, { ShowTimerButton } from './styles';

const Timer: React.FC<ITimerProps> = props => {
  useEffect(() => {
    let interval: NodeJS.Timer | null = null;
    if (props.seconds === 0) {
      props.setSeconds(0);
      if (interval) clearInterval(interval);
    } else {
      interval = setInterval(() => {
        props.setSeconds(seconds => seconds - 1);
      }, 1000);
    }
    // return () => {
    //   if (interval) clearInterval(interval);
    // };
  }, [props, props.seconds]);

  const showTimer = () => {
    const min: string = ('0' + Math.floor(props.seconds / 60).toString()).slice(-2);
    const sec: string = ('0' + (props.seconds % 60).toString()).slice(-2);
    return min + ':' + sec;
  };

  return props.seconds === 0 ? (
    <TimerButton variant='contained' type='submit'>
      ارسال مجدد کد
    </TimerButton>
  ) : (
    <ShowTimerButton> {showTimer()}</ShowTimerButton>
  );
};

export default Timer;
