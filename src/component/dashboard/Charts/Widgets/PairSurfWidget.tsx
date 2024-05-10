import { useState, type FC, type ReactNode, useEffect } from 'react';
import Gauge from './Gauge';
import { ChartState, useChartStore } from '@/store/chart';
import { useWidgetStore } from '@/store/widget';
import { convert_to_degree_trend } from '@/utils/functions';

interface IProps {
  colors?: {
    veryLow: string;
    low: string;
    medium: string;
    good: string;
    veryGood: string;
  };
}

function GageAndPointer({
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
      <Gauge angle={angle} scale={scale} colors={colors} />
      {pointer}
    </>
  );
}

export const PairSurfWidget: FC<IProps> = () => {
  const { symbols, symbol }: ChartState = useChartStore();
  const { widget_data }: any = useWidgetStore();

  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <div className='text-xs'>Last hour of instruments highly correlated with {symbol}</div>
      {symbols
        .filter(symbol_filter => symbol_filter !== symbol)
        .map(symbol_map => (
          <div key={symbol_map} className='relative flex flex-col items-center justify-center'>
            <GageAndPointer angle={convert_to_degree_trend(widget_data[symbol_map + '_trend_last_hour'])} scale={1} />
            <div className='text-card-foreground mt-4 text-sm'>{symbol_map}</div>
          </div>
        ))}

      {/* <div className='relative flex flex-col items-center justify-center'>
        <GageAndPointer angle={YM} scale={1.2} />
        <div className='text-card-foreground mt-4'>YM</div>
      </div> */}
    </div>
  );
};

export default PairSurfWidget;
