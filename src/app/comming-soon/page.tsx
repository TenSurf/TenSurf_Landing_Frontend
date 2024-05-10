'use client';

import DefaultLayout from '@/layout/publicContentLayout/DefaultLayout';
import PageProvider from '@/component/general/PageProvider';
import { PAGE_TITLE } from '@/constatns/general.constants';

const CommingPage = () => {
  return (
    <PageProvider title={PAGE_TITLE.commingSoon}>
      <DefaultLayout>
        <div className='flex flex-col gap-[200px] h-64 items-center'>
          <div className='flex flex-col gap-2 items-center m-auto'>
            <div className='pageTitle'>Comming Soon</div>
          </div>
        </div>
      </DefaultLayout>
    </PageProvider>
  );
};
CommingPage.getLayout = (page: any) => <DefaultLayout>{page}</DefaultLayout>;

export default CommingPage;
