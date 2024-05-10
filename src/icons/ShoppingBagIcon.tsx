import React, { type FC } from 'react';
import { type IIconAndIllustration } from '../types/general.types';

export const ShoppingBagIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
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
        d='M7.16659 6.66659H6.14771C5.06469 6.66659 4.52363 6.66659 4.13843 6.88754C3.8004 7.08143 3.54056 7.38771 3.40488 7.75301C3.25036 8.16903 3.3393 8.70269 3.51712 9.76964L3.5175 9.77165L4.29527 14.4383C4.42721 15.23 4.49362 15.6259 4.69114 15.923C4.86526 16.1848 5.10967 16.3918 5.39657 16.5205C5.72203 16.6665 6.12314 16.6666 6.9257 16.6666H14.0744C14.8769 16.6666 15.2778 16.6665 15.6032 16.5205C15.8901 16.3918 16.1347 16.1848 16.3088 15.923C16.5064 15.6259 16.5724 15.23 16.7043 14.4383L17.4821 9.77165L17.4829 9.7684C17.6606 8.70228 17.7495 8.16887 17.595 7.75301C17.4593 7.38771 17.2001 7.08143 16.8621 6.88754C16.4769 6.66659 15.9349 6.66659 14.8519 6.66659H13.8333M7.16659 6.66659H13.8333M7.16659 6.66659C7.16659 4.82564 8.65897 3.33325 10.4999 3.33325C12.3409 3.33325 13.8333 4.82564 13.8333 6.66659'
        stroke='currentColor'
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ShoppingBagIcon;
