import React from 'react';
import {PAGE_TITLE} from "@/constatns/general.constants";
import PageProvider from "@/component/general/PageProvider";
import DefaultLayout from "@/layout/publicContentLayout/DefaultLayout";
import Tools from "@/component/tools/Tools";

const Page = (
  {
    params,
    searchParams,
  }: {
    params: { tool: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }) => {
  return (
    <PageProvider title={PAGE_TITLE.tools}>
      <DefaultLayout>
        <Tools params={params} searchParams={searchParams} />
      </DefaultLayout>
    </PageProvider>
  );
};

export default Page;