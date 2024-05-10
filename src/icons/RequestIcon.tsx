import React, { type FC } from 'react';

import { type IIconAndIllustration } from '../types/general.types';

const RequestIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='32'
      height='33'
      viewBox='0 0 32 33'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.9998 20.8054C16.3776 20.8054 16.6945 20.6774 16.9505 20.4214C17.2065 20.1654 17.3341 19.8489 17.3332 19.472C17.3332 19.0943 17.2052 18.7778 16.9492 18.5227C16.6932 18.2676 16.3767 18.1396 15.9998 18.1387C15.6221 18.1387 15.3056 18.2667 15.0505 18.5227C14.7954 18.7787 14.6674 19.0952 14.6665 19.472C14.6665 19.8498 14.7945 20.1667 15.0505 20.4227C15.3065 20.6787 15.6229 20.8063 15.9998 20.8054ZM14.6665 15.472H17.3332V7.47205H14.6665V15.472ZM2.6665 30.1387V6.13871C2.6665 5.40538 2.92784 4.77782 3.4505 4.25605C3.97317 3.73427 4.60073 3.47293 5.33317 3.47205H26.6665C27.3998 3.47205 28.0278 3.73338 28.5505 4.25605C29.0732 4.77871 29.3341 5.40627 29.3332 6.13871V22.1387C29.3332 22.872 29.0723 23.5 28.5505 24.0227C28.0287 24.5454 27.4007 24.8063 26.6665 24.8054H7.99984L2.6665 30.1387ZM6.8665 22.1387H26.6665V6.13871H5.33317V23.6387L6.8665 22.1387Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default RequestIcon;
