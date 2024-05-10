import React, { type FC } from 'react';

import { type IIconAndIllustration } from '../types/general.types';

const LevelSurfFlatIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
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
      <g clipPath='url(#clip0_1323_1357)'>
        <path
          d='M21.1667 20.3333H6.16667C5.50363 20.3333 4.86774 20.0699 4.3989 19.6011C3.93006 19.1323 3.66667 18.4964 3.66667 17.8333V2.83333C3.66667 2.61232 3.57887 2.40036 3.42259 2.24408C3.26631 2.0878 3.05435 2 2.83333 2C2.61232 2 2.40036 2.0878 2.24408 2.24408C2.0878 2.40036 2 2.61232 2 2.83333V17.8333C2.00132 18.938 2.44073 19.997 3.22185 20.7782C4.00296 21.5593 5.062 21.9987 6.16667 22H21.1667C21.3877 22 21.5996 21.9122 21.7559 21.7559C21.9122 21.5996 22 21.3877 22 21.1667C22 20.9457 21.9122 20.7337 21.7559 20.5774C21.5996 20.4211 21.3877 20.3333 21.1667 20.3333Z'
          fill='currentColor'
        />
        <path
          d='M7.00008 18.6667C7.2211 18.6667 7.43306 18.579 7.58934 18.4227C7.74562 18.2664 7.83341 18.0544 7.83341 17.8334V12.0001C7.83341 11.7791 7.74562 11.5671 7.58934 11.4108C7.43306 11.2545 7.2211 11.1667 7.00008 11.1667C6.77907 11.1667 6.56711 11.2545 6.41083 11.4108C6.25455 11.5671 6.16675 11.7791 6.16675 12.0001V17.8334C6.16675 18.0544 6.25455 18.2664 6.41083 18.4227C6.56711 18.579 6.77907 18.6667 7.00008 18.6667Z'
          fill='currentColor'
        />
        <path
          d='M10.3333 10.3333V17.8333C10.3333 18.0543 10.421 18.2663 10.5773 18.4226C10.7336 18.5789 10.9456 18.6667 11.1666 18.6667C11.3876 18.6667 11.5996 18.5789 11.7558 18.4226C11.9121 18.2663 11.9999 18.0543 11.9999 17.8333V10.3333C11.9999 10.1123 11.9121 9.90036 11.7558 9.74408C11.5996 9.5878 11.3876 9.5 11.1666 9.5C10.9456 9.5 10.7336 9.5878 10.5773 9.74408C10.421 9.90036 10.3333 10.1123 10.3333 10.3333Z'
          fill='currentColor'
        />
        <path
          d='M14.5 12.8333V17.8333C14.5 18.0543 14.5878 18.2663 14.7441 18.4226C14.9004 18.5789 15.1123 18.6667 15.3333 18.6667C15.5543 18.6667 15.7663 18.5789 15.9226 18.4226C16.0789 18.2663 16.1667 18.0543 16.1667 17.8333V12.8333C16.1667 12.6123 16.0789 12.4004 15.9226 12.2441C15.7663 12.0878 15.5543 12 15.3333 12C15.1123 12 14.9004 12.0878 14.7441 12.2441C14.5878 12.4004 14.5 12.6123 14.5 12.8333Z'
          fill='currentColor'
        />
        <path
          d='M18.6667 9.50008V17.8334C18.6667 18.0544 18.7545 18.2664 18.9108 18.4227C19.0671 18.579 19.2791 18.6667 19.5001 18.6667C19.7211 18.6667 19.9331 18.579 20.0893 18.4227C20.2456 18.2664 20.3334 18.0544 20.3334 17.8334V9.50008C20.3334 9.27907 20.2456 9.06711 20.0893 8.91083C19.9331 8.75455 19.7211 8.66675 19.5001 8.66675C19.2791 8.66675 19.0671 8.75455 18.9108 8.91083C18.7545 9.06711 18.6667 9.27907 18.6667 9.50008Z'
          fill='currentColor'
        />
        <path
          d='M6.9999 9.50001C7.2209 9.49997 7.43283 9.41214 7.58907 9.25585L10.5774 6.26751C10.7362 6.1162 10.9472 6.0318 11.1666 6.0318C11.3859 6.0318 11.5969 6.1162 11.7557 6.26751L13.5657 8.07751C14.0346 8.54619 14.6703 8.80948 15.3332 8.80948C15.9961 8.80948 16.6319 8.54619 17.1007 8.07751L21.7557 3.42251C21.9075 3.26535 21.9915 3.05484 21.9896 2.83635C21.9877 2.61785 21.9001 2.40884 21.7456 2.25433C21.5911 2.09982 21.3821 2.01218 21.1636 2.01029C20.9451 2.00839 20.7346 2.09238 20.5774 2.24418L15.9224 6.89835C15.7661 7.05457 15.5542 7.14234 15.3332 7.14234C15.1123 7.14234 14.9003 7.05457 14.7441 6.89835L12.9341 5.08918C12.4653 4.6205 11.8295 4.35721 11.1666 4.35721C10.5037 4.35721 9.86789 4.6205 9.39907 5.08918L6.41074 8.07751C6.29423 8.19406 6.21489 8.34253 6.18275 8.50415C6.15061 8.66578 6.16711 8.83331 6.23017 8.98556C6.29323 9.13781 6.40001 9.26795 6.53702 9.35952C6.67403 9.45109 6.83511 9.49998 6.9999 9.50001Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_1323_1357'>
          <rect width='20' height='20' fill='white' transform='translate(2 2)' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LevelSurfFlatIcon;
