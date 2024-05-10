import React, { type FC } from 'react';
import { type IIconAndIllustration } from '../types/general.types';

const FacebookIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
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
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 12C3 16.45 6.25 20.15 10.5 20.9L10.5502 20.8599C10.5334 20.8566 10.5167 20.8533 10.5 20.85V14.5H8.25V12H10.5V10C10.5 7.75 11.95 6.5 14 6.5C14.65 6.5 15.35 6.6 16 6.7V9H14.85C13.75 9 13.5 9.55 13.5 10.25V12H15.9L15.5 14.5H13.5V20.85C13.4833 20.8533 13.4666 20.8566 13.4498 20.8599L13.5 20.9C17.75 20.15 21 16.45 21 12C21 7.05 16.95 3 12 3C7.05 3 3 7.05 3 12Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default FacebookIcon;
