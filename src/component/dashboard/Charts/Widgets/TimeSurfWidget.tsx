import { ChartState, useChartStore } from '@/store/chart';
import { useWidgetStore } from '@/store/widget';
import { TimerIcon } from 'lucide-react';
import moment from 'moment';
import { useEffect, useState, type FC } from 'react';

export const TimeSurfWidget: FC = () => {
  const { news }: any = useWidgetStore();
  const { symbol }: ChartState = useChartStore();
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(moment().unix());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className='flex flex-col gap-4'>
        <h2 className='text-sm font-medium'>News insights:</h2>
        {news.length ? (
          news.map((news_item: any, index: number) => (
            <div
              key={index}
              className={`text-sm ${
                Math.abs(news_item.time - timer) > 3600
                  ? 'text-muted-foreground'
                  : Math.abs(news_item.time - timer) > 900
                  ? 'text-neutral-900'
                  : Math.abs(news_item.time - timer) > 300
                  ? 'text-[#E57800]'
                  : 'text-destructive'
              } flex justify-between transition-all`}
            >
              <div>
                <span className='text-xs'>{moment.unix(news_item.time).format('YYYY-MM-DD HH:mm:ss')}</span>
                <p>{news_item.event}</p>
              </div>
              <span className='text-[10px] mr-2'>{news_item.currency}</span>
            </div>
          ))
        ) : (
          <span className='text-muted-foreground text-center text-xs my-4'>There is no news</span>
        )}
        {/* <div className='flex items-center'>
          <TimerIcon className='text-card-foreground h-4' />
          <span className='text-sm font-medium'>Time insights about {symbol}:</span>
        </div>
        <p className='text-xs text-slate-500'>
          High volatility during from 2.5 hours from market open (6:30 am - 9 am) is normal Low volatility from 9 am to
          12 am is normal
        </p> */}
      </div>
    </>
  );
};

export default TimeSurfWidget;
