import { type FC, type ReactNode } from 'react';
import Gauge from './Gauge';
import GaugePointerRightUp from '../../../../icons/GaugePointerRightUp';
import GaugePointerLeft from '../../../../icons/GaugePointerLeft';
import GaugePointerLeftUp from '../../../../icons/GaugePointerLeftUp';
import { Loader2 } from 'lucide-react';
import { useWidgetStore } from '@/store/widget';
import { ChartState, useChartStore } from '@/store/chart';
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
  pointer: ReactNode;
}) {
  return (
    <>
      <Gauge angle={angle} scale={scale} colors={colors} />
      {pointer}
    </>
  );
}

export const TrendSurfWidget: FC<IProps> = () => {
  const { widget_loading, widget_data }: any = useWidgetStore();
  const { symbol }: ChartState = useChartStore();

  return (
    <div className='relative flex flex-col items-center min-h-fit justify-center gap-4 w-full'>
      {/* {widget_loading && (
        <Loader2 className='absolute top-0 left-0 right-0 bottom-0 m-auto z-50 h-6 w-6 animate-spin' />
      )} */}
      <div className='flex flex-col items-center justify-center w-full h-fit gap-6'>
        <div className='relative h-40 flex items-center justify-center'>
          <div className='absolute bottom-3 right-2 z-10'>
            <GageAndPointer
              angle={convert_to_degree_trend(widget_data[symbol + '_trend_current_session'])}
              scale={0.6}
              pointer={
                <>
                  <GaugePointerLeftUp className='absolute scale-75 -top-2 left-2 rotate-0 text-[#D8D8DF]' />
                  <div className='absolute text-light-100 text-[10px] -top-5 -left-[6px]'>Current session</div>
                </>
              }
            />
          </div>
          <div className='absolute'>
            <GageAndPointer
              angle={convert_to_degree_trend(widget_data[symbol + '_trend_last_hour'])}
              scale={0.9}
              pointer={
                <>
                  <GaugePointerLeft className='absolute -top-6 right-[50%] rotate-0 text-[#D8D8DF]' />
                  <div className='absolute text-light-100 text-xs -top-[30px] -left-10'>Last hour</div>
                </>
              }
            />
          </div>
          <div className='absolute bottom-3 left-2'>
            <GageAndPointer
              angle={convert_to_degree_trend(widget_data[symbol + '_trend_overnight'])}
              scale={0.6}
              pointer={
                <>
                  <GaugePointerRightUp className='absolute scale-75 -top-0 right-3 rotate-0 text-[#D8D8DF]' />
                  <div className='absolute text-light-100 text-[10px] -top-3 -right-[6px]'>Overnight</div>
                </>
              }
            />
          </div>
        </div>
        <div className='-mt-10 text-muted-foreground text-sm'>Bears & Bulls</div>
      </div>

      <div className='flex flex-col items-center justify-center w-full h-full   gap-6 '>
        <div className='relative h-40 flex items-center justify-center'>
          <div className='absolute bottom-3 right-2 z-10'>
            <GageAndPointer
              angle={convert_to_degree_trend(widget_data[symbol + '_trend_last_week'])}
              scale={0.6}
              pointer={
                <>
                  <GaugePointerLeftUp className='absolute scale-75 -top-2 left-2 rotate-0 text-[#D8D8DF]' />
                  <div className='absolute text-light-100 text-[10px] -top-5 -left-[6px]'>Last week</div>
                </>
              }
            />
          </div>
          <div className='absolute'>
            <GageAndPointer
              angle={convert_to_degree_trend(widget_data[symbol + '_trend_last_session'])}
              scale={0.9}
              pointer={
                <>
                  <GaugePointerLeft className='absolute -top-6 right-[50%] rotate-0 text-[#D8D8DF]' />
                  <div className='absolute text-light-100 text-xs -top-[30px] -left-14'>Last session</div>
                </>
              }
            />
          </div>
          <div className='absolute bottom-3 left-2'>
            <GageAndPointer
              angle={convert_to_degree_trend(widget_data[symbol + '_trend_last_month'])}
              scale={0.6}
              pointer={
                <>
                  <GaugePointerRightUp className='absolute scale-75 -top-0 right-3 rotate-0 text-[#D8D8DF]' />
                  <div className='absolute text-light-100 text-[10px] -top-3 -right-[6px]'>Last month</div>
                </>
              }
            />
          </div>
        </div>
        <div className='-mt-10 text-muted-foreground text-sm'>Bears & Bulls</div>
      </div>
    </div>
  );
};

export default TrendSurfWidget;
