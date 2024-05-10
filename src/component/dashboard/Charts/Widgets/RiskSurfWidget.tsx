import { useState, type FC, useEffect } from 'react';
import InfoIcon from '../../../../icons/InfoIcon';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartState, useChartStore } from '@/store/chart';
import { decimalToFraction } from '@/utils/functions';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { levels_names } from '@/lib/levels';
import { SRState, sr_keys, useSRStore } from '@/store/sr_level';
import { LIQState, liq_keys, useLIQStore } from '@/store/liq_level';

export const RiskSurfWidget: FC = () => {
  const [transaction, setTransaction] = useState<string>('long');
  const [current_price, set_current_price] = useState<number>(0);
  const [target_price, set_target_price] = useState<number>(0);
  const [stoploss_price, set_stoploss_price] = useState<number>(0);
  const [target_label, set_target_label] = useState<string>('');
  const [stoploss_label, set_stoploss_label] = useState<string>('');
  const [risk, set_risk] = useState<number | string>(0);
  const [reward, set_reward] = useState<number | string>(0);
  const [risk_reward, set_risk_reward] = useState<string>('0:0');
  const { chart, candlestickSeries, levels_series, symbol, levels, chartLoading, levelsLoading }: ChartState =
    useChartStore();

  const { sr_update }: SRState = useSRStore();
  const { liq_update }: LIQState = useLIQStore();

  const updateRiskData = () => {
    const candlestick_all_data = candlestickSeries.data();
    const candlestick_last_data = candlestickSeries.dataByIndex(candlestick_all_data.length - 1);
    if (!candlestick_last_data) return;

    set_current_price(candlestick_last_data.close);

    let min_level_name = '';
    let min_level_price = transaction === 'long' ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

    let max_level_name = '';
    let max_level_price = transaction === 'long' ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;

    Object.entries(levels_series).forEach(([seri_key, seri_line]: any) => {
      if (seri_line.options().visible) {
        const line_data_length = seri_line.data().length - 1;
        const line_last_data = seri_line.dataByIndex(line_data_length);

        // calc target
        if (transaction === 'long') {
          if (
            line_last_data &&
            line_last_data.time === candlestick_last_data.time &&
            line_last_data.value > candlestick_last_data.close &&
            line_last_data.value < min_level_price
          ) {
            min_level_name = seri_key;
            min_level_price = line_last_data.value;
          }
        } else if (transaction === 'short') {
          if (
            line_last_data &&
            line_last_data.time === candlestick_last_data.time &&
            line_last_data.value < candlestick_last_data.close &&
            line_last_data.value > min_level_price
          ) {
            min_level_name = seri_key;
            min_level_price = line_last_data.value;
          }
        }

        // calc stop loss
        if (transaction === 'long') {
          if (
            line_last_data &&
            line_last_data.time === candlestick_last_data.time &&
            line_last_data.value < candlestick_last_data.close &&
            line_last_data.value > max_level_price
          ) {
            max_level_name = seri_key;
            max_level_price = line_last_data.value;
          }
        } else if (transaction === 'short') {
          if (
            line_last_data &&
            line_last_data.time === candlestick_last_data.time &&
            line_last_data.value > candlestick_last_data.close &&
            line_last_data.value < max_level_price
          ) {
            max_level_name = seri_key;
            max_level_price = line_last_data.value;
          }
        }
      }
    });

    sr_keys.forEach((sr_key: string) => {
      if (!sr_update[sr_key]) return;

      for (const sr_object of Object.values(sr_update[sr_key])) {
        if (!sr_object.options.visible) break;

        if (sr_object.p1.time !== sr_object.p2.time) {
          // calc target
          if (transaction === 'long') {
            if (
              sr_object.p2.time === candlestick_last_data.time &&
              sr_object.p2.price > candlestick_last_data.close &&
              sr_object.p2.price < min_level_price
            ) {
              min_level_name = sr_key;
              min_level_price = sr_object.p2.price;
            }
          } else if (transaction === 'short') {
            if (
              sr_object.p2.time === candlestick_last_data.time &&
              sr_object.p2.price < candlestick_last_data.close &&
              sr_object.p2.price > min_level_price
            ) {
              min_level_name = sr_key;
              min_level_price = sr_object.p2.price;
            }
          }

          // calc stop loss
          if (transaction === 'long') {
            if (
              sr_object.p2.time === candlestick_last_data.time &&
              sr_object.p2.price < candlestick_last_data.close &&
              sr_object.p2.price > max_level_price
            ) {
              max_level_name = sr_key;
              max_level_price = sr_object.p2.price;
            }
          } else if (transaction === 'short') {
            if (
              sr_object.p2.time === candlestick_last_data.time &&
              sr_object.p2.price > candlestick_last_data.close &&
              sr_object.p2.price < max_level_price
            ) {
              max_level_name = sr_key;
              max_level_price = sr_object.p2.price;
            }
          }
        }
      }
    });

    liq_keys.forEach((liq_key: string) => {
      if (!liq_update[liq_key]) return;

      for (const liq_object of Object.values(liq_update[liq_key])) {
        if (!liq_object.options.visible) break;

        if (liq_object.p1.time !== liq_object.p2.time) {
          // calc target
          if (transaction === 'long') {
            if (
              liq_object.p2.time === candlestick_last_data.time &&
              liq_object.p2.price > candlestick_last_data.close &&
              liq_object.p2.price < min_level_price
            ) {
              min_level_name = liq_key;
              min_level_price = liq_object.p2.price;
            }
          } else if (transaction === 'short') {
            if (
              liq_object.p2.time === candlestick_last_data.time &&
              liq_object.p2.price < candlestick_last_data.close &&
              liq_object.p2.price > min_level_price
            ) {
              min_level_name = liq_key;
              min_level_price = liq_object.p2.price;
            }
          }

          // calc stop loss
          if (transaction === 'long') {
            if (
              liq_object.p2.time === candlestick_last_data.time &&
              liq_object.p2.price < candlestick_last_data.close &&
              liq_object.p2.price > max_level_price
            ) {
              max_level_name = liq_key;
              max_level_price = liq_object.p2.price;
            }
          } else if (transaction === 'short') {
            if (
              liq_object.p2.time === candlestick_last_data.time &&
              liq_object.p2.price > candlestick_last_data.close &&
              liq_object.p2.price < max_level_price
            ) {
              max_level_name = liq_key;
              max_level_price = liq_object.p2.price;
            }
          }
        }
      }
    });

    set_target_price(min_level_price);
    set_target_label(min_level_name);
    set_stoploss_price(max_level_price);
    set_stoploss_label(max_level_name);

    if (transaction === 'long') {
      set_risk((candlestick_last_data.close - max_level_price).toFixed(2));
      set_reward((min_level_price - candlestick_last_data.close).toFixed(2));
      set_risk_reward(
        decimalToFraction(
          parseFloat((candlestick_last_data.close - max_level_price).toFixed(2)) /
            parseFloat((min_level_price - candlestick_last_data.close).toFixed(2))
        )
      );
    } else {
      set_risk((max_level_price - candlestick_last_data.close).toFixed(2));
      set_reward((candlestick_last_data.close - min_level_price).toFixed(2));
      set_risk_reward(
        decimalToFraction(
          (max_level_price - candlestick_last_data.close) / (candlestick_last_data.close - min_level_price)
        )
      );
    }
  };

  useEffect(() => {
    if (!chart || chartLoading) return;

    set_risk(0);
    set_reward(0);
    set_risk_reward('0:0');
    set_target_price(0);
    set_stoploss_price(0);
    set_target_label('');
    set_stoploss_label('');
    set_current_price(0);
    updateRiskData();

    candlestickSeries.subscribeDataChanged(() => {
      updateRiskData();
    });

    return () => {
      candlestickSeries.unsubscribeDataChanged(updateRiskData);
    };
  }, [chart, chartLoading, transaction, symbol, levels, levelsLoading]);

  return (
    <div className='overflow-hidden flex flex-col text-xs'>
      <Tabs defaultValue={transaction} className='w-[150px] mx-auto' onValueChange={e => setTransaction(e)}>
        <TabsList className='grid w-full h-full grid-cols-2 bg-secondary'>
          <TabsTrigger value='long' className='gap-2 text-xs'>
            Long
          </TabsTrigger>
          <TabsTrigger value='short' className='gap-2 text-xs'>
            Short
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className='h-[1px] w-full bg-border-light-200 mb-3'></div>
      <div className='flex flex-col gap-2  p-4'>
        <div className='text-light-400 flex items-center gap-1 text-xs'>
          <div>Risk / Reward Ratio based on adjacent levels: {risk_reward}</div>
          <InfoIcon className='w-3 h-3 shrink-0 cursor-pointer' />
        </div>

        <div className='grid text-xs grid-cols-2 gap-2'>
          <div className='flex text-light-400 flex-col justify-center items-center rounded-lg p-1 aspect-square border-[1px] border-blue-300'>
            <div className='flex items-center gap-1'>
              <div>Target</div>
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className='w-3 h-3 shrink-0 cursor-pointer' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <span className='text-xs'>{levels_names[target_label] || 'no level'}</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className='text-primary'>{target_price}</div>
          </div>

          <div className='flex flex-col justify-center items-center rounded-lg p-1 aspect-square border-[1px] border-red-300'>
            <div className='flex items-center gap-1'>
              <div>Stop Loss</div>
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className='w-3 h-3 shrink-0 cursor-pointer' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <span className='text-xs'>{levels_names[stoploss_label] || 'no level'}</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className='text-red-400'>{stoploss_price}</div>
          </div>

          <div className='flex flex-col justify-center items-center rounded-lg p-1 aspect-square border-[1px] border-gray-300'>
            <div>Current Price</div>
            <div className='text-card-foreground'>{current_price}</div>
          </div>

          <div className='flex text-light-400 flex-col justify-center items-center rounded-lg p-1 aspect-square border-[1px] border-dashed border-gray-300'>
            <div className='flex items-center gap-1'>
              <div>Risk:</div>
              <div className='text-card-foreground'>{risk} P</div>
            </div>
            <div className='flex items-center gap-1'>
              <div>Reward:</div>
              <div className='text-card-foreground'>{reward} P</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskSurfWidget;
