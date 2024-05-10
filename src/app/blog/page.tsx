'use client';

import Blog from '@/component/blog/Blog';
import DefaultLayout from '@/layout/publicContentLayout/DefaultLayout';
import { PAGE_TITLE } from '@/constatns/general.constants';
import PageProvider from '@/component/general/PageProvider';

const BlogPage = () => {
  return (
    <PageProvider title={PAGE_TITLE.blog}>
      <DefaultLayout>
        <Blog />
      </DefaultLayout>
    </PageProvider>
  );
};
BlogPage.getLayout = (page: any) => <DefaultLayout>{page}</DefaultLayout>;

export default BlogPage;
