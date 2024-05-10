import { useState, type FC, useEffect } from 'react';
import BullIcon from '../../../../icons/BullIcon';
import WarningIcon from '../../../../icons/WarningIcon';
import BearIcon from '@/icons/BearIcon';
import { ChartState, useChartStore } from '@/store/chart';
import { useWidgetStore } from '@/store/widget';
import { levels_names } from '@/lib/levels';
import { SRState, sr_keys, useSRStore } from '@/store/sr_level';
import { LIQState, liq_keys, useLIQStore } from '@/store/liq_level';

export const LevelSurfWidget: FC = () => {
  const [current_price, set_current_price] = useState<number>(0);
  const [longCaution, setLongCaution] = useState<any[]>([]);
  const [shortCaution, setShortCaution] = useState<any[]>([]);
  const { chart, candlestickSeries, levels_series, levels, chartLoading, levelsLoading }: ChartState = useChartStore();
  const { sr_update }: SRState = useSRStore();
  const { liq_update }: LIQState = useLIQStore();
  const { zigzag_last_session }: any = useWidgetStore();

  const updateLevelData = () => {
    if (!candlestickSeries) return;
    const candlestick_all_data = candlestickSeries.data();
    const candlestick_last_data = candlestickSeries.dataByIndex(candlestick_all_data.length - 1);
    if (!candlestick_last_data) return;
    set_current_price(candlestick_last_data.close);

    let long_caution: any[] = [];
    let short_caution: any[] = [];

    Object.entries(levels_series).forEach(([seri_key, seri_line]: any) => {
      if (seri_line.options().visible) {
        const line_data_length = seri_line.data().length - 1;
        const line_last_data = seri_line.dataByIndex(line_data_length);

        if (!line_last_data) return;

        if (
          candlestick_last_data.close < line_last_data.value &&
          candlestick_last_data.close + zigzag_last_session > line_last_data.value
        ) {
          long_caution.push({ key: seri_key, value: line_last_data.value });
        }
        if (
          candlestick_last_data.close > line_last_data.value &&
          candlestick_last_data.close - zigzag_last_session < line_last_data.value
        ) {
          short_caution.push({ key: seri_key, value: line_last_data.value });
        }
      }
    });

    sr_keys.forEach((sr_key: string) => {
      if (!sr_update[sr_key]) return;

      for (const sr_object of Object.values(sr_update[sr_key])) {
        if (!sr_object.options.visible) break;

        if (sr_object.p1.time !== sr_object.p2.time) {
          if (
            candlestick_last_data.close < sr_object.p2.price &&
            candlestick_last_data.close + zigzag_last_session > sr_object.p2.price
          ) {
            long_caution.push({ key: sr_key, value: sr_object.p2.price });
          }
          if (
            candlestick_last_data.close > sr_object.p2.price &&
            candlestick_last_data.close - zigzag_last_session < sr_object.p2.price
          ) {
            short_caution.push({ key: sr_key, value: sr_object.p2.price });
          }
        }
      }
    });

    liq_keys.forEach((liq_key: string) => {
      if (!liq_update[liq_key]) return;

      for (const liq_object of Object.values(liq_update[liq_key])) {
        if (!liq_object.options.visible) break;

        if (liq_object.p1.time !== liq_object.p2.time) {
          if (
            candlestick_last_data.close < liq_object.p2.price &&
            candlestick_last_data.close + zigzag_last_session > liq_object.p2.price
          ) {
            long_caution.push({ key: liq_key, value: liq_object.p2.price });
          }
          if (
            candlestick_last_data.close > liq_object.p2.price &&
            candlestick_last_data.close - zigzag_last_session < liq_object.p2.price
          ) {
            short_caution.push({ key: liq_key, value: liq_object.p2.price });
          }
        }
      }
    });

    setLongCaution(long_caution.sort((a, b) => a.value - b.value));
    setShortCaution(short_caution.sort((a, b) => b.value - a.value));
  };

  useEffect(() => {
    if (!chart || chartLoading) return;

    updateLevelData();

    candlestickSeries.subscribeDataChanged(updateLevelData);
    return () => {
      candlestickSeries.unsubscribeDataChanged(updateLevelData);
    };
  }, [chart, chartLoading, levels, zigzag_last_session, levelsLoading]);

  return (
    <div className='flex flex-col gap-6'>
      {longCaution.length >= 1 && (
        <div className='border-border-light-200 text-xs gap-4 flex flex-col'>
          <div className='text-xs font-medium flex gap-2 items-center'>
            <BullIcon className='text-primary' />
            <div>Caution Against Long Trades</div>
          </div>
          <div className='h-[1px] w-full bg-secondary'></div>
          <div className='flex flex-col gap-2'>
            <div className='text-xs font-medium'>
              The current market analysis by LevelSurf reveals several significant resistance levels clustered on the
              upside.
            </div>

            <div className='text-card-foreground'>
              These <span className='text-secondary-foreground'>resistance levels</span> are key areas where the market
              price could potentially bounce back, indicating a strong selling interest..
            </div>

            <div className='text-card-foreground flex flex-col p-2 rounded-lg border-[1px]'>
              <div>Current price at {current_price}</div>
              <div className='text-muted-foreground'>Key levels in the top vicinity:</div>
              {longCaution.map((level_item, index) => (
                <div key={index}>
                  {levels_names[level_item.key]} at {level_item.value}
                </div>
              ))}
            </div>

            <div className='text-card-foreground'>
              Given this concentration of resistance levels, entering a long trade now poses a{' '}
              <span className='text-secondary-foreground'>higher risk</span>, as the market is more likely to reverse
              from these points.
            </div>

            <div className='text-card-foreground flex flex-col gap-2 p-2 rounded-lg border-border-light-200 border-[1px]'>
              <div className='text-primary bg-primary-foreground p-2 rounded-[6px] flex gap-2'>
                <WarningIcon />
                <div>Pay Attention</div>
              </div>
              <div>
                You are advised to exercise caution and reconsider buying under these conditions, as the likelihood of a
                bearish reversal is increased.
              </div>
            </div>

            <div className='text-card-foreground font-medium'>
              Waiting for the market to break through these resistance levels or looking for short trade opportunities
              may be more strategically sound under the current market conditions.
            </div>
          </div>
        </div>
      )}

      {shortCaution.length >= 1 && (
        <div className='border-secondary text-xs gap-4 flex flex-col'>
          <div className='text-xs font-medium flex gap-2 items-center'>
            <BearIcon className='text-primary' />
            <div>Caution Against Short Trades</div>
          </div>
          <div className='h-[1px] w-full bg-secondary'></div>
          <div className='flex flex-col gap-2'>
            <div className='text-xs font-medium'>
              The current market analysis by LevelSurf reveals several significant support levels clustered on the
              downside.
            </div>

            <div className='text-card-foreground'>
              These support levels are key areas where the market price could potentially bounce back, indicating a{' '}
              <span className='text-secondary-foreground'>strong buying </span> interest.
            </div>

            <div className='text-card-foreground flex flex-col p-2 rounded-lg border-[1px]'>
              <div>Current price at {current_price}</div>
              <div className='text-muted-foreground'>Key levels in the bottom vicinity:</div>
              {shortCaution.map(level_item => (
                <div key={level_item.key}>
                  {levels_names[level_item.key]} at {level_item.value}
                </div>
              ))}
            </div>

            <div className='text-card-foreground'>
              Given this concentration of resistance levels, entering a long trade now poses a{' '}
              <span className='text-secondary-foreground'>higher risk</span>, as the market is more likely to reverse
              from these points.
            </div>

            <div className='text-card-foreground flex flex-col gap-2 p-2 rounded-lg border-border-light-200 border-[1px]'>
              <div className='text-primary bg-primary-foreground p-2 rounded-[6px] flex gap-2'>
                <WarningIcon />
                <div>Pay Attention</div>
              </div>
              <div>
                You are advised to exercise caution and reconsider buying under these conditions, as the likelihood of a
                bearish reversal is increased.
              </div>
            </div>

            <div className='text-card-foreground font-medium'>
              Waiting for the market to break through these resistance levels or looking for short trade opportunities
              may be more strategically sound under the current market conditions.
            </div>
          </div>
        </div>
      )}
      {longCaution.length < 1 && shortCaution.length < 1 && (
        <div className='text-xs text-card-foreground text-center'>There is no Caution on Long/Short Trading.</div>
      )}
    </div>
  );
};

export default LevelSurfWidget;
