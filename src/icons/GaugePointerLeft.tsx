import { type FC } from 'react';

import { type IIconAndIllustration } from '../types/general.types';

const GaugePointerLeft: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='37'
      height='24'
      viewBox='0 0 37 24'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M29.782 2.99933L30.261 2.85579L30.1542 2.49933H29.782V2.99933ZM0.178975 2.99933C0.178975 4.47209 1.37288 5.666 2.84564 5.666C4.3184 5.666 5.51231 4.47209 5.51231 2.99933C5.51231 1.52657 4.3184 0.332662 2.84564 0.332662C1.37288 0.332662 0.178975 1.52657 0.178975 2.99933ZM36.3726 23.2494L30.261 2.85579L29.3031 3.14286L35.4147 23.5365L36.3726 23.2494ZM29.782 2.49933H2.84564V3.49933H29.782V2.49933Z'
        fill='#D8D8DF'
      />
    </svg>
  );
};

export default GaugePointerLeft;
