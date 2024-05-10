import { useEffect, useState, type FC } from 'react';
import InfoIcon from '../../../../icons/InfoIcon';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useWidgetStore } from '@/store/widget';
import { ChartState, useChartStore } from '@/store/chart';
import { Loader2 } from 'lucide-react';
import { symbols } from '@/lib/levels';
import { isCurrentTimeInRTH } from '@/utils/functions';

export const GapSurfWidget: FC = () => {
  const { symbol }: ChartState = useChartStore();
  const { gap_widget_data, widget_loading, current_gaps }: any = useWidgetStore();
  const [inRTH, setInRTH] = useState<boolean>(false);

  useEffect(() => {
    setInRTH(isCurrentTimeInRTH());

    const intervalId = setInterval(() => {
      setInRTH(isCurrentTimeInRTH());
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='relative'>
      {widget_loading && <Loader2 className='absolute top-16 left-0 right-0 mx-auto z-50 h-6 w-6 animate-spin' />}
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <div className='text-xs font-medium px-4'>{symbol} Annual Gap historical analysis</div>

          <Table>
            <TableHeader className='bg-secondary'>
              <TableRow>
                <TableHead>Year</TableHead>
                <TableHead>
                  <div className='flex items-center gap-1'>
                    Sessions with gap <InfoIcon className='shrink-0 w-3 h-3 cursor-pointer' />
                  </div>
                </TableHead>
                <TableHead>
                  <div className='flex items-center gap-1'>
                    Gap filled
                    <InfoIcon className='shrink-0 w-3 h-3 cursor-pointer' />
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {gap_widget_data &&
                gap_widget_data['year'] &&
                gap_widget_data['year'].map((gap: any, index: number) => (
                  <TableRow className={`${index % 2 !== 0 && 'bg-secondary hover:bg-secondary'}`} key={index}>
                    <TableCell width={'30%'}>{gap.year}</TableCell>
                    <TableCell className='text-center'>
                      {gap.gap}/{gap.total}
                    </TableCell>
                    <TableCell>{((gap.fill / gap.gap) * 100).toFixed()}%</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>

          <div className='text-xs font-medium px-4 mt-4'>{symbol} Monthly Gap historical analysis</div>
          <Table>
            <TableHeader className='bg-secondary'>
              <TableRow>
                <TableHead>Month</TableHead>
                <TableHead>
                  <div className='flex items-center gap-1'>
                    Sessions with gap <InfoIcon className='shrink-0 w-3 h-3 cursor-pointer' />
                  </div>
                </TableHead>
                <TableHead>
                  <div className='flex items-center gap-1'>
                    Gap filled
                    <InfoIcon className='shrink-0 w-3 h-3 cursor-pointer' />
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {gap_widget_data &&
                gap_widget_data['month'] &&
                gap_widget_data['month'].map((gap: any, index: number) => (
                  <TableRow className={`${index % 2 !== 0 && 'bg-secondary hover:bg-secondary'}`} key={index}>
                    <TableCell width={'30%'}>
                      {gap.year}-{gap.month < 10 ? `0${gap.month}` : gap.month}
                    </TableCell>
                    <TableCell className='text-center'>
                      {gap.gap}/{gap.total}
                    </TableCell>
                    <TableCell>{gap.fill ? ((gap.fill / gap.gap) * 100).toFixed() : 0}%</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>

        {inRTH && (
          <div className='flex flex-col gap-2'>
            <div className='text-xs font-medium px-4'>List of instruments opened in gap</div>
            <Table>
              <TableHeader className='bg-secondary'>
                <TableRow>
                  <TableHead>Gaps today</TableHead>
                  <TableHead>Market open gap</TableHead>
                  <TableHead>Remaning gap</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {current_gaps &&
                  Object.entries(current_gaps).map(([symbol_key, gap_value]: any, index: number) => (
                    <TableRow className={`${index % 2 !== 0 && 'bg-secondary hover:bg-secondary'}`} key={index}>
                      <TableCell width={'35%'}>{symbols[symbol_key]['name']}</TableCell>
                      <TableCell width={'35%'}>{gap_value['gap'].toFixed(2)}</TableCell>
                      <TableCell>{gap_value['remain'].toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default GapSurfWidget;
