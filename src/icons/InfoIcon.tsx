import React, { type FC } from 'react';

import { type IIconAndIllustration } from '../types/general.types';

const InfoIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='11'
      height='11'
      viewBox='0 0 11 11'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.10001 3.38554V3.78554H5.90001V3.38554H5.10001ZM5.90001 3.37887V2.97887H5.10001V3.37887H5.90001ZM5.90001 7.71887V5.05221H5.10001V7.71887H5.90001ZM5.90001 3.38554V3.37887H5.10001V3.38554H5.90001ZM4.50001 5.78554H5.50001V4.98554H4.50001V5.78554ZM4.50001 7.78554H6.50001V6.98554H4.50001V7.78554ZM5.50001 1.11887C7.85642 1.11887 9.76668 3.02912 9.76667 5.38554L10.5667 5.38554C10.5667 2.5873 8.29825 0.318872 5.50001 0.318872L5.50001 1.11887ZM1.23334 5.38554C1.23334 3.02912 3.1436 1.11887 5.50001 1.11887L5.50001 0.318872C2.70177 0.318872 0.433344 2.5873 0.433343 5.38554H1.23334ZM5.50001 9.6522C3.14359 9.6522 1.23334 7.74195 1.23334 5.38554H0.433343C0.433343 8.18378 2.70177 10.4522 5.50001 10.4522V9.6522ZM5.50001 10.4522C8.29825 10.4522 10.5667 8.18378 10.5667 5.38554L9.76667 5.38554C9.76667 7.74195 7.85642 9.6522 5.50001 9.6522V10.4522Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default InfoIcon;
