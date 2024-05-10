import React, { type FC } from 'react';
import { type IIconAndIllustration } from '../types/general.types';

export const UserIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='21'
      height='21'
      viewBox='0 0 21 21'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16.7981 17.6313C16.7981 15.3302 13.8133 13.4647 10.1314 13.4647C6.44949 13.4647 3.46472 15.3302 3.46472 17.6313M10.1314 10.9647C7.8302 10.9647 5.96472 9.0992 5.96472 6.79801C5.96472 4.49683 7.8302 2.63135 10.1314 2.63135C12.4326 2.63135 14.2981 4.49683 14.2981 6.79801C14.2981 9.0992 12.4326 10.9647 10.1314 10.9647Z'
        stroke='currentColor'
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default UserIcon;
