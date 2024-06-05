import AboutUs from '@/component/aboutUs/AboutUs';
import DefaultLayout from '@/layout/publicContentLayout/DefaultLayout';
import PageProvider from '@/component/general/PageProvider';
import { PAGE_TITLE } from '@/constatns/general.constants';

const AboutUsPage = () => {
  return (
    <PageProvider title={PAGE_TITLE.aboutUs}>
      <DefaultLayout>
        <AboutUs />
      </DefaultLayout>
    </PageProvider>
  );
};
AboutUsPage.getLayout = (page: any) => <DefaultLayout>{page}</DefaultLayout>;

export default AboutUsPage;
