import { useState, type FC, type ReactNode, useEffect } from 'react';
import Order from '@/component/dashboard/Charts/Widgets/Order';
import BearBullIcon from '@/icons/BearBull';
import { InfoIcon } from 'lucide-react';
import { ChartState, useChartStore } from '@/store/chart';
import { useWidgetStore } from '@/store/widget';

interface IProps {
  colors?: {
    veryLow: string;
    low: string;
    medium: string;
    good: string;
    veryGood: string;
  };
}

function OrderAndPointer({
  angle,
  scale,
  colors = {
    veryLow: '#D83D32',
    low: '#F57C74',
    medium: '#A8ADB8',
    good: '#5FD16F',
    veryGood: '#138423'
  },
  pointer
}: {
  angle: number;
  scale: number;
  colors?: {
    veryLow: string;
    low: string;
    medium: string;
    good: string;
    veryGood: string;
  };
  pointer?: ReactNode;
}) {
  return (
    <>
      <Order angle={angle} scale={scale} colors={colors} />
      {pointer}
    </>
  );
}

export const LiqSurfWidget: FC<IProps> = () => {
  const { symbol }: ChartState = useChartStore();
  const { liq_data }: any = useWidgetStore();

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex items-center'>
        <div className='text-xs'>Order Book Ratio</div>
        <InfoIcon className='h-4 text-card-foreground' />
      </div>
      {/* OB_1p */}
      <div className='flex flex-col gap-2'>
        <span className='text-[11px] text-card-foreground'>
          OrderBook ratio based on <strong>1%</strong> distance of close price
        </span>
        <div className='relative flex flex-col items-center justify-center'>
          <OrderAndPointer angle={liq_data[symbol] && 13.5 * liq_data[symbol]['OB_1p'] + 135} scale={1} />
          <div className='text-card-foreground -mt-16 font-bold text-2xl'>{symbol}</div>
        </div>

        <div className='mx-auto relative'>
          <div className='absolute text-center text-xs text-muted-foreground -top-2 left-0 right-0'>Bears & Bulls</div>
          <BearBullIcon
            left_level={liq_data[symbol] && Math.ceil(-0.75 * liq_data[symbol]['OB_1p'] + 7.5)}
            right_level={liq_data[symbol] && Math.ceil(0.75 * liq_data[symbol]['OB_1p'] + 7.5)}
          ></BearBullIcon>
        </div>
      </div>

      {/* OB_2p */}
      <div className='flex flex-col gap-2'>
        <span className='text-[11px] text-card-foreground'>
          OrderBook ratio based on <strong>2%</strong> distance of close price
        </span>
        <div className='relative flex flex-col items-center justify-center'>
          <OrderAndPointer angle={liq_data[symbol] && (135 / 7) * liq_data[symbol]['OB_2p'] + 135} scale={1} />
          <div className='text-card-foreground -mt-16 font-bold text-2xl'>{symbol}</div>
        </div>

        <div className='mx-auto relative'>
          <div className='absolute text-center text-xs text-muted-foreground -top-2 left-0 right-0'>Bears & Bulls</div>
          <BearBullIcon
            left_level={liq_data[symbol] && Math.ceil(-(7.5 / 7) * liq_data[symbol]['OB_2p'] + 7.5)}
            right_level={liq_data[symbol] && Math.ceil((7.5 / 7) * liq_data[symbol]['OB_2p'] + 7.5)}
          ></BearBullIcon>
        </div>
      </div>

      {/* OB_zz */}
      <div className='flex flex-col gap-2'>
        <span className='text-[11px] text-card-foreground'>
          OrderBook ratio based on <strong>1 zigzag leg</strong> distance of close
        </span>
        <div className='relative flex flex-col items-center justify-center'>
          <OrderAndPointer angle={liq_data[symbol] && 13.5 * liq_data[symbol]['OB_zz'] + 135} scale={1} />
          <div className='text-card-foreground -mt-16 font-bold text-2xl'>{symbol}</div>
        </div>

        <div className='mx-auto relative'>
          <div className='absolute text-center text-xs text-muted-foreground -top-2 left-0 right-0'>Bears & Bulls</div>
          <BearBullIcon
            left_level={liq_data[symbol] && Math.ceil(-0.75 * liq_data[symbol]['OB_zz'] + 7.5)}
            right_level={liq_data[symbol] && Math.ceil(0.75 * liq_data[symbol]['OB_zz'] + 7.5)}
          ></BearBullIcon>
        </div>
      </div>

      {/* OB_atr */}
      <div className='flex flex-col gap-2'>
        <span className='text-[11px] text-card-foreground'>
          OrderBook ratio based on <strong>1 ATR</strong> distance of close
        </span>
        <div className='relative flex flex-col items-center justify-center'>
          <OrderAndPointer angle={liq_data[symbol] && 13.5 * liq_data[symbol]['OB_atr'] + 135} scale={1} />
          <div className='text-card-foreground -mt-16 font-bold text-2xl'>{symbol}</div>
        </div>

        <div className='mx-auto relative'>
          <div className='absolute text-center text-xs text-muted-foreground -top-2 left-0 right-0'>Bears & Bulls</div>
          <BearBullIcon
            left_level={liq_data[symbol] && Math.ceil(-0.75 * liq_data[symbol]['OB_atr'] + 7.5)}
            right_level={liq_data[symbol] && Math.ceil(0.75 * liq_data[symbol]['OB_atr'] + 7.5)}
          ></BearBullIcon>
        </div>
      </div>
    </div>
  );
};

export default LiqSurfWidget;
