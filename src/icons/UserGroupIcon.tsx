import React, { type FC } from 'react';
import { type IIconAndIllustration } from '../types/general.types';

export const UserGroupIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
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
        d='M14.6667 16.6667C14.6667 15.286 12.8012 14.1667 10.5 14.1667C8.19881 14.1667 6.33333 15.286 6.33333 16.6667M18 14.1671C18 13.1419 16.9716 12.2609 15.5 11.8751M3 14.1671C3 13.1419 4.02841 12.2609 5.5 11.8751M15.5 8.53017C16.0115 8.0724 16.3333 7.40716 16.3333 6.66675C16.3333 5.28604 15.214 4.16675 13.8333 4.16675C13.193 4.16675 12.609 4.40746 12.1667 4.80333M5.5 8.53017C4.98854 8.0724 4.66667 7.40716 4.66667 6.66675C4.66667 5.28604 5.78595 4.16675 7.16667 4.16675C7.80696 4.16675 8.39104 4.40746 8.83333 4.80333M10.5 11.6667C9.11929 11.6667 8 10.5475 8 9.16675C8 7.78604 9.11929 6.66675 10.5 6.66675C11.8807 6.66675 13 7.78604 13 9.16675C13 10.5475 11.8807 11.6667 10.5 11.6667Z'
        stroke='currentColor'
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default UserGroupIcon;
