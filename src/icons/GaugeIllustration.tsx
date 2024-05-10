import React, { type FC } from 'react';

import { type IIconAndIllustration } from '../types/general.types';

interface IProps extends IIconAndIllustration {
  colors?: {
    veryLow?: string;
    low?: string;
    medium?: string;
    good?: string;
    veryGood?: string;
  };
}

const GaugeIllustration: FC<IProps> = ({
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  colors = {
    veryLow: '#D83D32',
    low: '#F57C74',
    medium: '#A8ADB8',
    good: '#5FD16F',
    veryGood: '#138423'
  }
}) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 594.08 292.39' width={120}>
      <path
        fill='#1d4922'
        d='M597.59,460.79H726.93a295.69,295.69,0,0,0-31.2-128L581.39,387.82a171.42,171.42,0,0,1,16.2,73'
        transform='translate(-132.84 -168.4)'
      />
      <path
        fill='#127d3e'
        d='M581.39,387.82l114.34-55.06a298.31,298.31,0,0,0-82.92-101.37l-77.36,97a172.72,172.72,0,0,1,45.94,59.42'
        transform='translate(-132.84 -168.4)'
      />
      <path
        fill='#5f0b0d'
        d='M271.24,384.4,164,332.77a295.69,295.69,0,0,0-31.19,128H253.39a171.37,171.37,0,0,1,17.85-76.39'
        transform='translate(-132.84 -168.4)'
      />
      <path
        fill='#cd4c4c'
        d='M391.36,292.08l-26.59-116.5A295.88,295.88,0,0,0,246.94,231.4l73.95,92.73a171.32,171.32,0,0,1,70.48-32.05'
        transform='translate(-132.84 -168.4)'
      />
      <path
        fill='#c12526'
        d='M320.88,324.13,246.94,231.4A298.32,298.32,0,0,0,164,332.77L271.24,384.4a172.8,172.8,0,0,1,49.64-60.27'
        transform='translate(-132.84 -168.4)'
      />
      <path
        fill='#29b34b'
        d='M535.44,328.39l77.36-97A295.91,295.91,0,0,0,495,175.57l-27,118.4a171.57,171.57,0,0,1,67.5,34.43'
        transform='translate(-132.84 -168.4)'
      />
      <path
        fill='#7a7e7f'
        d='M425.49,288.69A172.44,172.44,0,0,1,467.94,294l27-118.4a299,299,0,0,0-130.2,0l26.59,116.5a172.93,172.93,0,0,1,34.13-3.39'
        transform='translate(-132.84 -168.4)'
      />
    </svg>
  );
};

export default GaugeIllustration;
