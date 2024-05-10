import React, { type FC } from 'react';
import { type IIconAndIllustration } from '../types/general.types';

const EyeOffIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.25038 4L20.2504 20M16.7504 16.7559C15.3978 17.4845 13.869 17.9999 12.2504 17.9999C8.71973 17.9999 5.61673 15.5478 3.83729 13.7788C3.36759 13.3119 3.13278 13.0784 2.98329 12.6201C2.87668 12.2933 2.87665 11.7066 2.98329 11.3797C3.13282 10.9215 3.36812 10.6875 3.83876 10.2197C4.73564 9.32821 5.9685 8.26359 7.42268 7.42676M19.7504 14.6335C20.0834 14.3405 20.3884 14.0523 20.6622 13.7803L20.6651 13.7772C21.1337 13.3114 21.3687 13.0779 21.5179 12.6206C21.6245 12.2938 21.6243 11.7068 21.5177 11.38C21.3683 10.9219 21.1331 10.6877 20.6638 10.2211C18.8843 8.45208 15.781 6 12.2504 6C11.9129 6 11.5793 6.02241 11.2504 6.06448M13.5733 13.5C13.2207 13.8112 12.7576 14 12.2504 14C11.1458 14 10.2504 13.1046 10.2504 12C10.2504 11.4605 10.464 10.9711 10.8113 10.6113'
        stroke='currentColor'
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default EyeOffIcon;
