import React from "react";
import PlansServerSideSection from "@/component/landing/plansSection/PlansServerSideSection";
import PageProvider from "@/component/general/PageProvider";
import { PAGE_TITLE } from "@/constatns/general.constants";
import DefaultLayout from "@/layout/publicContentLayout/DefaultLayout";
import TrialStatusBanner from "@/component/trial/TrialStatusBanner";


export const metadata = {
  title: 'Plans | TenSurf Brain',
};


const Page = () => {

  return (
    <PageProvider title={PAGE_TITLE.plans}>
      <DefaultLayout>
        <TrialStatusBanner />
        <PlansServerSideSection />
      </DefaultLayout>
    </PageProvider>
  );
};

export default Page;
