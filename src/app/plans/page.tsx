import React from "react";
import PlansServerSideSection from "@/component/landing/plansSection/PlansServerSideSection";
import PageProvider from "@/component/general/PageProvider";
import { PAGE_TITLE } from "@/constatns/general.constants";
import DefaultLayout from "@/layout/publicContentLayout/DefaultLayout";
import TrialStatusBanner from "@/component/trial/TrialStatusBanner";

const Page = () => {

  return (
    <PageProvider title={PAGE_TITLE.plans}>
      <DefaultLayout>
        <div className="max-w-screen-2xl mx-auto px-4 pt-8">
          <TrialStatusBanner />
        </div>
        <PlansServerSideSection />
      </DefaultLayout>
    </PageProvider>
  );
};

export default Page;
