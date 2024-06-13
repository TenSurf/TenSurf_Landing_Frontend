import RiskDisclosure from '@/component/riskDisclosure/RiskDisclosure';
import PageProvider from '@/component/general/PageProvider';
import DefaultLayout from '@/layout/publicContentLayout/DefaultLayout';
import { PAGE_TITLE } from '@/constatns/general.constants';

const RiskDisclosurePage = () => {
  return (
    <PageProvider title={PAGE_TITLE.riskDisclosure}>
      <DefaultLayout>
        <RiskDisclosure />
      </DefaultLayout>
    </PageProvider>
  );
};
RiskDisclosurePage.getLayout = (page: any) => <DefaultLayout>{page}</DefaultLayout>;

export default RiskDisclosurePage;
