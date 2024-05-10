import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useWidgetStore } from '@/store/widget';
import { Loader2 } from 'lucide-react';
import moment from 'moment';
import { type FC } from 'react';

const stat_labels: { [key: string]: string } = {
  break_on_high: 'Break ON High',
  break_on_mid: 'Break ON Mid',
  break_on_low: 'Break ON Low',
  break_on_high_or_break_on_low: 'Break either ON High or Low',
  break_on_high_and_break_on_low: 'Break both ON High and Low',
  neither_break_on_high_nor_break_on_low: 'Break neither ON High and Low',
  retest_on_vah: 'Retest ON VAH',
  retest_on_poc: 'Retest ON POC',
  retest_on_val: 'Retest ON VAL',
  retest_on_vah_or_retest_on_val: 'Retest either ON VAH or VAL',
  retest_on_vah_and_retest_on_val: 'Retest both ON VAH and VAL',
  neither_retest_on_vah_nor_retest_on_val: 'Retest neither ON VAH nor VAL',
  break_ib_high: 'Break IB High',
  break_ib_low: 'Break IB Low',
  break_ib_high_or_break_ib_low: 'Break either IB High or Low',
  break_ib_high_and_break_ib_low: 'Break both IB High and Low',
  neither_break_ib_high_nor_break_ib_low: 'Break neither IB High nor Low',
  break_ib_high_before_noon: 'Break IB High before noon',
  break_ib_low_before_noon: 'Break IB Low before noon',
  break_ib_high_before_noon_or_break_ib_low_before_noon: 'Break either IB High or Low before noon (9am PST)',
  break_ib_high_before_noon_and_break_ib_low_before_noon: 'Break both IB High and Low before noon (9am PST)',
  neither_break_ib_high_before_noon_nor_break_ib_low_before_noon: 'Break neither IB High nor Low before noon (9am PST)',
  break_thirty_above_ib_high: 'Break 30% extension above IB High',
  break_fifty_above_ib_high: 'Break 50% extension above IB High',
  break_1_above_ib_high: 'Break 100% extension above IB High',
  break_2_above_ib_high: 'Break 200% extension above IB High',
  break_thirty_below_ib_low: 'Break 30% extension below IB Low',
  break_fifty_below_ib_low: 'Break 50% extension below IB Low',
  break_1_below_ib_low: 'Break 100% extension below IB Low',
  break_2_below_ib_low: 'Break 200% extension below IB Low',
  retest_vah: 'Retest previous VAH',
  retest_poc: 'Retest previous POC',
  retest_val: 'Retest previous VAL',
  retest_vah_or_retest_val: 'Retest either previous VAH or VAL',
  retest_vah_and_retest_val: 'Retest both previous VAH and VAL',
  neither_retest_vah_nor_retest_val: 'Retest neither previous VAH nor VAL',
  retest_prev_day_high: 'Retest previous day high',
  retest_prev_day_low: 'Retest previous day low',
  retest_prev_day_high_or_retest_prev_day_low: 'Retest either previous high or low',
  retest_prev_day_high_and_retest_prev_day_low: 'Retest both previous high and low',
  neither_retest_prev_day_high_nor_retest_prev_day_low: 'Retest neither previous high nor low'
};

export const StatSurfWidget: FC = () => {
  const { stats, widget_loading }: any = useWidgetStore();

  return (
    <div className='flex flex-col gap-4 relative'>
      {widget_loading && <Loader2 className='absolute top-56 left-0 right-0 m-auto z-50 h-6 w-6 animate-spin' />}
      <h2 className='text-sm font-medium'>Probabilistic insights based on historical data</h2>
      <div className='h-px bg-secondary'></div>
      <p className='text-slate-600 text-xs'>
        For RTH sessions opened <strong>{stats.text ? stats.text : '...'}</strong> (like current session), the probabilities of level
        reactions during the same RTH session are as follows:
      </p>
      <Table>
        <TableHeader className='bg-secondary'>
          <TableRow>
            <TableHead>Event</TableHead>
            <TableHead>{moment().format('YYYY')}</TableHead>
            <TableHead>Last 5 years</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stats.data &&
            Object.entries(stat_labels).map(([stat_key, stat_label]: any, index: number) => (
              <TableRow className={`${index % 2 !== 0 && 'bg-secondary hover:bg-secondary'}`} key={index}>
                <TableCell className='text-center' width={'55%'}>
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger>
                        <span className='line-clamp-3'>{stat_label}</span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <span className='text-xs'>{stat_label}</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
                <TableCell width={'15%'}>
                  {((stats.data[stat_key]['year_count'] / stats.data[stat_key]['year_total']) * 100).toFixed()}%
                </TableCell>
                <TableCell width={'30%'}>
                  {((stats.data[stat_key]['five_year_count'] / stats.data[stat_key]['five_year_total']) * 100).toFixed()}%
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StatSurfWidget;
