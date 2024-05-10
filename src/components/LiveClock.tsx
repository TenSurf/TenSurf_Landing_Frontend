'use client';

import { useState, useEffect } from 'react';
import moment from 'moment';

export const LiveClock = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const formattedTime = moment().format('MMMM D, YYYY HH:mm:ss');
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p className='text-sm'>{currentTime}</p>
    </div>
  );
};
