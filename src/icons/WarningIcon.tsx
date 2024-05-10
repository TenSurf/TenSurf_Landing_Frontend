import React, { type FC } from 'react';

import { type IIconAndIllustration } from '../types/general.types';

const WarningIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='17'
      height='16'
      viewBox='0 0 17 16'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.5 6.00006V8.66673M3.41927 10.1333C2.81298 11.1834 2.50992 11.7086 2.55521 12.1395C2.59471 12.5153 2.79195 12.8567 3.09766 13.0788C3.44802 13.3334 4.05394 13.3334 5.26569 13.3334H11.7343C12.9461 13.3334 13.5519 13.3334 13.9023 13.0788C14.208 12.8567 14.4053 12.5153 14.4448 12.1395C14.4901 11.7086 14.1871 11.1834 13.5808 10.1333L10.3477 4.53326C9.74137 3.48314 9.43809 2.95817 9.04232 2.78196C8.69711 2.62826 8.30267 2.62826 7.95746 2.78196C7.56185 2.9581 7.25876 3.48307 6.65298 4.53232L3.41927 10.1333ZM8.53385 10.6667V10.7334L8.4668 10.7335V10.6667H8.53385Z'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default WarningIcon;
