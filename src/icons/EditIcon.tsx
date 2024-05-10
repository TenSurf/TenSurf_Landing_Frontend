import React, { type FC } from 'react';
import { type IIconAndIllustration } from '../types/general.types';

const EditIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
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
        d='M10.6828 4H7.88281C6.76271 4 6.20224 4 5.77441 4.21799C5.39809 4.40973 5.09235 4.71547 4.9006 5.0918C4.68262 5.51962 4.68262 6.08009 4.68262 7.2002V16.8002C4.68262 17.9203 4.68262 18.4801 4.9006 18.9079C5.09235 19.2842 5.39809 19.5905 5.77441 19.7822C6.20182 20 6.76161 20 7.87953 20H17.4857C18.6036 20 19.1626 20 19.59 19.7822C19.9663 19.5905 20.2731 19.2839 20.4648 18.9076C20.6826 18.4802 20.6826 17.921 20.6826 16.8031V14M16.6826 5L10.6826 11V14H13.6826L19.6826 8M16.6826 5L19.6826 2L22.6826 5L19.6826 8M16.6826 5L19.6826 8'
        stroke='currentColor'
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default EditIcon;
