import React, { type FC } from 'react';
import { type IIconAndIllustration } from '../types/general.types';

const SignOutIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.00004 6.55583L6.00004 8.55583M6.00004 8.55583L8.00004 10.5558M6.00004 8.55583H13.3334M13.3334 11.7238V11.7557C13.3334 12.5024 13.3334 12.8761 13.188 13.1613C13.0602 13.4122 12.8564 13.616 12.6055 13.7438C12.3203 13.8892 11.9466 13.8892 11.1999 13.8892L4.79991 13.8892C4.05317 13.8892 3.68033 13.8892 3.39511 13.7438C3.14423 13.616 2.93972 13.4122 2.81189 13.1613C2.66671 12.8764 2.66671 12.5032 2.66671 11.7579L2.66671 5.35344C2.66671 4.60817 2.66671 4.23551 2.81189 3.95057C2.93972 3.69969 3.14423 3.49551 3.39511 3.36768C3.68005 3.22249 4.05271 3.22249 4.79798 3.22249L11.2021 3.22249C11.9474 3.22249 12.3206 3.22249 12.6055 3.36768C12.8564 3.49551 13.0602 3.69989 13.188 3.95077C13.3334 4.23598 13.3334 4.60909 13.3334 5.35583V5.38916'
        stroke='currentColor'
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default SignOutIcon;
