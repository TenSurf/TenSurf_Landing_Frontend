import ContactUs from "@/component/contactUs/contactUs";
import DefaultLayout from "@/layout/publicContentLayout/DefaultLayout";
import PageProvider from "@/component/general/PageProvider";
import { PAGE_TITLE } from "@/constatns/general.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact with Tensurf Support",
  icons: ["/favicon.ico"],
  keywords: ["tensurf contact us"],
};

const ContactUsPage = () => {
  return (
    <PageProvider title={PAGE_TITLE.contactUs}>
      <DefaultLayout>
        <ContactUs />
      </DefaultLayout>
    </PageProvider>
  );
};
ContactUsPage.getLayout = (page: any) => <DefaultLayout>{page}</DefaultLayout>;

export default ContactUsPage;
