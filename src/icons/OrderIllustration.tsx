import React, { type FC } from 'react';

import { type IIconAndIllustration } from '../types/general.types';

interface IProps extends IIconAndIllustration {
  colors?: {
    veryLow?: string;
    low?: string;
    medium?: string;
    good?: string;
    veryGood?: string;
  };
}

const OrderIllustration: FC<IProps> = ({
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <svg
      width='161'
      height='161'
      viewBox='0 0 161 161'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.992421 69.946C2.67726 57.6489 7.20032 45.9125 14.2038 35.6651C21.2074 25.4178 30.4992 16.9406 41.3444 10.904L49.1259 24.8843C40.4497 29.7135 33.0163 36.4953 27.4135 44.6932C21.8106 52.8911 18.1922 62.2802 16.8443 72.1179L0.992421 69.946Z'
        fill='url(#paint0_linear_3014_1725)'
      />
      <path
        d='M118.091 10.3199C128.965 16.1573 138.341 24.4315 145.485 34.495C152.629 44.5585 157.348 56.1385 159.273 68.3292L143.469 70.8244C141.929 61.0719 138.154 51.8079 132.438 43.7571C126.723 35.7063 119.222 29.087 110.523 24.417L118.091 10.3199Z'
        fill='url(#paint1_linear_3014_1725)'
      />
      <path
        d='M41.3324 10.9107C53.0623 4.37914 66.2474 0.904699 79.6729 0.807516C93.0983 0.710332 106.332 3.99353 118.156 10.3546L110.575 24.4448C101.116 19.3559 90.5291 16.7294 79.7887 16.8071C69.0483 16.8848 58.5002 19.6644 49.1163 24.8897L41.3324 10.9107Z'
        fill='#D8D8DF'
      />
      <path
        d='M23.6834 137.374C14.9649 128.655 8.37962 118.04 4.44175 106.356C0.503881 94.6716 -0.679992 82.2354 0.982571 70.0182L16.8364 72.1756C15.5064 81.9494 16.4535 91.8983 19.6038 101.246C22.7541 110.593 28.0223 119.085 34.9971 126.06L23.6834 137.374Z'
        fill='#F04438'
      />
      <path
        d='M159.303 68.5226C161.241 80.9947 160.201 93.7484 156.266 105.741C152.332 117.734 145.616 128.626 136.667 137.527L125.384 126.183C132.543 119.062 137.916 110.349 141.064 100.754C144.211 91.1598 145.043 80.9569 143.493 70.9792L159.303 68.5226Z'
        fill='#1BBD32'
      />
      <defs>
        <linearGradient
          id='paint0_linear_3014_1725'
          x1='80.252'
          y1='0.80542'
          x2='80.252'
          y2='160.805'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#F04438' stop-opacity='0.74' />
          <stop offset='1' stop-color='#F04438' stop-opacity='0.32' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_3014_1725'
          x1='80.252'
          y1='0.80542'
          x2='80.252'
          y2='160.805'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#1BBD32' stop-opacity='0.32' />
          <stop offset='1' stop-color='#1BBD32' stop-opacity='0.74' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default OrderIllustration;
