// /* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import {
  ColorType,
  type DeepPartial,
  type HorzScaleOptions,
  type Range,
  type Time,
  type SeriesMarker,
  createChart,
  type WhitespaceData,
  type BaselineData,
  type CreatePriceLineOptions
} from 'lightweight-charts';
import useUpdateEffect from '@/hooks/useUpdateEffect';
import { Box } from '@mui/material';
// import LoadingHorizontalDots from '../../general/Loading/LoadingHorizontalDots';
import { type IChartProps } from './types';

const CandlestickChart = ({
  data,
  setVisibleTimeRange,
  visibleTimeRange,
  newData,
  isLoadingChartData,
  colors,
  wvwapList,
  vwapList,
  firstDate
}: IChartProps) => {
  const chartContainerRef = useRef<HTMLElement>();
  const [candleSeri, setCandelSeri] = useState<any>();

  const backgroundColor = '#23303f';

  const myVisibleTimeRangeChangeHandler = (newVisibleTimeRange: Range<Time> | null) => {
    if (newVisibleTimeRange !== null && newVisibleTimeRange.from === firstDate) {
      setVisibleTimeRange(newVisibleTimeRange);
    }
  };

  useUpdateEffect(() => {
    if (data.length) {
      const chartConfig = {
        layout: {
          background: {
            type: ColorType.Solid,
            color: backgroundColor
          },

          textColor: 'rgba(255, 255, 255, 0.9)',
          grid: {
            vertLines: {
              color: '#334158'
            },
            horzLines: {
              color: '#334158'
            }
          }
        },
        autoSize: true,
        localization: {
          timeFormatter: (timestamp: number, locale: string) => {
            const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
            const formatOptions: Record<string, string> = {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            };

            return new Intl.DateTimeFormat(locale, formatOptions).format(date);
          },
          dateFormat: 'yyyy/mm/dd HH:mm:ss'
        }
      };
      const chart = createChart(chartContainerRef?.current || '', chartConfig);
      // chart.timeScale().;

      const timeOptions = {
        rightOffset: 25,
        fixLeftEdge: true,
        lockVisibleTimeRangeOnResize: false,
        timeVisible: true,
        secondsVisible: true,
        shiftVisibleRangeOnNewBar: true,
        tickMarkFormatter: (timestamp: number, locale: string) => {
          const date = new Date(timestamp * 1000);
          const formatOptions: Record<string, string> = {
            hour: '2-digit',
            minute: '2-digit'
          };

          return new Intl.DateTimeFormat(locale, formatOptions).format(date);
        }
      };

      chart.timeScale().applyOptions(timeOptions as DeepPartial<HorzScaleOptions>);

      const candleSeries = chart.addCandlestickSeries({
        upColor: 'rgb(38,166,154)',
        downColor: 'rgb(255,82,82)',
        wickUpColor: 'rgb(38,166,154)',
        wickDownColor: 'rgb(255,82,82)',
        borderVisible: true
      });

      const markers: Array<SeriesMarker<Time>> = [
        {
          time: data[data.length - 12]?.time,
          position: 'aboveBar',
          color: '#74E291',
          shape: 'arrowUp',
          text: 'Marker 12'
        },
        {
          time: data[data.length - 11]?.time,
          position: 'inBar',
          color: '#74E291',
          shape: 'arrowUp',
          text: 'Marker 11'
        },
        {
          time: data[data.length - 10]?.time,
          position: 'belowBar',
          color: '#74E291',
          shape: 'arrowUp',
          text: 'Marker 10'
        },
        {
          time: data[data.length - 9]?.time,
          position: 'aboveBar',
          color: '#FBA834',
          shape: 'arrowDown',
          text: 'Marker 9'
        },
        {
          time: data[data.length - 8]?.time,
          position: 'inBar',
          color: '#FBA834',
          shape: 'arrowDown',
          text: 'Marker 8'
        },
        {
          time: data[data.length - 7]?.time,
          position: 'belowBar',
          color: '#FBA834',
          shape: 'arrowDown',
          text: 'Marker 7'
        },
        {
          time: data[data.length - 6]?.time,
          position: 'aboveBar',
          color: '#FF407D',
          shape: 'circle',
          text: 'Marker 6'
        },
        {
          time: data[data.length - 5]?.time,
          position: 'inBar',
          color: '#FF407D',
          shape: 'circle',
          text: 'Marker 5'
        },
        {
          time: data[data.length - 4]?.time,
          position: 'belowBar',
          color: '#FF407D',
          shape: 'circle',
          text: 'Marker 4'
        },
        {
          time: data[data.length - 3]?.time,
          position: 'aboveBar',
          color: '#EFF396',
          shape: 'square',
          text: 'Marker 3'
        },
        {
          time: data[data.length - 2]?.time,
          position: 'inBar',
          color: '#EFF396',
          shape: 'square',
          text: 'Marker 2'
        },
        {
          time: data[data.length - 1]?.time,
          position: 'belowBar',
          color: '#EFF396',
          shape: 'square',
          text: 'Marker 1'
        }
      ];

      candleSeries.setMarkers(markers);

      if (vwapList) {
        vwapList.forEach(item => {
          const baselineSeries = chart.addBaselineSeries({
            topLineColor: '#2962FF',
            topFillColor1: 'transparent',
            topFillColor2: 'transparent',
            lineType: 2,
            lineWidth: 2,
            lastValueVisible: false,
            priceLineVisible: false
          });
          const priceLine = {
            price: item.data.slice(-1)[0].value as number,
            color: '#2962FF',
            lineWidth: 1,
            lineStyle: 2, // LineStyle.Dashed
            axisLabelVisible: true,
            title: item.name
          };
          baselineSeries.createPriceLine(priceLine as CreatePriceLineOptions);
          baselineSeries.setData(item.data as Array<WhitespaceData<Time>> | Array<BaselineData<Time>>);
        });
      }
      if (wvwapList) {
        wvwapList.forEach(item => {
          const baselineSeries = chart.addBaselineSeries({
            topLineColor: 'red',
            topFillColor1: 'transparent',
            topFillColor2: 'transparent',
            lineType: 2,
            lineWidth: 2,
            lastValueVisible: false,
            priceLineVisible: false
          });
          const priceLine = {
            price: item.data.slice(-1)[0].value as number,
            color: 'red',
            lineWidth: 1,
            lineStyle: 2, // LineStyle.Dashed
            axisLabelVisible: true,
            title: item.name
          };
          baselineSeries.createPriceLine(priceLine as CreatePriceLineOptions);
          baselineSeries.setData(item.data as Array<WhitespaceData<Time>> | Array<BaselineData<Time>>);
        });
      }

      candleSeries.setData(data);

      setCandelSeri(candleSeries);

      chart.timeScale().subscribeVisibleTimeRangeChange(myVisibleTimeRangeChangeHandler);

      if (visibleTimeRange && !isLoadingChartData) {
        chart?.timeScale()?.setVisibleRange(visibleTimeRange as unknown as Range<Time>);
      }
      const toolTipWidth = 80;
      const toolTipHeight = 80;
      const toolTipMargin = 15;

      // Create and style the tooltip html element
      const toolTip: any = document.createElement('div');
      toolTip.id = 'toolTip';
      toolTip.style = `width: fit-content; height: auto; position: absolute; display: none; padding: 8px; box-sizing: border-box; font-size: 12px; text-align: left; z-index: 1000; top: 12px; left: 12px; pointer-events: none; border: 1px solid; border-radius: 2px;font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`;
      toolTip.style.background = 'black';
      toolTip.style.color = 'white';
      toolTip.style.borderColor = '#2962FF';
      chartContainerRef?.current?.appendChild(toolTip);

      chart.subscribeCrosshairMove(param => {
        if (
          param.point === undefined ||
          !param.time ||
          param.point.x < 0 ||
          param.point.x > Number(chartContainerRef?.current?.clientWidth) ||
          param.point.y < 0 ||
          param.point.y > Number(chartContainerRef?.current?.clientHeight)
        ) {
          toolTip.style.display = 'none';
        } else {
          toolTip.style.display = 'block';
          const data: any = param.seriesData.get(candleSeries);

          toolTip.innerHTML = `<div style="color: ${'#2962FF'}">detail:</div><div style="font-size: 12px; margin: 4px 0px">
                  open: ${data?.open}
                    </div>
                    <div>
                    high:${data?.high}
                    </div>
                    <div >
                    low:${data?.low}
                    </div>
                    <div >
                    close:${data?.close}
                    </div>
                    `;

          const y = param.point.y;
          let left = param.point.x + toolTipMargin;
          if (left > Number(chartContainerRef?.current?.clientWidth) - toolTipWidth) {
            left = param.point.x - toolTipMargin - toolTipWidth;
          }

          let top = y + toolTipMargin;
          if (top > Number(chartContainerRef?.current?.clientHeight) - toolTipHeight) {
            top = y - toolTipHeight - toolTipMargin;
          }
          toolTip.style.left = left + 'px';
          toolTip.style.top = top + 'px';
        }
      });

      return () => {
        chart.remove();
      };
    }
  }, [data]);

  useUpdateEffect(() => {
    if (candleSeri !== undefined && newData) {
      setCandelSeri((prevCandleSeri: any) => {
        prevCandleSeri.update(newData);
        return prevCandleSeri;
      });
    }
  }, [newData]);

  useEffect(() => {
    // Check if the parentRef has been assigned
    if (chartContainerRef.current) {
      // Loop through child elements and set display: none
      Array.from(chartContainerRef.current.children).forEach((child: any) => {
        const tooltipId = child.getAttribute('id');
        if (tooltipId === 'toolTip') {
          child.style.display = 'none';
        }
      });
    }
  }, [isLoadingChartData]);

  return (
    <Box
      sx={{ height: '100%', width: '100%', position: 'relative', borderRadius: '10px', overflow: 'hidden' }}
      ref={chartContainerRef}
    >
      <div
        className={`absolute w-full h-full flex justify-center items-center backdrop-blur-[4px] rounded-lg ${isLoadingChartData ? 'z-10' : 'hidden'} `}
      >
        {/* <LoadingHorizontalDots /> */}
      </div>
    </Box>
  );
};

export default CandlestickChart;
