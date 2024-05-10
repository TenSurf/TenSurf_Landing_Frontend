import Widgets from './Widgets/Widgets';
import EventInsights from './EventInsights';
import { useState } from 'react';
import { CHART_SUB_MENU_ARRAY } from '../../../constatns/general.constants';
import { Menus } from './chartSubmenu/Menus';
import { Chart } from './Chart';

// *.*.*.*.*.*.*.*.*.*.* Main Function ↓•↓•↓
export const Charts = () => {
  const [isEventInsightsClose, setIsEventInsightsClose] = useState<boolean>(true);
  const [isWidgetsClose, setIsWidgetsClose] = useState<boolean>(true);

  // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
  return (
    <div className='mx-auto h-full '>
      {/* <Breadcrumb pageName="Sample Chart" /> */}

      <div className='flex w-full h-full  flex-col gap-3 dark:text-white'>
        {/* ============ Body ============ */}
        <div className='relative flex h-full  grow w-screen max-w-full justify-stretch gap-2   '>
          {/* ============ Event Insights ============ */}
          <div className='shrink-0'>
            <EventInsights
              setIsEventInsightsOpen={setIsEventInsightsClose}
              isEventInsightsOpen={isEventInsightsClose}
            />
          </div>

          {/* ============ Chart ============ */}
          {/* <Charts /> */}
          <div className='grow w-full overflow-hidden flex flex-col'>
            <div className='grow'>
              <Chart />
            </div>
            <div className='flex scrollable overflow-auto gap-1 py-2 bg-black rounded-t-xl'>
              {CHART_SUB_MENU_ARRAY.map((menu, index) => (
                <Menus key={index} Data={menu} />
              ))}
            </div>
          </div>

          {/* ============ Widgets ============ */}
          <div className='shrink-0'>
            <Widgets setIsWidgetsClose={setIsWidgetsClose} isWidgetsClose={isWidgetsClose} />
          </div>
        </div>
      </div>
    </div>
  );
};
