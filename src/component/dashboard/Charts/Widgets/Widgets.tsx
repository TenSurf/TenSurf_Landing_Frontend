import React, {
  type Dispatch,
  type FC,
  type ReactNode,
  type RefObject,
  type SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react';
import WidgetsContainer from '../widgetsContainer';
import TrendSurfFlatIcon from '../../../../icons/TrendSurfFlatIcon';
import LevelSurfFlatIcon from '../../../../icons/LevelSurfFlatIcon';
import GapSurfFlatIcon from '../../../../icons/GapSurfFlatIcon';
import RiskSurfFlatIcon from '../../../../icons/RiskSurfFlatIcon';
import WaveSurfFlatIcon from '../../../../icons/WaveSurfFlatIcon';
import PairSurfFlatIcon from '../../../../icons/PairSurfFlatIcon';
import LiqSurfFlatIcon from '../../../../icons/LiqSurfFlatIcon';
import TimeSurfFlatIcon from '../../../../icons/TimeSurfFlatIcon';
import StatSurfFlatIcon from '../../../../icons/StatSurfFlatIcon';
import TrendSurfWidget from './TrendSurfWidget';
import LevelSurfWidget from './LevelSurfWidget';
import GapSurfWidget from './GapSurfWidget';
import RiskSurfWidget from './RiskSurfWidget';
import { EWidgetName, type TWidgetsName } from './widgets.type';
import IdeaIcon from '../../../../icons/IdeaIcon';
import RequestIcon from '../../../../icons/RequestIcon';
import BugIcon from '../../../../icons/BugIcon';
import { Chatbot } from './Chatbot';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useChartStore } from '@/store/chart';
import BrainIcon from '@/icons/BrainIcon';
import WaveSurfWidget from './WaveSurfWidget';
import PairSurfWidget from './PairSurfWidget';
import LiqSurfWidget from './LiqSurfWidget';
import TimeSurfWidget from './TimeSurfWidget';
import StatSurfWidget from './StatSurf';
import IdeaWidget from './IdeaWidget';
import FeatureRequestWidget from './FeatureRequestWidget';
import BugReportWidget from './BugReportWidget';
import { useWidgetStore } from '@/store/widget';
import { sendRequest } from '@/helpers/http-request';

interface IWidget {
  name: TWidgetsName | undefined;
  ref?: RefObject<HTMLDivElement>;
  icon: ReactNode;
  content: ReactNode;
}

