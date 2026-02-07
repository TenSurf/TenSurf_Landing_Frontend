import React from 'react';
import {PAGE_TITLE} from "@/constatns/general.constants";
import PageProvider from "@/component/general/PageProvider";
import DefaultLayout from "@/layout/publicContentLayout/DefaultLayout";
import Tools from "@/component/tools/Tools";

type PageProps = {
  params: Promise<{ tool: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Page = async ({ params, searchParams }: PageProps) => {
  const resolvedParams = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  
  return (
    <PageProvider title={PAGE_TITLE.tools}>
      <DefaultLayout>
        <Tools params={resolvedParams} searchParams={resolvedSearchParams} />
      </DefaultLayout>
    </PageProvider>
  );
};

export default Page;
