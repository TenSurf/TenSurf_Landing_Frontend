import { useEffect, useState, type FC } from 'react';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useWidgetStore } from '@/store/widget';
import { Loader2 } from 'lucide-react';
import moment from 'moment';

export const WaveSurfWidget: FC = () => {
  const {
    widget_loading,
    last_zigzag,
    zigzag_current_session,
    zigzag_last_session,
    zigzag_last_week,
    last_atr,
    atr_current_session,
    atr_last_session,
    atr_last_week
  }: any = useWidgetStore();

  const [marketDate, setMarketDate] = useState<string>('');

  useEffect(() => {
    let currentDate = moment().format('dddd');

    if (currentDate !== 'Saturday' && currentDate !== 'Sunday') {
      setMarketDate(currentDate);
    } else {
      setMarketDate('Friday');
    }
  }, []);

  return (
    <div className='flex flex-col gap-6 relative'>
      {widget_loading && (
        <Loader2 className='absolute top-0 left-0 right-0 bottom-0 m-auto z-50 h-6 w-6 animate-spin' />
      )}
      <div className='flex flex-col gap-4'>
        <div className='text-xs px-4'>Zigzag rotation size statistics</div>
        <Table>
          <TableBody>
            <TableRow className='bg-secondary'>
              <TableCell>Recent zigzag</TableCell>
              <TableCell>{last_zigzag.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Average zigzag in current session</TableCell>
              <TableCell>{zigzag_current_session.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow className='bg-secondary'>
              <TableCell>Average zigzag during recent 5 sessions</TableCell>
              <TableCell>{zigzag_last_session.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Average zigzag during recent 5 {marketDate}s</TableCell>
              <TableCell>{zigzag_last_week.toFixed(2)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='text-xs px-4'>Average True Range (ATR) value statistics</div>
        <Table>
          <TableBody>
            <TableRow className='bg-secondary'>
              <TableCell>Recent ATR value</TableCell>
              <TableCell>{last_atr.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Average ATR values in current session</TableCell>
              <TableCell>{atr_current_session.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow className='bg-secondary'>
              <TableCell>Average ATR during recent 5 session</TableCell>
              <TableCell>{atr_last_session.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Average ATR during recent 5 {marketDate}s</TableCell>
              <TableCell>{atr_last_week.toFixed(2)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default WaveSurfWidget;
