import React from 'react';
import DefaultLayout from '@/layout/publicContentLayout/DefaultLayout';
import PageProvider from '@/component/general/PageProvider';
import { PAGE_TITLE } from '@/constatns/general.constants';
import { Metadata } from 'next';
import HowItWorksMain from '@/component/how-it-works/HowItWorksMain';

export const metadata: Metadata = {
  title: 'TenSurf | How It Works',
  description: 'See how TenSurf Brain transforms your trading ideas into automated strategies in 3 simple steps. No coding required. Works inside NinjaTrader.',
  keywords: ['NinjaTrader', 'automated trading', 'strategy builder', 'no code trading', 'AI trading'],
};

const HowItWorksPage = () => {
  return (
    <PageProvider title={PAGE_TITLE.home}>
      <DefaultLayout>
        <HowItWorksMain />
      </DefaultLayout>
    </PageProvider>
  );
};

export default HowItWorksPage;
