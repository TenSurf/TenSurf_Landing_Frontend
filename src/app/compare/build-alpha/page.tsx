import React from 'react';
import DefaultLayout from '@/layout/publicContentLayout/DefaultLayout';
import PageProvider from '@/component/general/PageProvider';
import { PAGE_TITLE } from '@/constatns/general.constants';
import { Metadata } from 'next';
import CompareBuildAlpha from '@/component/compare/CompareBuildAlpha';

export const metadata: Metadata = {
  title: 'TenSurf vs Build Alpha',
  description: 'Compare TenSurf Brain and Build Alpha. TenSurf Brain uses plain English to implement your ideas. Build Alpha uses genetic algorithms with 5,000+ signals.',
};

const CompareBuildAlphaPage = () => {
  return (
    <PageProvider title={PAGE_TITLE.home}>
      <DefaultLayout>
        <CompareBuildAlpha />
      </DefaultLayout>
    </PageProvider>
  );
};

export default CompareBuildAlphaPage;
