import { type FC } from 'react';
import GaugeIllustration from '../../../../icons/GaugeIllustration';
import Needle from '../../../../icons/Needle';

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
export const Gauge: FC<IProps> = ({ angle = 90, colors, scale = 1 }) => {
  const needleStyle = {
    transform: `rotate(${angle === 180 ? 175 : angle === 0 ? 5 : angle}deg)`,
    transformOrigin: 'center'
  };
  const scaleStyle = { transform: `scale(${scale}) ` };

  return (
    <div style={scaleStyle} className='relative h-[60px] m-auto overflow-hidden flex justify-center'>
      <GaugeIllustration colors={colors} className='w-28 h-auto' />
      <div style={needleStyle} className='absolute bottom-0 transition-all duration-200'>
        <Needle className='h-[9px] w-auto -translate-x-4' />
      </div>
    </div>
  );
};

export default Gauge;
