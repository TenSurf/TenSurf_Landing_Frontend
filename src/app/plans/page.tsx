import React from "react";
import PlansServerSideSection from "@/component/landing/plansSection/PlansServerSideSection";
import PageProvider from "@/component/general/PageProvider";
import { PAGE_TITLE } from "@/constatns/general.constants";
import DefaultLayout from "@/layout/publicContentLayout/DefaultLayout";

const Page = () => {
  return (
    <PageProvider title={PAGE_TITLE.plans}>
      <DefaultLayout>
          <PlansServerSideSection />
      </DefaultLayout>
    </PageProvider>
  );
};

export default Page;