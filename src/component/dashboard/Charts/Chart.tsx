// /* eslint-disable */
import { BackendUrls } from '@/helpers/backend-urls';
import { HttpMethod, sendRequest } from '@/helpers/http-request';
import React, { useEffect, useState } from 'react';
import { catchRequestError } from '../../../utils/functions';
import moment from 'moment';
import { Grid } from '@mui/material';
import { type chartItemType } from './types';
import { type Range, type Time } from 'lightweight-charts';
import { toast } from 'sonner';

export interface ICandle {
  close: number;
  high: number;
  low: number;
  open: number;
  time: number;
}
export const Chart = () => {
  const [nQdata, setNQData] = useState<ICandle[]>([]);
  const [eSdata, setESData] = useState<ICandle[]>([]);
  const [firstDate, setFirstDate] = useState<number>(0);
  const [lastDate, setLastDate] = useState<number>(0);
  const [shouldSendReqFlag, setShouldSendReqFlag] = useState<boolean>(true);
  const [shouldFetchMoreData, setShouldFetchMoreData] = useState<boolean>(true);
  const [visibleTimeRange, setVisibleTimeRange] = useState<Range<Time>>();

  const [nqVwapList, setNqVwapList] = useState<Array<{ name: string; data: any }>>([]);
  const [nqWvwapList, setNqWvwapList] = useState<Array<{ name: string; data: any }>>([]);
  const [esVwapList, setEsVwapList] = useState<Array<{ name: string; data: any }>>([]);
  const [esWvwapList, setEsWvwapList] = useState<Array<{ name: string; data: any }>>([]);

  const [shouldFetchLiveData, setShouldFetchLiveData] = useState(false);

  useEffect(() => {
    if (shouldFetchMoreData) moreData();
  }, [visibleTimeRange]);

  const moreData = () => {
    if (visibleTimeRange && firstDate && visibleTimeRange?.from === firstDate && shouldSendReqFlag) {
      fetchMoreData();
    }
  };

  const fetchMoreData = () => {
    let url = BackendUrls.chart_data_NQ;
    // if (selectedSymbol === STOCK_SYMBOL_ENUM.nq) setIsNQLoading(true);
    // if (selectedSymbol === STOCK_SYMBOL_ENUM.es) {
    //   setIsESLoading(true);
    //   url = BackendUrls.chart_data_ES;
    // }

    setShouldSendReqFlag(false);
    sendRequest<chartItemType[]>(url, HttpMethod.GET, {
      last_time: moment.unix(firstDate).utc().format('YYYY-MM-DDTHH:mm:ss[Z]')
    })
      .then(res => {
        const sortedData = sortData(res.data, false);

        // if (selectedSymbol === STOCK_SYMBOL_ENUM.es) {
        //   setESData(prev => [...sortedData, ...prev]);
        //   setIsESLoading(false);
        // } else {
        //   setNQData(prev => [...sortedData, ...prev]);
        //   setIsNQLoading(false);
        // }
      })
      .catch(() => {
        toast.error('There was an error loading data from the server! please try again later.');
        // setShouldFetchMoreData(false);
        // setIsNQLoading(false);
        // setIsESLoading(false);
      })
      .finally(() => setShouldSendReqFlag(true));
  };

  useEffect(() => {
    setShouldFetchLiveData(false);

    // if (selectedSymbol === STOCK_SYMBOL_ENUM.es) {
    //   setIsESLoading(true);
    // } else {
    //   setIsNQLoading(true);
    // }
    const url = BackendUrls.chart_data_NQ;

    sendRequest<chartItemType[]>(url)
      .then(res => {
        const sortedData = sortData(res.data, true);
        // if (selectedSymbol === STOCK_SYMBOL_ENUM.es) {
        //   setESData(sortedData);
        //   setIsESLoading(false);
        // } else {
        //   setIsNQLoading(false);
        //   setNQData(sortedData);
        // }
        setShouldFetchLiveData(true);
      })
      .catch(catchRequestError);

    setShouldFetchMoreData(true);
  }, []);

  const sortData = (data: chartItemType[], is_first?: boolean) => {
    const candles: ICandle[] = [];
    const vwList: any = [
      { name: 'VWAP', data: [] },
      { name: 'VWAP +1', data: [] },
      { name: 'VWAP -1', data: [] },
      { name: 'VWAP +2', data: [] },
      { name: 'VWAP -2', data: [] },
      { name: 'VWAP +3', data: [] },
      { name: 'VWAP -3', data: [] },
      { name: 'VWAP +4', data: [] },
      { name: 'VWAP -4', data: [] }
    ];
    const wvwList: any = [
      { name: 'WVWAP', data: [] },
      { name: 'WVWAP +1', data: [] },
      { name: 'WVWAP -1', data: [] },
      { name: 'WVWAP +2', data: [] },
      { name: 'WVWAP -2', data: [] },
      { name: 'WVWAP +3', data: [] },
      { name: 'WVWAP -3', data: [] },
      { name: 'WVWAP +4', data: [] },
      { name: 'WVWAP -4', data: [] }
    ];
    data.forEach(item => {
      const itemTime = moment(item.Timestamp).unix();
      candles.push({
        time: itemTime,
        open: item.Open as number,
        high: item.High as number,
        low: item.Low as number,
        close: item.Close as number
      });
      vwList[0].data.push({
        time: itemTime,
        value: item.VWAP
      });
      vwList[1].data.push({
        time: itemTime,
        value: item['VWAP +1']
      });
      vwList[2].data.push({
        time: itemTime,
        value: item['VWAP -1']
      });
      vwList[3].data.push({
        time: itemTime,
        value: item['VWAP +2']
      });
      vwList[4].data.push({
        time: itemTime,
        value: item['VWAP -2']
      });
      vwList[5].data.push({
        time: itemTime,
        value: item['VWAP +3']
      });
      vwList[6].data.push({
        time: itemTime,
        value: item['VWAP -3']
      });
      vwList[7].data.push({
        time: itemTime,
        value: item['VWAP +4']
      });
      vwList[8].data.push({
        time: itemTime,
        value: item['VWAP -4']
      });

      wvwList[0].data.push({
        time: itemTime,
        value: item.WVWAP
      });
      wvwList[1].data.push({
        time: itemTime,
        value: item['WVWAP +1']
      });
      wvwList[2].data.push({
        time: itemTime,
        value: item['WVWAP -1']
      });
      wvwList[3].data.push({
        time: itemTime,
        value: item['WVWAP +2']
      });
      wvwList[4].data.push({
        time: itemTime,
        value: item['WVWAP -2']
      });
      wvwList[5].data.push({
        time: itemTime,
        value: item['WVWAP +3']
      });
      wvwList[6].data.push({
        time: itemTime,
        value: item['WVWAP -3']
      });
      wvwList[7].data.push({
        time: itemTime,
        value: item['WVWAP +4']
      });
      wvwList[8].data.push({
        time: itemTime,
        value: item['WVWAP -4']
      });
    });

    setFirstDate(candles[0]?.time);
    setLastDate(candles[candles.length - 1]?.time);
    // if (selectedSymbol === STOCK_SYMBOL_ENUM.nq) {
    //   setNqVwapList(prev => [...vwList, ...prev]);
    //   setNqWvwapList(prev => [...wvwList, ...prev]);
    // } else {
    //   setEsVwapList(prev => [...vwList, ...prev]);
    //   setEsWvwapList(prev => [...wvwList, ...prev]);
    // }

    // if (is_first) setupWebSocket();
    return candles;
  };

  // useLiveData({
  //   shouldFetchLiveData,
  //   setLastDate,
  //   lastDate,
  //   setESData,
  //   setNQData,
  //   sortData
  // });

  // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
  return (
    <div className='mx-auto h-full w-full'>
      <Grid container rowSpacing={1} columnSpacing={1} sx={{ height: '100%', width: '100%' }}>
        <Grid item md={12} padding={1} sx={{ height: '100%', width: '100%', position: 'relative' }}>
          {/* {selectedSymbol === STOCK_SYMBOL_ENUM.nq ? (
            <CandlestickChart
              data={nQdata as Array<CandlestickData<Time> | WhitespaceData<Time>>}
              isLoadingChartData={isNQLoading}
              visibleTimeRange={visibleTimeRange}
              firstDate={firstDate}
              setVisibleTimeRange={setVisibleTimeRange}
              stockSymbol={STOCK_SYMBOL_ENUM.nq}
              vwapList={nqVwapList}
              wvwapList={nqWvwapList}
            />
          ) : (
            <CandlestickChart
              data={eSdata as Array<CandlestickData<Time> | WhitespaceData<Time>>}
              isLoadingChartData={isESLoading}
              visibleTimeRange={visibleTimeRange}
              firstDate={firstDate}
              setVisibleTimeRange={setVisibleTimeRange}
              stockSymbol={STOCK_SYMBOL_ENUM.es}
              vwapList={esVwapList}
              wvwapList={esWvwapList}
            />
          )} */}
        </Grid>
      </Grid>
    </div>
  );
};
