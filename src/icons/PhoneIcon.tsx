import React, { type FC } from 'react';
import { type IIconAndIllustration } from '../types/general.types';

const PhoneIcon: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.33497 3.42115C6.13249 2.91494 5.64221 2.58301 5.09701 2.58301H3.26316C2.56554 2.58301 2 3.14841 2 3.84603C2 9.77582 6.80719 14.583 12.737 14.583C13.4346 14.583 14 14.0174 14 13.3198L14.0003 11.4856C14.0003 10.9404 13.6685 10.4502 13.1622 10.2478L11.4046 9.54497C10.9499 9.36308 10.4322 9.44494 10.056 9.75846L9.60235 10.1368C9.07258 10.5783 8.29309 10.5432 7.80546 10.0555L6.52815 8.77705C6.04052 8.28942 6.00449 7.51057 6.44596 6.9808L6.82422 6.52721C7.13774 6.15098 7.22033 5.63311 7.03844 5.1784L6.33497 3.42115Z'
        stroke='currentColor'
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default PhoneIcon;
