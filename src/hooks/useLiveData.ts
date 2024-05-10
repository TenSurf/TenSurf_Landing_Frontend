import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';
import { FETCH_NEW_DATA_TIME_PERIOD, STOCK_SYMBOL_ENUM } from '../constatns/chart.constants';
import { BackendUrls } from '../helpers/backend-urls';
import { sendRequest } from '../helpers/http-request';
import type { chartItemType } from '../component/dashboard/Charts/types';
import { catchRequestError } from '../utils/functions';
import moment from 'moment';
import { type ICandle } from '../component/dashboard/Charts/Chart';

interface IProps {
  selectedSymbol: STOCK_SYMBOL_ENUM;
  shouldFetchLiveData: boolean;
  setLastDate: Dispatch<SetStateAction<number>>;
  lastDate: number;
  setESData: Dispatch<SetStateAction<ICandle[]>>;
  setNQData: Dispatch<SetStateAction<ICandle[]>>;
  sortData: (data: chartItemType[]) => void;
}

export const useLiveData = ({
  shouldFetchLiveData = false,
  selectedSymbol = STOCK_SYMBOL_ENUM.nq,
  setLastDate,
  lastDate,
  setESData,
  setNQData,
  sortData
}: IProps) => {
  const [time, setTime] = useState(0);
  const [data, setData] = useState<any>();
  // const [retryCount, setRetryCount] = useState(1);

  const isES = selectedSymbol === STOCK_SYMBOL_ENUM.es;
  const isNQ = selectedSymbol === STOCK_SYMBOL_ENUM.nq;

  useEffect(() => {
    let url = '';
    if (isES) {
      url = BackendUrls.chart_data_ES_last;
    } else if (isNQ) {
      url = BackendUrls.chart_data_NQ_last;
    }
    if (shouldFetchLiveData && url) {
      setTimeout(() => {
        // console.log('Fetching live data ... ');
        setTime(prev => prev + 60);
        sendRequest<chartItemType[]>(url)
          .then(res => {
            const newCandleTime = moment(res?.data[0]?.Timestamp).unix();
            // const max = 20;
            // const min = -20;
            // const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            const newCandle: ICandle = {
              close: Number(res?.data[0].Close),
              high: Number(res?.data[0].High),
              low: Number(res?.data[0].Low),
              open: Number(res?.data[0].Open),
              time: newCandleTime
            };
            // console.log('res?.data[0] > ', res?.data[0]);

            if (newCandleTime > lastDate) {
              sortData(res?.data);
              setData(res.data);
              setLastDate(newCandleTime);
              if (isES) {
                setESData((prev: ICandle[]) => [...prev, newCandle]);
              }
              if (isNQ) {
                setNQData((prev: ICandle[]) => [...prev, newCandle]);
              }
            }
          })
          .catch(catchRequestError);
      }, FETCH_NEW_DATA_TIME_PERIOD);
    }
  }, [shouldFetchLiveData, time]);

  return { data };
};

export default useLiveData;
