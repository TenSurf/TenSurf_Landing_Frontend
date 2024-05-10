import React, { type FC } from 'react';

import { type IIconAndIllustration } from '../types/general.types';

const VolumeSurfFlatIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='36'
      height='37'
      viewBox='0 0 36 37'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_1910_1300)'>
        <path
          d='M34.5 36.5H4.5C2.019 36.5 0 34.481 0 32V2C0 1.172 0.672 0.5 1.5 0.5C2.328 0.5 3 1.172 3 2V32C3 32.8265 3.6735 33.5 4.5 33.5H34.5C35.328 33.5 36 34.172 36 35C36 35.828 35.328 36.5 34.5 36.5ZM36.009 26.0135L36.0315 18.545C36.0345 17.354 35.5545 16.1885 34.713 15.35L31.6815 12.3185C29.9805 10.6175 27.0165 10.6175 25.317 12.3185L22.4985 15.1355L16.68 9.3185C14.9805 7.6175 12.0165 7.6175 10.317 9.3185L7.317 12.3185C6.4665 13.1675 5.9985 14.2985 5.9985 15.5V26C5.9985 28.481 8.0175 30.5 10.4985 30.5H31.5075C33.9825 30.5 36.0015 28.487 36.0075 26.0135H36.009ZM14.5605 11.4395L21.4395 18.317C22.026 18.9035 22.974 18.9035 23.5605 18.317L27.4395 14.4395C28.005 13.8725 28.9935 13.8725 29.5605 14.4395L32.592 17.471C32.8755 17.7545 33.0315 18.1325 33.03 18.536L33.0075 26.0045C33.006 26.828 32.3325 27.5 31.5075 27.5H10.5C9.6735 27.5 9 26.8265 9 26V15.5C9 15.1055 9.1605 14.7185 9.4395 14.4395L12.4395 11.4395C12.7215 11.156 13.098 11 13.5 11C13.902 11 14.277 11.156 14.5605 11.4395Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_1910_1300'>
          <rect width='36' height='36' fill='white' transform='translate(0 0.5)' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default VolumeSurfFlatIcon;
