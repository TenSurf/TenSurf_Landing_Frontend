import React, { type FC } from 'react';
import { type IIconAndIllustration } from '../types/general.types';

const CalendarIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='17'
      height='17'
      viewBox='0 0 17 17'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.15527 5.88916H13.8219M3.15527 5.88916V11.756C3.15527 12.5027 3.15527 12.8759 3.3006 13.1611C3.42843 13.412 3.63226 13.6161 3.88314 13.744C4.16807 13.8892 4.54127 13.8892 5.28655 13.8892H11.6907C12.4359 13.8892 12.8086 13.8892 13.0935 13.744C13.3444 13.6161 13.5489 13.412 13.6768 13.1611C13.8219 12.8761 13.8219 12.5035 13.8219 11.7582V5.88916M3.15527 5.88916V5.35596C3.15527 4.60922 3.15527 4.23557 3.3006 3.95036C3.42843 3.69948 3.63226 3.49565 3.88314 3.36782C4.16835 3.22249 4.542 3.22249 5.28874 3.22249H5.82194M13.8219 5.88916V5.35377C13.8219 4.60849 13.8219 4.23529 13.6768 3.95036C13.5489 3.69948 13.3444 3.49565 13.0935 3.36782C12.8083 3.22249 12.4355 3.22249 11.6887 3.22249H11.1553M11.1553 1.88916V3.22249M11.1553 3.22249H5.82194M5.82194 1.88916V3.22249'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CalendarIcon;
