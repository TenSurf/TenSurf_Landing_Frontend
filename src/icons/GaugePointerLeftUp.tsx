import { type FC } from 'react';

import { type IIconAndIllustration } from '../types/general.types';

const GaugePointerLeftUp: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='19'
      height='41'
      viewBox='0 0 19 41'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.57715 29.0559H3.07715V29.3077L3.27952 29.4576L3.57715 29.0559ZM0.910482 3.50085C0.910482 4.97361 2.10439 6.16752 3.57715 6.16752C5.04991 6.16752 6.24382 4.97361 6.24382 3.50085C6.24382 2.0281 5.04991 0.834188 3.57715 0.834188C2.10439 0.834188 0.910482 2.0281 0.910482 3.50085ZM18.7495 39.6733L3.87478 28.6541L3.27952 29.4576L18.1543 40.4768L18.7495 39.6733ZM4.07715 29.0559V3.50085H3.07715V29.0559H4.07715Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default GaugePointerLeftUp;
