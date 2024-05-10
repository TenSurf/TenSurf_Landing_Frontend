import React, { type FC } from 'react';

import { type IIconAndIllustration } from '../types/general.types';

const TrendSurfIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
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
        d='M13.5899 2.0011L15.5123 3.75412L2.0051 14.4167L19.8401 7.70312L21.8035 9.49068V2.0011H13.5899Z'
        fill='#944C9D'
      />
      <path d='M13.5899 2.0011L15.5123 3.75412L2.0051 14.4167L21.8035 4.41071V2.0011H13.5899Z' fill='#A86C9D' />
      <path
        d='M2.00521 14.6177C1.93576 14.6177 1.86631 14.58 1.83159 14.5171C1.78108 14.4323 1.80318 14.3224 1.8821 14.2627L15.2063 3.74458L13.4575 2.14864C13.3975 2.09209 13.3754 2.00413 13.407 1.92873C13.4385 1.85334 13.5111 1.79993 13.5932 1.79993H18.2682C18.3787 1.79993 18.4702 1.88789 18.4702 2.00098C18.4702 2.11094 18.3787 2.20205 18.2682 2.20205H14.1109L15.6513 3.60635C15.6955 3.64719 15.7176 3.70374 15.7176 3.76028C15.7145 3.81997 15.6892 3.87339 15.6419 3.91108L3.14475 13.7757L12.984 10.0718C13.0882 10.0341 13.2049 10.0843 13.2428 10.188C13.2807 10.2917 13.2302 10.4079 13.126 10.4456L2.07781 14.6051C2.05255 14.6145 2.0273 14.6177 2.00521 14.6177Z'
        fill='#3F154B'
      />
      <path
        d='M14.4518 9.93369C14.3697 9.93369 14.294 9.88342 14.2624 9.80488C14.2245 9.70121 14.275 9.58812 14.3792 9.54728L19.7707 7.5178C19.8402 7.49267 19.9222 7.50523 19.9791 7.55864L21.6047 9.03834V2.20536H19.5024C19.3919 2.20536 19.3004 2.11425 19.3004 2.00429C19.3004 1.89433 19.3919 1.80322 19.5024 1.80322H21.8036C21.9141 1.80322 22.0056 1.89119 22.0056 2.00429V9.49387C22.0056 9.57241 21.9583 9.64467 21.8857 9.67609C21.8131 9.7075 21.7278 9.69493 21.6679 9.64152L19.796 7.93564L14.5212 9.92113C14.4991 9.92741 14.4739 9.93369 14.4518 9.93369Z'
        fill='#3F154B'
      />
      <path d='M21.8036 21.705H16.5447L17.4727 11.2372H21.8036V21.705Z' fill='#3EC1F0' />
      <path d='M16.5446 21.705H11.595L12.523 13.0845H17.3085L16.5446 21.705Z' fill='#3EC1F0' />
      <path d='M11.595 21.7051H6.64542L7.57347 14.9349H12.3242L11.595 21.7051Z' fill='#3EC1F0' />
      <path d='M6.64227 21.7051H2.00201L2.93007 16.7822H7.31779L6.64227 21.7051Z' fill='#3EC1F0' />
      <path d='M21.8035 12.7766H17.3369L17.4726 11.2372H21.8035V12.7766Z' fill='white' />
      <path d='M17.1981 14.316H12.3905L12.5231 13.0845H17.3086L17.1981 14.316Z' fill='white' />
      <path d='M12.2232 15.8554H7.44406L7.57348 14.9349H12.3242L12.2232 15.8554Z' fill='white' />
      <path d='M7.23576 17.398H2.81647L2.93011 16.7822H7.31783L7.23576 17.398Z' fill='white' />
      <path d='M21.8035 19.8578H16.7087L17.3369 12.7766H21.8035V19.8578Z' fill='#75D0EB' />
      <path d='M16.6802 20.1657H11.759L12.3904 14.316H17.1979L16.6802 20.1657Z' fill='#75D0EB' />
      <path d='M11.7274 20.4735H6.81256L7.44389 15.8553H12.223L11.7274 20.4735Z' fill='#75D0EB' />
      <path d='M6.7714 20.7816H2.1785L2.81614 17.3981H7.23542L6.7714 20.7816Z' fill='#75D0EB' />
      <path
        d='M21.8034 21.9061H16.5445C16.4876 21.9061 16.434 21.881 16.3961 21.8401C16.3582 21.7993 16.3393 21.7427 16.3424 21.6862L16.7781 16.7601C16.7875 16.6502 16.8885 16.5685 16.9959 16.5779C17.1063 16.5874 17.1884 16.6847 17.1789 16.7947L16.7623 21.5008H21.6014V11.4351H17.6556L17.3021 15.4092C17.2926 15.5192 17.1947 15.604 17.0843 15.5915C16.9738 15.582 16.8917 15.4846 16.9012 15.3747L17.2705 11.2183C17.28 11.1147 17.3652 11.0361 17.4694 11.0361H21.8003C21.9107 11.0361 22.0023 11.1241 22.0023 11.2372V21.705C22.0054 21.8181 21.9139 21.9061 21.8034 21.9061Z'
        fill='#3F154B'
      />
      <path
        d='M16.5447 21.9062H12.8325C12.722 21.9062 12.6305 21.815 12.6305 21.7051C12.6305 21.5951 12.722 21.504 12.8325 21.504H16.5447C16.6552 21.504 16.7467 21.592 16.7467 21.7051C16.7436 21.8182 16.6552 21.9062 16.5447 21.9062Z'
        fill='#3F154B'
      />
      <path
        d='M12.3241 15.1327C12.3178 15.1327 12.3083 15.1327 12.302 15.1327C12.1915 15.1202 12.1126 15.0228 12.122 14.9128L12.3209 13.0655C12.3335 12.9619 12.4188 12.8865 12.5198 12.8865H17.3052C17.4157 12.8865 17.5073 12.9776 17.5073 13.0875C17.5073 13.1975 17.4157 13.2886 17.3052 13.2886H12.7029L12.5229 14.9568C12.5135 15.0573 12.4251 15.1327 12.3241 15.1327Z'
        fill='#3F154B'
      />
      <path
        d='M11.5949 21.9062H6.64528C6.58846 21.9062 6.53164 21.8811 6.49376 21.8371C6.45588 21.7931 6.43694 21.7366 6.44641 21.68L6.69895 19.8327C6.71473 19.7228 6.81574 19.6411 6.92622 19.6631C7.0367 19.6788 7.11246 19.7793 7.09668 19.8893L6.87572 21.5104H11.415L12.0999 15.1392H7.74695L7.27345 18.5981C7.25767 18.708 7.15666 18.7866 7.04617 18.7677C6.93569 18.752 6.85993 18.6515 6.87572 18.5415L7.37446 14.9098C7.38709 14.8093 7.47232 14.7371 7.57333 14.7371H12.3241C12.3809 14.7371 12.4345 14.7622 12.4724 14.803C12.5103 14.847 12.5292 14.9036 12.5229 14.957L11.7938 21.7303C11.7811 21.8308 11.6959 21.9062 11.5949 21.9062Z'
        fill='#3F154B'
      />
      <path
        d='M6.64225 21.9062H2.002C1.94202 21.9062 1.8852 21.8779 1.84732 21.8339C1.80944 21.7868 1.79366 21.7271 1.80313 21.6706L2.73118 16.7445C2.75012 16.6503 2.83219 16.5812 2.93005 16.5812H7.31777C7.42825 16.5812 7.51979 16.6723 7.51979 16.7822C7.51979 16.8922 7.42825 16.9833 7.31777 16.9833H3.09735L2.24506 21.5072H6.64225C6.75273 21.5072 6.84428 21.5952 6.84428 21.7083C6.84428 21.8182 6.75589 21.9062 6.64225 21.9062Z'
        fill='#3F154B'
      />
      <path
        d='M5.52479 3.12564H5.09549C4.98501 3.12564 4.89346 3.03452 4.89346 2.92457C4.89346 2.81461 4.98501 2.72351 5.09549 2.72351H5.52479C5.63527 2.72351 5.72681 2.81147 5.72681 2.92457C5.72681 3.03452 5.63527 3.12564 5.52479 3.12564Z'
        fill='#3F154B'
      />
      <path
        d='M6.95155 3.12564H6.52225C6.41176 3.12564 6.32022 3.03452 6.32022 2.92457C6.32022 2.81461 6.41176 2.72351 6.52225 2.72351H6.95155C7.06203 2.72351 7.15357 2.81147 7.15357 2.92457C7.15357 3.03452 7.06519 3.12564 6.95155 3.12564Z'
        fill='#3F154B'
      />
      <path
        d='M6.02347 4.04936C5.91298 4.04936 5.82144 3.95825 5.82144 3.84829V3.42104C5.82144 3.31108 5.91298 3.21997 6.02347 3.21997C6.13395 3.21997 6.22549 3.31108 6.22549 3.42104V3.84829C6.22549 3.95825 6.13711 4.04936 6.02347 4.04936Z'
        fill='#3F154B'
      />
      <path
        d='M6.02347 2.62931C5.91298 2.62931 5.82144 2.54135 5.82144 2.42825V2.00098C5.82144 1.89103 5.91298 1.79993 6.02347 1.79993C6.13395 1.79993 6.22549 1.88789 6.22549 2.00098V2.42825C6.22549 2.5382 6.13711 2.62931 6.02347 2.62931Z'
        fill='#3F154B'
      />
      <path
        d='M2.43135 8.97524H2.00204C1.89156 8.97524 1.80002 8.88413 1.80002 8.77418C1.80002 8.66422 1.89156 8.57312 2.00204 8.57312H2.43135C2.54183 8.57312 2.63337 8.66422 2.63337 8.77418C2.63337 8.88413 2.54183 8.97524 2.43135 8.97524Z'
        fill='#3F154B'
      />
      <path
        d='M3.85807 8.97524H3.42877C3.31829 8.97524 3.22675 8.88413 3.22675 8.77418C3.22675 8.66422 3.31829 8.57312 3.42877 8.57312H3.85807C3.96855 8.57312 4.0601 8.66422 4.0601 8.77418C4.0601 8.88413 3.97171 8.97524 3.85807 8.97524Z'
        fill='#3F154B'
      />
      <path
        d='M2.93014 9.89897C2.81966 9.89897 2.72812 9.80786 2.72812 9.6979V9.27065C2.72812 9.16069 2.81966 9.06958 2.93014 9.06958C3.04063 9.06958 3.13217 9.15755 3.13217 9.27065V9.6979C3.13217 9.811 3.04063 9.89897 2.93014 9.89897Z'
        fill='#3F154B'
      />
      <path
        d='M2.93014 8.47891C2.81966 8.47891 2.72812 8.38781 2.72812 8.27786V7.85059C2.72812 7.74064 2.81966 7.64954 2.93014 7.64954C3.04063 7.64954 3.13217 7.74064 3.13217 7.85059V8.27786C3.13217 8.38781 3.04063 8.47891 2.93014 8.47891Z'
        fill='#3F154B'
      />
      <path
        d='M8.92747 5.28067H8.49817C8.38768 5.28067 8.29614 5.19271 8.29614 5.07961C8.29614 4.96965 8.38768 4.87854 8.49817 4.87854H8.92747C9.03795 4.87854 9.12949 4.96965 9.12949 5.07961C9.12949 5.18956 9.03795 5.28067 8.92747 5.28067Z'
        fill='#3F154B'
      />
      <path
        d='M10.3576 5.28067H9.92831C9.81783 5.28067 9.72629 5.19271 9.72629 5.07961C9.72629 4.96965 9.81783 4.87854 9.92831 4.87854H10.3576C10.4681 4.87854 10.5596 4.96965 10.5596 5.07961C10.5565 5.18956 10.4681 5.28067 10.3576 5.28067Z'
        fill='#3F154B'
      />
      <path
        d='M9.42953 6.20438C9.31905 6.20438 9.22751 6.11328 9.22751 6.00332V5.57606C9.22751 5.4661 9.31905 5.375 9.42953 5.375C9.54002 5.375 9.63156 5.46296 9.63156 5.57606V6.00332C9.6284 6.11642 9.54002 6.20438 9.42953 6.20438Z'
        fill='#3F154B'
      />
      <path
        d='M9.42953 4.78434C9.31905 4.78434 9.22751 4.69323 9.22751 4.58328V4.15602C9.22751 4.04607 9.31905 3.95496 9.42953 3.95496C9.54002 3.95496 9.63156 4.04607 9.63156 4.15602V4.58328C9.6284 4.69323 9.54002 4.78434 9.42953 4.78434Z'
        fill='#3F154B'
      />
    </svg>
  );
};

export default TrendSurfIcon;
