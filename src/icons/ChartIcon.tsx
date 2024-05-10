import React, { type FC } from 'react';
import { type IIconAndIllustration } from '../types/general.types';

export const ChartIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
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
        d='M3 12.5003V14.0001C3 14.9335 3 15.3999 3.18166 15.7564C3.34144 16.07 3.59623 16.3255 3.90983 16.4853C4.266 16.6667 4.73249 16.6667 5.66409 16.6667H18.0002M3 12.5003V4.16675M3 12.5003L6.21116 9.8243L6.21382 9.82217C6.79472 9.33809 7.08573 9.09557 7.40129 8.99707C7.77406 8.88071 8.17559 8.89911 8.5363 9.04875C8.84208 9.1756 9.11021 9.44373 9.64647 9.97999L9.65185 9.98536C10.1964 10.5299 10.4694 10.803 10.7801 10.9295C11.1478 11.0793 11.5571 11.0922 11.9339 10.9672C12.2534 10.8613 12.5452 10.6064 13.1286 10.0959L18 5.83341'
        stroke='currentColor'
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ChartIcon;
