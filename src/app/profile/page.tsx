'use client';

import ProfileSettings from '@/component/dashboard/ProfileSetting';
import DefaultLayout from '@/layout/publicContentLayout/DefaultLayout';
import { PAGE_TITLE } from '@/constatns/general.constants';
import PageProvider from '@/component/general/PageProvider';
import { Suspense } from 'react';

const ProfilePage = () => {
  return (
    <PageProvider title={PAGE_TITLE.profile}>
      <DefaultLayout>
        <Suspense>
          <ProfileSettings/>
        </Suspense>
      </DefaultLayout>
    </PageProvider>
  );
};

export default ProfilePage;
