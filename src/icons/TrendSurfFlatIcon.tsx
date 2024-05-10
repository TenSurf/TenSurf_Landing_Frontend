import React, { type FC } from 'react';

import { type IIconAndIllustration } from '../types/general.types';

const TrendSurfFlatIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_1325_428)'>
        <path
          d='M22 21.1667C22 21.6267 21.6267 22 21.1667 22H4.5C3.12167 22 2 20.8783 2 19.5V2.83333C2 2.37333 2.37333 2 2.83333 2C3.29333 2 3.66667 2.37333 3.66667 2.83333V19.5C3.66667 19.9592 4.04083 20.3333 4.5 20.3333H21.1667C21.6267 20.3333 22 20.7067 22 21.1667ZM19.5 6.16667H16.1667C15.7067 6.16667 15.3333 6.54 15.3333 7C15.3333 7.46 15.7067 7.83333 16.1667 7.83333H19.1358L15.0883 11.7558C14.7742 12.0708 14.225 12.0708 13.9108 11.7558C13.8767 11.7225 12.8783 11.0117 12.8783 11.0117C11.93 10.1175 10.3142 10.1508 9.41 11.0542L5.58833 14.7325C5.25667 15.0517 5.24667 15.5792 5.56583 15.9108C5.73 16.0808 5.9475 16.1667 6.16667 16.1667C6.375 16.1667 6.58333 16.0892 6.74417 15.9342L10.5775 12.2442C10.8917 11.9292 11.4408 11.9292 11.755 12.2442C11.7892 12.2775 12.7875 12.9883 12.7875 12.9883C13.7367 13.8833 15.3508 13.8517 16.2575 12.9433L20.3325 8.99333V11.9992C20.3325 12.4592 20.7058 12.8325 21.1658 12.8325C21.6258 12.8325 21.9992 12.4592 21.9992 11.9992V8.66583C21.9992 7.2875 20.8775 6.16583 19.4992 6.16583L19.5 6.16667Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_1325_428'>
          <rect width='20' height='20' fill='white' transform='translate(2 2)' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TrendSurfFlatIcon;
