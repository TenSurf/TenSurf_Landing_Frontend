import Faq from '@/component/faq/Faq';
import DefaultLayout from '@/layout/publicContentLayout/DefaultLayout';
import PageProvider from '@/component/general/PageProvider';
import { PAGE_TITLE } from '@/constatns/general.constants';
import { Metadata } from 'next';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'TenSurf | FAQ',
  description: 'Get answers to common questions about TenSurf Brain, the AI-powered strategy builder for NinjaTrader. Learn about features, pricing, and how it works.',
};

const FaqPage = () => {
  return (
    <PageProvider title={PAGE_TITLE.faq}>
      <FAQSchema />
      <DefaultLayout>
        <Faq />
      </DefaultLayout>
    </PageProvider>
  );
};

export default FaqPage;