interface IProps {
  setIsWidgetsClose: Dispatch<SetStateAction<boolean>>;
  isWidgetsClose: boolean;
}
export const Widgets: FC<IProps> = ({ isWidgetsClose, setIsWidgetsClose }) => {
  const [selectedWidget, setSelectedWidget] = useState<IWidget | undefined>();
  const { symbol }: any = useChartStore();
  const {
    updateWidgetData,
    updateLoading,
    updateGapWidgetData,
    setCurrentGaps,
    updateNews,
    updateStat,
    updateLiq
  }: any = useWidgetStore();

  // useRefs =========================>>>
  const chatBotRef = useRef<HTMLDivElement>(null);
  const trendSurfRef = useRef<HTMLDivElement>(null);
  const levelSurfRef = useRef<HTMLDivElement>(null);
  const gapSurfRef = useRef<HTMLDivElement>(null);
  const riskSurfRef = useRef<HTMLDivElement>(null);
  const waveSurfRef = useRef<HTMLDivElement>(null);
  const pairSurfRef = useRef<HTMLDivElement>(null);
  const liqSurfRef = useRef<HTMLDivElement>(null);
  const timeSurfRef = useRef<HTMLDivElement>(null);
  const statSurfRef = useRef<HTMLDivElement>(null);

  // ____________________________________________________________

  const widgetSelector = (widget: IWidget) => {
    setSelectedWidget(widget);
  };

  useEffect(() => {
    if (isWidgetsClose) {
      setSelectedWidget(undefined);
    }
  }, [isWidgetsClose]);

  useEffect(() => {
    if (!symbol) return;
    updateLoading(true);
    sendRequest(`/chart/widget_data/?symbol=${symbol}`).then((res: any) => {
      updateWidgetData(res.data);
      updateLoading(false);
    });

    sendRequest(`/chart/gap_widget_data/?symbol=${symbol}`).then((res: any) => {
      updateGapWidgetData(res.data);
      updateLoading(false);
    });

    sendRequest(`/chart/stat_surf_data/?symbol=${symbol}`).then((res: any) => {
      updateStat(res.data);
    });

    const intervalId = setInterval(() => {
      sendRequest(`/chart/widget_data/?symbol=${symbol}`).then((res: any) => {
        updateWidgetData(res.data);
      });
    }, 15000);
    return () => clearInterval(intervalId);
  }, [symbol]);

  useEffect(() => {
    sendRequest(`/chart/current_gap_widget_data/`).then((res: any) => {
      setCurrentGaps(res.data);
    });

    sendRequest(`/chart/news/`).then((res: any) => {
      updateNews(res.data);
    });

    sendRequest('/chart/order_book_data/').then((res: any) => {
      updateLiq(res.data);
    });

    const intervalId = setInterval(() => {
      sendRequest(`/chart/news/`).then((res: any) => {
        updateNews(res.data);
      });
      
      sendRequest('/chart/order_book_data/').then((res: any) => {
        updateLiq(res.data);
      });
    }, 90000);
    return () => clearInterval(intervalId);
  }, []);

  const mainWidgets = [
    // {
    //   name: EWidgetName.ChatBot,
    //   ref: chatBotRef,
    //   icon: <BrainIcon className='w-8 h-8' />,
    //   content: <Chatbot />
    // },
    {
      name: EWidgetName.TrendSurf,
      ref: trendSurfRef,
      icon: <TrendSurfFlatIcon className='w-8 h-8' />,
      content: <TrendSurfWidget />
    },
    {
      name: EWidgetName.LevelSurf,
      ref: levelSurfRef,
      icon: <LevelSurfFlatIcon className='w-8 h-8' />,
      content: <LevelSurfWidget />
    },
    {
      name: EWidgetName.GapSurf,
      ref: gapSurfRef,
      icon: <GapSurfFlatIcon className='w-8 h-8' />,
      content: <GapSurfWidget />
    },
    {
      name: EWidgetName.RiskSurf,
      ref: riskSurfRef,
      icon: <RiskSurfFlatIcon className='w-8 h-8' />,
      content: <RiskSurfWidget />
    },
    {
      name: EWidgetName.WaveSurf,
      ref: waveSurfRef,
      icon: <WaveSurfFlatIcon className='w-8 h-8' />,
      content: <WaveSurfWidget />
    },
    {
      name: EWidgetName.PairSurf,
      ref: pairSurfRef,
      icon: <PairSurfFlatIcon className='w-8 h-8' />,
      content: <PairSurfWidget />
    },
    {
      name: EWidgetName.LiqSurf,
      ref: liqSurfRef,
      icon: <LiqSurfFlatIcon className='w-8 h-8' />,
      content: <LiqSurfWidget />
    },
    {
      name: EWidgetName.TimeSurf,
      ref: timeSurfRef,
      icon: <TimeSurfFlatIcon className='w-8 h-8' />,
      content: <TimeSurfWidget />
    },
    {
      name: EWidgetName.StatSurf,
      ref: statSurfRef,
      icon: <StatSurfFlatIcon className='w-8 h-8' />,
      content: <StatSurfWidget />
    }
  ];
  // ____________________________________________________________

  const footerWidgets = [
    {
      name: EWidgetName.Idea,
      ref: trendSurfRef,
      icon: <IdeaIcon className='w-8 h-8' />,
      content: <IdeaWidget />
    },
    {
      name: EWidgetName.Request,
      ref: trendSurfRef,
      icon: <RequestIcon className='w-8 h-8' />,
      content: <FeatureRequestWidget />
    },
    {
      name: EWidgetName.BugReport,
      ref: trendSurfRef,
      icon: <BugIcon className='w-8 h-8' />,
      content: <BugReportWidget />
    }
  ];
  // ____________________________________________________________

  const rightCol = (
    <div className='shrink-0 h-full flex flex-col justify-between gap-3 bg-card py-4'>
      <div className='flex flex-col gap-2  items-center top-0 w-16 rounded-lg'>
        {mainWidgets.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              widgetSelector(item);
              if (selectedWidget?.name === item.name) {
                setIsWidgetsClose(true);
              } else {
                setIsWidgetsClose(false);
              }
            }}
          >
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={`relative cursor-pointer w-10 h-10 flex items-center justify-center rounded-lg p-2 ${
                      selectedWidget?.name === item.name ? 'bg-primary text-primary-foreground ' : 'text-[#717B8E]'
                    }`}
                  >
                    {item.icon}

                    {/* {widgetsThatHasEvent.find(widthEvent => widthEvent === item.name) && (
                      <div className='absolute animate-fadeIn top-0 right-0 w-3 h-3 rounded-full bg-[#F04438]'></div>
                    )} */}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className='text-xs'>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-3 items-center top-0 w-16 rounded-lg'>
        {footerWidgets.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              widgetSelector(item);
              if (selectedWidget?.name === item.name) {
                setIsWidgetsClose(true);
              } else {
                setIsWidgetsClose(false);
              }
            }}
          >
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={`relative cursor-pointer w-10 h-10 flex items-center justify-center rounded-full p-2 ${
                      selectedWidget?.name === item.name ? 'bg-primary text-primary-foreground' : 'text-[#717B8E]'
                    }`}
                  >
                    {item.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className='text-xs'>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <WidgetsContainer isToggle={isWidgetsClose} rightCol={rightCol}>
      {selectedWidget?.content}
    </WidgetsContainer>
  );
};

export default Widgets;
