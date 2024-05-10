import React, { type FC } from 'react';
import { type IIconAndIllustration } from '../types/general.types';

const NoEntryIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.23828 6.30566L18.7383 18.8057M12.4883 21.5557C7.51772 21.5557 3.48828 17.5262 3.48828 12.5557C3.48828 7.5851 7.51772 3.55566 12.4883 3.55566C17.4588 3.55566 21.4883 7.5851 21.4883 12.5557C21.4883 17.5262 17.4588 21.5557 12.4883 21.5557Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default NoEntryIcon;
