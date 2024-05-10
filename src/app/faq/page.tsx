'use client';

import Faq from '@/component/faq/Faq';
import DefaultLayout from '@/layout/publicContentLayout/DefaultLayout';
import PageProvider from '@/component/general/PageProvider';
import { PAGE_TITLE } from '@/constatns/general.constants';

const FaqPage = () => {
  return (
    <PageProvider title={PAGE_TITLE.faq}>
      <DefaultLayout>
        <Faq />
      </DefaultLayout>
    </PageProvider>
  );
};
FaqPage.getLayout = (page: any) => <DefaultLayout>{page}</DefaultLayout>;

export default FaqPage;
