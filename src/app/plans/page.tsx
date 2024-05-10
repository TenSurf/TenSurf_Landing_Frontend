'use client';

import PageProvider from '@/component/general/PageProvider';
import DefaultLayout from '@/layout/publicContentLayout/DefaultLayout';
import { PlansSection } from '@/component/landing/plansSection/PlansSection';

const PlansPage = () => {
  return (
    <PageProvider title='Plans | TenSurf'>
      <DefaultLayout>
        <div className='py-20 w-full flex justify-center '>
          <PlansSection mode='plansPage' />
        </div>
      </DefaultLayout>
    </PageProvider>
  );
};

PlansPage.getLayout = (page: any) => <DefaultLayout>{page}</DefaultLayout>;

export default PlansPage;
