import React, { type FC } from 'react';
import { type IIconAndIllustration } from '../types/general.types';

const GoogleIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='26'
      height='27'
      viewBox='0 0 26 27'
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
        d='M21.8405 13.7077C21.8405 13.0548 21.7819 12.4269 21.6731 11.8242H13.0005V15.3862H17.9563C17.7428 16.5372 17.094 17.5125 16.1188 18.1654V20.4759H19.0947C20.836 18.8728 21.8405 16.5121 21.8405 13.7077Z'
        fill='#4285F4'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.0004 22.7068C15.4867 22.7068 17.5711 21.8822 19.0947 20.4759L16.1187 18.1654C15.2941 18.7179 14.2393 19.0444 13.0004 19.0444C10.602 19.0444 8.57202 17.4246 7.84791 15.248H4.77148V17.6338C6.28668 20.6433 9.40077 22.7068 13.0004 22.7068Z'
        fill='#34A853'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.84785 15.2483C7.66368 14.6958 7.55904 14.1056 7.55904 13.4987C7.55904 12.8918 7.66368 12.3016 7.84785 11.7491V9.36328H4.77143C4.14777 10.6064 3.79199 12.0128 3.79199 13.4987C3.79199 14.9846 4.14777 16.3909 4.77143 17.6341L7.84785 15.2483Z'
        fill='#FBBC05'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.0004 7.95343C14.3524 7.95343 15.5662 8.41803 16.5205 9.33049L19.1616 6.68937C17.5669 5.20348 15.4825 4.29102 13.0004 4.29102C9.40077 4.29102 6.28668 6.35452 4.77148 9.36398L7.84791 11.7498C8.57202 9.57326 10.602 7.95343 13.0004 7.95343Z'
        fill='#EA4335'
      />
    </svg>
  );
};

export default GoogleIcon;
