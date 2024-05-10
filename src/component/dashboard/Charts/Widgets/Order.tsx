import { type FC } from 'react';
import Needle from '../../../../icons/Needle';
import OrderIllustration from '@/icons/OrderIllustration';
import { ChevronLeft } from 'lucide-react';

interface IProps {
  colors?: {
    veryLow: string;
    low: string;
    medium: string;
    good: string;
    veryGood: string;
  };
  angle?: number;
  scale?: number;
}
export const Order: FC<IProps> = ({ angle = 135, colors, scale = 1 }) => {
  const needleStyle = { transform: `rotate(${angle-45}deg)`, 'transformOrigin': 'center' };
  const scaleStyle = { transform: `scale(${scale}) ` };

  return (
    <div style={scaleStyle} className='relative h-44 m-auto overflow-hidden flex justify-center p-6'>
      <OrderIllustration colors={colors} className='h-auto' />
      <div style={needleStyle} className='absolute bottom-[78px] transition-all duration-200'>
        <ChevronLeft className='h-4 w-auto -translate-x-10 text-card-foreground' />
      </div>
      <div className='absolute text-xs bottom-12 left-0 text-red-500 text-end'>Strong<br />sell</div>
      <div className='absolute text-xs top-8 left-6 text-red-500'>Sell</div>
      <div className='absolute text-xs top-0 text-secondary text-end'>Neutrul</div>
      <div className='absolute text-xs bottom-12 right-0 text-green-500'>Strong<br />buy</div>
      <div className='absolute text-xs top-8 right-6 text-green-500'>Buy</div>
    </div>
  );
};

export default Order;
