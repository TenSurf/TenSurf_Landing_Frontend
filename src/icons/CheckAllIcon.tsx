import React, { type FC } from 'react';
import { type IIconAndIllustration } from '../types/general.types';

const CheckAllIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='33'
      height='33'
      viewBox='0 0 33 33'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.1554 17.2028L16.8123 22.8597L28.1248 11.5459M4.48877 17.2028L10.1456 22.8597M21.4593 11.5459L17.1554 15.8891'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CheckAllIcon;
