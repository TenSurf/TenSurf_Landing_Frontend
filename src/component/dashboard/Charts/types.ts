/* eslint-disable */
import { type CandlestickData, type ColorType, Range, type Time, type WhitespaceData } from 'lightweight-charts';
import { type Dispatch, type SetStateAction } from 'react';
import { STOCK_SYMBOL_ENUM } from '../../../constatns/chart.constants';

export type chartItemType = Record<string, string | number>;
export interface IChartConfiguration {
  layout: {
    background: { type: ColorType; color: string };
    textColor: string;
  };
  width: number;
  height: number;
  localization: {
    timeFormatter: (timestamp: number, locale: string) => string;
    dateFormat: string;
  };
}

export interface IChartProps {
  data: Array<CandlestickData<Time> | WhitespaceData<Time>>;
  stockSymbol: STOCK_SYMBOL_ENUM;
  newData?: any;
  firstDate:number;
  colors?: {
    backgroundColor?: string;
    lineColor?: string;
    textColor?: string;
    areaTopColor?: string;
    areaBottomColor?: string;
  };
  isLoadingChartData: boolean;
  visibleTimeRange?:  Range<Time> | undefined;
  setVisibleTimeRange: Dispatch<SetStateAction<Range<Time> | undefined>>;
  vwapList: Array<{ name: string; data: any }>;
  wvwapList: Array<{ name: string; data: any }>;
}


