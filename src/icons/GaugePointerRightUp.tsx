import { type FC } from 'react';

import { type IIconAndIllustration } from '../types/general.types';

<svg width='15' height='36' viewBox='0 0 15 36' fill='none' xmlns='http://www.w3.org/2000/svg'></svg>;

const GaugePointerRightUp: FC<IIconAndIllustration> = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      width='15'
      height='36'
      viewBox='0 0 15 36'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.1278 24.522L12.4814 24.8756L12.6278 24.7291V24.522H12.1278ZM9.46114 3.02515C9.46114 4.49791 10.655 5.69181 12.1278 5.69181C13.6006 5.69181 14.7945 4.49791 14.7945 3.02515C14.7945 1.55239 13.6006 0.35848 12.1278 0.35848C10.655 0.35848 9.46114 1.55239 9.46114 3.02515ZM1.38627 35.9707L12.4814 24.8756L11.7743 24.1685L0.679161 35.2635L1.38627 35.9707ZM12.6278 24.522V3.02515H11.6278V24.522H12.6278Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default GaugePointerRightUp;
