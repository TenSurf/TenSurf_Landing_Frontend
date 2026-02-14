import React from 'react';
import DefaultLayout from '@/layout/publicContentLayout/DefaultLayout';
import PageProvider from '@/component/general/PageProvider';
import { PAGE_TITLE } from '@/constatns/general.constants';
import { Metadata } from 'next';
import CompareBloodhound from '@/component/compare/CompareBloodhound';

export const metadata: Metadata = {
  title: 'TenSurf vs BloodHound',
  description: 'Compare TenSurf Brain and BloodHound for NinjaTrader. TenSurf Brain uses plain English and AI. BloodHound uses visual nodes. See which fits your trading style.',
};

const CompareBloodhoundPage = () => {
  return (
    <PageProvider title={PAGE_TITLE.home}>
      <DefaultLayout>
        <CompareBloodhound />
      </DefaultLayout>
    </PageProvider>
  );
};

export default CompareBloodhoundPage;
