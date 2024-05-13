'use client';

import { type FC, useEffect, useRef, useState } from 'react';
import { MvpSection } from './MvpSection';
import { HeroSection } from './heroSection/HeroSection';
import { OfferingSection } from './OfferingSection';
import { ChartSection } from './ChartSection';
import { PlansSection } from './plansSection/PlansSection';
import { InnovationSection } from './InnovationSection';
import { TeamSection } from './TeamSection';
import { MnuItemsEnum } from '../../constatns/landingPage.constants';
import DefaultLayout from '../../layout/publicContentLayout/DefaultLayout';
import useScrollToTop from '../../hooks/useScrollToTop';
import AboutUsSection from "@/component/landing/AboutUsSection";
import FaqSection from "@/component/landing/FaqSection";
import OfferingSectionV2 from "@/component/landing/OfferingSectionV2";
// import { useRouter } from 'next/router';

// *.*.*.*.*.*.*.*.*.*.* Main Function ↓•↓•↓
export const Landing: FC = () => {
  const [viewPortHeight, setViewPortHeight] = useState<number>();
  const headerRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const PlansRef = useRef<HTMLDivElement>(null);
  const TeamRef = useRef<HTMLDivElement>(null);

  // const router = useRouter();
  useScrollToTop();

  const viewPortHeightController = () => {
    setViewPortHeight(window?.innerHeight);
  };
  useEffect(() => {
    setViewPortHeight(window?.innerHeight);
    addEventListener('resize', event => {
      viewPortHeightController();
    });
    return () => {
      removeEventListener('resize', viewPortHeightController);
    };
  }, []);

  // useEffect(() => {
  //   const menuTitle = router?.asPath.split('#')[1];
  //   setTimeout(() => {
  //     onMenuItemClickHandler(menuTitle);
  //   }, 100);
  // }, [router]);

  const onMenuItemClickHandler = (name: string) => {
    if (name === MnuItemsEnum.products) {
      productsRef?.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (name === MnuItemsEnum.chart) {
      chartRef?.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (name === MnuItemsEnum.plans) {
      PlansRef?.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (name === MnuItemsEnum.team) {
      TeamRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓

  return (
    <DefaultLayout headerRef={headerRef}>
      <div className='flex flex-col w-full  items-center gap-[200px] px-6 md:px-10 overflow-x-hidden'>
        {headerRef?.current?.clientHeight ? (
          <>
            <HeroSection
              productsRef={productsRef}
              viewPortHeight={viewPortHeight}
              headerHeight={headerRef?.current?.clientHeight}
            />
            <MvpSection productsRef={productsRef} />
            <OfferingSectionV2 />
            {/*<ChartSection ChartRef={chartRef} />*/}
            <PlansSection PlansRef={PlansRef} />
            {/*<InnovationSection />*/}
            <AboutUsSection/>
            <TeamSection TeamRef={TeamRef} />
            <FaqSection/>
          </>
        ) : (
          <div className='w-screen h-screen flex justify-center items-center'></div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Landing;
