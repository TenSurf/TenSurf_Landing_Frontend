import React, { type FC } from 'react';
import { type IIconAndIllustration } from '../types/general.types';

const SendIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.9904 13.6923L15.8365 8.84619M20.7939 5.88867L16.7033 19.1833C16.3367 20.3747 16.1532 20.9707 15.8371 21.1683C15.5628 21.3396 15.2233 21.3683 14.9246 21.2443C14.5801 21.1014 14.3006 20.5433 13.743 19.428L11.152 14.2461C11.0635 14.0691 11.0192 13.981 10.9601 13.9043C10.9077 13.8363 10.8471 13.7749 10.7791 13.7225C10.7041 13.6647 10.6175 13.6214 10.4484 13.5369L5.25454 10.9399C4.13923 10.3823 3.58153 10.1032 3.43862 9.75879C3.31468 9.4601 3.34295 9.12023 3.51431 8.84597C3.71189 8.52974 4.30785 8.34603 5.49966 7.97932L18.7942 3.88867C19.7312 3.60038 20.1999 3.45635 20.5164 3.57253C20.792 3.67373 21.0093 3.89084 21.1105 4.16651C21.2267 4.48283 21.0825 4.95126 20.7945 5.88729L20.7939 5.88867Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default SendIcon;
