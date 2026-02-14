import React, { type FC } from 'react';
import { type IIconAndIllustration } from '../types/general.types';

const CloseIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.0005 18.5L12.0005 12.5M12.0005 12.5L6.00049 6.5M12.0005 12.5L18.0005 6.5M12.0005 12.5L6.00049 18.5'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CloseIcon;
