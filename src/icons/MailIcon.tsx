import React, { type FC } from 'react';
import { type IIconAndIllustration } from '../types/general.types';

const MailIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.18262 6.21045L10.2903 10.8227L10.2923 10.8244C10.9705 11.3217 11.3098 11.5705 11.6814 11.6667C12.0098 11.7516 12.3551 11.7516 12.6836 11.6667C13.0555 11.5705 13.3958 11.3209 14.0752 10.8227C14.0752 10.8227 17.9927 7.81639 20.1826 6.21045M3.18262 16.0106V8.41064C3.18262 7.29054 3.18262 6.73007 3.4006 6.30225C3.59235 5.92592 3.89809 5.62018 4.27441 5.42844C4.70224 5.21045 5.26271 5.21045 6.38281 5.21045H17.9828C19.1029 5.21045 19.6622 5.21045 20.09 5.42844C20.4663 5.62018 20.7731 5.92592 20.9648 6.30225C21.1826 6.72965 21.1826 7.28944 21.1826 8.40736V16.014C21.1826 17.1319 21.1826 17.6909 20.9648 18.1183C20.7731 18.4947 20.4663 18.8009 20.09 18.9927C19.6626 19.2104 19.1036 19.2104 17.9857 19.2104H6.37953C5.26161 19.2104 4.70182 19.2104 4.27441 18.9927C3.89809 18.8009 3.59235 18.4947 3.4006 18.1183C3.18262 17.6905 3.18262 17.1307 3.18262 16.0106Z'
        stroke='currentColor'
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default MailIcon;
