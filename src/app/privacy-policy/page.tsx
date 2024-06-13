import DefaultLayout from '@/layout/publicContentLayout/DefaultLayout';
import { PrivacyPolicy } from '@/component/privacyPolicy/PrivacyPolicy';
import PageProvider from '@/component/general/PageProvider';
import { PAGE_TITLE } from '@/constatns/general.constants';

const PrivacyPolicyPage = () => {
  return (
    <PageProvider title={PAGE_TITLE.privacyPolicy}>
      <DefaultLayout>
        <PrivacyPolicy />
      </DefaultLayout>
    </PageProvider>
  );
};
PrivacyPolicyPage.getLayout = (page: any) => <DefaultLayout>{page}</DefaultLayout>;

export default PrivacyPolicyPage;
