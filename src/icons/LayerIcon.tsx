import React, { type FC } from 'react';
import { type IIconAndIllustration } from '../types/general.types';

export const LayerIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='21'
      height='20'
      viewBox='0 0 21 20'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18 11.6666L10.5 16.6666L3 11.6666M18 8.33325L10.5 13.3333L3 8.33325L10.5 3.33325L18 8.33325Z'
        stroke='currentColor'
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default LayerIcon;
