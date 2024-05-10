import React, { type FC } from 'react';
import { type IIconAndIllustration } from '../types/general.types';

const FacebookFillIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='26'
      height='27'
      viewBox='0 0 26 27'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.3755 23.1417C6.77132 22.3292 3.25049 18.3208 3.25049 13.5C3.25049 8.1375 7.63799 3.75 13.0005 3.75C18.363 3.75 22.7505 8.1375 22.7505 13.5C22.7505 18.3208 19.2297 22.3292 14.6255 23.1417L14.0838 22.7083H11.9172L11.3755 23.1417Z'
        fill='url(#paint0_linear_2294_453)'
      />
      <path
        d='M16.7922 16.2077L17.2255 13.4993H14.6255V11.6035C14.6255 10.8452 14.8963 10.2493 16.088 10.2493H17.3338V7.75768C16.6297 7.64935 15.8713 7.54102 15.1672 7.54102C12.9463 7.54102 11.3755 8.89518 11.3755 11.3327V13.4993H8.93799V16.2077H11.3755V23.0868C11.9172 23.1952 12.4588 23.2493 13.0005 23.2493C13.5422 23.2493 14.0838 23.1952 14.6255 23.0868V16.2077H16.7922Z'
        fill='white'
      />
      <defs>
        <linearGradient
          id='paint0_linear_2294_453'
          x1='13.0005'
          y1='22.5751'
          x2='13.0005'
          y2='3.75'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#0062E0' />
          <stop offset='1' stopColor='#19AFFF' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FacebookFillIcon;
