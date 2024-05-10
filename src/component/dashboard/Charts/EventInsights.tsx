import React, { type Dispatch, type FC, type SetStateAction } from 'react';
import { TogglingColumn } from './togglingColumn';
import { EWidgetName } from './Widgets/widgets.type';
import { Chatbot } from './Widgets/Chatbot';
import BrainIcon from '@/icons/BrainIcon';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface IProps {
  setIsEventInsightsOpen: Dispatch<SetStateAction<boolean>>;
  isEventInsightsOpen: boolean;
}
export const EventInsights: FC<IProps> = ({ setIsEventInsightsOpen, isEventInsightsOpen }) => {
  const items = [
    {
      date: 'today',
      time: '12:49:56',
      widgetName: EWidgetName.TrendSurf,
      content: '4th time that VWAP is broken today'
    },
    {
      date: 'today',
      time: '13:08:34',
      widgetName: EWidgetName.LevelSurf,
      content: 'Score of the S/R level decrease due to the break'
    },
    {
      date: 'today',
      time: '12:41:43',
      widgetName: EWidgetName.GapSurf,
      content: 'Yesterday was a trendy day so the VP does not represent a valid value area of the market'
    }
  ];

  return (
    <TogglingColumn
      isToggle={isEventInsightsOpen}
      setIsToggle={setIsEventInsightsOpen}
      toggleIconPosition={'right'}
      hasHeaderDivider={true}
      containerClassNamesAfterToggle='w-14'
      rightNode={true}
      header={
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className={`${
                  isEventInsightsOpen
                    ? 'rotate-90 w-16 text-center top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]'
                    : 'top-4 left-4 pr-12'
                } absolute text-primary font-semibold`}
              >
                <BrainIcon className='w-8 h-8 m-auto' />
              </div>
            </TooltipTrigger>
            <TooltipContent>Tensurf Brain</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      }
    >
      {!isEventInsightsOpen ? (
        <div className='grow overflow-y-auto bg-card h-full px-3 pb-6 border-r-[1px] border-r-accent scroll-smooth'>
          <Chatbot />
          {/* {items.map((item, index) => (
            <div key={index} className='flex flex-col gap-2  border-[1px] border-[#D8D8DF] p-3 rounded-lg bg-card'>
              <div className='w-full flex items-center justify-between gap-2'>
                <div className='flex items-center gap-1 text-xs '>
                  <div className='text-[#3D475C] font-bold'>{item.date}</div>
                  <div className='text-[#A8ADB8]'>.</div>
                  <div className='text-[#717B8E]'>{item.time}</div>
                </div>
                <div className='bg-muted text-muted-foreground p-1 rounded font-medium text-xs'>
                  {item.widgetName}
                </div>
              </div>
              <div className='text-xs'>{item.content}</div>
            </div>
          ))} */}
        </div>
      ) : null}
    </TogglingColumn>
  );
};

export default EventInsights;
