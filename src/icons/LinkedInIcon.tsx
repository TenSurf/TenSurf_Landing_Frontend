import React, { type FC } from 'react';
import { type IIconAndIllustration } from '../types/general.types';

const LinkedInIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
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
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.70666 3.5C4.04024 3.5 3.5 4.04024 3.5 4.70666V19.2933C3.5 19.9597 4.04024 20.5 4.70667 20.5H19.2933C19.9598 20.5 20.5 19.9597 20.5 19.2933V4.70666C20.5 4.04024 19.9598 3.5 19.2933 3.5H4.70666ZM7.31572 8.77936C8.1302 8.77936 8.79047 8.11909 8.79047 7.30461C8.79047 6.49013 8.1302 5.82986 7.31572 5.82986C6.50124 5.82986 5.84097 6.49013 5.84097 7.30461C5.84097 8.11909 6.50124 8.77936 7.31572 8.77936ZM10.1411 9.86924H12.5852V10.9889C12.5852 10.9889 13.2485 9.66241 15.0531 9.66241C16.6628 9.66241 17.9964 10.4554 17.9964 12.8726V17.9698H15.4636V13.4902C15.4636 12.0643 14.7023 11.9075 14.1222 11.9075C12.9183 11.9075 12.7122 12.9459 12.7122 13.6762V17.9698H10.1411V9.86924ZM8.6013 9.86925H6.03015V17.9698H8.6013V9.86925Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default LinkedInIcon;
