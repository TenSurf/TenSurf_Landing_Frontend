'use client';

import RefundPolicy from '@/component/refundPolicy/RefundPolicy';
import DefaultLayout from '@/layout/publicContentLayout/DefaultLayout';
import { PAGE_TITLE } from '@/constatns/general.constants';
import PageProvider from '@/component/general/PageProvider';

const RefundPolicyPage = () => {
  return (
    <PageProvider title={PAGE_TITLE.refundPolicy}>
      <DefaultLayout>
        <RefundPolicy />
      </DefaultLayout>
    </PageProvider>
  );
};
RefundPolicyPage.getLayout = (page: any) => <DefaultLayout>{page}</DefaultLayout>;

export default RefundPolicyPage;
