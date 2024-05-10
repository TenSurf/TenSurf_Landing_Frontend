import React, { type FC } from 'react';

import { type IIconAndIllustration } from '../types/general.types';

const Needle: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='23'
      height='5'
      viewBox='0 0 23 5'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.35513 3.50979C1.27742 3.50465 1.20022 3.48676 1.12807 3.45745V3.45745C0.51382 3.2079 0.518214 2.32695 1.14188 2.10196V2.10196C1.20552 2.07901 1.27206 2.06509 1.33956 2.06063L20.7894 0.774662C21.9517 0.697814 22.9367 1.61986 22.9367 2.78469V2.78469C22.9367 3.94953 21.9517 4.87157 20.7894 4.79473L1.35513 3.50979Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default Needle;
