import React, { type FC } from 'react';

import { type IIconAndIllustration } from '../types/general.types';

const InfoFilledIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
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
        d='M15.5901 8C15.5901 12.1421 12.2322 15.5 8.09009 15.5C3.94795 15.5 0.590088 12.1421 0.590088 8C0.590088 3.85786 3.94795 0.5 8.09009 0.5C12.2322 0.5 15.5901 3.85786 15.5901 8ZM7.59009 5.49999V4.48999H8.59009V5.49999H7.59009ZM8.59009 7.49999V10.5H9.59009V11.5H6.59009V10.5H7.59009V8.49999H6.59009V7.49999H8.59009Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default InfoFilledIcon;
