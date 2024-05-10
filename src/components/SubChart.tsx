import { symbols } from '@/lib/levels';
import { TooltipPrimitive } from '@/plugins/tooltip/tooltip';
import { ChartState, useChartStore } from '@/store/chart';
import { SubChartState, useSubChartStore } from '@/store/sub_chart';
import { getLegendTemplate } from '@/utils/chart';
import moment from 'moment';
import { useEffect, useRef } from 'react';
import {
  DeepPartial,
  IChartApi,
  Range,
  TickMarkType,
  Time,
  TimeChartOptions,
  createChart
} from 'tensurf-lightweight-charts';

export default function SubChart() {
  const subChartRef: any = useRef();
  const { symbol, chart, candlestickSeries }: ChartState = useChartStore();
  const { setSubChart, is_sub_chart, initSubChart, historySubChart, resetSubChart, series }: SubChartState =
    useSubChartStore();

  useEffect(() => {
    if (!subChartRef.current || !chart || !is_sub_chart) return;

    const options: DeepPartial<TimeChartOptions> = {
      crosshair: {
        mode: 0
      },
      grid: {
        horzLines: {
          color: '#e8e8e8'
        },
        vertLines: {
          color: '#e3e3e3'
        }
      },
      layout: {
        textColor: 'black',
        background: { color: 'white' }
      },
      timeScale: {
        borderColor: '#A8ADB8',
        tickMarkFormatter: (time: Time, tickMarkType: TickMarkType, locale: string) => {
          return moment
            .unix(time as number)
            .utc()
            .local()
            .format('MM-DD HH:mm');
        },
        rightOffset: 25
      },
      rightPriceScale: {
        borderColor: '#A8ADB8',
        textColor: '#A8ADB8'
      },
      autoSize: true,
      localization: {
        timeFormatter: (time: Time) => {
          return moment
            .unix(time as number)
            .utc()
            .local()
            .format('MM-DD HH:mm');
        }
        // priceFormatter: (priceValue: BarPrice) => {
        //   return priceValue.toFixed(symbols[symbol].fixed);
        // }
      }
    };

    const sub_chart: IChartApi = createChart(subChartRef.current, options);
    setSubChart(sub_chart);

    // const tooltipPrimitive = new TooltipPrimitive({
    //   lineColor: 'rgba(0, 0, 0, 0.2)',
    //   tooltip: {
    //     followMode: 'top',
    //   },
    // });

    // candlestickSeries.attachPrimitive(tooltipPrimitive);

    initSubChart(symbol);
    historySubChart([], [], []);

    chart.timeScale().subscribeVisibleLogicalRangeChange((timeRange: Range<number> | null) => {
      try {
        if (timeRange) {
          sub_chart.timeScale().setVisibleLogicalRange(timeRange);
        }
      } catch {
        //
      }
    });

    const handler = (timeRange: Range<number> | null) => {
      if (timeRange) {
        chart.timeScale().setVisibleLogicalRange(timeRange);
      }
    };

    sub_chart.timeScale().subscribeVisibleLogicalRangeChange(handler);

    sub_chart.timeScale().fitContent();

    const legendRef = document.getElementById('candlestick-legend');

    const sub_chart_subscribe = (param: any) => {
      try {
        if (!param.point || !param.time) {
          chart.clearCrosshairPosition();
          return;
        }
        if (legendRef) {
          legendRef.innerHTML = getLegendTemplate(candlestickSeries.dataByIndex(param.logical), symbols, symbol);
        }
        chart.setCrosshairPosition(0, param.time, candlestickSeries);
      } catch (error) {}
    };
    sub_chart.subscribeCrosshairMove(sub_chart_subscribe);

    const chart_subscribe = (param: any) => {
      try {
        if (!param.point || !param.time) {
          sub_chart.clearCrosshairPosition();
          return;
        }

        sub_chart.setCrosshairPosition(-100, param.time, series.long_trend as any);
      } catch (error) {}
    };
    chart.subscribeCrosshairMove(chart_subscribe);

    return () => {
      sub_chart.unsubscribeCrosshairMove(sub_chart_subscribe);
      chart.unsubscribeCrosshairMove(chart_subscribe);
      sub_chart.timeScale().unsubscribeVisibleLogicalRangeChange(handler);
      sub_chart.remove();
      setSubChart(null);
    };
  }, [is_sub_chart, chart, subChartRef]);

  useEffect(() => {
    resetSubChart();
    initSubChart(symbol);
  }, [symbol]);

  return (
    <div ref={subChartRef} className=' h-full relative mr-3 border-t border-black'>
      {/* <div className='absolute top-4 left-4 z-20 flex gap-3'>
        <div className='flex gap-2 items-center'>
          <div className='w-6 h-1 bg-[#36AE7C] rounded-full'></div>
          <span className='text-xs'>short</span>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='w-6 h-1 bg-[#F9D923] rounded-full'></div>
          <span className='text-xs'>mid</span>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='w-6 h-1 bg-[#EB5353] rounded-full'></div>
          <span className='text-xs'>long</span>
        </div>
      </div> */}
    </div>
  );
}
