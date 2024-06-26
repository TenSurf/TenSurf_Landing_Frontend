import React from "react";
import DefaultLayout from "@/layout/publicContentLayout/DefaultLayout";
import PageProvider from "@/component/general/PageProvider";
import { PAGE_TITLE } from "@/constatns/general.constants";
import { TeamSection } from "@/component/landing/TeamSection";

const Page = () => {
  return (
    <PageProvider title={PAGE_TITLE.team}>
      <DefaultLayout>
        <div className={'py-20 px-5'}>
          <TeamSection />
        </div>
      </DefaultLayout>
    </PageProvider>
  );
};

export default Page;