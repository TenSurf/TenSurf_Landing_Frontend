import React, { type FC } from 'react';
import { type IIconAndIllustration } from '../types/general.types';

const YoutubeIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
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
        d='M19.9231 5.12119C20.7905 5.35471 21.4744 6.03861 21.7079 6.90598C22.1416 8.49061 22.1249 11.7933 22.1249 11.7933C22.1249 11.7933 22.1249 15.0793 21.7079 16.664C21.4744 17.5314 20.7905 18.2152 19.9231 18.4488C18.3385 18.8658 12 18.8658 12 18.8658C12 18.8658 5.67811 18.8658 4.0768 18.4321C3.20943 18.1986 2.52553 17.5147 2.29201 16.6473C1.875 15.0793 1.875 11.7766 1.875 11.7766C1.875 11.7766 1.875 8.49061 2.29201 6.90598C2.52553 6.03861 3.22611 5.33803 4.0768 5.10451C5.66143 4.6875 12 4.6875 12 4.6875C12 4.6875 18.3385 4.6875 19.9231 5.12119ZM15.2526 11.6608L9.98162 14.6966V8.625L15.2526 11.6608Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default YoutubeIcon;
