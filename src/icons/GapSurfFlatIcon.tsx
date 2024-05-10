import React, { type FC } from 'react';

import { type IIconAndIllustration } from '../types/general.types';

const GapSurfFlatIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_1291_13244)'>
        <path
          d='M22.4993 5.20508H1.49927V3.45508H22.4993V5.20508ZM22.4993 19.2051H1.49927V20.9551H22.4993V19.2051ZM18.9993 7.83008H4.99927V16.5801H18.9993V7.83008ZM6.74927 9.58008H17.2493V14.8301H6.74927V9.58008Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_1291_13244'>
          <rect width='21' height='21' fill='white' transform='translate(1.49927 1.70532)' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GapSurfFlatIcon;
