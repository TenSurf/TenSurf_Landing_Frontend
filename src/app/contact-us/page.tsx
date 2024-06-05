import ContactUs from '@/component/contactUs/contactUs';
import DefaultLayout from '@/layout/publicContentLayout/DefaultLayout';
import PageProvider from '@/component/general/PageProvider';
import { PAGE_TITLE } from '@/constatns/general.constants';
import { HubspotProvider } from "next-hubspot";

const ContactUsPage = () => {
  return (
    <PageProvider title={PAGE_TITLE.contactUs}>
      <DefaultLayout>
        <HubspotProvider>
          <ContactUs />
        </HubspotProvider>
      </DefaultLayout>
    </PageProvider>
  );
};
ContactUsPage.getLayout = (page: any) => <DefaultLayout>{page}</DefaultLayout>;

export default ContactUsPage;
