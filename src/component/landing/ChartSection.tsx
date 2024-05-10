import { CHART_SECTION } from '../../constatns/landingPage.constants';
import Image from 'next/image';
import chartImageSrc from '../../../public/images/chart.webp';
import { type RefObject } from 'react';

export const ChartSection = ({ ChartRef }: { ChartRef: RefObject<HTMLDivElement> }) => {
  return (
    <div ref={ChartRef} className='flex flex-col gap-10 scroll-m-20 max-w-screen-xl'>
      <div className='flex flex-col items-center gap-4 text-center'>
        <div className='text-3xl md:text-4xl lg:text-6xl font-semibold'>{CHART_SECTION.title}</div>
        <div className='text-md md:text-2xl'>{CHART_SECTION.description}</div>
      </div>
      <Image className='animate-fadeIn' src={chartImageSrc} alt='chart image' loading='lazy' quality={100} />
    </div>
  );
};
