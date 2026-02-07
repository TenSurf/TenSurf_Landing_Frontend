import React from 'react';
import DefaultLayout from '@/layout/publicContentLayout/DefaultLayout';
import PageProvider from '@/component/general/PageProvider';
import { PAGE_TITLE } from '@/constatns/general.constants';
import { Metadata } from 'next';
import CompareMain from '@/component/compare/CompareMain';

export const metadata: Metadata = {
  title: 'Best Strategy Builders for NinjaTrader (2026) | Comparison Guide',
  description: 'Compare TenSurf Brain, BloodHound, StrategyQuant X, and Build Alpha. Find the best strategy builder for your NinjaTrader trading style.',
};

const ComparePage = () => {
  return (
    <PageProvider title={PAGE_TITLE.home}>
      <DefaultLayout>
        <CompareMain />
      </DefaultLayout>
    </PageProvider>
  );
};

export default ComparePage;
