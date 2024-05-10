import React, { type FC } from 'react';
import { type IIconAndIllustration } from '../types/general.types';

const XIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='19'
      height='17'
      viewBox='0 0 19 17'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.4405 0.59375H17.1548L11.2249 7.37119L18.2009 16.5937H12.7388L8.46062 11.0003L3.56544 16.5937H0.849538L7.1921 9.34452L0.5 0.59375H6.10082L9.9679 5.70637L14.4405 0.59375ZM13.4879 14.9691H14.9919L5.28359 2.13303H3.66964L13.4879 14.9691Z'
        fill='white'
      />
    </svg>
  );
};

export default XIcon;
